import { FaArrowLeft, FaArrowRight, FaEdit } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { MdDeleteForever } from "react-icons/md";
import { useDeleteBookMutation, useGetBooksQuery } from "../redux/api/baseApi";
import { Link, useLocation } from "react-router";
import { useEffect, useState } from "react";
import UpdateModal from "./UpdateModal";
import type { IBook } from "../redux/types/booksInterface";
import { toast } from "react-toastify";
import BorrowModal from "../pages/borrowSummary/BorrowModal";

const AllBooks = () => {
  const [page,setPage] = useState(1)
  const limit = 5
const [isOpen, setIsOpen] = useState(false)
const [isBorrowOpen,setIsBorrowOpen] = useState(false)
const [selectedBook,setSelectedBook] = useState<IBook>()
const [selectedBorrowId,setSelectedBorrowId] = useState<string>()
const [deleteId, setDeleteId] = useState<string | null>(null);

const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);


  const { data, isLoading, isError } = useGetBooksQuery({page,limit}); 
  const books = data?.data || [];
  const totalPages = data?.pagination?.totalPages || 1
  console.log(totalPages)

  const [deleteBook] = useDeleteBookMutation();

  

  if (isLoading) return <p className="text-center py-10">Loading books...</p>;
  if (isError) return <p className="text-center py-10 text-red-600">Failed to load books.</p>;

  const handleDelete = async(id:string) => {
  setDeleteId(id);
  }

  const confirmDelete = async () => {
  if (!deleteId) return;

  try {
    await deleteBook(deleteId).unwrap();
    toast.success("Book deleted successfully!");
    setDeleteId(null);
  } catch (err) {
    console.error(err);
    toast.error("Failed to delete book.");
  }
};





    return (
      <div className="bg-[#f7f7f7] mt-10">

        <div id="all-books" className="max-w-7xl mx-auto px-4 lg:py-16 py-8">
             <h3 className="lg:text-6xl text-2xl text-gray-800 font-bold">Discover Your Next <span className="text-[#ff1616]">Book</span> </h3>
             <div className=" p-8 mt-6 w-full rounded-3xl border-b-4 border-b-[#ff1616] bg-[#f8f0f0]">
              <div className="overflow-scroll lg:overflow-hidden">

              <table className="w-full p-5 mt-6 text-left rounded-2xl border border-gray-300">
                <thead className="bg-gray-100 ">
                    <tr className="text-sm lg:text-[16px]">
                        <th className="px-4 py-2">Title</th>
                        <th className="px-4 py-2">Author</th>
                        <th className="px-4 py-2">Genre</th>
                        <th className="px-4 py-2">ISBN</th>
                        <th className="px-4 py-2">Copies</th>
                        <th className="px-4 py-2">Availability</th>
                        <th className="px-4 py-2">Action</th>
                        <th className="px-4 py-2">Action</th>
                        <th className="px-4 py-2">Action</th>
                        <th className="px-4 py-2">Action</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                    {books.map(book => (
                        <tr key={book._id} className="border-t lg:text-[16px] text-sm">
                        <td className="px-4 py-2">{book.title}</td>
                        <td className="px-4 py-2">{book.author}</td>
                        <td className="px-4 py-2">{book.genre}</td>
                        <td className="px-4 py-2">{book.isbn}</td>
                        <td className="px-4 py-2">{book.copies}</td>
                        <td className="px-4 py-2">{book.available === true ? "Available": "Unavailable"}</td>
                        <td className="px-4 py-2 space-x-2">
                           <Link to={`/books/${book._id}`} className="cursor-pointer">
                            <button  className="bg-[#ed625e] px-2 py-1 rounded-2xl  text-white font-medium cursor-pointer"><LuEye /></button>
                           </Link>
                          
                            
                        </td>
                        <td className="px-4 py-2 space-x-2">
                            <button onClick={() => {
                                    setSelectedBook(book);
                                    setIsOpen(true);
                                }} className="bg-[#ed625e] px-2 py-1 rounded-2xl  text-white font-medium cursor-pointer"><FaEdit /></button>
                            
                        </td>
                        <td className="px-4 py-2 space-x-2">
                            <button
                                onClick={() => handleDelete(book._id)}
                                className="bg-red-600 px-2 py-1 rounded-2xl text text-white font-medium cursor-pointer"
                            >
                                <MdDeleteForever />
                            </button>
                            </td>

                        <td className="px-4 py-2 space-x-2">
                          <button
                            disabled={!book.available}
                            onClick={() => {
                              setSelectedBorrowId(book._id);
                              setIsBorrowOpen(true);
                            }}
                            className={`${
                              !book.available ? "bg-gray-500" : "bg-green-600"
                            } px-2 py-1 rounded-2xl text-sm text-white font-medium cursor-pointer`}
                          >
                            Borrow
                          </button>

                            
                        </td>
                        </tr>
                    ))}
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
                   <FaArrowRight/>
                  </button>
                </div>
             </div>
             {isOpen && selectedBook && (
                <UpdateModal book={selectedBook} setIsOpen={setIsOpen} />
                )}

               {/* delete modal */}
               {deleteId && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
                        <div className="bg-white rounded-xl p-8 flex flex-col justify-center items-center md:w-full md:max-w-md w-[280px]">
                        <h3 className="md:text-xl font-semibold text-black mb-4">
                            Are you sure you want to delete this book?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <button
                            onClick={() => setDeleteId(null)}
                            className="bg-gray-500 cursor-pointer text-white text-sm md:text-[16px] font-medium py-2 px-4 rounded"
                            >
                            Cancel
                            </button>
                            <button
                            onClick={confirmDelete}
                            className="bg-red-600 cursor-pointer text-white text-sm md:text-[16px] font-medium py-2 md:px-4 px-2 rounded"
                            >
                            Confirm Delete
                            </button>
                        </div>
                        </div>
                    </div>
                    )}

                    {/* borrow a book */}
                    {isBorrowOpen && selectedBorrowId && (
                      <BorrowModal
                        setIsBorrowOpen={setIsBorrowOpen}
                        bookId={selectedBorrowId}
                      />
                    )}



        </div>
      </div>
    );
};

export default AllBooks;