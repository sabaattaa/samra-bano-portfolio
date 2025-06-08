import React from 'react';
import { Mail, Phone } from 'lucide-react';  

export default function ContactMe() {
    return (
        <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 py-10 px-6 md:px-12 rounded-xl shadow-lg max-w-xl mx-auto mt-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-6">
                {`Let's`} Connect!
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-6">
                If you liked my portfolio or want to reach out, feel free to contact me using the details below:
            </p>
            <div className="flex flex-col items-center gap-4 text-gray-800 text-base md:text-lg">
                <div className="flex items-center gap-2">
                    <Mail className="text-purple-600" size={20} />
                    <a href="mailto:samrabano20381@gmail.com" className="hover:text-purple-800 transition">
                        samrabano20381@gmail.com
                    </a>
                </div>
                <div className="flex items-center gap-2">
                    <Phone className="text-purple-600" size={20} />
                    <a href="tel:03254394679" className="hover:text-purple-800 transition">
                        0325 4394679
                    </a>
                </div>
            </div>
        </div>
    );
};

