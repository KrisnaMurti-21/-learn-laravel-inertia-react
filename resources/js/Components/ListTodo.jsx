import { Link } from "@inertiajs/react";
import React from "react";
import PopupTodo from "./PopupTodo";
import { FaRegCheckCircle, FaRegTrashAlt } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";
import { BsPencilSquare } from "react-icons/bs";

function ListTodo({
    bgColor,
    iconLeft,
    iconRight,
    text,
    id,
    showConfirm,
    setShowConfirm,
    todoProps,
    is_complete,
    onClick,
    onClickDelete,
}) {
    const IconStatus = is_complete ? FaRegCircleXmark : FaRegCheckCircle;
    return (
        <div
            className={`flex justify-between items-center py-3 px-6 ${
                is_complete ? "bg-green-300" : "bg-red-400"
            } rounded-md`}
        >
            <h3 id={id}>{text}</h3>
            <div className="flex items-center justify-center gap-2">
                <IconStatus
                    className={`cursor-pointer ${
                        is_complete ? "text-red-600" : ""
                    }`}
                    size={18}
                    onClick={onClick}
                />
                {" | "}
                <Link href={`/admin/edit/${id}`}>
                    <BsPencilSquare size={18} />
                </Link>
                {" | "}
                <FaRegTrashAlt
                    size={18}
                    className="cursor-pointer"
                    onClick={onClickDelete}
                />
                {showConfirm && (
                    <PopupTodo
                        name={text}
                        setShowConfirm={setShowConfirm}
                        todoProps={todoProps}
                    />
                )}
            </div>
        </div>
    );
}

export default ListTodo;
