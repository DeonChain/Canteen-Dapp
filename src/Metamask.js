import React, { useEffect } from 'react'
import {ethers} from 'ethers'
import { useState } from 'react';

export default function Metamask() {
    const ABI = [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_contracter",
                    "type": "address"
                }
            ],
            "name": "setContractor",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "data",
                    "type": "string"
                }
            ],
            "name": "setPenalty",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "data",
                    "type": "string"
                }
            ],
            "name": "setTransaction",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_meal",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_username",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_expiry",
                    "type": "string"
                }
            ],
            "name": "setUser",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "Contractor",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "useraddress",
                    "type": "address"
                }
            ],
            "name": "getUser",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "Owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "registeredArray",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "userDetails",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "add",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "meal",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "username",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "expiry",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "Transactions",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "Penalty",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];

    let contractAddress = '0x28eFc61F9c557dB22B09fb629c4b08E452ac7360';

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

	const setContractor = (event) => {
		event.preventDefault();
		console.log('sending ' + event.target.setText.value + ' to the contract');
		contract.setContractor(event.target.setText.value);
	}

        const getname = async () => {
            let val = await (contract.name);
            setCurrentContractVal(val)
        }


  return (
    <div>
      		<div>
		<h4> Test Contract Interactions </h4>
			<button onClick={connectWalletHandler}>{connButtonText}</button>
			<div>
				<h3>Address: {defaultAccount}</h3>
			</div>

			<form onSubmit={setContractor}>
				<input id="setText" type="text"/>
				<button type={"submit"}> Update Contractor </button>
			</form>
			<div>
			<button onClick={getname} style={{marginTop: '5em'}}> Get Contract Name </button>
			</div>
			<h1>{console.log(currentContractVal)}</h1>
			{ errorMessage}
		</div>
    </div>
  )
}
