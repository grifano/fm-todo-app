import clsx from "clsx";
import css from "./Button.module.css";

export default function Button({ children, onClick, isEdit, isDelete }) {
  const buttonClass = clsx(css.button, {
    [css.isEdit]: isEdit,
    [css.isDelete]: isDelete,
  });
  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}
