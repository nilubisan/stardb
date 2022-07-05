import React from 'react';
import './error-indicator.css'

const ErrorIndicator = () => (
    <div className="error-indicator">
        <h2 className="boom">BOOM!</h2>
        <span>
            Something has gone terribly wrong
        </span>
        <span>
            (but we have already sent droid to fix it)
        </span>
    </div>
);

export default ErrorIndicator;