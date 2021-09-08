import React from "react";
import { FaGithub } from "react-icons/fa";

const Demo = ({ demo, github }) => {
    return (
        <div className="grid grid-cols-12 h-28 bg-jet">
            <div className="col-start-3 col-span-8 flex justify-between items-center text-center ">
                <a target='_blank' rel='noreferrer' href={demo}   
                    className="border-b text-2xl md:text-4xl text-white"
                >
                    Ver demo
                </a>

                <a target='_blank' rel='noreferrer' href={github} className="text-2xl md:text-6xl text-white">
                    <FaGithub />
                </a>
            </div>
        </div>
    );
};

export default Demo;
