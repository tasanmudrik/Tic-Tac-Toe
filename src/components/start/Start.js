import React from "react";

const start = () => {
    return (
        <div className="start">
            <div className="start-header">
                <img src="/assets/icon-x.svg" alt="x"></img>
                <img src="/assets/icon-o.svg" alt="o"></img>
            </div>

            <div className="start-shadows">
                <h1 className="text-start"> PICK PLAYER 1'S MARK</h1>
                <div className="start-player">
                    <span className="start-player--active"> x </span>
                    <span> o </span>
                </div>
                <p className="text-light">REMEMBER: X GOES FIRST</p>
            </div>
            <div className="start-buttons">
                <button className=" button button-cpu">
                    NEW GAME (VS CPU)
                </button>
                <button className="button button-player">
                    NEW GAME (VS PLAYER)
                </button>
            </div>
        </div>
    );
};

export default start;
