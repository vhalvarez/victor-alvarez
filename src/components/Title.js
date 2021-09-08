import React from "react";

const Title = ({ title='title', isCard=true, isWhite=true }) => {
    return <div className={`${isCard ? 'text-lg md:text-xl' : 'text-4xl md:text-6xl'} ${isWhite ? 'text-white' : 'text-pynk'} col-span-12 flex  justify-center items-center py-12 uppercase tracking-widest my-6`}>{title}</div>;
};

export default Title;
