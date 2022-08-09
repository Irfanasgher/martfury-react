import React from 'react';

const PrevArrow = props => {
    const { className, onClick, icon } = props;
    return (
        <button
            className={`slick-arrow slick-prev ${className}`}
            onClick={onClick}>
            {icon ? (
                <i className={icon}/>
            ) : (
                <i className="icon-chevron-left"/>
            )}
        </button>
    );
};

export default PrevArrow;
