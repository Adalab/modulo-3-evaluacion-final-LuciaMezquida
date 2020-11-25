import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <small className="footer__text">
        Made with{" "}
        <span>
          <i class="fas fa-grin-tears"></i>
        </span>{" "}
        by Lucia Mezquida
      </small>
      <a
        href="https://github.com/LuciaMezquida"
        className="footer__github"
        title="GitHub"
        target="_blank"
      >
        <i class="fab fa-github footer__github--icon"></i>
      </a>
      <a
        href="https://twitter.com/LuciCodes"
        className="footer__twitter"
        title="Twitter"
        target="_blank"
      >
        <i class="fab fa-twitter footer__twitter--icon"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/luciamezquidajuan/"
        className="footer__linkedin"
        title="Linkedin"
        target="_blank"
      >
        <i class="fab fa-linkedin footer__linkedin--icon"></i>
      </a>
    </footer>
  );
};

export default Footer;
