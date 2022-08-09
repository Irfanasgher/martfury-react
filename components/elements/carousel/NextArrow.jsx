import React from 'react';

const NextArrow = props => {
    const { className, onClick, icon } = props;
    return (
        <button
            className={`slick-arrow slick-next ${className}`}
            onClick={onClick}>
            {icon ? (
                <i className={icon}/>
            ) : (
                <i className="icon-chevron-right"/>
            )}
        </button>
    );
};

export default NextArrow;
