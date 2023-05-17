import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AddAddressData } from "./states/reducers/contractData";

export default function Profileform(props) {
  const dispatch = useDispatch();
  const userAdd = useSelector((state) => state.userAdd);
  const contractData = useSelector((state) => state.contractData);
  const [userDetails, setUserDetails] = useState([]);
  const [type, setType] = useState("0"); // 0-> Not loggedin  || 1-> Logged in but details not filled || 2-> Details fille
  const [meal, setmeal] = useState("Veg");
  const [uname, setUname] = useState("");
  const [expiry, setExpiry] = useState("37683232");

  useEffect(() => {
    console.log("~~~~~ Test userAdd array", userAdd);
    if (userAdd[0]) {
      setType("1");
    }
    setUserDetails(
      contractData.UserData.filter((item, index) => {
        return item[0].toLowerCase() == userAdd[0];
      })
    );
    dispatch(AddAddressData(userDetails[0]));
  }, [, contractData.UserData]);

  useEffect(() => {
    if (userDetails.length > 0 || contractData.AddressData.length > 0) {
      setType("2");
    }
  }, [, userDetails[0], contractData.AddAddressData]);


const array = (contractData.UserData).filter((item,index)=>{
      return ((!(item[0] === userAdd[0][0])) & item[4].length > 0)
    })

    console.log("$$$$@@@ length of Feedback array is", array.length)

  


  useEffect(()=>{
    var date = new Date();
    date.setDate(date.getDate() + 30);
    var dateString = date.toISOString().split('T')[0];
    setExpiry(dateString)

  },[])


  

  return (
    <>
      <div className="profileData">
        {/* <h1>{console.log(userAdd)}</h1> */}
        <section className="section" id="reservation">
          {/* Testing User Type to display Data accordingly */}

          {type === "0" ? (
            <div className="typeUser"> <h1>Connect Using Metamask to Start</h1> </div>
          ) : 
          
          type === "1" ? 
          (
            // FrontEnd for Type 1 starts
                      
          <div className="container">
            <div className="row leftProfileForm">
              <div className="col-lg-6 profileUser ">
                <h1>Set up your Profile</h1>
                <br />
                <br />
                <div className="contact-form">
                  <div className="setuser">
                  <input
                      id="setUname"
                      type="text"
                      placeholder="Username"
                      onChange={(e) => {
                        setUname(e.target.value);
                      }}
                    />
                  <fieldset>
                        <select
                          name="Meal-Type"
                          onChange={(e) =>setmeal(e.target.value)
                          }
                        >
                          <option value="Veg" name="Veg" id="Veg">
                            Veg
                          </option>
                          <option value="NonVeg" name="2" id="2">
                            NonVeg
                          </option>
                          <option value="Vegan" name="3" id="3">
                            Vegan
                          </option>
                        </select>
                      </fieldset>
                      <h6 className="subExp">Buy a monthlyMonthly Subscription Expiring on {expiry} Cost:0.01 ETH</h6>
                    <br />
                    <br />
                    <button
                      onClick={() => {
                        props.setUser(`${meal} ${uname} ${expiry}`);
                      }}
                    >
                      Submit Feedback
                    </button>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <br />
            </div>
          </div>
           // FrontEnd for Type 1 Ends
          ) : 
          
          (
           // FrontEnd for Type 2 Starts 
          <div>
          <br />
          <br />
          <button>Set Profile</button>
          <button>See FeedBacks</button>
          <br />
          <br />
          <br />
          <br />
          <div className="container">
            <div className="row leftProfileForm">
              <div className="col-lg-6">
                <div className="profileUser2">
                <div className="contact-form">
                <h1>Hi {contractData.AddressData[0][2]}</h1>
                <br />
                <h6>Your Selected Meal type is {contractData.AddressData[0][1]}</h6>
                <h6>Your Subscription Expiring on {contractData.AddressData[0][3]}</h6>
                <br />
                <div className="contact-form">
                  <div className="setuser">
                    
                    <input
                      id="setUname"
                      type="text"
                      placeholder="Reset your UserName"
                      onChange={(e) => {
                        setUname(e.target.value);
                      }}
                    />
                    
                    <br />
                    <br />
                    <button
                      onClick={() => {
                        props.setUser(`${contractData.AddressData[0][1]} ${uname} ${contractData.AddressData[0][3]}`);
                      }}
                    >
                      Submit Feedback
                    </button>
                  </div>
                </div>
                </div>
                </div>
              </div>

              
              <div className="col-lg-6 align-self-center">
                <div className="right-text-content">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="phone fbbox">
                        <i className="fa fa-check"></i>
                        <h4>User: Manish</h4>
                        <span>
                          <a href="">Meal Rating - </a>
                          <br></br>
                          <a href="">Food on Time Rating - </a>
                          <br></br>
                          <a href="">Staff Rating - </a>
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="phone fbbox">
                        <i className="fa fa-check"></i>
                        <h4>User: Dinesh</h4>
                        <span>
                          <a href="">Meal Rating - </a>
                          <br></br>
                          <a href="">Food on Time Rating - </a>
                          <br></br>
                          <a href="">Staff Rating - </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-text-content">
                  <div className="row">
                  <div className="col-lg-6">
                      <div className="phone fbbox">
                        <i className="fa fa-check"></i>
                        <h4>User: Koushik </h4>
                        <span>
                          <a href="">Meal Rating - </a>
                          <br></br>
                          <a href="">Food on Time Rating - </a>
                          <br></br>
                          <a href="">Staff Rating - </a>
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="phone fbbox">
                        <i className="fa fa-check"></i>
                        <h4>User: Silky</h4>
                        <span>
                          <a href="">Meal Rating - </a>
                          <br></br>
                          <a href="">Food on Time Rating - </a>
                          <br></br>
                          <a href="">Staff Rating - </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          </div>
          // FrontEnd for Type 2 Ends 
          )}

        </section>
      </div>
    </>
  );
}
