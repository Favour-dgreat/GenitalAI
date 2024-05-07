import { Link } from "react-router-dom";

interface DataType {
   id: number;
   title: JSX.Element;
   desc: JSX.Element;
   img: string;
}
const feature_data: DataType[] = [
   {
      id: 1,
      title: (<>LLM Chat</>),
      desc: (<>Have direct and bold conversations. There are no restrictions or rules!</>),
      img: "/assets/img/images/features_img01.png",
   },
   {
      id: 2,
      title: (<>Voice cloning and text to speech</>),
      desc: (<>Multilingual AI Voice Toolkit for all your applications.</>),
      img: "/assets/img/images/features_img02.png",
   },
   {
      id: 3,
      title: (<>Text to image</>),
      desc: (<>Use many models to generate the best image that u want</>),
      img: "/assets/img/images/features_img03.png",
   },
   {
      id: 4,
      title: (<>Image editing</>),
      desc: (<>Edit any image by text</>),
      img: "/assets/img/images/features_img04.png",
   },
   {
      id: 5,
      title: (<>Video generator</>),
      desc: (<>Text to video prompt</>),
      img: "/assets/img/images/features_img05.png",
   },
]
const FeatureOne = () => {
   return (
      <section id="feature" className="features-area pt-140 pb-110">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <div className="section-title text-center mb-70">
                     <h2 className="title">Features of The GentialAi</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               {feature_data.map((item) => (
                  <div key={item.id} className="col-lg-6">
                     <div className="features-item">
                        <div className="features-content">
                           <h2 className="title"><Link to="#!">{item.title}</Link></h2>
                           <p>{item.desc}</p>
                        </div>
                        <div className="features-img">
                           <img src={item.img} alt="" />
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default FeatureOne
