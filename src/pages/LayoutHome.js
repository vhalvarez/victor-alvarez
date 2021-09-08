import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Image from "../components/Image";
import Title from "../components/Title";
import ParallaxTitle from "../components/ParallaxTitle";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";

const LayoutHome = () => {
    return (
        <>
            <Navbar />

            <div className="h-screen col-span-full">
                <About />
                <Image img='bg-me'/>
            

                <div className="bg-jet h-screen">

                   

                    <Skills />

                    

                    <Portfolio />

                    <div className="grid grid-cols-12 bg-jet">
                        <ParallaxTitle title={"Atrévete, el progreso"} />
                        <ParallaxTitle
                            title={"solamente se logra así."}
                            isX={false}
                        />

                        <div className="col-span-12 flex justify-center">
                            <Title title="- victor hugo" />
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        </>
    );
};

export default LayoutHome;
