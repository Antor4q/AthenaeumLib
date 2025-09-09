import { Link } from "react-router";
import bann from "../../public/ban1.png"
import "./banner.css"
import { BiBookReader } from "react-icons/bi";
import { GiSpellBook } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="w-full lg:h-[730px] h-[550px] relative bg-[#fffafa] overflow-hidden">
     
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 30% 70%, rgba(255, 22, 22, 0.05), transparent 70%),
            radial-gradient(circle at 70% 30%, rgba(255, 22, 22, 0.06), transparent 70%)
          `,
        }}
      />

      <div className="lg:max-w-7xl  mx-auto px-4  h-full grid md:grid-cols-2  items-center justify-center md:gap-10 gap-16">
        <div className="relative  order-2 lg:order-2 col-span-1 h-full">
        

            <img src={bann} alt="Banner image" className="lg:w-[600px] md:w-[700px] row-start-2 absolute left-0 right-0 md:h-[450px] lg:h-[600px] bottom-0 "/>
        
            <div className="md:w-[100px] w-[80px] h-[80px]  absolute md:top-[280px] -top-10 shadow-2xl md:-left-6 -left-5 md:h-[100px] flex items-center justify-center rounded-2xl bg-[#eadede] "><BiBookReader className="lg:text-6xl text-3xl text-[#ff1616]" /></div>
            <div className="md:w-[100px] w-[80px] h-[80px] absolute md:top-[200px] -top-36 shadow-2xl shadow-[#ff1616] lg:left-[340px] md:left-[200px] left-[220px] md:h-[100px] flex items-center justify-center rounded-2xl bg-[#ff1616] "><GiSpellBook className="lg:text-6xl text-3xl text-white" /></div>
            <div className="lg:w-[200px] md:w-[170px] w-[140px] absolute lg:top-[450px] md:top-[350px] -top-[10px] shadow-2xl shadow-[#311d1d] lg:left-[330px] md:left-[180px] left-[190px] md:h-[150px] h-[100px] flex flex-col items-center justify-center rounded-2xl bg-white ">
              <FaUsers className="lg:text-6xl text-3xl text-[#ff1616]" />
              <p className="lg:text-xl font-medium text-center text-gray-700 my-2">+3218 Active Borrowers</p>
            </div>
        </div>
        <div className="col-span-1 order-1 lg:order-1 lg:h-full h-[250px] flex lg:items-center items-start z-50">
           <div>
             <h3 className="lg:text-7xl md:text-5xl text-3xl text-gray-800 font-bold">Connect Readers<br/> with <span className="text-[#ff1616]">Resources</span> </h3>
            <p className="font-medium md:text-xl text-sm text-gray-600 my-6">Your one-stop digital solution to manage books, track borrowers, and keep your library system smart and efficient.</p>
            <Link to={"#"} style={{
        background: 'linear-gradient(135deg, #feb692 0%, #ea5455 100%)',boxShadow: "0 20px 30px -6px rgba(238, 103, 97, 0.5)"
      }} className="px-6 py-2  md:text-xl text-sm font-bold rounded-full cursor-pointer">Browse Books</Link>
           </div>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
