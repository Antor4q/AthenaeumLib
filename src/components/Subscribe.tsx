import bg from "../../public/bg1.jpg"

const Subscribe = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 lg:py-20 py-10">
            <div style={{backgroundImage: `url(${bg})`}} className={`md:h-[250px] h-[200px] w-full rounded-3xl   bg-no-repeat bg-cover bg-center relative flex items-center justify-center`}>
                <div className="absolute w-full z-10 h-full inset-0 opacity-50 rounded-3xl bg-black"></div>
                <div className="z-40 relative grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center md:gap-10 gap-6 md:p-12 p-7">
                    <h3 className="lg:text-5xl md:text-3xl text-2xl lg:col-span-2 col-span-1 font-bold text-white">Subscribe our newsletter for newest books updates</h3>
                    <div className="z-40 relative">
                        <input type="email" name="email" id="" placeholder="Enter Your Email" className="border-white md:h-[70px] h-[50px] w-full px-4 text-white focus:outline-none rounded-2xl py-4 border" />
                        <button className="absolute cursor-pointer top-[5px] right-[5px]  bg-red-600 md:h-[60px] h-[40px] w-[120px] rounded-2xl text-white font-bold border-none">SUBSCRIBE</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Subscribe;