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
    <div className='Header-div'>
      <button className='Header-button' onClick={() => onClickToggle()}>
        {theme ? "LIGHT" : "DARK"}
      </button>
      {theme ? <Icon name='sun' /> : <Icon name='moon' />}
    </div>
  );
}
