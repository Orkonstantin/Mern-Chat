import React from "react";

export default function Header({ title }) {
    return (
        <header className="bg-blue-600 py-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <div className="flex items-center">
                    <div className="rounded-full bg-white w-10 h-10 flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6 text-blue-600"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                        </svg>
                    </div>
                    <h1 className="text-lg font-semibold text-white ml-2">{title}</h1>
                </div>
            </div>
        </header>
    );
}
