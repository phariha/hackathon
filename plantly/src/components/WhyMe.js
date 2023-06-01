import React, { useEffect, useRef } from 'react';

export function WhyMe() {
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

    if (centeredMainNode) observer.observe(centeredMainNode);
    if (centeredSubNode) observer.observe(centeredSubNode);
    if (paraOneNode) observer.observe(paraOneNode);
    if (paraTwoNode) observer.observe(paraTwoNode);
    if (paraThreeNode) observer.observe(paraThreeNode);

    return () => {
      if (centeredMainNode) observer.unobserve(centeredMainNode);
      if (centeredSubNode) observer.unobserve(centeredSubNode);
      if (paraOneNode) observer.unobserve(paraOneNode);
      if (paraTwoNode) observer.unobserve(paraTwoNode);
      if (paraThreeNode) observer.unobserve(paraThreeNode);
    };
  }, []);

  return (
    <div className="home-body">
      <div className="container-fluid">
        <div className="row">
          <img
            className="tree-picture"
            src='https://www.timeshighereducation.com/sites/default/files/climate_demonstration.jpg'
            alt="demonstration"
          />
          <h2 ref={centeredMainRef} className="centered-main">
          </h2>
          <h2 ref={centeredSubRef} className="centered-sub display-2">
          </h2>

          <div className="right-col-container-whyme">
            <div className='text-box-wrap-whyme'>
              <span className='circle'><img className="plant" src="img/plant-icon-green.png" alt="plant icon" /></span>
              <h1 className='whyme-title'>Why Me?</h1>
              <p ref={paraOneRef} className='text-format-whyme'>
                College students should care about sustainability as they are the future leaders responsible for shaping the world they inherit. Sustainability encompasses environmental, social, and economic factors, all of which are interconnected. By embracing sustainable principles, students can make a positive impact on their environment and inspire others to do the same. Caring about sustainability leads to responsible resource management, improved quality of life, and a more equitable society.
              </p>

              <p ref={paraTwoRef} className='text-format-whyme'>
                One way college students can contribute to sustainability is by incorporating house plants into their living spaces. House plants improve air quality by absorbing carbon dioxide and releasing oxygen, reduce indoor pollutants, and regulate humidity levels. Nurturing house plants creates a greener and healthier living environment while reducing ecological footprints.
              </p>

              <p ref={paraThreeRef} className='text-format-whyme'>
                College students can support sustainability through transportation choices and recycling. Opting for environmentally friendly transportation modes like walking, cycling, or public transit reduces carbon emissions, alleviates traffic congestion, and promotes a sustainable urban environment. Additionally, recycling waste materials diverts valuable resources from landfills, conserves energy, and promotes the circular economy. Active participation in recycling initiatives and proper waste management practices contribute to reducing environmental impact and creating more sustainable communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
