import React from "react";

const Content = ({
    title = "title",
    content = "content",
    isInvert = false,
    isHidden = false,
    img='',
    img2=''
}) => {
    return (
        <div className="grid grid-cols-12 p-10  bg-jet gap-4">
            <div
                className={`col-span-12 col-start-1 md:col-span-5 block my-8 ${
                    isInvert ? "md:col-start-3" : "md:col-start-7"
                }`}
            >
                <div
                    className={`text-pynk text-6xl md:text-8xl my-4 ${
                        isInvert ? "text-left" : "text-right" 
                    }`}
                >
                    {title}
                </div>
                <div className="text-white text-lg md:text-2xl text-justify leading-relaxed my-2">
                    {content}
                </div>
            </div>

            { isHidden ? '' : <div className="col-span-12 my-8">
                <div className="grid grid-cols-12 gap-2 md:gap-8">
                    <div className={`${isInvert ? 'col-start-1 col-span-12 md:col-start-3 md:col-span-4' : 'col-start-1 col-span-12 md:col-start-3 md:col-span-5'} h-96 ${img} bg-cover bg-no-repeat bg-center`}></div>

                    <div className={`${isInvert ? 'col-start-1 col-span-12 md:col-start-7 md:col-span-5' : 'col-start-1 col-span-12 md:col-start-8 md:col-span-4'} h-96 ${img2} bg-cover bg-no-repeat bg-center`}></div>
                </div>
            </div>}

            
        </div>
    );
};

export default Content;
