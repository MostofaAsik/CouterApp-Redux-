import React from 'react';

const Button = ({ children, type, handler }) => {

    const style =
        type === "danger"
            ? "bg-red-500 text-white px-3 py-2 rounded shadow"
            : "bg-blue-500 text-white px-3 py-2 rounded shadow";

    return (
        <div>
            <button className={style} onClick={handler}>
                {children}
            </button>
        </div>
    );
};

export default Button;