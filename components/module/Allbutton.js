import Link from "next/link";
import styles from "./Allbutton.module.css";

function Allbutton() {
  return (
    <div className={styles.container}>
      <Link href="/cars">See all cars</Link>
    </div>
  );
}

export default Allbutton;
