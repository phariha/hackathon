import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { PlantNav } from './Nav.js';
import { HomePage } from "./Home.js";
import { AboutPage } from "./About.js"
import { PlantInfoPage } from './PlantInfo.js';
import { ExplorePage } from './Explore.js';
import { PlantListPage } from './PlantList.js';
import { RecyclePage } from './Recycle.js'
import { TransportationPage } from './Transportation.js';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import DEFAULT_USERS from '../data/users.json';
import { Quiz } from './Quiz.js';

export default function App(props) {
    // Search/filter rendered plants
    const [displayedPlants, changeDisplayedPlants] = useState(props.plants);

    function applyFilter(selectedCostLevel) {
        if (selectedCostLevel === "") {
            changeDisplayedPlants(props.plants);
        } else {
            changeDisplayedPlants(props.plants.filter((plant) => {
                if (plant.COST === selectedCostLevel) {
                    return plant;
                }
                return null;
            }));
        }
    }

    // Sign in user
    const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[0]) //default to null user

    // effect to run when the component first loads
    useEffect(() => {
        const auth = getAuth();

        onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                firebaseUser.userId = firebaseUser.uid;
                firebaseUser.userName = firebaseUser.displayName;
                firebaseUser.userImg = firebaseUser.photoURL || "/img/null.png";
                setCurrentUser(firebaseUser);
            }
            else { //no user
                setCurrentUser(DEFAULT_USERS[0]);
            }
        })

    }, [])

    return (
        <div>
            <PlantNav currentUser={currentUser} />
            <div>
                <Routes>
                    <Route path="*" element={<Navigate to="/" />} />
                    <Route path="/" element={<HomePage />} currentUser={currentUser} />
                    <Route path="/Quiz" element={<Quiz />} />
                    <Route path="/Explore" element={<ExplorePage />} >
                        <Route path="/Explore/:plantName" element={<PlantInfoPage plants={displayedPlants} />} />
                        <Route index={true} element={<PlantListPage applyFilterCallback={applyFilter} plants={displayedPlants} />} />
                    </Route>
                    <Route path="/Recycle" element={<RecyclePage />} />
                    <Route path="/Transportation" element={<TransportationPage />} />
                    <Route path="/About" element={<AboutPage />} />
                </Routes>
            </div>
        </div>
    );
}