import React from 'react';
import { useStore } from 'effector-react';
import { Button } from './Button';
import { NETWORK_ID } from '../../common';
import { Body0 } from '../Typography';
import {
  chainId$,
  initWeb3Instance,
  web3ModalInstance$,
  provider$,
  currentAccount$,
} from '../../services';

export const ConnectorButton = ({ children }) => {
  const web3ModalInstance = useStore(web3ModalInstance$);
  const chainId = useStore(chainId$);
  const account = useStore(currentAccount$);
  const provider = useStore(provider$);

  async function handleEthereumClick(provider) {
    await provider.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x' + parseInt(NETWORK_ID).toString(16) }], // chainId must be in hexadecimal numbers
    });
  }

  return React.useMemo(
    () =>
      web3ModalInstance === null || account === null ? (
        <Button onClick={initWeb3Instance}>CONNECT WALLET</Button>
      ) : chainId === null || provider === null ? (
        <>{children}</>
      ) : chainId.toString() !== NETWORK_ID ? (
        provider.isMetaMask ? (
          <Button onClick={() => handleEthereumClick(provider)}>
            SWITCH NETWORK
          </Button>
        ) : (
          <Body0>Please switch to the correct network!</Body0>
        )
      ) : (
        children
      ),
    [web3ModalInstance, account, chainId, provider, children]
  );
};
