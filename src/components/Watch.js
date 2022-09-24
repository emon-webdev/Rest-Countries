import React, { useEffect, useState } from 'react';
import Display from './Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);


    const increaseSteps = () => {
        setSteps(steps + 1)
    };

    useEffect(() => {
        console.log(steps)
    }, [steps])


    return (
        <div>
            <h2>This is my Smart Watch</h2>
            <h3>My Current Steps: {steps}</h3>
            <button onClick={increaseSteps}>Running</button>
            <Display name="Display" steps={steps} />
        </div>
    );
};

export default Watch;