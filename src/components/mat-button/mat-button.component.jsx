import React from 'react';
import './mat-button.component.scss'

const MatButton = ({ title, handleClick }) => (
    <button onClick={handleClick} className='btn btn-success btn-large'>
        {title}
    </button>
);

export default MatButton;
