import React from "react";
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";

import styles from "./styles.module.css";

function Header() {
  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
        <Link className={styles.logo} href="/">
          <FaPlayCircle /> AKİNON
        </Link>
        <nav className={styles.navigationMenu}>
          <Link href="/filmler">FİLM</Link>
          <Link href="/diziler">DİZİ</Link>
          <Link href="/cizgi-film">ÇOCUK</Link>
        </nav>
      </div>
    </header>
  );
}

export { Header };
