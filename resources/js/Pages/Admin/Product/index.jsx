import AdminLayout from "@/Layouts/AdminLayout";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import Card from "./Card";
import FormProduct from "./FormProduct";

const Product = ({ dataBarang }) => {
    const [query, setQuery] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const { flash } = usePage().props;
    const [items, setItems] = useState([]);
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        price: "",
        category_id: "",
    });

    const handleSearch = (e) => {
        const query = e.target.value;
        setQuery(query);

        router.get(
            route("product.search"),
            { search: query },
            {
                preserveState: true,
            }
        );
    };

    const handlePrice = () => {
        router.get(
            route("product.search"),
            { minPrice, maxPrice },
            {
                preserveState: true,
            }
        );
    };
    return (
        <>
            <Head title="Product" />
            <AdminLayout>
                <h1 className="font-bold text-3xl">Product</h1>

                <div className="py-4">
                    <FormProduct
                        value={query}
                        onChange={handleSearch}
                        buttonOn={false}
                        size={"max-w-md"}
                        text={"Search data here..."}
                    />
                </div>

                <div className="py-4 max-w-md flex items-center justify-center mx-auto gap-5">
                    <input
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="number"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        placeholder="Min Price"
                    />
                    <input
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="number"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        placeholder="Max Price"
                    />
                    <button className="bg-blue-700 px-4 py-2 rounded-md text-white" onClick={handlePrice}>Search</button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {dataBarang.map((item) => (
                        <div key={item.id}>
                            <Card
                                name={item.name}
                                price={item.price}
                                id={item.id}
                            />
                        </div>
                    ))}
                </div>
            </AdminLayout>
        </>
    );
};

export default Product;
