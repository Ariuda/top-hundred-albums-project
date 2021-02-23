import React from 'react';

const LoadingComponent: React.FC = () => {
    return (
        <div className="loading">
            <h1>Top 100 albums in the iTunes Store</h1>
            <div className="animation">
                <div className="bar bar-one"></div>
                <div className="bar bar-two"></div>
                <div className="bar bar-three"></div>
                <div className="bar bar-four"></div>
                <div className="bar bar-five"></div>
                <div className="bar bar-six"></div>
                <div className="bar bar-seven"></div>
                <div className="bar bar-eight"></div>
                <div className="bar bar-nine"></div>
                <div className="bar bar-ten"></div>
            </div>
            Loading...
        </div>
    )
};

export default LoadingComponent;