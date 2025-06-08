
import { Header } from "./components/Header";
import bg from "../../public/bg.jpg"
import samra from "../../public/samra2.jpeg"
import { Footer } from "./components/footer";
import Image from "next/image";
export default function Home() {


  return (
    <div className="h-screen bg-cover bg-center relative"

      style={{
        backgroundImage: `url(${bg.src})`
      }}

    >
      <Header />



      <div className="flex h-[90vh]">

        <div className="w-1/2 h-full items-center justify-center flex">


          <div className="h-full items-center justify-center flex">

            <Image src={samra} alt="Samra Bano" className={"h-[80vh] bg-center bg-contain rounded-[20px]"}
              style={{ objectFit: "contain", borderRadius: "20px" }} />
          </div>




        </div>
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
