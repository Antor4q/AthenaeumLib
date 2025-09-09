import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/home/Home";
import BookDetails from "../pages/bookDetail/BookDetails";
import AddBook from "../pages/addBook/AddBook";
import BorrowSummary from "../pages/borrowSummary/BorrowSummary";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: "/books/:bookId",
          element: <BookDetails/>
        },
        {
          path: "addBook",
          element:<AddBook/>
        },
        {
          path: "borrowSummary",
          element: <BorrowSummary/>
        }
    ]
  },
]);