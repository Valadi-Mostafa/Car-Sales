import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>Car Sales</h2>
          <p>choose and buy your car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        Next.js project | Car sales by{" "}
        <a href="https://github.com/Valadi-Mostafa" target="_blank">
          Mostafa
        </a>{" "}
        &copy;
      </footer>
    </>
  );
}

export default Layout;
