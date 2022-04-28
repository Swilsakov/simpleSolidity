import Web3Modal from 'web3modal';

export async function configureWeb3Modal() {
  // cacheProvider - optional, providerOptions - required
  const web3Modal = new Web3Modal();

  web3Modal.clearCachedProvider();

  const provider = await web3Modal.connect();

  return {
    provider,
    web3Modal,
  };
}
