import { STATIC_DATA } from "../utils/staticData";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#282c34",
        color: "white",
        padding: "15px",
        marginTop: "20px",
      }}
    >
      <p>{STATIC_DATA.footer.copyright}</p>
    </footer>
  );
}

export default Footer;
