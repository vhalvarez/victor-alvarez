import React, { useLayoutEffect } from "react";
import { Parallax, useController } from "react-scroll-parallax";

const ParallaxTitle = ({ title, isX = true }) => {
    return (
        <>
            
            {isX ? (
                <Parallax
                    className="mt-12 flex justify-end col-span-full"
                    x={[0, -60]}
                    styleInner={{ height: 3 + "em", marginTop: 15 + "px" }}
                >
                    {ParallaxCache()}
                    <div className="text-md md:text-xl lg:text-6xl font-extrabold text-white uppercase text-left tracking-wider leading-normal">
                        {title}
                    </div>
                </Parallax>
            ) : (
                <Parallax
                    className="flex col-span-full"
                    x={[0, 80]}
                    styleInner={{ height: 3 + "em", marginTop: 15 + "px" }}
                >
                    {ParallaxCache()}
                    <div className="text-md md:text-xl lg:text-6xl font-extrabold text-white uppercase text-left tracking-wider leading-normal">
                        {title}
                    </div>
                </Parallax>
            )}
        </>
    );
};

const ParallaxCache = () => {
    const { parallaxController } = useController();

    useLayoutEffect(() => {
        const handler = () => parallaxController.update();
        window.addEventListener("load", handler);
        return () => window.removeEventListener("load", handler);
    }, [parallaxController]);

    return null;
};

export default ParallaxTitle;
