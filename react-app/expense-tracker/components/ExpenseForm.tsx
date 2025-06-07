import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "./../categories";

const schema = z.object({
  description: z
    .string()
    .min(2, { message: "Description should be at least 2 characters" })
    .max(12, { message: "Description must be under 12 characters" }),
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .min(2, { message: "Amount must be at least 2" })
    .max(23, { message: "Amount must be at most 23" }),
  category: z.enum([...categories] as [string, ...string[]], {
    errorMap: () => ({
      message: "Category is required",
    }),
  }),
});

interface FormData {
  description: string;
  category: string;
  amount: number;
}

interface Props {
  onSubmit: (data: FormData) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <div
      className="container"
      style={{
        border: "2px solid #f4f4f4",
        marginBottom: "12px",
        padding: "12px",
        borderRadius: "12px",
      }}
    >
      <p>Add new</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label" htmlFor="description">
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
          />
          <p className="text-danger">{errors.description?.message}</p>
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="amount">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className="form-control"
          />
          <p className="text-danger">{errors.amount?.message}</p>
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="category">
            Category
          </label>
          <select
            {...register("category")}
            className="form-select"
            id="category"
          >
            <option value="">Select a category</option>
            {categories.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select>
          <p className="text-danger">{errors.category?.message}</p>
        </div>

        <button type="submit" className="btn btn-primary my-4">
          Add
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
