"use client";
import styles from "./Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <span className={styles.logoIcon}>E</span>
        <h2>Room Reservation</h2>
      </div>
      <div className={styles.profile}>
        <div className={styles.userInfo}>
          <span>John Doe</span>
          <small>User</small>
        </div>
        <Image
          src="https://i.pravatar.cc/40"
          alt="profile"
          width={40}
          height={40}
          className={styles.avatar}
        />
      </div>
    </div>
  );
}
