import React, { useRef, useEffect } from 'react';

export function TransportationPage() {
  
  return (
    <>
      <body  className = "body-recycle">
                    <h1 className="recycle-h1">Transportation</h1>
                    <div className="container-recycle">
                        <div className="image-recycle">
                            <img src="https://i.guim.co.uk/img/media/2c187328c1384d02c5ecba548478fbd2af8cf674/48_29_3079_1847/master/3079.jpg?width=1200&quality=85&auto=format&fit=max&s=bf337dc1230054c7a51d86095bd967cb" alt="tree picture"></img>
                        </div>
                        <div className="content-recycle">
                            <p>Transportation holds immense importance for college students, and embracing sustainable transportation practices is crucial for promoting a more environmentally conscious lifestyle. Opting for sustainable transportation options, such as biking, walking, or utilizing public transportation, not only reduces carbon emissions and mitigates climate change but also fosters a healthier and more active lifestyle. By prioritizing sustainable transportation, college students can contribute to creating a greener campus environment, minimize traffic congestion, and inspire others to make eco-friendly choices.</p>
                        </div>
                    </div>

                    <div className = "container-recycle2"> 
                        <h1 className = "recycle-h2">Alternative Forms of Transportation</h1>

                        <div className="image-section-recycle">
                          <div className="image-container-recycle">
                            <img className="rounded-image-recycle" src="https://kingcounty.gov/~/media/depts/metro/travel-options/bus/rapidride/v2/rapidride-featured-image" alt="Image 1" />
                            <div className="caption-recycle">Bus</div>
                          </div>
                          <div className="image-container-recycle">
                            <img className="rounded-image-recycle" src="https://cdn.geekwire.com/wp-content/uploads/2018/11/limebikes2.jpg" alt="Image 2" />
                            <div className="caption-recycle">Lime Bikes and Scooters</div>
                          </div>
                          <div className="image-container-recycle">
                            <img className="rounded-image-recycle" src="https://kuow-prod.imgix.net/store/9a6e5ff0d9602303fff8a7805e751f7f.jpg" alt="Image 3" />
                            <div className="caption-recycle">Light Rail</div>
                          </div>
                          <div className="image-container-recycle">
                            <img className="rounded-image-recycle" src="https://sdotblog.seattle.gov/wp-content/uploads/sites/10/2021/02/49561821172_1d1efc37f2_b-e1613679849945.jpg" alt="Image 3" />
                            <div className="caption-recycle">Walking</div>
                          </div>
                        </div>
                    </div>
                </body>

      {/* <div className="home-body">
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
      </div> */}
    </>
  );
}