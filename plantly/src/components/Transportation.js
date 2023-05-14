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
                        <div className="content-transportion-info">
                            <p>Transportation holds immense importance for college students, and embracing sustainable transportation practices is crucial for promoting a more environmentally conscious lifestyle. Opting for sustainable transportation options, such as biking, walking, or utilizing public transportation, not only reduces carbon emissions and mitigates climate change but also fosters a healthier and more active lifestyle. By prioritizing sustainable transportation, college students can contribute to creating a greener campus environment, minimize traffic congestion, and inspire others to make eco-friendly choices.</p>
                        </div>
                    </div>

                      <div className = "container-recycle2"> 
                      <div className='recycle-div'></div> 
                        <h1 className = "recycle-h2">Alternative Forms of Transportation</h1>
                        <div className="recycling-list">
                        <p className="content-transportation m-3 p-3">Seattle offers a range of alternative transportation options that contribute to a more sustainable and efficient city. With an extensive bus network, residents and visitors can enjoy convenient and eco-friendly commuting. Additionally, the availability of shared bikes and scooters, such as Lime bikes, promotes active transportation and reduces reliance on cars. Lastly, the city's light rail system provides a reliable and accessible means of transportation, offering a greener alternative for longer journeys. These alternative transportation options not only alleviate traffic congestion but also contribute to cleaner air and a greener urban environment.</p>


                        <div className="image-section-transportation">
                            <div className="image-container-transportation">
                              <img className="rounded-image-transportation" src="https://kingcounty.gov/~/media/depts/metro/travel-options/bus/rapidride/v2/rapidride-featured-image" alt="Image 1" />
                              <div className="caption-transportation">Bus</div>
                            </div>
                            <div className="image-container-transportation">
                              <img className="rounded-image-transportation" src="https://cdn.geekwire.com/wp-content/uploads/2018/11/limebikes2.jpg" alt="Image 2" />
                              <div className="caption-transportation">Lime Bikes and Scooters</div>
                            </div>
                            <div className="image-container-transportation">
                              <img className="rounded-image-transportation" src="https://kuow-prod.imgix.net/store/9a6e5ff0d9602303fff8a7805e751f7f.jpg" alt="Image 3" />
                              <div className="caption-transportation">Light Rail</div>
                            </div>
                            <div className="image-container-transportation">
                              <img className="rounded-image-transportation" src="https://sdotblog.seattle.gov/wp-content/uploads/sites/10/2021/02/49561821172_1d1efc37f2_b-e1613679849945.jpg" alt="Image 3" />
                              <div className="caption-transportation">Walking</div>
                            </div>
                          </div>
                        </div>
                      </div>
                </body>
    </>
  );
}