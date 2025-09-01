"use client";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import styles from "./Reservasi2.module.css";

export default function ReservationPage() {
  const rooms = Array(8).fill({
    name: "Aster Room",
    capacity: "10 people",
    price: "Rp 500.000/hour",
    size: "Small",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
  });

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.content}>
          {/* Search & Filter */}
          <div className={styles.searchBar}>
            <input type="text" placeholder="Enter the keyword here..." />
            <select>
              <option>Room Type</option>
            </select>
            <select>
              <option>Capacity</option>
            </select>
            <button className={styles.searchBtn}>Search</button>
            <button className={styles.addBtn}>+ Add New Reservation</button>
          </div>

          {/* Rooms List */}
          <div className={styles.grid}>
            {rooms.map((room, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img src={room.image} alt={room.name} />
                  <span className={styles.tag}>{room.size}</span>
                </div>
                <div className={styles.cardContent}>
                  <h3>{room.name}</h3>
                  <div className={styles.meta}>
                    <span>👥 {room.capacity}</span>
                    <span>💰 {room.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
