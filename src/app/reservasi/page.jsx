"use client"; // Menggunakan komponen ini sebagai Client Component

import React, { useState } from "react";
import Image from "next/image";

// Asumsikan path gambar sudah tersedia di proyek Anda
// import background from './background.png';
// import profileImage from './profile.png';

// Data dummy untuk tampilan
const dummyRooms = [
  {
    id: 1,
    name: "Aster Room",
    type: "Small",
    capacity: 10,
    price: "500.000",
    image: "https://placehold.co/400x250/E0E0E0/white?text=Room+Image",
  },
  {
    id: 2,
    name: "Aster Room",
    type: "Small",
    capacity: 10,
    price: "500.000",
    image: "https://placehold.co/400x250/E0E0E0/white?text=Room+Image",
  },
  {
    id: 3,
    name: "Aster Room",
    type: "Small",
    capacity: 10,
    price: "500.000",
    image: "https://placehold.co/400x250/E0E0E0/white?text=Room+Image",
  },
  {
    id: 4,
    name: "Aster Room",
    type: "Small",
    capacity: 10,
    price: "500.000",
    image: "https://placehold.co/400x250/E0E0E0/white?text=Room+Image",
  },
  {
    id: 5,
    name: "Aster Room",
    type: "Small",
    capacity: 10,
    price: "500.000",
    image: "https://placehold.co/400x250/E0E0E0/white?text=Room+Image",
  },
  {
    id: 6,
    name: "Aster Room",
    type: "Small",
    capacity: 10,
    price: "500.000",
    image: "https://placehold.co/400x250/E0E0E0/white?text=Room+Image",
  },
  {
    id: 7,
    name: "Aster Room",
    type: "Small",
    capacity: 10,
    price: "500.000",
    image: "https://placehold.co/400x250/E0E0E0/white?text=Room+Image",
  },
  {
    id: 8,
    name: "Aster Room",
    type: "Small",
    capacity: 10,
    price: "500.000",
    image: "https://placehold.co/400x250/E0E0E0/white?text=Room+Image",
  },
];

const styles = {
  container: {
    display: "flex",
    fontFamily: "sans-serif",
    backgroundColor: "#F5F5F5",
    minHeight: "100vh",
  },
  sidebar: (isCollapsed) => ({
    width: isCollapsed ? "80px" : "250px",
    backgroundColor: "white",
    padding: "20px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "width 0.3s ease",
    position: "sticky",
    top: 0,
    height: "100vh",
    overflowY: "auto",
  }),
  sidebarHeader: {
    marginBottom: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  sidebarLogo: {
    backgroundColor: "#ff6600",
    color: "white",
    padding: "8px",
    borderRadius: "50%",
    fontWeight: "bold",
    fontSize: "24px",
  },
  sidebarItem: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: "15px 20px",
    cursor: "pointer",
    color: "#333",
  },
  sidebarItemActive: {
    borderLeft: "4px solid #ff6600",
    backgroundColor: "#FFF0E5",
    color: "#ff6600",
  },
  mainContent: {
    flexGrow: 1,
    padding: "20px 40px",
    display: "flex",
    flexDirection: "column",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  pageTitle: {
    fontSize: "28px",
    fontWeight: "bold",
  },
  profileSection: {
    display: "flex",
    alignItems: "center",
  },
  profileImage: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    marginRight: "10px",
  },
  profileName: {
    fontWeight: "bold",
    marginRight: "5px",
  },
  profileRole: {
    fontSize: "12px",
    color: "#888",
  },
  searchAndFilter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
    flexWrap: "wrap",
    gap: "15px",
  },
  filterGroup: {
    display: "flex",
    flexGrow: 1,
    gap: "10px",
    flexWrap: "wrap",
  },
  searchInput: {
    flexGrow: 1,
    padding: "12px 15px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "16px",
    minWidth: "200px",
  },
  selectFilter: {
    padding: "12px 15px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "16px",
    backgroundColor: "white",
  },
  searchButton: {
    padding: "12px 25px",
    backgroundColor: "#ff6600",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  addButton: {
    padding: "12px 25px",
    backgroundColor: "#ff6600",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  roomGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "20px",
  },
  roomCard: {
    backgroundColor: "white",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    position: "relative",
  },
  roomImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  roomTag: {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "#ff6600",
    color: "white",
    padding: "5px 10px",
    borderRadius: "10px",
    fontSize: "12px",
    fontWeight: "bold",
  },
  roomDetails: {
    padding: "15px",
  },
  roomName: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  roomInfo: {
    display: "flex",
    alignItems: "center",
    marginBottom: "5px",
    color: "#666",
  },
  roomInfoIcon: {
    marginRight: "5px",
  },
  roomPrice: {
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
    fontWeight: "bold",
    color: "#333",
  },
  icon: {
    width: "20px",
    height: "20px",
    marginRight: "10px",
  },
};

