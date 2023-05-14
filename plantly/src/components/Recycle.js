
export function RecyclePage() {
    return (
        <>
                <body  className = "body-recycle">
                    <h1 className="recycle-h1">Recycling: Why is it Important?</h1>
                    <div className="container-recycle">
                        <div className="image-recycle">
                            <img src="img/recycle.jpeg" alt="Image" />
                        </div>
                        <div className="content-recycle">
                            <p>The importance of recycling is closely tied to the concept of sustainability. Recycling is a key component of sustainable practices as it promotes the efficient use of resources and minimizes waste generation. By recycling materials such as paper, plastic, glass, and metals, we can reduce the demand for raw materials and energy-intensive extraction processes. This conserves natural resources, reduces pollution and greenhouse gas emissions, and helps mitigate the negative impacts of climate change. Additionally, recycling encourages a circular economy where materials are reused, prolonging their lifespan and reducing the need for constant production. Embracing recycling as part of our daily lives is essential for building a more sustainable future, where we can preserve the planet's resources for generations to come.</p>
                        </div>
                    </div>

                    <div className = "container-recycle2"> 
                        <h1 className = "recycle-h2">What Can You Do?</h1>

                        <div className="recycling-list">
                            <div className="list-container-recycle">
                                <div className="list-column-recycle">
                                    <h2>Recyclable Items:</h2>
                                    <ul>
                                        <li>Paper</li>
                                        <li>Glass</li>
                                        <li>Plastic bottles and containers</li>
                                        <li>Aluminum cans</li>
                                        <li>Steel cans</li>
                                    </ul>
                                </div>
                                
                                <div className="image-container">
                                        <img src="img/recycleSymbol.jpeg" alt="Recycling Icon" />
                                </div>

                                <div className="list-column-recycle">
                                    <h2>Non-Recyclable Items:</h2>
                                    <ul>
                                        <li>Styrofoam</li>
                                        <li>Plastic bags</li>
                                        <li>Food waste</li>
                                        <li>Broken glass</li>
                                        <li>Electronics</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
        </>
    );
}