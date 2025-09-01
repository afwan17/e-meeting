"use client";
import styles from "./Sidebar.module.css";
import { Home, Calendar, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.menu}>
        <button className={styles.menuItem}>
          <Home size={20} />
        </button>
        <button className={`${styles.menuItem} ${styles.active}`}>
          <Calendar size={20} />
        </button>
        <button className={styles.menuItem}>
          <Settings size={20} />
        </button>
      </div>
    </div>
  );
}
