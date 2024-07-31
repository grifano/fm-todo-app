import { Formik, Form, Field } from "formik";
import css from "./InputBox.module.css";

export default function InputBox({ onSubmit }) {
  const initialTask = {
    id: "",
    text: "",
    isCompleted: false,
  };

  const handleSubmit = (newTask) => {
    onSubmit(newTask);
  };

  return (
    <Formik initialValues={initialTask} onSubmit={handleSubmit}>
      <Form className={css.inputBox}>
        <Field
          className={css.inputBox_field}
          type="text"
          name="text"
          placeholder="Create a new todo…"
        />
      </Form>
    </Formik>
  );
}
