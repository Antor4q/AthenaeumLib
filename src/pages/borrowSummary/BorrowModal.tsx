import { useForm } from "react-hook-form";
import { useBorrowBookMutation } from "../../redux/api/baseApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

interface BorrowModalProps {
  setIsBorrowOpen: (open: boolean) => void;
  bookId: string;
}

interface BorrowFormValues {
  quantity: number;
  dueDate: string;
}

const BorrowModal = ({ setIsBorrowOpen, bookId }: BorrowModalProps) => {
  const {reset, register, handleSubmit, formState: { errors } } = useForm<BorrowFormValues>();
  const navigate = useNavigate()
  const [borrowBook] = useBorrowBookMutation()

  function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
  return typeof error === "object" && error != null && "status" in error;
}

  const onSubmit = async(data: BorrowFormValues) => {
    const payload = {
      book: bookId, 
      quantity: Number(data.quantity),
      dueDate: data.dueDate,
    };

     try {
        await borrowBook(payload).unwrap();
        toast.success("Book Borrowed successfully")
        reset();
        setIsBorrowOpen(false)
        navigate("/borrowSummary")
      } catch (err:unknown) {
       let errorMessage = "An unexpected error occurred";

  if (isFetchBaseQueryError(err)) {
    const errMsg =
      "data" in err ? (err.data as { message?: string })?.message : undefined;
    if (errMsg) errorMessage = errMsg;
  } else if (err instanceof Error) {
    errorMessage = err.message;
  }
       
        toast.error(`${errorMessage}. Please try again`);
      }

  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-xl p-6 md:w-full md:max-w-md w-[280px]">
        <h2 className="md:text-xl text-[18px] font-bold mb-4">Borrow Book</h2>
       

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm md:text-[16px]">
       
          <div>
            <label className="block mb-1 font-medium">Quantity</label>
            <input
              type="number"
              min={1}
              {...register("quantity", { required: "Quantity is required", min: 1 })}
              className="border p-2 w-full rounded"
            />
            {errors.quantity && (
              <p className="text-red-500 text-sm">{errors.quantity.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Due Date</label>
            <input
              type="date"
              {...register("dueDate", { required: "Due date is required" })}
              className="border p-2 w-full rounded"
            />
            {errors.dueDate && (
              <p className="text-red-500 text-sm">{errors.dueDate.message}</p>
            )}
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={() => setIsBorrowOpen(false)}
              className="bg-gray-500 text-white px-4 py-2 cursor-pointer rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-600 text-white cursor-pointer px-4 py-2 rounded"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BorrowModal;
