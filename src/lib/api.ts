import api from "@/lib/axios";
import {
	RegisterDto,
	LoginDto,
	CreateUserDto,
	UpdateUserDto,
	CreateTransactionDto,
	UpdateTransactionDto,
	CreateCategoryDto,
	UpdateCategoryDto,
	CreateBudgetDto,
	UpdateBudgetDto,
} from "@/types/interfaces";

// AUTH
export const register = (data: RegisterDto) => api.post("/auth/register", data);
export const login = (data: LoginDto) => api.post("/auth/login", data);

// USER
export const getUsers = () => api.get("/user");
export const getUser = (id: string) => api.get(`/user/${id}`);
export const createUser = (data: CreateUserDto) => api.post("/user", data);
export const updateUser = (id: string, data: UpdateUserDto) => api.put(`/user/${id}`, data);
export const deleteUser = (id: string) => api.delete(`/user/${id}`);

// TRANSACTION
export const getTransactions = () => api.get("/transaction");
export const getTransaction = (id: string) => api.get(`/transaction/${id}`);
export const createTransaction = (data: CreateTransactionDto) => api.post("/transaction", data);
export const updateTransaction = (id: string, data: UpdateTransactionDto) => api.put(`/transaction/${id}`, data);
export const deleteTransaction = (id: string) => api.delete(`/transaction/${id}`);
export const getBalance = (userId: string) => api.get(`/transaction/balance/${userId}`);
export const getSpendingByCategory = (userId: string) => api.get(`/transaction/spending-by-category/${userId}`);

// CATEGORY
export const getCategories = () => api.get("/category");
export const getCategory = (id: string) => api.get(`/category/${id}`);
export const createCategory = (data: CreateCategoryDto) => api.post("/category", data);
export const updateCategory = (id: string, data: UpdateCategoryDto) => api.put(`/category/${id}`, data);
export const deleteCategory = (id: string) => api.delete(`/category/${id}`);

// BUDGET
export const getBudgets = () => api.get("/budget");
export const getBudget = (id: string) => api.get(`/budget/${id}`);
export const createBudget = (data: CreateBudgetDto) => api.post("/budget", data);
export const updateBudget = (id: string, data: UpdateBudgetDto) => api.put(`/budget/${id}`, data);
export const deleteBudget = (id: string) => api.delete(`/budget/${id}`);
export const getBudgetTracking = (userId: string) => api.get(`/budget/tracking/${userId}`);
