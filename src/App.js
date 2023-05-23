import "./App.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ethers } from "ethers";
import ABI from "./ABI.json";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { setAdd } from "./states/reducers/userAdd";
import { registerUser, addUserData,AddAddressData, setNoOfUsers} from "./states/reducers/contractData";
import Nav from "./Nav";
import Home from "./Home";
import Footer from "./Footer";
import Feedback from "./Feedback";
import Profile from "./Profile";




function App() {

  const dispatch = useDispatch();

  // state for transactions and penalty, temporary state. Define in component where you want this
  const [TransData, setTransData] = useState("W897&&2328732792");
  const [temp, setTemp] = useState("");

  // State for Blockchain Data Storage. Define in redux so that Each page can Manage
  // Contractor, getUser,name,owner,registeredArray,userDetails

  let contractAddress = "0xbabaC5EB75C0C54434664d15DEE84047a3371aC6";


  const userAdd = useSelector((state) => state.userAdd);
  const contractData = useSelector((state) => state.contractData);
  const mealRating = useSelector((state)=>state.temp.mealRating)
  const timeRating = useSelector((state)=>state.temp.timeRating)
  const staffRating = useSelector((state)=>state.temp.staffRating) 


  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  const [currentContractVal, setCurrentContractVal] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(()=>{

    dispatch(setAdd(defaultAccount))
 
  },[defaultAccount])


  useEffect(()=>{
    if (!(contract === null))
    {
       get_total_users();
    }
  },[contract])

  useEffect(()=>{


    for(var i=0; i < (contractData.total_users-1);i++)
       {
        getRegisteredforIndex(i)
        // getUserFromAddress(contractData.registeredArray[i]);

       if(contractData.registeredArray[i])
        {
          getUserFromAddress(contractData.registeredArray[i]);
        }
        
        }

  },[contractData.total_users, contractData.registeredArray])


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
      setErrorMessage("Please install MetaMask browser extension to interact");
    }
  };

  // update account, will cause component re-render
  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    dispatch(setAdd(defaultAccount));
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
    dispatch(setAdd(defaultAccount));
  };

  // SetUser("meal","username","2327352")

  const setUser = (data) => {
    const allData = data.split(" ");
    contract.setUser(allData[0],allData[1],allData[2]);
  };

  // setTransaction("w52&875")

  const setTransaction = (value) => {
    // event.preventDefault();
    contract.setTransaction(value);
  };
  // setContractor("w52&875")

  const setContractor = (event) => {
    event.preventDefault();

    contract.setContractor(event.target.setText.value);
  };

  // setPenalty("TidT")

  const setPenalty = (value) => {

    contract.setPenalty(value);
  };

  // getname ---> Get Contract Name

  const getname = async () => {
    let val = await contract.name();
    setCurrentContractVal(val);
  };

  // get total_users from contract

  const get_total_users = async () => {
    let val = await contract.total_users();
    await dispatch(setNoOfUsers(parseInt((val._hex).slice(-2))));
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
    if (address.toUpperCase() ===(userAdd[0][0]).toUpperCase())
    {
      dispatch(AddAddressData(val));
    }
  };

  return (
    <div className="App">



    <BrowserRouter>
      {/* <Nav/> */}
      <Nav/>
      <Routes>
      
      <Route path="/" element={<Home connectWalletHandler={connectWalletHandler} connButtonText={connButtonText} />}></Route>
      <Route path="/feedback" element={<Feedback  setTransaction={setTransaction}/>}></Route>
      <Route path="/profile"  element={<Profile
      setUser ={setUser} 
      account = {defaultAccount}
      getRegisteredforIndex={getRegisteredforIndex}
      getUserFromAddress ={getUserFromAddress}
      setPenalty = {setPenalty}
      setTransaction={setTransaction}
      />}></Route>
      </Routes>
      {/* <Footer/> */}
      <Footer/>
      </BrowserRouter>
      <div>Just This console for test  {console.log("All Contract Data is", contractData)}</div>
      <div>
      </div>

    </div>
  );
}

export default App;
