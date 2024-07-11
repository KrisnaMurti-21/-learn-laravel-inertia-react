import AdminLayout from "@/Layouts/AdminLayout";
import { Head, router } from "@inertiajs/react";
import React, { useState } from "react";

const Edit = () => {
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(route("product.store"), {
            productName: productName,
            price: price,
            categoryId: categoryId,
            fileSend: file,
        });

        // console.log(productName, price, categoryId, file);
    };

    return (
        <>
            <Head title="Edit Product" />
            <AdminLayout>
                <div className="max-w-screen mx-auto bg-slate-500 max-h-screen rounded-lg py-5">
                    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label
                                htmlFor="product_name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Product Name
                            </label>
                            <input
                                type="text"
                                id="product_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="enter product name"
                                required=""
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="price"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Price Product
                            </label>
                            <input
                                type="text"
                                id="price"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="enter price"
                                required=""
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="category_id"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Select Category Product
                            </label>
                            <select
                                id="category_id"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={categoryId}
                                onChange={(e) => setCategoryId(e.target.value)}
                            >
                                <option value="">
                                    Choose Category Product
                                </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div className="mb-5">
                            <label
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                htmlFor="user_avatar"
                            >
                                Upload file
                            </label>
                            <input
                                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                aria-describedby="user_avatar_help"
                                id="user_avatar"
                                type="file"
                                onChange={handleFileChange}
                            />
                            <div
                                className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                                id="user_avatar_help"
                            >
                                SVG, PNG, JPG or GIF
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </AdminLayout>
        </>
    );
};

export default Edit;
