import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import About from "./About";
import { registerUser } from "./states/reducers/contractData";
import {
  setMealRating,
  setTimeRating,
  setStaffRating,
} from "./states/reducers/temp";

export default function Feedback(props) {
  const dispatch = useDispatch();
  const contractData = useSelector((state) => state.contractData);

  const mealRating = useSelector((state) => state.temp.mealRating);
  const timeRating = useSelector((state) => state.temp.timeRating);
  const staffRating = useSelector((state) => state.temp.staffRating);

  return (
    <div>
      <div className="aboutSection">
        <About />
      </div>

      <section className="section" id="reservation">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="left-text-content">
                <div className="section-heading">
                  <h6>Any Problems? Let us know</h6>
                  <h2>
                    Here is a Feedback box which tracks all your complaints
                  </h2>
                </div>
                <p>
                  In Case you wanted to sort something mutually or you have a
                  special request to consider. Feel Free to contact us
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="phone">
                      <i className="fa fa-phone"></i>
                      <h4>Phone Numbers</h4>
                      <span>
                        <a href="#">080-090-0990</a>
                        <br></br>
                        <a href="#">080-090-0881</a>
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="message">
                      <i className="fa fa-envelope"></i>
                      <h4>Emails</h4>
                      <span>
                        <a href="#">hello@Klassy.com</a>
                        <br></br>
                        <a href="#">suggestions@klassy.com</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form">
                <form id="contact">
                  <div className="row">
                    <div className="col-lg-12">
                      <h4>Canteen Weekly Feedback</h4>
                    </div>
                    <div className="col-md-12 col-sm-">
                      <fieldset>
                        <select
                          name="meal-rating"
                          id="meal-rating"
                          onChange={(e) =>
                            dispatch(setMealRating(e.target.value))
                          }
                        >
                          <option value="0" autoFocus>
                            Overall Meal Rating {console.log(mealRating)}
                          </option>
                          <option value="1" name="1" id="1">
                            1
                          </option>
                          <option value="2" name="2" id="2">
                            2
                          </option>
                          <option value="3" name="3" id="3">
                            3
                          </option>
                          <option value="4" name="4" id="4">
                            4
                          </option>
                          <option value="5" name="5" id="5">
                            5
                          </option>
                          <option value="6" name="6" id="6">
                            6
                          </option>
                          <option value="7" name="7" id="7">
                            7
                          </option>
                          <option value="8" name="8" id="8">
                            8
                          </option>
                          <option value="9" name="9" id="9">
                            9
                          </option>
                          <option value="10" name="10" id="10">
                            10
                          </option>
                        </select>
                      </fieldset>
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <fieldset>
                        <select
                          name="time-rating"
                          id="time-rating"
                          onChange={(e) =>
                            dispatch(setTimeRating(e.target.value))
                          }
                        >
                          <option value="0" autoFocus>
                            Food on Time? Rate
                          </option>
                          <option value="1" name="1" id="1">
                            1
                          </option>
                          <option value="2" name="2" id="2">
                            2
                          </option>
                          <option value="3" name="3" id="3">
                            3
                          </option>
                          <option value="4" name="4" id="4">
                            4
                          </option>
                          <option value="5" name="5" id="5">
                            5
                          </option>
                          <option value="6" name="6" id="6">
                            6
                          </option>
                          <option value="7" name="7" id="7">
                            7
                          </option>
                          <option value="8" name="8" id="8">
                            8
                          </option>
                          <option value="9" name="9" id="9">
                            9
                          </option>
                          <option value="10" name="10" id="10">
                            10
                          </option>
                        </select>
                      </fieldset>
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <fieldset>
                        <select
                          name="staff-behaviour"
                          id="staff-behaviour"
                          onChange={(e) =>
                            dispatch(setStaffRating(e.target.value))
                          }
                        >
                          <option value="0">Staff Behavior? Rate</option>
                          <option value="1" name="1" id="1">
                            1
                          </option>
                          <option value="2" name="2" id="2">
                            2
                          </option>
                          <option value="3" name="3" id="3">
                            3
                          </option>
                          <option value="4" name="4" id="4">
                            4
                          </option>
                          <option value="5" name="5" id="5">
                            5
                          </option>
                          <option value="6" name="6" id="6">
                            6
                          </option>
                          <option value="7" name="7" id="7">
                            7
                          </option>
                          <option value="8" name="8" id="8">
                            8
                          </option>
                          <option value="9" name="9" id="9">
                            9
                          </option>
                          <option value="10" name="10" id="10">
                            10
                          </option>
                        </select>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          rows="6"
                          id="message"
                          placeholder="Message"
                          required=""
                        ></textarea>
                      </fieldset>
                    </div>
                    <div className="col-lg-12"></div>
                  </div>
                </form>
                <button
                  onClick={() => {
                    props.setTransaction(`W`);
                  }}
                >
                  {" "}
                  Submit Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
