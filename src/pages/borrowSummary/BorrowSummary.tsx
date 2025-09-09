import { useState } from "react";
import { useGetBorrowBooksQuery } from "../../redux/api/baseApi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import bg from "../../../public/bg1.jpg"

const BorrowSummary = () => {
  const [page,setPage] = useState(1);
  const limit = 10;
  const { data, isLoading, isError } = useGetBorrowBooksQuery({page,limit});
 
  const books = data?.data || [];
  const totalPages = data?.pagination?.totalPages || 1;

  if (isLoading)
    return <p className="text-center py-10">Loading books...</p>;

  if (isError)
    return (
     <div className="bg-white w-screen h-screen">
       <p className="text-center h-screen py-10 text-red-600">
        Failed to load books.
      </p>
     </div>
    );

  return (
    <div>
       <div style={{backgroundImage: `url(${bg})`}} className={`lg:h-[350px] md:h-[200px] h-[140px] w-full bg-no-repeat bg-cover bg-center relative flex items-center justify-center`}>
                <div className="absolute w-full z-10 h-full inset-0 opacity-50 bg-black"></div>
                <div className="z-40 relative ">
                    <h3 className="lg:text-6xl mb-8 text-2xl text-gray-200 font-bold">Borrow <span className="text-[#ff1616]">Summary</span> </h3>
                </div>

            </div>
    <div className="max-w-7xl mx-auto lg:py-20 py-10 px-4">
      <h3 className="lg:text-6xl mb-8 text-2xl text-gray-800 font-bold">Stay Updated with Your<br/><span className="text-[#ff1616]">Borrowed Books</span> </h3>
     

      <div className="overflow-x-auto border border-b-4 border-b-red-600 rounded-3xl shadow">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 md:text-left text-start text-sm md:text-[16px]">
              <th className="p-3 border-b">Book Title</th>
              <th className="p-3 border-b">ISBN</th>
              <th className="p-3 border-b text-right">
                Total Quantity Borrowed
              </th>
            </tr>
          </thead>
          <tbody>
            {books.length > 0 ? (
              books.map((book, index) => (
                <tr
                  key={index}
                  className="text-sm md:text-[16px]"
                >
                  <td className="p-3 border-b">{book?.book?.title}</td>
                  <td className="p-3 border-b">{book?.book?.isbn}</td>
                  <td className="p-3 border-b text-right">
                   {book?.totalQuantity}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={3}
                  className="p-4 text-center text-gray-500"
                >
                  No borrowed books found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
       <div className="flex justify-center items-center gap-2 mt-6">

                  <button
                    disabled={page === 1}
                    onClick={() => setPage(prev => prev - 1)}
                    className={`px-3 py-2 rounded cursor-pointer ${
                      page === 1 ? "bg-gray-300 text-gray-600" : "bg-red-400 text-white"
                    }`}
                  >
                   <FaArrowLeft />
                  </button>

                  {Array.from({ length: totalPages }, (_, index) => index + 1).map((pg) => (
                    <button
                      key={pg}
                      onClick={() => setPage(pg)}
                      className={`px-3 py-1 rounded cursor-pointer ${
                        page === pg
                          ? "bg-red-500 text-white font-bold" 
                          : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                      }`}
                    >
                      {pg}
                    </button>
                  ))}

                  <button
                    disabled={page === totalPages}
                    onClick={() => setPage(prev => prev + 1)}
                    className={`px-3 py-2 rounded cursor-pointer ${
                      page === totalPages ? "bg-gray-300 text-gray-600" : "bg-red-400 text-white"
                    }`}
                  >
                    <FaArrowRight />
                  </button>
        </div>
    </div>
    </div>
  );
};

export default BorrowSummary;
