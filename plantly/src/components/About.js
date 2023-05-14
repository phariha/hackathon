import React from 'react';

export function AboutPage() {
    return (
        <>
            <main>
                <section className="about-text">
                    <div className="container">
                        <h1>About Us</h1>
                        <p>
                            This application was created by:
                        </p>
                        <div className="team-members d-flex">
                            <div className="team-member">
                                <div className='container'>
                                    <img src='img\manu.JPEG' alt="Person 1" className="member-circle circle-1"></img>
                                    <h2 className='about-name'>Saimanasvi Charugundla</h2>
                                    <h3 className='about-email'>smanasvi@gmail.com</h3>
                                </div>
                            </div>

                            <div className="team-member">
                                <div className='container'>
                                    <img src='img\phariha@uw.edu-0.jpg' alt="Person 2" className="member-circle circle-2"></img>
                                    <h2 className='about-name'>Priya Hariharan</h2>
                                    <h3 className='about-email'>priya.hariharan818@gmail.com</h3>
                                </div>
                            </div>
                        </div>

                        <p>Hi! We are both students at the University of Washington majoring in Informatics, and our goal with this application was to create a website that focuses on sustainable living. We wanted to provide people with cost-effective ways to help the environment, whether it be through reducing their carbon footprint, conserving energy, or minimizing waste. The website will serve as a one-stop resource for individuals who are interested in sustainable living, but may not know where to start or how to do it on a budget.</p>
                    </div>
                </section>
            </main>
        </>
    );
}