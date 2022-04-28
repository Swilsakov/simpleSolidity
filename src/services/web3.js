import Web3 from 'web3';
import greeter from '../../static/assets/json/abi/Greeter.json';
import { GREETER_ADDRESS, NODE_URL } from '../common';

export async function getGreetingCall() {
    const web3Instance = new Web3(NODE_URL);
    const greeterContract = new web3Instance.eth.Contract(
        greeter.abi, GREETER_ADDRESS
    );
    return await greeterContract.methods.getGreeting().call()

}

export async function setNameSend(web3Instance, newName, currentAccount) {
    const greeterContract = new web3Instance.eth.Contract(
        greeter.abi, GREETER_ADDRESS,
    );
    
    await greeterContract.methods.setName(newName)
        .send({ from: currentAccount });
}