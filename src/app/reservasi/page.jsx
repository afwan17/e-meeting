"use client";
import { useEffect, useState } from "react";
import { Snackbar, Alert, AlertTitle } from "@mui/material";

export default function Reservasi() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("loginSuccess") === "1") {
      setOpen(true);
      sessionStorage.removeItem("loginSuccess"); // hapus biar gak muncul terus
    }
  }, []);
  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          <AlertTitle>Success</AlertTitle>
          Login berhasil!
        </Alert>
      </Snackbar>
      <h1>reservasi</h1>
    </div>
  );
}
