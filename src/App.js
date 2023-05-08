
import './App.css';
import { useState } from 'react';
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import {setAdd} from './states/reducers/userAdd'
import Metamask from './Metamask';
import {ethers} from 'ethers'
import ABI from './ABI.json'

function App() {
  let contractAddress = '0x28eFc61F9c557dB22B09fb629c4b08E452ac7360';
  const userAdd = useSelector((state)=>state.userAdd)
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');
	const [currentContractVal, setCurrentContractVal] = useState(null);
	const [provider, setProvider] = useState(null);
	const [signer, setSigner] = useState(null);
	const [contract, setContract] = useState(null);


  const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {
			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);
				setConnButtonText('Wallet Connected');
			})
			.catch(error => {
				setErrorMessage(error.message);
			});
		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

	// update account, will cause component re-render
	const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
		updateEthers();
	}

	const chainChangedHandler = () => {
		// reload the page to avoid any errors with chain change mid use of application
		window.location.reload();
	}


	// listen for account changes
	window.ethereum.on('accountsChanged', accountChangedHandler);
	window.ethereum.on('chainChanged', chainChangedHandler);

	const updateEthers = () => {
		let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
		setProvider(tempProvider);
		let tempSigner = tempProvider.getSigner();
		setSigner(tempSigner);
		let tempContract = new ethers.Contract(contractAddress, ABI, tempSigner);
		setContract(tempContract);	
	}

	// const setHandler = (event) => {
	// 	event.preventDefault();
	// 	console.log('sending ' + event.target.setText.value + ' to the contract');
	// 	contract.setContractor(event.target.setText.value);
	// }

	const getname = async () => {
		let val = await contract.name;
		setCurrentContractVal(val);
	}


  return (
    <div className="App">
      {/* <Metamask/> */}
      <div>
		<h4> Test Contract Interactions </h4>
			<button onClick={connectWalletHandler}>{connButtonText}</button>
			<div>
				<h3>Address: {defaultAccount}</h3>
			</div>
			<div>
			<button onClick={getname} style={{marginTop: '5em'}}> Get Contract Name </button>
			</div>
			{(console.log(currentContractVal))}
			{(errorMessage)}
		</div>
    </div>
  );
}

export default App;
