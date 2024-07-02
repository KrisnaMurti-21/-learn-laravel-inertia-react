import { Link, usePage } from "@inertiajs/react";
import React from "react";

const AdminLayout = ({ children }) => {
    const { component } = usePage();
    return (
        <>
            <header className="bg-black text-white py-8">
                <div className="container max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
                    <div className="flex justify-between items-center">
                        <h2 className="font-bold text-3xl">Todo</h2>
                        <nav className="flex justify-between items-center grow ml-36">
                            <div className="flex gap-6 items-center justify-start">
                                <Link href="/dashboard">Dashboard</Link>
                                <Link
                                    href="/admin"
                                    className={`${
                                        component == "Admin/MainPage"
                                            ? "text-indigo-500"
                                            : ""
                                    }`}
                                >
                                    Todo
                                </Link>
                            </div>
                            <div>user</div>
                        </nav>
                    </div>
                </div>
            </header>
            <main>
                <div className="container max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto mt-10">
                    {children}
                </div>
            </main>
        </>
    );
};

export default AdminLayout;