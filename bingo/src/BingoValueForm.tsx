import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

interface BingoValueFormProps {
  onAddValue: (values: string[]) => void;
}

const BingoValueForm: React.FC<BingoValueFormProps> = ({ onAddValue }) => {
  const formik = useFormik({
    initialValues: {
      value: "",
    },
    validationSchema: Yup.object({
      value: Yup.string().required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      const newValues = values.value
        .split(",")
        .map((value) => value.trim())
        .filter((value) => value);
      onAddValue(newValues);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="value">Bingo Values (separate with commas)</label>
      <input
        id="value"
        name="value"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.value}
      />
      {formik.errors.value ? <div>{formik.errors.value}</div> : null}
      <button type="submit">Add Values</button>
    </form>
  );
};

export default BingoValueForm;
