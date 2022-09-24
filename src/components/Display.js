import React from 'react';

const Display = ({steps}) => {
    return (
        <div style={{border: '2px solid green' }}>
            <h2>Display</h2>
            <p>So far steps {steps}</p>
        </div>
    );
};

export default Display;