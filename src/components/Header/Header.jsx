import Button from "../Button/Button";
import Container from "../Container/Container";
import SvgIcon from "../SvgIcon/SvgIcon";
import css from "./Header.module.css";

export default function Header() {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <header className={css.header}>
      <Container>
        <div className={css.header_top}>
          <h1 className={css.header_title}>TODO</h1>
          <Button onClick={handleClick}>
            <SvgIcon name={"icon-moon"} />
          </Button>
        </div>
      </Container>
    </header>
  );
}