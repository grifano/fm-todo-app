import Container from "../Container/Container";
import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <Container>
        <div className={css.footer_flex}>
          <div className={css.footer_col}>
            <p>Thank you </p>
            <img
              src="https://www.synebo.io/uploads/2023/09/logo.svg"
              alt="synebo logo"
              width="93"
              height="28"
            />
            <p>for interesting task. </p>
          </div>
          <p>Looking forward to get more 😉</p>
          <p>
            Find me at{" "}
            <a
              className={css.footer_link}
              href="https://www.linkedin.com/in/grifano/"
            >
              Linkedin
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
