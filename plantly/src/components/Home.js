import React from 'react';
import { SignIn } from './Nav.js';

export function HomePage(props) {

    return (
        <>
            <div className="home-body">
                <div className="container-fluid">
                    <div className="row">
                        {/* <div className="col"> */}
                            {/* <div class="container"> */}
                                {/* <div class="tree-picture-container"> */}
                                  <img className="tree-picture" src="https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/16:9/w_2580,c_limit/BlackForest-Germany-GettyImages-147180370.jpg" alt="tree picture"></img>
                                {/* </div> */}
                                <div class="centered">Centered</div>
                            {/* </div> */}

                            <div className="right-col-container">
                                <img className="plant" src="img/plant-icon-green.png" alt="plant icon"/>
                                <h1>Plantly</h1>
                                <p>Start your plant journey today</p>
                                <p>Explore different types of plants</p>
                                <p>Take the quiz to find the plants that work best for you</p>
                                <p>Use the calendar to track your watering schedule</p>
                                {/* <SignIn /> */}
                            </div>
                        {/* </div> */}
                    </div>
                </div>
                    <footer>
                        <cite>© Alp Duran https://unsplash.com/photos/5MrddkW_Cbg</cite>
                    </footer>
            </div>
        </>
    );
}
