import React from "react";
import HeroImage from "./HeroImage";
import dataProject from "../assets/data/data";
import Footer from "./Footer";
import Content from "./Content";
import Demo from "./Demo";

const Project = ({ match }) => {
    const id = match.params.id;

    const proyecto = dataProject.find(
        (identificador) => identificador.id === id
    );

    return (
        <>
            <HeroImage
                fondo={`bg-${proyecto.wallpaper}`}
                title={proyecto.nombre}
                isWhite
            />

            <Content title={proyecto.title[0]} content={proyecto.desc[0]} img={proyecto.imageOne} img2={proyecto.imageTwo}/>
            <Content
                title={proyecto.title[1]}
                content={proyecto.desc[1]}
                isInvert={true}
                isHidden={true}
            />

            <Demo demo={proyecto.demo} github={proyecto.github} />

            <Footer />
        </>
    );
};

export default Project;
