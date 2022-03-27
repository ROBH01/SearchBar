import React from 'react';
import classNames from 'classnames';

import styles from './Button.module.css';

const Button = ({ icon, hasIconRight, title, onClick, primary }) => {
    const btnClasses = classNames([
        styles.button,
        primary ? styles.primary : styles.default,
        hasIconRight && styles.reverse,
    ]);

    const iconClasses = classNames([styles.icon, hasIconRight && styles.iconRight]);

    return (
        <button className={btnClasses} onClick={onClick}>
            {!!icon && <span className={iconClasses}>{icon}</span>}
            <span>{title}</span>
        </button>
    );
};

export default Button;
