import React, { FormEvent, useRef } from "react";
import { FieldValue, FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({
  name: z.string().min(3, { message: "should have a3 chars" }),
  age: z.number({ invalid_type_error: "age required" }).min(12),
});

interface FormData {
  name: String;
  age: number;
}
const Form = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwoedRef = useRef<HTMLInputElement>(null);
  const person = { name: "", age: "" };
  const { register, handleSubmit, formState } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  console.log(formState.errors.name?.type);

  //   const handleSubmit = (event: FormEvent) => {
  //     event.preventDefault();

  //     if (usernameRef.current !== null) person.name = usernameRef.current.value;
  //     if (passwoedRef.current !== null) person.age = passwoedRef.current.value;

  //     console.log(person);
  //   };
  const onSubmit = (data: FieldValues) => {
    console.log(data, "a");
  };

  return (
    <div>
      <form>
        <label htmlFor="name" className="form-label">
          user name
        </label>
        <input
          {...register("name")}
          //   ref={usernameRef}
          type="text"
          id="name"
          className="form-control"
        />
        <p className="text-danger"> {formState.errors.name?.message}</p>

        <label htmlFor="password" className="form-label">
          password
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          //   ref={passwoedRef}
          type="number"
          id="age"
          className="form-control"
        />
        <p className="text-danger"> {formState.errors.age?.message}</p>
      </form>
      <button
        onClick={handleSubmit(onSubmit)}
        className="btn btn-primary mt-4"
        type="submit"
      >
        submit
      </button>
    </div>
  );
};

export default Form;
