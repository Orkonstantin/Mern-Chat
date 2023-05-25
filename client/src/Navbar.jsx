import React from "react";

export default function Navbar() {
    return (
        <nav className="bg-blue-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-12">
                    <div className="flex-shrink-0">
                        {/* Your company logo */}
                        <img
                            className="h-8 w-auto"
                            src="/logo.png"
                            alt="Company Logo"
                        />
                    </div>
                    <div className="flex">
                        {/* Navigation links */}
                        <a
                            href="#"
                            className="text-gray-300 hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className="text-gray-300 hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            About
                        </a>
                        <a
                            href="#"
                            className="text-gray-300 hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
