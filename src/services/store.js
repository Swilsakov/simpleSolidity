import React from 'react';
import Web3 from 'web3';
import { getGreetingCall, setNameSend } from './web3';
import { attach, combine, createDomain, forward } from 'effector';
import { useStore } from 'effector-react';

import { configureWeb3Modal } from './web3Modal';

// domain of application
export const domain = createDomain('application');
export const reset = domain.event('reset');

// effects to fetch data from application
export const getGreetingFx = domain.effect();
export const setNameFx = domain.effect();
export const initWeb3InstanceFx = domain.effect();
export const getChainIdFx = domain.effect();
export const getAccountsFx = domain.effect();

// stores with data of application
export const accounts$ = domain.store(null).reset(reset);
export const chainId$ = domain.store(null).reset(reset);
export const greeting$ = domain.store('').reset(reset);
export const activePage$ = domain.store([true, false]).reset(reset);
export const setActivePage = domain.event('setActivePage');

export const currentAccount$ = accounts$.map((accounts) =>
  accounts !== null && accounts.length > 0 ? accounts[0] : null
);

// events
export const initAmounts = domain.event('initAmounts');
export const initWeb3Instance = domain.event('initWeb3Instance');
export const getWeb3Data = domain.event('getWeb3Data');
export const getGreeting = domain.event('getGreeting');
export const setName = domain.event('setName');
export const setAccounts = domain.event('setAccounts');
export const setChainId = domain.event('setChainId');

// stores for web3 instances
export const provider$ = domain.store(null);
export const web3Instance$ = domain.store(null);
export const web3ModalInstance$ = domain.store(null);

export const isConnected = combine(
  web3Instance$,
  web3ModalInstance$,
  (instance, modalInstance) =>
    [instance, modalInstance].every((instance) => instance !== null)
);

initWeb3InstanceFx.use(async () => {
  const { provider, web3Modal } = await configureWeb3Modal();

  return {
    provider,
    web3: new Web3(provider),
    web3Modal,
  };
});
getChainIdFx.use(async (web3Instance) => {
  if (web3Instance !== null) {
    return await web3Instance.eth.getChainId();
  }

  return null;
});
getAccountsFx.use(async (web3Instance) => {
  if (web3Instance !== null) {
    return await web3Instance.eth.getAccounts();
  }

  return null;
});
getGreetingFx.use(async () => {
  const greeting = await getGreetingCall();

  return { greeting };
});
setNameFx.use(async ({web3Instance, currentAccount, newName}) => {
  await setNameSend(web3Instance, newName, currentAccount);
  getGreeting();
});

greeting$.on(
  getGreetingFx.done,
  (_, { result: { greeting } }) => greeting
);
web3Instance$.on(initWeb3InstanceFx.done, (_, { result: { web3 } }) => web3);
web3ModalInstance$.on(
  initWeb3InstanceFx.done,
  (_, { result: { web3Modal } }) => web3Modal
);
provider$.on(
  initWeb3InstanceFx.done,
  (_, { result: { provider } }) => provider
);

chainId$
  .on(getChainIdFx.done, (_, { result }) => result)
  .on(setChainId, (_, chainId) => chainId);
accounts$
  .on(getAccountsFx.done, (_, { result }) => result)
  .on(setAccounts, (_, accounts) => accounts);

activePage$.on(setActivePage, (_, payload) => payload);

const getChainIdConnectedFx = attach({
  effect: getChainIdFx,
  source: web3Instance$,
  mapParams: (_, web3Instance) => web3Instance,
});
const getAccountsConnectedFx = attach({
  effect: getAccountsFx,
  source: web3Instance$,
  mapParams: (_, web3Instance) => web3Instance,
});
const setNameConnectedFx = attach({
  effect: setNameFx,
  source: {web3Instance: web3Instance$, currentAccount: currentAccount$},
  mapParams: (newName, {web3Instance, currentAccount}) => ({newName, web3Instance, currentAccount}),
});

forward({ from: initWeb3Instance, to: initWeb3InstanceFx });
forward({ from: getGreeting, to: getGreetingFx });
forward({ from: setName, to: setNameConnectedFx });
forward({
  from: getWeb3Data,
  to: [getChainIdConnectedFx, getAccountsConnectedFx],
});

export function useGetGreeting() {
  const greeting = useStore(greeting$);

  React.useEffect(async () => {
    if (greeting === '') {
      getGreeting();
    }
  }, []);
}

export function useFetchWeb3Data() {
  const web3Instance = useStore(web3Instance$);

  React.useEffect(() => {
    if (web3Instance !== null) {
      getWeb3Data();
    }
  }, [web3Instance]);
}

export function useSubscribeToProvider() {
  const provider = useStore(provider$);

  React.useEffect(() => {
    if (provider !== null) {
      provider.on('accountsChanged', setAccounts);
      provider.on('chainChanged', (id) => setChainId(parseInt(id, 16)));
    }
  }, [provider]);
}
