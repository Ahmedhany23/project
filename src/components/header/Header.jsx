import { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  const [model, setModel] = useState(false);
  const [theme, settheme] = useState(localStorage.getItem("currentMode"));
  const [SM, setSM] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("light", theme === "light");
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);
  return (
    <header className="flex">
      <button
        className="model icon-menu flex"
        onClick={() => {
          setModel(true);
        }}
      />
      <div />
      <ul className="menu">
        <li>
          <a href="">About</a>
        </li>

        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact us</a>
        </li>
        <li>
              <a href="/AhmedHanyCv.pdf">Cv</a>
            </li>
      </ul>

      <button
        className="mode flex"
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );

          settheme(localStorage.getItem("currentMode"));
          setSM(SM === false ? true : false);
        }}
      >
        {SM ? (
          <span className="icon-sun" style={{ color: "orange" }}>
            {" "}
          </span>
        ) : (
          <span className="icon-moon-o"> </span>
        )}
      </button>
      {model && (
        <div className="menu_res">
          <ul>
            <li>
              <button
                className="menu_close icon-clear"
                onClick={() => {
                  setModel(false);
                }}
              />
            </li>
            <li>
              <a href="">About</a>
            </li>

            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact us</a>
            </li>
            <li>
              <a href="/AhmedHanyCv.pdf">Cv</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
