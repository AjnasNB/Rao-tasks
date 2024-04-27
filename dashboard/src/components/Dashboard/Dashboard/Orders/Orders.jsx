import React from "react";
import styles from "./Orders.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Orders = () => {
  const upcoming = 50;
  const ongoing = 100;
  const completed = 50;
  const total = upcoming + ongoing + completed;
  const total_data = 12345;

  const upcomingPercent = (upcoming / total) * 100;
  const ongoingPercent = (ongoing / total) * 100;
  const completedPercent = (completed / total) * 100;
  return (
    <div>
      <div className={styles.ord_head}>Orders</div>
      <div className={styles.ord_cont}>
        <Box sx={{ position: "relative", display: "inline-flex" }}>
          <CircularProgress
            variant="determinate"
            value={100}
            size={100}
            thickness={5}
            sx={{ color: "grey.200" }}
          />
          <CircularProgress
            variant="determinate"
            value={completedPercent}
            size={100}
            thickness={5}
            sx={{ color: "#FFCB49", position: "absolute", left: 0, zIndex: 3 }}
          />
          <CircularProgress
            variant="determinate"
            value={completedPercent + ongoingPercent}
            size={100}
            thickness={5}
            sx={{ color: "#7464FF", position: "absolute", left: 0, zIndex: 2 }}
          />
          <CircularProgress
            variant="determinate"
            value={100}
            size={100}
            thickness={5}
            sx={{ color: "#4FD2B5", position: "absolute", left: 0, zIndex: 1 }}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "black",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            <p>Total</p>
            {total_data}
          </Box>
        </Box>
        <div className={styles.upc_head}>
          <div className={styles.upcoming}>Upcoming</div>
          <div className={styles.upc_value}>{upcoming}</div>
        </div>
        <div className={styles.ong_head}>
          <div className={styles.ongoing}>Ongoing</div>
          <div className={styles.ong_value}>{ongoing}</div>
        </div>
        <div className={styles.comp_head}>
          <div className={styles.completed}>Completed</div>
          <div className={styles.upc_value}>{completed}</div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
