import React from "react";
import dataProject from "../assets/data/data";
import ProjectCard from "./ProjectCard";
import Title from "./Title";

const Portfolio = () => {
    return (
        <div className="grid grid-cols-12 gap-8  bg-jet ">
            <Title title={"proyectos"} isCard={false} isWhite={false} />

            {dataProject.map((data, i) => (
                <ProjectCard
                    id={data.id}
                    title={data.nombre}
                    isBackground={true}
                    key={i}
                />
            ))}
        </div>
    );
};

export default Portfolio;
