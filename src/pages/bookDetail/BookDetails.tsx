import { useParams } from "react-router";
import { useGetSingleBookQuery } from "../../redux/api/baseApi";
import im from "../../../public/bg1.jpg"

const BookDetails = () => {
   const { bookId } = useParams<{ bookId: string }>();

   const {data,isLoading,isError} = useGetSingleBookQuery(bookId||"")
   console.log(data)

    if (isLoading)
    return <p className="text-center py-10">Loading books...</p>;

  if (isError)
    return (
      <p className="text-center py-10 text-red-600">
        Failed to load book.
      </p>
    );
    return (
        <div className="max-w-7xl mx-auto px-4 md:py-20 py-10 h-auto">
           <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-16 gap-8"> 
            <div className="md:col-span-1 w-full h-[250px] relative rounded-3xl shadow-2xl p-6">
                <div className={`w-[130px] shadow-2xl h-[30px] mb-8 flex items-center justify-center rounded-3xl ${data?.data?.available ? "bg-red-600 ":"bg-red-400"}`}>
                    <p className="text-white font-semibold">{data?.data?.available ? "Available":"Unavailable"}</p>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{data?.data?.author}</h3>
                <div className="flex gap-10 my-4">
                    <p className="font-semibold text-xl text-gray-800">Genre: 
                        <span className="font-medium text-[16px]">{data?.data?.genre}</span></p>
                    <p className="font-semibold text-xl text-gray-800">Copies: <span className="font-medium text-[16px]">{data?.data?.copies}</span></p>
                </div>
                    <p className="font-semibold text-xl text-gray-800">isbn: <span className="font-medium text-[16px]">{data?.data?.isbn}</span></p>
            </div>
             <div className="md:hidden mt-0">

            <h3 className="lg:text-6xl mb-8 text-2xl text-gray-800 font-bold">{data?.data?.title}</h3>
            <p className="text-gray-600 lg:my-5 my-3 lg:text-[16px] text-sm">{data?.data?.description}</p>
            <hr className="w-full h-[3px] col-span-3 md:my-7 my-5 text-gray-400 " />
           </div>
            <div className="lg:col-span-2 col-span-1">
                <img src={im} alt="" className="md:h-[250px] h-[170px] rounded-3xl" />
            </div>

           </div>
           <div className="md:mt-14 mt-6 md:w-3/4">
           <div className="hidden md:flex flex-col">

            <h3 className="lg:text-6xl mb-8 text-2xl text-gray-800 font-bold">{data?.data?.title}</h3>
            <p className="text-gray-600 lg:my-5 my-3 lg:text-[16px] text-sm">{data?.data?.description}</p>
            <hr className="w-full h-[3px] col-span-3 md:my-7 my-5 text-gray-400 " />
           </div>
                <h3 className="md:text-2xl text-xl font-bold text-gray-800 ">Explore Book Details</h3>
                <p className="text-gray-600 lg:my-5 my-3 lg:text-[16px] text-sm">Discover complete information about every book in our collection. From the author’s background and genre to publication details, summaries, and reader ratings, everything is neatly organized for you. Dive deep into each book’s story, understand its themes, and explore insights that help you make informed reading choices. Whether you’re a casual reader or a passionate book lover, this page provides all the details you need at a glance, presented in a clear and visually appealing way.</p>
           </div>
        </div>
    );
};

export default BookDetails;