import  { useState } from 'react';
import Web3 from 'web3';

const ConnectWallet = () => {
  const [message, setMessage] = useState('');

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setMessage(`Connected with ${accounts[0]}`);
      } catch (error) {
        setMessage('Failed to connect to MetaMask');
        console.error(error);
      }
    } else {
      setMessage('MetaMask extension not detected');
    }
  };

  return (
    <div className=''>
      <p className='text-xl font-semibold mb-2'>Connect Wallet</p>
      <button onClick={connectWallet} className='text-white bg-primary p-2 rounded-lg'>Connect Wallet</button>
      <p className='text-white mt-3'>{message}</p>
    </div>
  );
};

export default ConnectWallet;
