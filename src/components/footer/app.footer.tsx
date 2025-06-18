"use client";
import "react-h5-audio-player/lib/styles.css";
import AudioPlayer from "react-h5-audio-player";
import { AppBar, Box, Container } from "@mui/material";
import React from "react";
import { useHasMounted } from "@/ultils/customHook";

const AppFooter = () => {
  const hasMounted = useHasMounted();
  if (!hasMounted) return <></>;
  console.log("check evn", process.env.NEXT_PUBLIC_BACKEND_URL);
  return (
    <>
      <AppBar
        position="fixed"
        color="primary"
        sx={{ top: "auto", bottom: 0, background: "#f2f2f2" }}
      >
        <Container style={{ display: "flex", gap: 10 }}>
          <AudioPlayer
            src={`http://localhost:8000/tracks/hoidanit.mp3`}
            volume={0.5}
            style={{ boxShadow: "unset", background: "#f2f2f2" }}
            // Try other props!
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "center",
              minWidth: 100,
            }}
          >
            <div style={{ color: "#ccc" }}>Huy</div>
            <div style={{ color: "black" }}>Who am I?</div>
          </div>
        </Container>
      </AppBar>
    </>
  );
};
export default AppFooter;
