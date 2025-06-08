export default function Home() {
    return (
        <div className="w-full  h-full flex flex-col justify-center items-start px-6 md:px-12 py-8 space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 animate-fade-in">
                Hi, {"I'm Samra Bano"}
            </h1>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                {`I'm`} a student of <span className="font-semibold text-purple-700">Bachelor of Professional Studies (BPS)</span> in my final semester at the <span className="font-semibold text-purple-700">University of Management and Technology</span>.
            </p>
        </div>


    );
}
