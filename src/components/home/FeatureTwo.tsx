interface DataType {
   id: number;
   title: string;
   img: string;
}

const feature_data: DataType[] = [
   {
      id: 1,
      title: "AI Multimodal",
      img: "/assets/img/images/features_two_img01.jpeg"
   },
   {
      id: 2,
      title: "Large Language Models",
      img: "/assets/img/images/features_two_img02.jpeg"
   },
   
]

const FeatureTwo = () => {
   return (
      <section className="features-area-two features-bg" style={{ backgroundImage: `url(/assets/img/bg/features_bg.png)` }}>
         <div className="container">
            <div className="features-inner-wrap">
               <div className="features-item-wrap">
                  <div className="row justify-content-center">
                     {feature_data.map((item) => (
                        <div key={item.id} className="col-lg-4 col-md-6">
                           <div className="features-item-two">
                              <div className="features-img-two">
                                 <img src={item.img} alt="" />
                              </div>
                              <div className="features-content-two">
                                 <h2 className="title">{item.title}</h2>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="row">
                  <div className="col-lg-12">
                     <div className="section-title section-title-two text-center">
                        <h2 className="title">The architecture of GentialAi is built upon a holistic and integrated approach
                           <img src="/assets/img/images/title_img01.jpg" alt="" />
                           combining various AI technologies 
                           <img src="/assets/img/images/title_img02.jpg" alt="" />
                           to achieve optimal performance.</h2>
                     </div>
                  </div>
               </div>
               <div className="features-line-shape"></div>
            </div>
         </div>
         <div className="features-shape-wrap">
            <img src="/assets/img/images/features_shape01.png" alt="" className="alltuchtopdown" />
            <img src="/assets/img/images/features_shape02.png" alt="" className="leftToRight" />
         </div>
      </section>
   )
}

export default FeatureTwo
