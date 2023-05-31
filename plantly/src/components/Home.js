import React, { useRef, useEffect } from 'react';

export function HomePage(props) {
  // useRef is used to declare a variable to hold a reference to something -> in this case, it's the elements holding the text

  const centeredMainRef = useRef(null);
  const centeredSubRef = useRef(null);
  const paraOneRef = useRef(null);
  const paraTwoRef = useRef(null);
  const paraThreeRef = useRef(null);

  // perform side effects in function component
  // IntersectionObserver API: lets you register a callback function that is executed whenever an element they wish to monitor enters
  // or exits another element (or the viewport), or when the amount by which the two intersect changes by a requested amount.
  // intersectionRatio: represents the ratio of intersection between the observed element and the root element or viewport
  useEffect(() => {
    // entries refers to the array of IntersectionObserverEntry objects that are passed to the callback function 
    // refers to individual elements being observed and provide information about their intersection with the root element or
    // viewport. 
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    });

    // When a ref is passed to an element in render, a reference to the node becomes accessible at the current attribute of the ref.
    const centeredMainNode = centeredMainRef.current;
    const centeredSubNode = centeredSubRef.current;
    const paraOneNode = paraOneRef.current;
    const paraTwoNode = paraTwoRef.current;
    const paraThreeNode = paraThreeRef.current;

    // instance method that tells the IntersectionObserver a target element to observe.
    observer.observe(centeredMainNode);
    observer.observe(centeredSubNode);
    observer.observe(paraOneNode);
    observer.observe(paraTwoNode);
    observer.observe(paraThreeNode);

    // instance method that tells the IntersectionObserver to stop observing a particular target element.
    return () => {
      if (centeredMainNode) observer.unobserve(centeredMainNode);
      if (centeredSubNode) observer.unobserve(centeredSubNode);
      if (paraOneNode) observer.unobserve(paraOneNode);
      if (paraTwoNode) observer.unobserve(paraTwoNode);
      if (paraThreeNode) observer.unobserve(paraThreeNode);
    };
  }, []);

  // Refs are commonly assigned to an instance property when a component is constructed so they can be referenced throughout the
  // component.

  return (
    <>
      <div className="home-body">
        <div className="container-fluid">
          <div className="row">
            <img className="tree-picture" src="https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/16:9/w_2580,c_limit/BlackForest-Germany-GettyImages-147180370.jpg" alt="tree"></img>
            <h2 ref={centeredMainRef} className="centered-main">Sustainability</h2>
            <h2 ref={centeredSubRef} className="centered-sub display-2">Begins With Us</h2>

            <div className="right-col-container">
              <div className='text-box-wrap'>
                <span className='circle'><img className="plant" src="img/plant-icon-green.png" alt="plant icon" /></span>
                <h1 className='sustainify-title'>Sustainify</h1>
                <h1 className='sustainability'>What does Sustainability mean?</h1>
                <p ref={paraOneRef} className='text-format'>
                  Sustainability is a critical concept that emphasizes the importance of meeting the needs of the current generation while safeguarding the ability of future generations to meet their own needs. Its significance lies in protecting the environment and maintaining a healthy planet for both current and future generations. By promoting efficient use of natural resources, minimizing waste and pollution, and addressing the impacts of climate change, sustainable practices are essential for ensuring long-term ecological balance.
                </p>

                <p ref={paraTwoRef} className='text-format'>
                  The finite nature of our planet's resources underscores the importance of sustainability. By adopting sustainable practices, we can reduce waste, preserve natural resources, and prevent environmental degradation. Additionally, sustainability ensures that the needs of present and future generations are met, which is crucial for both social and economic development.
                </p>

                <p ref={paraThreeRef} className='text-format'>
                  Overall, sustainability is a fundamental concept for safeguarding the environment and ensuring a healthy planet for future generations. By taking steps such as reducing our carbon footprint, conserving resources, and supporting sustainable practices, we can all contribute to building a sustainable future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
