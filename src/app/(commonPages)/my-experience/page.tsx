import React from "react";

export default function Experience() {
    return (
        <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 p-8 rounded-2xl shadow-lg max-w-4xl mx-auto my-10 border border-purple-200">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 pb-3 border-b border-purple-200 mb-6">
                🚀 My Experience
            </h2>

            <p className="text-gray-800 text-lg leading-relaxed mb-4">
                {`I'm` } currently in my final semester and have gained hands-on experience
                in a variety of fields, combining both creativity and business skills.
                {`Here's`} a snapshot of my journey:
            </p>

            <ul className="space-y-4 text-gray-800 text-base">
                <li>
                    🎨 <strong className="text-purple-600">Graphic Design:</strong> Expert in
                    <span className="text-pink-600 font-medium"> Canva</span>,{" "}
                    <span className="text-pink-600 font-medium">Photoshop</span>, and{" "}
                    <span className="text-pink-600 font-medium">Figma</span>. Designed
                    logos, business cards, wedding invitations, banners, and creative
                    artworks.
                </li>

                <li>
                    📈{" "}
                    <strong className="text-purple-600">Digital Marketing:</strong>{" "}
                    Promoted services through platforms like{" "}
                    <span className="text-red-500 font-medium">OLX</span>,{" "}
                    <span className="text-red-500 font-medium">Fiverr</span>, and{" "}
                    <span className="text-red-500 font-medium">Upwork</span>. Offered
                    content writing, Google search help, and basic ad strategies.
                </li>

                <li>
                    ✍️ <strong className="text-purple-600">Content Creation:</strong>{" "}
                    Wrote articles and marketing content using tools like{" "}
                    <span className="text-purple-500 font-medium">ChatGPT</span>,{" "}
                    <span className="text-purple-500 font-medium">DeepSeek</span>, and{" "}
                    <span className="text-purple-500 font-medium">Grok</span>.
                </li>

                <li>
                    🤝 <strong className="text-purple-600">Customer Service:</strong>{" "}
                    Experience in handling clients through{" "}
                    <span className="text-pink-600 font-medium">CRM</span> tools and
                    managing inquiries with a customer-first mindset.
                </li>

                <li>
                    📊 <strong className="text-purple-600">Business Skills:</strong>{" "}
                    Familiar with topics like{" "}
                    <span className="text-pink-700 font-medium">Accounting</span>,{" "}
                    <span className="text-pink-700 font-medium">Business Math</span>,{" "}
                    <span className="text-pink-700 font-medium">Import/Export</span>, and{" "}
                    <span className="text-pink-700 font-medium">Supply Chain</span>.
                </li>

                <li>
                    💻 <strong className="text-purple-600">Microsoft Office:</strong>{" "}
                    Proficient in{" "}
                    <span className="text-indigo-600 font-medium">MS Excel</span> (with
                    formulas),{" "}
                    <span className="text-indigo-600 font-medium">MS Word</span>, and
                    other office productivity tools.
                </li>
            </ul>
        </div>
    );
};

