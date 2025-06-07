import React, { FormEvent, useRef, useState } from "react";
import { FieldValue, FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({
  name: z.string().min(3, { message: "should have a3 chars" }),
  age: z.number({ invalid_type_error: "age required" }).min(12),
});

interface FormData {
  description: String;
  category: number;
  amount: number;
}
const Form = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwoedRef = useRef<HTMLInputElement>(null);
  const person = { name: "", age: "", amount: "" };
  const { register, handleSubmit, formState } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  //   console.log(formState.errors.name?.type);

  //   const handleSubmit = (event: FormEvent) => {
  //     event.preventDefault();

  //     if (usernameRef.current !== null) person.name = usernameRef.current.value;
  //     if (passwoedRef.current !== null) person.age = passwoedRef.current.value;

  //     console.log(person);
  //   };
  const onSubmit = (data: FieldValues) => {
    console.log(data, "a");
  };
  const [expanded, setExpanded] = useState(false);
  const onToggle = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <form>
        <label htmlFor="name" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          type="text"
          id="description"
          className="form-control"
        />
        <p className="text-danger"> {formState.errors.description?.message}</p>

        <label htmlFor="amount" className="form-label">
          amount
        </label>
        <input type="amount" id="amount" className="form-control" />
        <p className="text-danger"> {formState.errors.amount?.message}</p>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onClick={onToggle}
          >
            Dropdown button
          </button>
          <ul
            className={
              !expanded
                ? "dropdown-menu dropdown-menu-dark"
                : "dropdown-menu-dark"
            }
          >
            <li className="item">Action</li>
          </ul>
        </div>
        <button
          onClick={handleSubmit(onSubmit)}
          className="btn btn-primary mt-4"
          type="submit"
          // disabled={!formState.isValid}
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
