import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setAdd } from "./states/reducers/userAdd";
import {AddAddressData} from "./states/reducers/contractData";
import data from "./mealData.json";
import Profileform from "./Profileform";



export default function Profile(props) {
  const dispatch = useDispatch();
    const userAdd = useSelector((state) => state.userAdd);
    const contractData = useSelector((state) => state.contractData);
    const [uDet,setUDet] = useState(null);

useEffect(()=>{

  var userDetails = contractData.UserData.filter((item,index)=>{

    return (item[0].toLowerCase() == (userAdd[0]))
  })

      dispatch(AddAddressData(userDetails[0]))
      setUDet(userDetails[0])
      console.log("____userAdd state is", userAdd[0], "UserDetails variable is",userDetails[0], "contractData is ", contractData)

},[])


  const array = data.map((item, index) => {


    return (
      item <3?
    <div className="col-lg-6">
        <div className="row">
        <div className="left-list">
          <div className="col-lg-12">
            <div className="tab-item">
              <img src={item.image} alt="" />
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <div className="price">
                <h6>{item.price}</h6>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      :  <div className="col-lg-6">
      <div className="row">
      <div className="right-list">
        <div className="col-lg-12">
          <div className="tab-item">
            <img src={item.image} alt="" />
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <div className="price">
              <h6>{item.price}</h6>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    );
  });



  return (

    <>
    <div>
      <Profileform
        setUser = {props.setUser}
        account ={props.account}
        user = {uDet}
        getRegisteredforIndex={props.getRegisteredforIndex}
        getUserFromAddress ={props.getUserFromAddress}
        setPenalty = {props.setPenalty}
        setTransaction={props.setTransaction}
        />
      <section className="section" id="offers">
        <div className="container">
          <br />
          <br />
          <br />
          <div className="row">
            <div className="col-lg-4 offset-lg-4 text-center">
              <div className="section-heading">
                <h6>Klassy Week </h6>
                <h2>This Week’s Special Meal Offers {userAdd}</h2>
                
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="row" id="tabs">
                <div className="col-lg-12">
                  <div className="heading-tabs">
                    <div className="row">
                      <div className="col-lg-6 offset-lg-3">
                        <ul>
                          <li>
                            <img src="assets/images/tab-icon-01.png" alt="" />
                            Breakfast
                          </li>
                          <li>
                            <img src="assets/images/tab-icon-02.png" alt="" />
                            Lunch
                          </li>
                          <li>
                            <img src="assets/images/tab-icon-03.png" alt="" />
                            Dinner
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <section className="tabs-content">
                    <article id="tabs-1">
                      <div className="row">
                        {array}
                      </div>
                    </article>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
