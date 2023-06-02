import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";

export const Form: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, pattern: /^[A-Za-z]+$/i, maxLength: 20 })} />
      <input {...register("email", { required: true })} />
      <input type="number" {...register("phone", { min: 18, max: 99 })} />
      <input {...register("address")} />
      <input type="submit" />
    </form>
  );
}
