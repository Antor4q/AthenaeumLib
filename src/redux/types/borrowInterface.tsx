interface Pagination {
  totalPages: number,
  page: number,
  limit: number
}
export interface IBBSResponse {
  success: boolean;
  message: string;
  data: IBBookSummaryItem[];
  pagination: Pagination
}

export interface IBBookSummaryItem {
  book: {
    title: string;
    isbn: string;
  };
  totalQuantity: number;
}

export interface IBorrowRequest {
  book: string;    
  quantity: number;
  dueDate: string; 
}


export interface IBorrowItem {
  _id: string;
  book: string;      
  quantity: number;
  dueDate: string;
  createdAt: string;
  updatedAt: string;
}


export interface IBorrowResponse {
  success: boolean;
  message: string;
  data: IBorrowItem;
}

