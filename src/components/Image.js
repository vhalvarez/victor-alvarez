import React from "react";

const Image = ({children, img=''}) => {
    return (
        <div className={`h-screen ${img} bg-no-repeat bg-cover bg-center bg-fixed`}>
            {children}
        </div>
    );
};

export default Image;
