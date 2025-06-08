'use client';
import { useState } from 'react';

export const Footer = () => {
    const [active, setActive] = useState("about");

    return (
        <div className="flex items-center justify-center">
            <div className="fixed bottom-5 px-4 py-2 bg-white/80 backdrop-blur-md border border-gray-200 shadow-lg rounded-full flex gap-4 transition-all duration-300">

                <button
                    onClick={() => setActive("about")}
                    className={`px-5 py-2 rounded-full font-semibold tracking-wide shadow-md transition-all duration-300
            ${active === "about"
                            ? "bg-gradient-to-r from-emerald-500 to-green-500 text-white scale-105 shadow-xl"
                            : "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105 hover:shadow-xl"
                        }
          `}
                >
                    About
                </button>

                <button
                    onClick={() => setActive("portfolio")}
                    className={`px-5 py-2 rounded-full font-semibold tracking-wide shadow-md transition-all duration-300
            ${active === "portfolio"
                            ? "bg-gradient-to-r from-indigo-500 to-blue-500 text-white scale-105 shadow-xl"
                            : "bg-gradient-to-r from-blue-500 to-sky-500 text-white hover:scale-105 hover:shadow-xl"
                        }
          `}
                >
                    Portfolio
                </button>

            </div>
        </div>
    );
};
