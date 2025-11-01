import "./footer.css";

const users = [
  {
    name: "Decode",
    imageUrl:
      "data:image/png;base64,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",
  },
  {
    name: "Ftc",
    imageUrl: "",
  },
  {
    name: "Technonatura",
    imageUrl: "",
  },
  {
    name: "IFR",
    imageUrl: "",
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-logos">
          {users.map((user, index) => (
            <img
              className="avatar"
              src={user.imageUrl}
              alt={"Photo of " + user.name}
              style={{
                objectFit: "contain",
              }}
            />
          ))}
        </div>

        <div className="footer-team">
          <span>#21575</span>
        </div>
      </div>

      <div className="footer-social">
        <a href="https://www.instagram.com/ftc_go2steam/" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-instagram"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
          </svg>
        </a>
        <a href="https://www.youtube.com/@go2steam" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-youtube"
            viewBox="0 0 16 16"
          >
            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
          </svg>
        </a>
        <a href="https://www.tiktok.com/@go2steam" target="blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-tiktok"
            viewBox="0 0 16 16"
          >
            <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
          </svg>
        </a>
      </div>

      <p class="footer-text">
        © 2025 FTC Go2Steam. All rights reserved. FIRST Logos, Centerstage
        Logos, and FIRST Tech Challenge Logo are the property of FIRST.
      </p>
    </footer>
  );
};
export default Footer;
