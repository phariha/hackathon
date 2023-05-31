import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ReactCardFlip from "react-card-flip";

export function PlantListPage(props) {

    // The component initializes a local variable plants to hold the plant data passed via props
    let plants = props.plants;

    // creating array of elements for filter
    const costArray = ['$', '$$', '$$$'];
    
    // useState hook to keep track of variable and function to update its value
    // The component renders a select input element (<select>) to allow users to filter plants by cost level
    // The selected cost level is stored in the selectedCost state variable
    const [selectedCost, isSelectedCostType] = useState('');

    // mapping an option for each item inside array
    const costOptionElems = costArray.map((level) => {
        return <option key={level} value={level}>{level}</option>
    })

    // useState hook to keep track of variable and function to update its value
    // search bar and returning plants that correlate with the query
    const [query, setQuery] = useState("");
    
    // calling filter function on plants array, which then takes a callback function as an argument for each plant in the array
    // map method is called on the filtered result -> it takes another callback function that transforms each element of the filtered result array into a PlantCard component
    const plantsFiltered = plants.filter(plant => plant.name.toLowerCase().includes(query)).map((plant) => {
        return <PlantCard key={plant.name} plants={plant} />
    }
    );

    function PlantCard(props) {
        const [flip, setFlip] = useState(false);
        let plant = props.plants;
    
        return (
            <ReactCardFlip isFlipped={flip} flipDirection="vertical">
                <div role="button" className="explore-item text-center" onClick={() => setFlip(!flip)}>
                    <h3>{plant.name}</h3>
                    <div className="plant-img">
                        <img title={plant.Source} src={plant.img} alt={plant.alt}></img>
                    </div>
                </div>
                <div className="explore-item" onClick={() => setFlip(!flip)}>
                    <div className="card-info">
                        <h4><em>Maintenance: </em>{plant.MAINTENANCE}</h4>
                        <h4><em>Lighting: </em>{plant.LIGHTING}</h4>
                        <h4><em>Humidity: </em>{plant.HUMIDITY}</h4>
                        <h4><em>Cost: </em>{plant.COST}</h4>
                        <Link to={"/Explore/" + plant.name} className="btn btn-default more-info" >
                            More Info...
                        </Link>
                    </div>
                </div>
            </ReactCardFlip>
        )
    }

    // function updates the selected cost value based on user selection
    function changeCostSelectedElem(event) {
        isSelectedCostType(event.target.value);
    }

    // a button with click event rendered to the applied filter
    function handleClick() {
        props.applyFilterCallback(selectedCost);
    }

    return (
        <div className='plant-explore'>
            <div className="right-col-container-explore">
                <div className='text-box-wrap-explore'>
                    <h1 className="explore-heading">Find your perfect plant!</h1>
                    <p className='plant-grow'>Growing your own plants is a sustainable practice that benefits the environment in several ways. When you grow your own plants, you reduce the energy and resources required to transport them to your location. This decreases your carbon footprint and supports sustainable practices.</p>

                    <p className='plant-grow'>This can also lead to long-term cost savings. Once your plants are established, you can harvest their produce, which can be used for your meals, reducing your grocery expenses. Even if you lack access to a large garden, you can grow a variety of plants in small pots or containers on a balcony or windowsill. This means that you don't need to invest in costly gardening equipment or materials.</p>

                    <p className='plant-grow'>With these goals in mind, our search feature allows you to filter plants based on price, making it easy to find the perfect plant that meets your budget requirements. You can explore different plants and how easy they are to maintain depending on your schedule!</p>
                </div>
            </div>
            <h2 className="explore-subheading">Search for different species of houseplants in our houseplant index!</h2>
            <h3 className='explore-explanation'>Click the cards below to learn more about each plant!</h3>

            <div className="search-container">
                <input className="search-bar" type="text" placeholder="Search..." onChange={(e) => setQuery(e.target.value)} />
                <div className="row align-items-center mb-3">
                    <div className="col-auto">
                        <div className="filter-container">
                            <select id="costSelect" className="form-select" value={selectedCost} onChange={changeCostSelectedElem}>
                                <option value="">Select Cost Level</option>
                                {costOptionElems}
                            </select>
                            <div className="filter-container">
                                <div className="col-auto">
                                <button onClick={handleClick} id="submitButton" type="submit" className="btn btn-secondary" aria-label="apply filter">Apply Filter</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="explore-container">
                {plantsFiltered}
                {plantsFiltered.length < 1 && <h2>Sorry, there are no results for your search.</h2>}
            </div>
        </div>
    )
}
