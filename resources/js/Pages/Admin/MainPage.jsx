import ListTodo from "@/Components/ListTodo";
import Pagination from "@/Components/Pagination";
import AdminLayout from "@/Layouts/AdminLayout";
import { router, useForm, usePage } from "@inertiajs/react";
import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";

function MainPage({ todos }) {
    const { flash, errors } = usePage().props;
    const { data, setData, reset } = useForm({
        name: "",
    });
    const storeTodo = (e) => {
        e.preventDefault();
        router.post("/admin", data, {
            onSuccess: () => reset(),
        });
    };
    return (
        <AdminLayout>
            <div className="max-w-4xl mx-auto">
                <h2 className="font-semibold text-4xl my-8 text-center">
                    Todo App
                </h2>
                {flash.message && (
                    <div className="py-2 px-4 rounded-md bg-green-500 text-center mb-6">
                        {flash.message}
                    </div>
                )}
                <form onSubmit={storeTodo}>
                    <div className="mb-6">
                        <div className="flex gap-4 items-center">
                            <input
                                type="text"
                                placeholder="Enter to do here"
                                className="px-4 py-2 rounded-md grow"
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                            <button className="py-2 px-4 rounded-md bg-indigo-500 text-white">
                                save
                            </button>
                        </div>
                        {errors.name && (
                            <p className="text-red-700 text-sm mt-2">
                                {errors.name}
                            </p>
                        )}
                    </div>
                </form>
                <div className="flex flex-col gap-4">
                    {todos.data.map((todo, i) => (
                        <ListTodo
                            key={i}
                            bgColor="bg-red-400"
                            iconLeft={<BsPencilSquare size={18} />}
                            iconRight={<FaRegTrashAlt size={18} />}
                            text={todo.name}
                        />
                    ))}
                </div>
                <div className="mt-8 flex justify-center items-center">
                    <Pagination todos={todos} />
                </div>
            </div>
        </AdminLayout>
    );
}

export default MainPage;
