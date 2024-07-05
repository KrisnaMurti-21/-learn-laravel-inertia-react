import AdminLayout from "@/Layouts/AdminLayout";
import { router, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";

function EditList({ todo }) {
    const { flash, errors } = usePage().props;

    const [process, setProcess] = useState(false);
    const { data, setData, post } = useForm({
        name: todo.name,
    });

    const handleUpdate = (e) => {
        setProcess(true);
        e.preventDefault();

        router.post(route("admin.update", todo.id), {
            _method: "patch",
            name: data.name,
        });
    };

    return (
        <AdminLayout>
            <div className="max-w-4xl mx-auto">
                <h2 className="font-semibold text-4xl my-8 text-center">
                    Edit Todo : {todo.name}
                </h2>
                {flash.message && (
                    <div className="py-2 px-4 rounded-md bg-green-500 text-center mb-6">
                        {flash.message}
                    </div>
                )}
                <form onSubmit={handleUpdate}>
                    <div className="mb-6">
                        <div className="flex gap-4 items-center">
                            <input
                                type="text"
                                placeholder="Enter to do here"
                                className="px-4 py-2 rounded-md grow"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                            <button className="py-2 px-4 rounded-md bg-indigo-500 text-white">
                                {process ? "Updating..." : "Update"}
                            </button>
                        </div>
                        {errors.name && (
                            <p className="text-red-700 text-sm mt-2">
                                {errors.name}
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}

export default EditList;
