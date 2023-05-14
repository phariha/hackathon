import React, { useRef, useEffect } from 'react';
import { SignIn } from './Nav.js';


export function HomePage(props) {
  const centeredMainRef = useRef(null);
  const centeredSubRef = useRef(null);
  const paraOneRef = useRef(null);
  const paraTwoRef = useRef(null);
  const paraThreeRef = useRef(null);

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

    observer.observe(centeredMainRef.current);
    observer.observe(centeredSubRef.current);
    observer.observe(paraOneRef.current);
    observer.observe(paraTwoRef.current);
    observer.observe(paraThreeRef.current);

    return () => {
      observer.unobserve(centeredMainRef.current);
      observer.unobserve(centeredSubRef.current);
      observer.unobserve(paraOneRef.current);
      observer.unobserve(paraTwoRef.current);
      observer.unobserve(paraThreeRef.current);
    };
  }, []);

  

  return (
    <>
      <div className="home-body">
        <div className="container-fluid">
          <div className="row">
            <img className="tree-picture" src="https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/16:9/w_2580,c_limit/BlackForest-Germany-GettyImages-147180370.jpg" alt="tree picture"></img>
            <h2 ref={centeredMainRef} className="centered-main">Sustainability</h2>
            <h2 ref={centeredSubRef} className="centered-sub display-2">Begins With Us</h2>

            <div className="right-col-container">
                <div className='text-box-wrap'>
                    <img className="plant" src="img/plant-icon-green.png" alt="plant icon" />
                    <h1>Sustainify</h1>
                    <h1>What does Sustainability mean?</h1>
                    <p ref={paraOneRef} className='text-format'>
                        Sustainability is a concept that focuses on meeting the needs of the present generation without compromising the ability of future 
                        generations to meet their own needs. It is essential for environmental protection and maintaining a healthy planet for current and future
                        generations. Sustainable practices promote the efficient use of natural resources, reduce waste and pollution, and help to mitigate the 
                        effects of climate change.
                    </p>

                    <p ref={paraTwoRef} className='text-format'>
                        Sustainability is crucial because our planet's resources are finite and we need to ensure that we use them wisely. By implementing sustainable
                        practices, we can help reduce the amount of waste generated, conserve natural resources, and prevent environmental degradation. Sustainability
                        also helps to ensure that the needs of present and future generations are met, which is essential for social and economic development.
                    </p>

                    <p ref={paraThreeRef} className='text-format'>
                        Overall, sustainability is an essential concept for protecting our environment and ensuring that we have a healthy planet for future generations.
                        By taking actions such as reducing our carbon footprint, conserving resources, and supporting sustainable practices, we can all play a part in 
                        promoting a sustainable future.
                    </p>
                </div>

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
