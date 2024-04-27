import React from "react";
import styles from "./Dashboard.module.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import Orders from "./Orders/Orders";
import DashboardActions from "../DashboardActions/DashboardActions";
import DashboardAlerts from "../DashboardAlerts/DashboardAlerts";
import Revenue from "./Revenue/Revenue";
import Trips from "./Trips/Trips";
import Expences from "./Expences/Expences";

const Dashboard = () => {
  return (
    <div className={styles.dash_cont}>
      <div className={styles.dashboard}>
        <div className={styles.dash_head}>
          <div className={styles.head}>Dashboard</div>
          <div className={styles.opt}>
            <SearchOutlinedIcon className={styles.dash_icons} />
            <hr></hr>
            <NotificationsNoneOutlinedIcon className={styles.dash_icons} />
            <hr></hr>
            <MoreVertOutlinedIcon className={styles.dash_icons} />
          </div>
        </div>
        <div className={styles.containers}>
          <div className={styles.cont1}>
            <Orders />
          </div>

          <div className={styles.cont3}>
            <Trips />
          </div>
          <div className={styles.cont2}>
            <Revenue />
          </div>
          <div className={styles.cont4}>
            <Expences />
          </div>
        </div>
      </div>
      <div className={styles.actions}>
        <DashboardActions />
      </div>
      <div className={styles.alerts}>
        <DashboardAlerts />
      </div>
    </div>
  );
};

export default Dashboard;
