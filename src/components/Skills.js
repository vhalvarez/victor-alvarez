import React from "react";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3, FaReact, FaLaravel } from "react-icons/fa";
import { DiJavascript1, DiPhp, DiNodejsSmall, DiMysql } from "react-icons/di";
import Title from "./Title";

const Skills = () => {

    return (
        <div className="grid grid-cols-12 gap-8 h-screnn bg-jet ">
            <Title title={"habilidades"} isCard={false} isWhite={false}/>

            <div className="col-span-6 md:col-span-3 flex justify-center">
                <AiOutlineHtml5 className="h-20 text-white text-9xl" />
            </div>
            <div className="col-span-6 md:col-span-3 flex justify-center">
                <FaCss3 className="h-20 text-white text-9xl" />
            </div>
            <div className="col-span-6 md:col-span-3 flex justify-center">
                <DiJavascript1 className="h-20 text-white text-9xl" />
            </div>
            <div className="col-span-6 md:col-span-3 flex justify-center">
                <DiPhp className="h-20 text-white text-9xl" />
            </div>
            <div className="col-span-6 md:col-span-3 flex justify-center">
                <FaLaravel className="h-20 text-white text-9xl" />
            </div>
            <div className="col-span-6 md:col-span-3 flex justify-center">
                <FaReact className="h-20 text-white text-9xl" />
            </div>
            <div className="col-span-6 md:col-span-3 flex justify-center">
                <DiNodejsSmall className="h-20 text-white text-9xl" />
            </div>
            <div className="col-span-6 md:col-span-3 flex justify-center">
                <DiMysql className="h-20 text-white text-9xl" />
            </div>
        </div>
    );
};

export default Skills;
