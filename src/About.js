import React from 'react'

export default function About() {
  return (
    <div>
          <section className="section" id="about">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-xs-12">
                    <div className="left-text-content">
                        <div className="section-heading">
                            <h6>About Us</h6>
                            <h2>We Leave A Delicious Memory For You</h2>
                        </div>
                        <h5>Klassy Cafe is one of the best restaurant. You can vote and decide Rules accordingly</h5>

                        <br />
                        <br />
                        <div className="row">
                            <div className="col-4">
                                <img src="assets/images/about-thumb-01.jpg" alt=""/>
                            </div>
                            <div className="col-4">
                                <img src="assets/images/about-thumb-02.jpg" alt=""/>
                            </div>
                            <div className="col-4">
                                <img src="assets/images/about-thumb-03.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-xs-12">
                    <div className="right-content">
                        <div className="thumb">
                            <a rel="nofollow" href="http://youtube.com"><i className="fa fa-play"></i></a>
                            <img src="assets/images/about-video-bg.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}