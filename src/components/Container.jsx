import { useContext } from "react";
import { ThemeContext } from "../provider/ThemeContext";


export default function Container({ children }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`Container ${theme ? "theme-dark" : "theme-light"}`}>
      {children}
    </div>
  );
}
