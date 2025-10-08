import ExpensesChart from "@/components/ExpensesChart";
import RegisterForm from "@/components/RegisterForm";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row gap-8 items-center justify-center min-h-screen p-8 bg-background text-foreground">
      <section className="w-full max-w-md">
        <h1 className="text-4xl font-bold mb-4">Welcome to Personal Finances</h1>
        <p className="mb-8 text-lg text-muted-foreground">Track your expenses, budgets, and more.</p>
        <RegisterForm />
      </section>
      <section className="w-full max-w-lg">
        <ExpensesChart />
      </section>
    </main>
  );
}
