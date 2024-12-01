import React from 'react';
import Button from './Button';
import Count from './Count';

const Counter = ({ count, increaseHandler, decreaseHandler }) => {
    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <Count count={count} />
            <div className="flex space-x-3">
                <Button handler={increaseHandler}>Increment</Button>
                <Button handler={decreaseHandler} type="danger" >
                    Decrement
                </Button>
            </div>
        </div>
    );
};

export default Counter;