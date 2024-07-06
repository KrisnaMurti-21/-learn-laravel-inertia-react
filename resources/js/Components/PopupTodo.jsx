import { router } from "@inertiajs/react";
import React from "react";

const PopupTodo = ({ setShowConfirm, todoProps }) => {
    const handleDelete = () => {
        router.post(
            route(`admin.destroy`, todoProps.id),
            {
                _method: "delete",
            },
            {
                onSuccess: () => setShowConfirm(false),
            }
        );
    };
    return (
        <section className="fixed top-0 left-0 w-full flex flex-col justify-center items-center h-screen">
            <div
                className="w-full fixed bg-black/70 left-0 top-0 h-screen"
                onClick={() => setShowConfirm(false)}
            ></div>
            <div className="bg-white relative rounded-md ">
                <header className="border-b py-2 px-6 font-bold text-xl">
                    Confimration
                </header>
                <div className="p-6">
                    <h4>Apakah kamu yakin akan menghapus {todoProps.name}?</h4>
                    <div className="flex gap-2 mt-4 justify-end items-center">
                        <button
                            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                            onClick={() => setShowConfirm(false)}
                        >
                            Tidak
                        </button>
                        <button
                            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                            onClick={handleDelete}
                        >
                            Ya, Yakin
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopupTodo;
