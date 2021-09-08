import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="grid grid-cols-12 px-10 py-10 bg-platino">
            <div className="col-span-12 block md:flex md:justify-between my-6">
                <div className="flex justify-center md:justify-start items-center text-jet text-6xl font-bold">
                    Alvarez
                </div>
                <Link
                    to="/about"
                    className="flex mt-12 justify-center md:justify-end items-center md:w-80 text-lg text-center md:text-right text-jet font-medium"
                >
                    Mi nombre es Victor Alvarez, soy un programador basado en
                    Caracas, Venezuela. Me dedico al desarrollo web (leer mas)....
                </Link>
            </div>
        </div>
    );
};

export default About;
