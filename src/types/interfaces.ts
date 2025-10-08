// Auth
export interface RegisterDto {
  email: string;
  password: string;
  name: string;
}
export interface LoginDto {
  email: string;
  password: string;
}

// User
export interface CreateUserDto {
  email: string;
  password: string;
  name: string;
}
export interface UpdateUserDto {
  email?: string;
  password?: string;
  name?: string;
}

// Transaction
export interface CreateTransactionDto {
  userId: string;
  categoryId: string;
  amount: number;
  type: string; // 'income' | 'expense'
  description?: string;
  date?: string;
}
export interface UpdateTransactionDto {
  userId?: string;
  categoryId?: string;
  amount?: number;
  type?: string;
  description?: string;
  date?: string;
}

// Category
export interface CreateCategoryDto {
  name: string;
  color?: string;
}
export interface UpdateCategoryDto {
  name?: string;
  color?: string;
}

// Budget
export interface CreateBudgetDto {
  userId: string;
  categoryId: string;
  amount: number;
  startDate: string;
  endDate: string;
}
export interface UpdateBudgetDto {
  userId?: string;
  categoryId?: string;
  amount?: number;
  startDate?: string;
  endDate?: string;
}
