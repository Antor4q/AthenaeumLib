import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import logo from "../../public/logo.png"
import { SlSocialInstagram } from "react-icons/sl";
import { IoLocationSharp } from "react-icons/io5";
import { MdLocalPhone, MdOutlineEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className="bg-[#fcf1f1]">
           <div className="max-w-7xl grid md:grid-cols-3 grid-cols-1 lg:gap-28 gap-12 mx-auto px-4 py-16">
             <div>
                <img alt="logo" src={logo} className="lg:w-[190px] w-[140px] h-[50px] lg:h-[60px]" />
                <p className="text-gray-700 lg:my-4 my-3 text-sm lg:text-[16px]">Bookland is a Book Store Ecommerce Website Template by DexignZone lorem ipsum dolor sit</p>
                <div className="flex gap-5">
                    <div className="bg-white w-[30px] h-[30px] flex items-center justify-center rounded-full">
                        <TiSocialFacebook className="text-[#ff1616] lg:text-2xl text-xl font-semibold" />
                    </div>
                    <div className="bg-white w-[30px] h-[30px] flex items-center justify-center rounded-full">
                        <SlSocialInstagram className="text-[#ff1616] lg:text-xl text-[16px] font-semibold" />
                    </div>
                    <div className="bg-white w-[30px] h-[30px] flex items-center justify-center rounded-full">
                        <TiSocialTwitter className="text-[#ff1616] lg:text-2xl text-xl font-semibold" />
                    </div>
                </div>
             </div>
             <div>
                <h3 className="lg:text-xl text-[18px] font-semibold text-gray-800">Quick Links</h3>
                <div className="lg:mt-8 mt-6 text-sm lg:text-[16px]">
                    <p className="text-gray-600">Home</p>
                    <p className="text-gray-600 my-2">All Books</p>
                    <p className="text-gray-600">Add Book</p>
                    <p className="text-gray-600 mt-2">Borrow Summary</p>
                </div>
             </div>
             <div>
                <h3 className="lg:text-xl text-[18px] font-semibold text-gray-800">Get In Touch</h3>
                <div className="lg:mt-8 mt-6 text-sm lg:text-[16px]">
                    <p className="text-gray-600 flex items-center gap-2"><IoLocationSharp />832 Thompson Drive, San Fransisco CA 94107,US</p>
                    <p className="text-gray-600 my-2 flex items-center gap-2"><MdLocalPhone />8801565457656</p>
                    <p className="text-gray-600 flex items-center gap-2"><MdOutlineEmail />athenaeumlib@gmail.com</p>
                    
                </div>
             </div>

            
             
           </div>
           <div className="max-w-7xl mx-auto px-4 lg:px-0">
                <hr className="w-full h-[1px] col-span-3 text-gray-400 bg-gray-200" />
             <p className="text-gray-500 lg:py-6 py-4">@athenaeumlib2025.All right reserved</p>
           </div>
        </div>
    );
};

export default Footer;