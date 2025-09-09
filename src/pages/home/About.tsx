
import about1 from "../../../public/about1.jpg"
import about2 from "../../../public/about2.jpg"
import { MdDone } from "react-icons/md";
import { Link } from "react-router";
import { GiBookshelf } from "react-icons/gi";

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 flex md:flex-row flex-col-reverse lg:gap-16 gap-8 lg:py-20 pt-10">
            <div className="lg:w-1/2 flex gap-7">
            <div className="relative">
                <img src={about1} className="rounded-xl" alt="" />
                     <div className="w-[160px] absolute lg:-bottom-[10%] bottom-[10%] shadow-2xl shadow-[#311d1d] -right-[20%] lg:h-[170px] h-[130px] flex flex-col items-center justify-center rounded-2xl bg-white ">
                                  <GiBookshelf className="lg:text-6xl text-3xl text-[#ff1616]" />
                                  <p className="lg:text-xl font-medium text-center text-gray-700 my-2">+2100 Books Available</p>
                                </div>
            </div>
            <div>
                <img src={about2} className="rounded-xl" alt="" />

                <div className="lg:ml-12 ml-8 pt-6">
                    <div>
                        <h3 className="flex items-center lg:text-[16px] text-sm gap-2"><MdDone className="text-[#ff1616]" /> FICTION</h3>
                        <h3 className="flex items-center lg:text-[16px] text-sm gap-2"><MdDone className="text-[#ff1616]" /> NON_FICTION</h3>
                        <h3 className="flex items-center lg:text-[16px] text-sm gap-2"><MdDone className="text-[#ff1616]" /> SCIENCE</h3>
                        <h3 className="flex items-center lg:text-[16px] text-sm gap-2"><MdDone className="text-[#ff1616]" /> HISTORY</h3>
                        <h3 className="flex items-center lg:text-[16px] text-sm gap-2"><MdDone className="text-[#ff1616]" /> BIOGRAPHY</h3>
                        <h3 className="flex items-center lg:text-[16px] text-sm gap-2"><MdDone className="text-[#ff1616]" /> FANTASY</h3>
                    </div>
                </div>

            </div>
            </div>
            <div className="lg:w-1/2 w-full flex items-center">
               <div>
                 <h3 className="lg:text-6xl text-2xl text-gray-800 font-bold">Your Library, Smarter <span className="text-[#ff1616]"> Than Ever</span> </h3>
                <p className="text-gray-600 lg:my-5 my-3 lg:text-[16px] text-sm">At AthenaeumLib, we believe managing a library should be simple, fast, and hassle-free. From cataloging books to keeping track of borrowers, our platform gives you everything you need to run a modern digital library—all in one place.</p>
                <Link to={"#"} style={{
                        background: 'linear-gradient(135deg, #feb692 0%, #ea5455 100%)',boxShadow: "0 20px 30px -6px rgba(238, 103, 97, 0.5)"
                      }} className="px-6 py-2  lg:text-xl text-sm font-bold rounded-full cursor-pointer">Borrow Book</Link>
               </div>
            </div>
        </div>
    );
};

export default About;