import ListTodo from "@/Components/ListTodo";
import Pagination from "@/Components/Pagination";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BsPencilSquare } from "react-icons/bs";
import { FaRegCheckCircle, FaRegTrashAlt } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";

function MainPage({ todos }) {
    const { flash, errors } = usePage().props;
    const [showConfirm, setShowConfirm] = useState(false);
    const [todoProps, setTodoProps] = useState({
        id: "",
        name: "",
    });
    const { data, setData, reset } = useForm({
        name: "",
    });
    const storeTodo = (e) => {
        e.preventDefault();
        router.post("/admin", data, {
            onSuccess: () => reset(),
        });
    };

    const handleComplete = (id, name, isComplete) => {
        let title = document.getElementById(id);
        title.innerText = "Updating...";
        router.patch(
            `/admin/edit_completed/${id}`,
            {
                is_completed: !isComplete,
            },
            {
                onSuccess: () => {
                    title.innerText = name;
                },
            }
        );
    };
    useEffect(() => {
        if (flash.message) {
            toast.success(flash.message);
        }
    }, [flash]);

    const handleConfirmation = (id, name) => {
        setShowConfirm(true);
        setTodoProps({
            id: id,
            name: name,
        });
    };

    return (
        <>
            <Head title="Todo App" />
            <AdminLayout>
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-semibold text-4xl my-8 text-center">
                        Todo App
                    </h2>
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
                                is_complete={todo.is_completed}
                                onClick={() =>
                                    handleComplete(
                                        todo.id,
                                        todo.name,
                                        todo.is_completed
                                    )
                                }
                                onClickDelete={() =>
                                    handleConfirmation(todo.id, todo.name)
                                }
                                text={todo.name}
                                id={todo.id}
                                showConfirm={showConfirm}
                                setShowConfirm={setShowConfirm}
                                todoProps={todoProps}
                            />
                        ))}
                    </div>
                    <div className="mt-8 flex justify-center items-center">
                        <Pagination todos={todos} />
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}

export default MainPage;
