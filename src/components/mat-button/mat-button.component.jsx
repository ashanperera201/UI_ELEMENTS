import React from 'react';
import './mat-button.component.scss'

const MatButton = ({ title, handleClick, expClass }) => (
    <button
        onClick={handleClick}
        className={`${expClass} btn btn-large ripple`}>
        {title}
    </button>
);

export default MatButton;
