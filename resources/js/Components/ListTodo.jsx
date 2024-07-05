import React from "react";

function ListTodo({ bgColor, iconLeft, iconRight, text }) {
    return (
        <div
            className={`flex justify-between items-center py-3 px-6 ${bgColor} rounded-md`}
        >
            <h3>{text}</h3>
            <div className="flex items-center justify-center gap-2">
                {iconLeft}
                {" | "}
                {iconRight}
            </div>
        </div>
    );
}

export default ListTodo;
