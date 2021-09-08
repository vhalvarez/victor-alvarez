import React from "react";
import { Link } from "react-router-dom";
import Title from "./Title";

const ProjectCard = ({ isOrder = true, id = '1', title='title', isBackground = false}) => {
    return (
        <div className="col-span-12 md:col-span-6 block">
            {isOrder ? (
                <>
                    <Title title={title} />
                    <div className="flex justify-center">
                        <Link to={`/portfolio/${id}`} className={` ${isBackground ? `bg-${id}`: 'bg-boy'} shadow-lg rounded-br-lg rounded-tl-lg w-6/12 flex h-96 transform transition duration-500 ease-in-out hover:scale-110 bg-center bg-cover bg-no-repeat`}></Link>
                    </div>
                </>
            ) : (
                <>
                    <div className="flex justify-center">
                        <Link to={`/portfolio/${id}`} className="shadow-lg rounded-tr-lg  rounded-bl-lg bg-boy w-6/12 flex h-96 transform transition duration-500 ease-in-out hover:scale-110 bg-center bg-cover bg-no-repeat"></Link>
                    </div>
                    <Title title={title} />
                </>
            )}
        </div>
    );
};

export default ProjectCard;
