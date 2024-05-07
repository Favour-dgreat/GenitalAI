import Slider from "react-slick";

interface DataTyfe {
   id: number;
   roadmap_title: string;
   desc: JSX.Element;
}

const roadmap_data: DataTyfe[] = [
   {
      id: 1,
      roadmap_title: "Team Formation and Internal Development",
      desc: (<>Establish a strong and competent team to support the development of GentialAi across various domains. Conduct training and development for employees to enhance skills and knowledge in the artificial intelligence industry.</> ),
   },
   {
      id: 2,
      roadmap_title: "Uniswap Launch and DeFi Market Expansion",
      desc: (<>Launch the GentialAi token on Uniswap to enable easy trading and greater liquidity. Expand GentialAi presence in the decentralized finance (DeFi) ecosystem by partnering with relevant protocols and projects.</>),
   },
   {
      id: 3,
      roadmap_title: "Release of GentialAi Version 1.0",
      desc: (<>Release the first complete version of GentialAi bot with core features such as content creator, sentiment analysis, and SEO optimization tools. Gather feedback from users to make improvements and enhancements to the platform.</>),
   },
   {
      id: 4,
      roadmap_title: "Development of New Features and Functionalities",
      desc: (<>Develop new features such as blockchain integration for data security and more advanced analytical tools. Innovate in the fields of machine learning and artificial intelligence to enhance GentialAi capabilities and usability.</>),
   },
   {
      id: 5,
      roadmap_title: "Global Market Expansion",
      desc: (<>Expand GentialAi market coverage to new regions by attending industry conferences, hosting webinars, and building strategic partnerships. Optimize marketing and branding strategies to increase brand awareness and attract potential users.</>),
   },
   {
      id: 6,
      roadmap_title: "Enhanced Compliance and Security",
      desc: (<>Conduct regular security audits to ensure optimal data protection and compliance with applicable regulations. Strengthen GentialAi security system by implementing encryption technology and two-factor authentication.</>),
   },
]

const settings = {
   dots: false,
   infinite: true,
   speed: 1000,
   centerMode: true,
   centerPadding: '260px',
   autoplay: true,
   arrows: false,
   slidesToShow: 3,
   slidesToScroll: 1,
   responsive: [
      {
         breakpoint: 1400,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            centerPadding: '100px',
         }
      },
      {
         breakpoint: 1200,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            centerPadding: '40px',
         }
      },
      {
         breakpoint: 992,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            enterPadding: '0',
            centerMode: false,
         }
      },
      {
         breakpoint: 767,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            enterPadding: '0',
            centerMode: false,
         }
      },
      {
         breakpoint: 575,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            enterPadding: '0',
            centerMode: false,
         }
      },
   ]
}

const RoadMapArea = () => {
   return (
      <section id="roadMap" className="roadmap-area pt-140">
         <div className="container-fluid p-0">
            <div className="row g-0">
               <div className="col-lg-12">
                  <div className="section-title text-center mb-70">
                     <h2 className="title">Our Roadmap</h2>
                     <h6 className="title">Short-Term Roadmap for GentialAi</h6>

                  </div>
               </div>
            </div>
            <Slider {...settings} className="row roadMap-active">
               {roadmap_data.map((item) => (
                  <div key={item.id} className="col-lg-4">
                     <div className="roadmap-item">
                        <span className="roadmap-title">{item.roadmap_title}</span>
                        <div className="roadmap-content">
                           <h4 className="title"><span className="dot"></span></h4>
                           <p>{item.desc}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </Slider>
         </div>
      </section>
   )
}

export default RoadMapArea
