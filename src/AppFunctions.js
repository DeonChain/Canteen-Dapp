import "./App.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setAdd } from "./states/reducers/userAdd";
import { registerUser } from "./states/reducers/contractData";
import { addUserData } from "./states/reducers/contractData";
import Metamask from "./Metamask";
import { ethers } from "ethers";
import ABI from "./ABI.json";
import WalletConnect from "./WalletConnect";

function App() {
  // state for transactions and penalty, temporary state. Define in component where you want this
  const [TransData, setTransData] = useState("W897&&2328732792");
  const [temp, setTemp] = useState("");

  // State for Blockchain Data Storage. Define in redux so that Each page can Manage
  // Contractor, getUser,name,owner,registeredArray,userDetails

  let contractAddress = "0x28eFc61F9c557dB22B09fb629c4b08E452ac7360";

  const userAdd = useSelector((state) => state.userAdd);
  const contractData = useSelector((state) => state.contractData);
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  const [currentContractVal, setCurrentContractVal] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);

  const connectWalletHandler = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangedHandler(result[0]);
          setConnButtonText("Wallet Connected");
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      console.log("Need to install MetaMask");
      setErrorMessage("Please install MetaMask browser extension to interact");
    }
  };

  // update account, will cause component re-render
  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    updateEthers();
  };

  const chainChangedHandler = () => {
    // reload the page to avoid any errors with chain change mid use of application
    window.location.reload();
  };

  // listen for account changes
  window.ethereum.on("accountsChanged", accountChangedHandler);
  window.ethereum.on("chainChanged", chainChangedHandler);

  const updateEthers = () => {
    let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(tempProvider);
    let tempSigner = tempProvider.getSigner();
    setSigner(tempSigner);
    let tempContract = new ethers.Contract(contractAddress, ABI, tempSigner);
    setContract(tempContract);
  };

  // SetUser("meal","username","2327352")

  const setUser = (event) => {
    event.preventDefault();
    console.log("sending Data to the contract");
    contract.setUser(
      event.target.setMeal.value,
      event.target.setUname.value,
      event.target.setExpiry.value
    );
  };

  // setTransaction("w52&875")

  const setTransaction = (value) => {
    // event.preventDefault();
    console.log("sending Data to the contract");
    contract.setTransaction(value);
  };
  // setContractor("w52&875")

  const setContractor = (event) => {
    event.preventDefault();
    console.log("sending " + event.target.setText.value + " to the contract");
    contract.setContractor(event.target.setText.value);
  };

  // setPenalty("TidT")

  const setPenalty = (value) => {
    console.log("sending Data to the contract");
    contract.setPenalty(value);
  };

  // getname ---> Get Contract Name

  const getname = async () => {
    let val = await contract.name();
    setCurrentContractVal(val);
  };

  // getRegisteredforIndex ---> Get useraddress for an index, add UserAddress in ContractData.registeredArray

  const getRegisteredforIndex = async (index) => {
    let val = await contract.registeredArray(index);
    dispatch(registerUser(val));
  };

  // get User Details for a Registered user by address, It object in contractData.UserData
  const getUserFromAddress = async (address) => {
    let val = await contract.getUser(address);
    dispatch(addUserData(val));
  };

  return (
    <div className="App">
      {/* <Wallet Connect/> */}
      <WalletConnect
        connectWalletHandler={connectWalletHandler}
        connButtonText={connButtonText}
      />

     
      <div>

         {/* Wallet Connect Component Code */}
        {/* <h4> Test Contract Interactions </h4>
        <button onClick={connectWalletHandler}>{connButtonText}</button>
        <div>
          <h3>Address: {defaultAccount}</h3>
        </div> */}

        {/* Set Contractor */}

        <form onSubmit={setContractor}>
          <input id="setText" type="text" />
          <button type={"submit"}> Update Contractor </button>
        </form>

        {/* setTransactions */}
        <h1>Transaction Check Here</h1>
        <input type="text" onChange={(e) => setTransData(e.target.value)} />
        <button
          onClick={() => {
            setTransaction(TransData);
          }}
        >
          Set Transaction Data
        </button>

        {/* setPenalty */}
        <h1>Penalty check here</h1>
        <input type="text" onChange={(e) => setTransData(e.target.value)} />
        <button
          onClick={() => {
            setPenalty(TransData);
          }}
        >
          Set Transaction Data
        </button>

        {/* SetUser */}
        <div className="setuser">
          <form onSubmit={setUser}>
            <input id="setMeal" type="text" />
            <input id="setUname" type="text" />
            <input id="setExpiry" type="text" />
            <button type={"submit"}> Update User </button>
          </form>
        </div>

        {/* //getUserFromAddress */}
        <h1>Get Userdata from address</h1>
        <input type="text" onChange={(e) => setTemp(e.target.value)} />
        <button
          onClick={() => {
            getUserFromAddress(temp);
          }}
        >
          Get data of address
        </button>
        <h1>{console.log(contractData.UserData)}</h1>

        {/* GetName */}
        <div>
          <button onClick={getname} style={{ marginTop: "5em" }}>
            {" "}
            Get Contract Name{" "}
          </button>
        </div>

        {/* Display */}
        <button
          onClick={() => {
            getRegisteredforIndex(0);
          }}
        >
          {" "}
          Get address for user 0{" "}
        </button>
        <button
          onClick={() => {
            {
              dispatch(registerUser("Gupta"));
            }
          }}
        >
          Register Array add gupta
        </button>
        <h1>{console.log(contractData.registeredArray)}</h1>
        <h1>{currentContractVal}</h1>
        {errorMessage}
      </div>
    </div>
  );
}

export default App;
