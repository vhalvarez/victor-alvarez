import React from "react";
import Content from "../components/Content";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import about from "../assets/data/dataAboutMe";

const LayoutContent = () => {
    return (
        <>
            <HeroImage title={"sobre mi"} isTranparent={true} fondo='bg-ucv2' isWhite={true}/>

            {about.map((data, i) => (

                ( i/2 === 0) ? <Content
                    title={data.title}
                    content={data.desc}
                    img={data.imageOne}
                    img2={data.imageTwo}
                    key={i}
                /> : <Content
                    title={data.title}
                    content={data.desc}
                    img={data.imageOne}
                    img2={data.imageTwo}
                    key={i}
                    isInvert={true}
                />
                
            ))}

            <Footer />
        </>
    );
};

export default LayoutContent;
