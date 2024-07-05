import { Link } from "@inertiajs/react";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const renderLinkContent = (label) => {
    if (label === "&laquo; Previous") {
        return (
            <div className="flex items-center">
                <IoIosArrowBack /> Back
            </div>
        );
    } else if (label === "Next &raquo;") {
        return (
            <div className="flex items-center">
                <IoIosArrowForward /> Next
            </div>
        );
    } else {
        return label;
    }
};

const Pagination = ({ todos }) => {
    const links = todos.links;
    const currentPage = todos.current_page;
    const lastPage = todos.last_page;

    const getBaseClasses = () =>
        "flex items-center justify-center px-4 h-10 leading-tight";

    const getActiveClasses = (active) =>
        active
            ? "text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";

    const getRoundedClasses = (index) => {
        if (index === 0 && currentPage !== 1) return "rounded-s-md";
        if (index === links.length - 1 && currentPage !== lastPage)
            return "rounded-e-md";
        if (index === 1 && currentPage === 1) return "rounded-s-md";
        if (index === links.length - 2 && currentPage === lastPage)
            return "rounded-e-md";
        return "";
    };

    const getVisibilityClass = (index) => {
        if (
            (index === 0 && currentPage === 1) ||
            (index === links.length - 1 && currentPage === lastPage)
        ) {
            return "hidden";
        }
        return "";
    };

    const getLinkClasses = (link, index) => {
        return `${getBaseClasses()} ${getActiveClasses(
            link.active
        )} ${getRoundedClasses(index)} ${getVisibilityClass(index)}`.trim();
    };

    return (
        <nav aria-label="Page navigation example">
            <ul className="flex items-center -space-x-px h-10 text-base">
                {links.map((link, index) => (
                    <li key={index}>
                        {
                            <Link
                                href={link.url}
                                className={getLinkClasses(link, index)}
                            >
                                {renderLinkContent(link.label)}
                            </Link>
                        }
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
