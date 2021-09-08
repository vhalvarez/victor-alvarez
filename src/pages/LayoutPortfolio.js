import React from "react";
import Footer from "../components/Footer";

import HeroImage from "../components/HeroImage";
import Portfolio from "../components/Portfolio";

const LayoutPortfolio = () => {
    return (
        <>
            <HeroImage title={"portfolio"} fondo={"bg-portfolio"} isWhite={true} />

            <Portfolio />

            <Footer />
        </>
    );
};

export default LayoutPortfolio;
