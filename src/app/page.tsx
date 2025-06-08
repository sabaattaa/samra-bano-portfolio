
import { Header } from "./components/Header";
import bg from "../../public/bg.jpg"
import samra from "../../public/samra2.jpeg"
import { Footer } from "./components/footer";
import Image from "next/image";
export default function Home() {


  return (
    <div
      className="h-screen bg-cover bg-center bg-fixed overflow-y-auto fixed top-0 left-0 w-full"
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
    >
      <Header />

      <div className="flex min-h-[90vh] flex-col md:flex-row items-center justify-center">
        {/* Left Image Section */}
        <div className="px-5 md:px-3 w-full md:w-1/2 h-full flex items-center justify-center">
          <Image
            src={samra}
            alt="Samra Bano"
            className="h-[80vh] rounded-[20px] object-contain"
          />
        </div>

        {/* Right Text Section */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-start px-6 md:px-12 py-8 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 animate-fade-in">
            Hi, I'm Samra Bano
          </h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            I'm a student of <span className="font-semibold text-purple-700">Bachelor of Professional Studies (BPS)</span> in my final semester at the <span className="font-semibold text-purple-700">University of Management and Technology</span>.
          </p>
        </div>
      </div>

      <Footer />
    </div>

  );
}
