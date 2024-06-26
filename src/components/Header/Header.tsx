import { themeIcons } from "../../assets";
import { useTheme } from "../../context/ThemeContext";
import { formatDate } from "../../helpers/formatDate";
import styles from "./styles.module.css";

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header
      className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.info}>
        <h1 className={styles.title}>GOOD MORNING!</h1>
        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>

      <img
        className={styles.image}
        src={isDark ? themeIcons.light : themeIcons.dark}
        width={30}
        alt="theme"
        onClick={toggleTheme}
      ></img>
    </header>
  );
};

export default Header;
