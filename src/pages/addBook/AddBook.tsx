import { useForm } from "react-hook-form";
import type { IBookCreate } from "../../redux/types/booksInterface";
import { useAddBookMutation } from "../../redux/api/baseApi";
import { toast } from "react-toastify";
import bg from "../../../public/bg1.jpg"
import ab from "../../../public/about1.jpg"

const AddBook = () => {
    const [addBook] = useAddBookMutation()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IBookCreate>();

  const onSubmit = async(data: IBookCreate) => {
  
    const bookData = {
      ...data,
      available: true,
    };
   try {
    await addBook(bookData).unwrap();
    toast.success("Book added successfully")
    reset();
  } catch (err) {
    console.error("Add book failed:", err);
    toast.error("Book adding failed. Try again.")
  }
    reset();
  };

  return (
    <div>
       <div style={{backgroundImage: `url(${bg})`}} className={`lg:h-[350px] md:h-[200px] h-[140px] w-full bg-no-repeat bg-cover bg-center relative flex items-center justify-center`}>
                      <div className="absolute w-full z-10 h-full inset-0 opacity-50 bg-black"></div>
                      <div className="z-40 relative ">
                          <h3 className="lg:text-6xl mb-8 text-2xl text-gray-200 font-bold">Add <span className="text-[#ff1616]">Book</span> </h3>
                      </div>
      
                  </div>
    <div className="max-w-7xl mx-auto px-4 lg:py-20 py-10 min-h-screen">
      <div className="grid md:grid-cols-2 md:gap-20 gap-8">
        <div className="col-span-1">
          <div>
            <div>
                 <h3 className="lg:text-6xl text-2xl text-gray-800 font-bold">Expend New Books to <span className="text-[#ff1616]"> That Library</span> </h3>
                <p className="text-gray-600 lg:my-5 my-3 lg:text-[16px] text-sm">Keep your library collection growing and up-to-date with ease. The Add Book feature in AthenaeumLib lets you enter detailed information such as title, author, ISBN, category, and publication details, ensuring every book is properly cataloged and easy to find. Whether you’re expanding your digital archive or updating physical shelves, our platform makes.</p>
                <hr className="w-full h-[3px] col-span-3 md:my-7 my-5 text-gray-400 " />
                <h3 className="md:text-2xl text-xl font-bold text-gray-800 ">Why Adding Books Matters</h3>
                <p className="text-gray-600 lg:my-5 my-3 lg:text-[16px] text-sm">Every new book enriches your library and strengthens the learning journey. By carefully cataloging titles with accurate details, you make it easier for readers to discover, borrow, and enjoy resources without confusion.</p>
               </div>
               <img src={ab} alt="" className="w-full md:h-[300px] h-[200px] md:mt-10 mt-6 rounded-3xl bg-cover bg-no-repeat bg-center" />
          </div>

        </div>
        
      <div className="w-full md:h-[797px] col-span-1 shadow-xl border-b-4 border-b-red-600 md:p-10 p-6 rounded-3xl">
        <h2 className="lg:text-4xl text-2xl font-bold mb-6">Add New Book</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-full text-sm md:text-[16px]">
        
          <div>
            <label className="block mb-1 font-medium">Title</label>
            <input
              type="text"
              {...register("title", { required: "Title is required" })}
              className="w-full border border-gray-300 px-3 py-2 rounded"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>

       
          <div>
            <label className="block mb-1 font-medium">Author</label>
            <input
              type="text"
              {...register("author", { required: "Author is required" })}
              className="w-full border border-gray-300 px-3 py-2 rounded"
            />
            {errors.author && (
              <p className="text-red-500 text-sm">{errors.author.message}</p>
            )}
          </div>

       
          <div>
            <label className="block mb-1 font-medium">Genre</label>
            <select
              {...register("genre", {
                required: "Genre is required",
                validate: (value) =>
                  ["FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"].includes(value) ||
                  "Invalid genre selected",
              })}
              className="w-full border border-gray-300 px-3 py-2 rounded"
              defaultValue=""
            >
              <option value="" disabled>
                Select Genre
              </option>
              <option value="FICTION">FICTION</option>
              <option value="NON_FICTION">NON_FICTION</option>
              <option value="SCIENCE">SCIENCE</option>
              <option value="HISTORY">HISTORY</option>
              <option value="BIOGRAPHY">BIOGRAPHY</option>
              <option value="FANTASY">FANTASY</option>
            </select>
            {errors.genre && (
              <p className="text-red-500 text-sm">{errors.genre.message}</p>
            )}
          </div>

        
          <div>
            <label className="block mb-1 font-medium">ISBN</label>
            <input
              type="text"
              {...register("isbn", { required: "ISBN is required" })}
              className="w-full border border-gray-300 px-3 py-2 rounded"
            />
            {errors.isbn && (
              <p className="text-red-500 text-sm">{errors.isbn.message}</p>
            )}
          </div>

       
          <div>
            <label className="block mb-1 font-medium">Copies</label>
            <input
              type="number"
              {...register("copies", {
                required: "Number of copies is required",
                min: { value: 1, message: "Minimum 1 copy required" },
              })}
              className="w-full border border-gray-300 px-3 py-2 rounded"
            />
            {errors.copies && (
              <p className="text-red-500 text-sm">{errors.copies.message}</p>
            )}
          </div>

         
          <div>
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              rows={4}
              className="w-full border border-gray-300 px-3 py-2 rounded"
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#ff1616] cursor-pointer text-white px-5 py-2 rounded hover:bg-red-600"
          >
            {isSubmitting ? "Adding..." : "Add Book"}
          </button>
        </form>
      </div>
      </div>
    </div>
    </div>
  );
};

export default AddBook;
