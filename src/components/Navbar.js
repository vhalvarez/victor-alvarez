import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { DiStackoverflow } from "react-icons/di";

const Navbar = ({ isWhite = false, isTransparent = false }) => {
    return (
        <>
            <div
                className={`flex justify-between items-center ${
                    isTransparent ? "bg-transparent" : "bg-platino"
                } h-20 p-8`}
            >
                <div>
                    <Link
                        to="/about"
                        className={`text-xs md:text-xl font-regular px-1 md:px-2 ${
                            isWhite
                                ? "text-white hover:text-gray-400"
                                : "text-jet-dark hover:text-jet"
                        }`}
                    >
                        About Me
                    </Link>
                    <Link
                        to="/portfolio"
                        className={`text-xs md:text-xl font-regular px-1 md:px-2 ${
                            isWhite
                                ? "text-white hover:text-gray-400"
                                : "text-jet-dark hover:text-jet"
                        }`}
                    >
                        Portafolio
                    </Link>
                </div>

                <Link to="/" className="block">
                    <p
                        className={`text-lg md:text-2xl font-bold ${
                            isWhite ? "text-white" : "text-jet-dark"
                        }`}
                    >
                        Alvarez
                    </p>
                    <p
                        className={`text-sm md:text-xl font-light text-center ${
                            isWhite ? "text-white" : "text-jet-dark"
                        } `}
                    >
                        Victor
                    </p>
                </Link>

                <div
                    className={`flex justify-between items-center text-xs md:text-xl`}
                >
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={"https://www.linkedin.com/in/alvarez3197/"}
                        className={`px-1 md:px-4 ${
                            isWhite
                                ? "text-white hover:text-gray-400"
                                : "text-jet-dark hover:text-jet"
                        }`}
                    >
                        <FaLinkedinIn />
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={
                            "https://es.stackoverflow.com/users/112233/víctor-Álvarez?tab=profile"
                        }
                        className={`px-1 md:px-4 ${
                            isWhite
                                ? "text-white hover:text-gray-400"
                                : "text-jet-dark hover:text-jet"
                        }`}
                    >
                        <DiStackoverflow />
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={"https://github.com/vhalvarez"}
                        className={`px-1 md:px-4 ${
                            isWhite
                                ? "text-white hover:text-gray-400"
                                : "text-jet-dark hover:text-jet"
                        }`}
                    >
                        <AiOutlineGithub />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
