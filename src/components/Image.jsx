import React from "react";


const Image = ({src, alt, width, height, className}) => {
    return (
        <div>
            <img src={src} loading="lazy" alt={alt || 'Ezyswap'} width={width} height={height} className={className || ''}/>
        </div>
    )
}

export default Image