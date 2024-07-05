import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";

const Users = ({ status }) => {
    return (
        <AdminLayout>
            <div>Users : {status} </div>
        </AdminLayout>
    );
};

export default Users;
