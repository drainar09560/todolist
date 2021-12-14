import React from 'react';

const MyButton = (props) => {
    return (
        <button {...props} style={{height: '40px', color: 'white', backgroundColor: 'teal'}}>Создать пост</button>
    );
};

export default MyButton;
