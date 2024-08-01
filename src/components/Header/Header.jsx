import { useState } from "react";
import Button from "../Button/Button";
import Container from "../Container/Container";
import SvgIcon from "../SvgIcon/SvgIcon";
import css from "./Header.module.css";

export default function Header({ onThemeSwitch }) {
  const [iconTheme, setIconTheme] = useState("icon-moon");
  const handleThemeClick = () => {
    onThemeSwitch();
    iconTheme === "icon-moon"
      ? setIconTheme("icon-sun")
      : setIconTheme("icon-moon");
  };
  return (
    <header className={css.header}>
      <Container>
        <div className={css.header_top}>
          <h1 className={css.header_title}>TODO</h1>
          <Button onClick={handleThemeClick}>
            <SvgIcon name={iconTheme} />
          </Button>
        </div>
      </Container>
    </header>
  );
}
