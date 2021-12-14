import React from 'react';

const MyInput = (props) => {
    return (
        <input {...props} style={{width: '400px', border: '2px solid teal', padding: '10px', marginBottom: '10px'}}/>
    );
};

export default MyInput;
