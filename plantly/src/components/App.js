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
import { WhyMe } from './WhyMe.js';

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

    return (
        <div>
            <PlantNav />
            <div>
                <Routes>
                    <Route path="*" element={<Navigate to="/" />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/WhyMe" element={<WhyMe />} />
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