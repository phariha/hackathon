import React, { useRef, useEffect } from 'react';

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

    const centeredMainNode = centeredMainRef.current;
    const centeredSubNode = centeredSubRef.current;
    const paraOneNode = paraOneRef.current;
    const paraTwoNode = paraTwoRef.current;
    const paraThreeNode = paraThreeRef.current;

    observer.observe(centeredMainNode);
    observer.observe(centeredSubNode);
    observer.observe(paraOneNode);
    observer.observe(paraTwoNode);
    observer.observe(paraThreeNode);

    return () => {
      if (centeredMainNode) observer.unobserve(centeredMainNode);
      if (centeredSubNode) observer.unobserve(centeredSubNode);
      if (paraOneNode) observer.unobserve(paraOneNode);
      if (paraTwoNode) observer.unobserve(paraTwoNode);
      if (paraThreeNode) observer.unobserve(paraThreeNode);
    };
  }, []);

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
