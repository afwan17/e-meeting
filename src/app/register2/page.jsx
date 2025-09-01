"use client"; // Menggunakan komponen ini sebagai Client Component

import React, { useState } from "react";
import Image from "next/image";

// Pastikan jalur gambar di sini benar, sesuaikan dengan struktur proyek Anda
// import logo from "./logo.png"; // Ganti dengan path logo E-Meeting Anda
import background from "../../../public/background.png"; // Ganti dengan path gambar latar belakang

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    position: "relative",
    overflow: "hidden",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -1,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: 0,
  },
  registerCard: {
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    width: "400px",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "transform 0.3s ease-in-out",
  },
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  logo: {
    backgroundColor: "#ff6600",
    color: "white",
    padding: "8px",
    borderRadius: "50%",
    marginRight: "10px",
    fontWeight: "bold",
    fontSize: "24px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
  },
  greeting: {
    textAlign: "center",
    marginBottom: "20px",
  },
  welcomeText: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "5px",
  },
  welcomeSubtitle: {
    fontSize: "14px",
    color: "#666",
  },
  form: {
    width: "100%",
  },
  inputGroup: {
    marginBottom: "20px",
  },
  label: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#555",
    marginBottom: "5px",
    display: "block",
  },
  inputWrapper: {
    position: "relative",
  },
  input: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    boxSizing: "border-box",
    paddingRight: "40px", // Ruang untuk ikon
  },
  icon: {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    color: "#999",
  },
  footer: {
    marginTop: "20px",
    textAlign: "center",
  },
  footerText: {
    fontSize: "14px",
    color: "#666",
  },
  footerLink: {
    fontSize: "14px",
    color: "#ff6600",
    textDecoration: "none",
    marginLeft: "5px",
    fontWeight: "bold",
  },
  registerButton: {
    width: "100%",
    padding: "15px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#ff6600",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Fungsi untuk mengubah status tampil/sembunyikan kata sandi
  const togglePasswordVisibility = (setter) => {
    setter((prev) => !prev);
  };

  return (
    <div style={styles.container}>
      {/* Gambar latar belakang */}
      <Image
        src={background}
        alt="Latar belakang ruang meeting"
        fill
        style={styles.backgroundImage}
        priority
      />

      {/* Overlay untuk membuat form lebih menonjol */}
      <div style={styles.overlay}></div>

      {/* Kontainer kartu register */}
      <div style={styles.registerCard}>
        {/* Header E-Meeting */}
        <div style={styles.header}>
          <div style={styles.logo}>E</div>
          <span style={styles.title}>E-Meeting</span>
        </div>

        {/* Salam selamat datang */}
        <div style={styles.greeting}>
          <h2 style={styles.welcomeText}>Welcome Back!</h2>
          <p style={styles.welcomeSubtitle}>Create your account here!</p>
        </div>

        {/* Formulir register */}
        <form style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="username" style={styles.label}>
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>
              Password
            </label>
            <div style={styles.inputWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Password"
                style={styles.input}
              />
              <span
                style={styles.icon}
                onClick={() => togglePasswordVisibility(setShowPassword)}
              >
                {/* Menggunakan emoji sebagai ikon mata terbuka/tertutup */}
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </span>
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="confirmPassword" style={styles.label}>
              Confirm Password
            </label>
            <div style={styles.inputWrapper}>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                style={styles.input}
              />
              <span
                style={styles.icon}
                onClick={() => togglePasswordVisibility(setShowConfirmPassword)}
              >
                {/* Menggunakan emoji sebagai ikon mata terbuka/tertutup */}
                {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
              </span>
            </div>
          </div>

          <button type="submit" style={styles.registerButton}>
            Create Account
          </button>
        </form>

        {/* Tautan untuk login jika sudah memiliki akun */}
        <div style={styles.footer}>
          <span style={styles.footerText}>Already have an account?</span>
          <a href="/login" style={styles.footerLink}>
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
