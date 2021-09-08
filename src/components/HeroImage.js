import React from "react";
import Image from "./Image";
import Navbar from "./Navbar";

const HeroImage = ({ title, isTranparent = true, fondo, isWhite=false}) => {
    
    return (
        <Image img={fondo}>
            <Navbar isTransparent={isTranparent} isWhite={isWhite}/>

            <div className="flex justify-center h-4/5 items-center md:items-end text-white text-2xl md:text-6xl lg:text-8xl uppercase tracking-wider">
                {title}
            </div>
        </Image>
    );
};

export default HeroImage;
