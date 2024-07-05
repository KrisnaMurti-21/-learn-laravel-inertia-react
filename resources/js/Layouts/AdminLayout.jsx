import { Link, usePage } from "@inertiajs/react";
import React from "react";
import { Toaster } from "react-hot-toast";

const AdminLayout = ({ children }) => {
    const { component } = usePage();
    const { auth } = usePage().props;

    return (
        <>
            <div>
                <Toaster />
            </div>
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
                                <Link
                                    href="/users"
                                    className={`${
                                        component == "Users"
                                            ? "text-indigo-500"
                                            : ""
                                    }`}
                                >
                                    Users
                                </Link>
                            </div>
                            <div>{auth.user.name}</div>
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
