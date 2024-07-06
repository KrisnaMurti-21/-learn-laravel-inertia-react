import { Link } from "@inertiajs/react";
import React from "react";
import PopupTodo from "./PopupTodo";

function ListTodo({ bgColor, iconLeft, iconRight, iconStatus, text, id, showConfirm, setShowConfirm, todoProps }) {
    return (
        <div
            className={`flex justify-between items-center py-3 px-6 ${bgColor} rounded-md`}
        >
            <h3 id={id}>{text}</h3>
            <div className="flex items-center justify-center gap-2">
                {iconStatus}
                {" | "}
                <Link href={`/admin/edit/${id}`}>{iconLeft}</Link>
                {" | "}
                {iconRight}
                { showConfirm && <PopupTodo name={text} setShowConfirm={setShowConfirm} todoProps={todoProps}/> }
            </div>
        </div>
    );
}

export default ListTodo;
