import React, { useEffect, useRef } from 'react';

export function RecyclePage() {
    useEffect(() => {
      document.body.style.backgroundColor = 'your-body-color';
      return () => {
        document.body.style.backgroundColor = '';
      };
    }, []);
  
    const infoRef = useRef(null);
    const textRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      });
  
      if (infoRef.current) observer.observe(infoRef.current);
      if (textRef.current) observer.observe(textRef.current);
  
      return () => {
        if (infoRef.current) observer.unobserve(infoRef.current);
        if (textRef.current) observer.unobserve(textRef.current);
      };
    }, []);
  

    return (
        <>
                <body  className = "body-recycle">
                    <h1 className="recycle-h1">Recycling: Why is it Important?</h1>
                    <div className="container-recycle">
                        <div className="image-recycle">
                            <img src="img/recycle.jpeg" alt="Image" />
                        </div>
                        <div ref={infoRef} className="content-recycle-info">
                            <p>The importance of recycling is closely tied to the concept of sustainability. Recycling is a key component of sustainable practices as it promotes the efficient use of resources and minimizes waste generation. By recycling materials such as paper, plastic, glass, and metals, we can reduce the demand for raw materials and energy-intensive extraction processes. This conserves natural resources, reduces pollution and greenhouse gas emissions, and helps mitigate the negative impacts of climate change. Additionally, recycling encourages a circular economy where materials are reused, prolonging their lifespan and reducing the need for constant production. Embracing recycling as part of our daily lives is essential for building a more sustainable future, where we can preserve the planet's resources for generations to come.</p>
                        </div>
                    </div>

                    <div className = "container-recycle2">
                        <div className='recycle-div'>
                            </div> 
                        <h1 className = "recycle-h2">What Can You Do?</h1>
                        <div className="recycling-list">
                        <p ref={textRef} className="content-recycle m-3 p-3">Knowing what items are recyclable is important to ensure that we are properly disposing of waste and minimizing our impact on the environment. While recycling guidelines may vary depending on where you live, there are some general tips to keep in mind. Firstly, always check for the recycling symbol on the item, which typically appears as three arrows chasing each other in a triangle. This symbol indicates that the item is recyclable. It's also important to note that not all plastics are created equal - look for the number inside the recycling symbol to determine if it's accepted for recycling in your area. Finally, if you're unsure if an item is recyclable or not, check with your local waste management facility or municipality for guidelines. By being informed about what is and isn't recyclable, we can all do our part to reduce waste and promote sustainable practices.</p>
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
                                
                                <div className="image-container-recycle">
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