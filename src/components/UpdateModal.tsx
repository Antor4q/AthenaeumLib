import { useForm } from "react-hook-form";
import type { IBook } from "../redux/types/booksInterface";
import { useUpdateBookMutation } from "../redux/api/baseApi";
import { toast } from "react-toastify";

interface UpdateModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  book: IBook;
}

const UpdateModal = ({setIsOpen,book}:UpdateModalProps) => {

    const [updateBook, { isLoading, isError }] = useUpdateBookMutation();
  
    const { register, handleSubmit } = useForm<IBook>({
    defaultValues: {
      title: book.title,
      author: book.author,
      genre: book.genre,
      isbn: book.isbn,
      description: book.description,
      copies: book.copies,
      available: book.available,
    },
  });

  const onSubmit = async (data: IBook) => {
    try {
    await updateBook({ ...data, _id: book._id }).unwrap();
    toast.success("Book updated successfully.");
    setIsOpen(false);
  } catch (error) {
    toast.error("Failed to update book.");
    console.error(error);
  }
  };

    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white rounded-xl md:p-8 p-4 md:w-full md:max-w-lg w-[280px]">
        <h2 className="lg:text-2xl font-bold mb-4">Edit Book</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm lg:text-[16px]">
          {/* Your input fields */}
          <div>
            <label className="block mb-1">Title</label>
            <input {...register("title")} className="w-full border border-gray-300 p-2 rounded" />
          </div>
          <div>
            <label className="block mb-1">Author</label>
            <input {...register("author")} className="w-full border border-gray-300 p-2 rounded" />
          </div>
          <div>
            <label className="block mb-1">Genre</label>
            <input {...register("genre")} className="w-full border border-gray-300 p-2 rounded" />
          </div>
          <div>
            <label className="block mb-1">ISBN</label>
            <input {...register("isbn")} className="w-full border border-gray-300 p-2 rounded" />
          </div>
          <div>
            <label className="block mb-1">Description</label>
            <textarea {...register("description")} className="w-full border border-gray-300 p-2 rounded" />
          </div>
          <div>
            <label className="block mb-1">Copies</label>
            <input
              type="number"
              {...register("copies", { valueAsNumber: true })}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div className="flex justify-end space-x-2">
            <button type="button" onClick={() => setIsOpen(false)} className="bg-gray-500 text-white cursor-pointer px-4 py-2 rounded">
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-green-600 cursor-pointer text-white px-4 py-2 rounded"
            >
              {isLoading ? "Saving..." : "Save"}
            </button>
            
          </div>
          {isError && <p className="text-red-600 mt-2">Failed to update book. Please try again.</p>}
        </form>
      </div>
    </div>
    );
};

export default UpdateModal;