import React from "react";

const Footer = () => {
    return (
        <div className="grid grid-cols-12 bg-jet h-40">
            <div className="col-span-full flex-row md:flex justify-between items-center px-10">
                <div className="col-span-12 text-white uppercase text-lg md:text-2xl font-medium">
                    &copy; 2021 - alvarez victor
                </div>
                <div className=" text-white uppercase text-md md:text-2xl">
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={"https://www.linkedin.com/in/alvarez3197/"}
                        className="m-1 md:m-2 font-medium hover:text-gray-500"
                    >
                        LinkedIn
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={"https://github.com/vhalvarez"}
                        className="m-1 md:m-2 font-medium hover:text-gray-500"
                    >
                        Github
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={
                            "https://es.stackoverflow.com/users/112233/víctor-Álvarez?tab=profile"
                        }
                        className="m-1 md:m-2 font-medium hover:text-gray-500"
                    >
                        StackOverflow
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
