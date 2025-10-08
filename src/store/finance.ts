import { create } from 'zustand';
import { Transaction, Category, Budget } from '@/types/models';

interface FinanceState {
  transactions: Transaction[];
  categories: Category[];
  budgets: Budget[];
  setTransactions: (txs: Transaction[]) => void;
  setCategories: (cats: Category[]) => void;
  setBudgets: (budgets: Budget[]) => void;
}

export const useFinanceStore = create<FinanceState>((set) => ({
  transactions: [],
  categories: [],
  budgets: [],
  setTransactions: (transactions) => set({ transactions }),
  setCategories: (categories) => set({ categories }),
  setBudgets: (budgets) => set({ budgets }),
}));