const RoomReservationPage = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar(isSidebarCollapsed)}>
        <div style={styles.sidebarHeader}>
          <div style={styles.sidebarLogo}>E</div>
        </div>
        <div style={styles.sidebarMenu}>
          {/* Menggunakan ikon sederhana (emoji atau SVG) sebagai placeholder */}
          <div style={{ ...styles.sidebarItem, ...styles.sidebarItemActive }}>
            <span style={styles.icon}>🏠</span>{" "}
            {!isSidebarCollapsed && "Dashboard"}
          </div>
          <div style={styles.sidebarItem}>
            <span style={styles.icon}>📅</span>{" "}
            {!isSidebarCollapsed && "My Booking"}
          </div>
          <div style={styles.sidebarItem}>
            <span style={styles.icon}>⚙️</span>{" "}
            {!isSidebarCollapsed && "Settings"}
          </div>
          <div style={styles.sidebarItem} onClick={toggleSidebar}>
            <span style={styles.icon}>↔️</span>{" "}
            {!isSidebarCollapsed && "Collapse"}
          </div>
        </div>
      </div>

      {/* Konten Utama */}
      <div style={styles.mainContent}>
        {/* Navbar */}
        <div style={styles.navbar}>
          <h1 style={styles.pageTitle}>Room Reservation</h1>
          <div style={styles.profileSection}>
            <span style={styles.profileName}>John Doe</span>
            <span style={styles.profileRole}>user</span>
            {/* Menggunakan placeholder untuk gambar profil */}
            <div style={styles.profileImage}>
              <Image
                src="https://placehold.co/40x40/E0E0E0/white?text=JD"
                alt="User Profile"
                width={40}
                height={40}
                style={{ borderRadius: "50%" }}
              />
            </div>
          </div>
        </div>

        {/* Search dan Filter */}
        <div style={styles.searchAndFilter}>
          <div style={styles.filterGroup}>
            <input
              type="text"
              placeholder="Enter the keyword here..."
              style={styles.searchInput}
            />
            <select style={styles.selectFilter}>
              <option value="">Room Type</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            <select style={styles.selectFilter}>
              <option value="">Capacity</option>
              <option value="10">1-10</option>
              <option value="20">11-20</option>
              <option value="30">21-30</option>
            </select>
            <button style={styles.searchButton}>Search</button>
          </div>
          <button style={styles.addButton}>+ Add New Reservation</button>
        </div>

        {/* Daftar Ruangan */}
        <div style={styles.roomGrid}>
          {dummyRooms.map((room) => (
            <div key={room.id} style={styles.roomCard}>
              <img src={room.image} alt={room.name} style={styles.roomImage} />
              <div style={styles.roomTag}>{room.type}</div>
              <div style={styles.roomDetails}>
                <h3 style={styles.roomName}>{room.name}</h3>
                <div style={styles.roomInfo}>
                  <span style={styles.roomInfoIcon}>👥</span> {room.capacity}{" "}
                  people
                </div>
                <div style={styles.roomPrice}>
                  <span style={styles.roomInfoIcon}>💰</span> Rp {room.price}{" "}
                  /hours
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomReservationPage;
