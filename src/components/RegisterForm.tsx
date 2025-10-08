"use client";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

interface RegisterFormInputs {
  name: string;
  email: string;
  password: string;
}

export default function RegisterForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormInputs>();

  const onSubmit = (data: RegisterFormInputs) => {
    // TODO: Call API
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-zinc-900 p-6 rounded-lg shadow-lg">
      <input {...register('name', { required: true })} placeholder="Name" className="w-full p-2 rounded bg-zinc-800 text-white" />
      {errors.name && <span className="text-red-400">Name is required</span>}
      <input {...register('email', { required: true })} placeholder="Email" type="email" className="w-full p-2 rounded bg-zinc-800 text-white" />
      {errors.email && <span className="text-red-400">Email is required</span>}
      <input {...register('password', { required: true })} placeholder="Password" type="password" className="w-full p-2 rounded bg-zinc-800 text-white" />
      {errors.password && <span className="text-red-400">Password is required</span>}
      <Button type="submit" className="w-full">Register</Button>
    </form>
  );
}
