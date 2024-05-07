import { Link } from "react-router-dom";

interface DataType {
   id: number;
   class_name: string;
   title: string;
   footer_link: {
      link: string;
      link_title: string;
   }[]
}

const footer_data: DataType[] = [
   {
      id: 1,
      class_name: "col-xl-3 col-lg-3 col-md-4 col-sm-6",
      title: "Usefull Links",
      footer_link: [{ link: "#", link_title: "Home" }, { link: "#", link_title: "Feature" }, { link: "#", link_title: "Tokenomics" }, { link: "#", link_title: "Roadmap" }]
   },
   {
      id: 2,
      class_name: "col-xl-3 col-lg-2 col-md-4 col-sm-6",
      title: "Find Out More",
      footer_link: [{ link: "/https://cryptoshield-1.gitbook.io/gentialai-docs", link_title: "Roadmap" }]
   },
   {
      id: 3,
      class_name: "col-xl-3 col-lg-3 col-md-4 col-sm-4",
      title: "Join Our Community",
      footer_link: [{ link: "#", link_title: "Telegram" }, { link: "#", link_title: "Twitter" }]
   },
]

const Footer = () => {
   return (
      <footer>
         <div className="footer-area footer-bg" style={{ backgroundImage: `url(/assets/img/bg/footer_bg.png)` }}>
            <div className="container">
               <div className="footer-top">
                  <div className="row">
                     {footer_data.map((item) => (
                        <div key={item.id} className={item.class_name}>
                           <div className="footer-widget">
                              <h4 className="fw-title">{item.title}</h4>
                              <div className="footer-link">
                                 <ul className="list-wrap">
                                    {item.footer_link.map((li, i) => (
                                       <li key={i}><Link to={li.link}>{li.link_title}</Link></li>
                                    ))}
                                 </ul>
                              </div>
                           </div>
                        </div>
                     ))}

                     <div className="col-xl-3 col-lg-4 col-sm-8">
                        <div className="footer-widget">
                           <div className="footer-newsletter">
                              <p>Redefining Problem-Solving with Advanced AI</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="footer-bottom">
                  <div className="row">
                     <div className="col-lg-12">
                        <div className="copyright-text">
                           <p>Copyright © 2024 GenitalAI. All rights reserved.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="footer-shape-wrap">
               <img src="/assets/img/images/footer_shape01.png" alt="" className="alltuchtopdown" />
               <img src="/assets/img/images/footer_shape02.png" alt="" className="leftToRight" />
            </div>
         </div>
      </footer>
   )
}

export default Footer;
