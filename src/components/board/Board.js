import React from "react";

const board = () => {
    return (
        <div className="board">
            <div className="board-header">
                <img src="/assets/icon-x.svg" alt="x"></img>
                <img src="/assets/icon-o.svg" alt="o"></img>
            </div>
            <div className="board-turn">
                <h1> X TURN</h1>
            </div>
            <div>
                <button className="button button-restart">
                    <img src="/assets/icon-restart.svg" alt="x"></img>
                </button>
            </div>
        </div>
    );
};

export default board;
