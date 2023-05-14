import React, { useRef, useEffect } from 'react';


export function TransportationPage() {
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

    observer.observe(paraOneRef.current);
    observer.observe(paraTwoRef.current);
    observer.observe(paraThreeRef.current);

    return () => {
      if (paraOneRef.current) observer.unobserve(paraOneRef.current);
      if (paraTwoRef.current) observer.unobserve(paraTwoRef.current);
      if (paraThreeRef.current) observer.unobserve(paraThreeRef.current);
    };
  }, []);



  return (
    <>
      <div className="home-body">
        <div className="container-fluid">
          <div className="row">
            <img className="tree-picture" src="https://i.guim.co.uk/img/media/2c187328c1384d02c5ecba548478fbd2af8cf674/48_29_3079_1847/master/3079.jpg?width=1200&quality=85&auto=format&fit=max&s=bf337dc1230054c7a51d86095bd967cb" alt="tree picture"></img>

            <div className="right-col-container-transport">
              <div className='text-box-wrap-transport'>
              <span className='circle'><img className="plant" src="img/plant-icon-green.png" alt="plant icon" /></span>
                    <h1 className='transport-title'>Transportation</h1>
                <p ref={paraOneRef} className='text-format-transport'>
                Sustainability is a critical concept that emphasizes the importance of meeting the needs of the current generation while safeguarding the ability of future generations to meet their own needs. Its significance lies in protecting the environment and maintaining a healthy planet for both current and future generations. By promoting efficient use of natural resources, minimizing waste and pollution, and addressing the impacts of climate change, sustainable practices are essential for ensuring long-term ecological balance.
                </p>

                <p ref={paraTwoRef} className='text-format-transport'>
                The finite nature of our planet's resources underscores the importance of sustainability. By adopting sustainable practices, we can reduce waste, preserve natural resources, and prevent environmental degradation. Additionally, sustainability ensures that the needs of present and future generations are met, which is crucial for both social and economic development.
                </p>

                <p ref={paraThreeRef} className='text-format-transport'>
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