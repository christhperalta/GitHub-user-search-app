import { useContext } from "react";
import Icon from "./Icon";
import { ThemeContext } from "../provider/ThemeContext";

export default function Header() {
  const { theme, handleToggle } = useContext(ThemeContext);

  return (
    <header className='Header'>
      <Logo />
      <ThemeButton theme={theme} onClickToggle={handleToggle} />
    </header>
  );
}

function Logo() {
  return <h1 className='Header-logo'>devfinder</h1>;
}

function ThemeButton({ theme, onClickToggle }) {
  return (
    <button className='Header-button' onClick={() => onClickToggle()}>
      <span>{theme ? "LIGHT" : "DARK"}</span>
      {theme ? <Icon name='sun' /> : <Icon name='moon' />}
    </button>
  );
}
