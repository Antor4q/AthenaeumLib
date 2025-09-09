export interface IBookCreate {
    title: string,
    author: string,
    genre: string,
    isbn: string,
    description: string,
    copies: number
}
export interface IBook {
    title: string,
    author: string,
    genre: string,
    isbn: string,
    description: string,
    copies: number,
    available: boolean ,
    _id: string
}

interface Pagination {
  totalPages: number,
  page: number,
  limit: number
}

export interface IGetBooksResponse {
  success: boolean;
  message: string;
  data: IBook[];
  pagination: Pagination
}
export interface IGetSingleBook {
  success: boolean;
  message: string;
  data: IBook;
}