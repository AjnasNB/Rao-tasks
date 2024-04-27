import React from "react";
import styles from "./Home.module.css";
import SideNav from "../../components/SideNav/SideNav";
import RightNav from "../../components/RightNav/RightNav";
import Dashboard from "../../components/Dashboard/Dashboard/Dashboard";

const Home = () => {
  return (
    <div>
      <div className={styles.col_cont}>
        <div className={styles.col1}>
          <SideNav />
        </div>
        <div className={styles.col2}>
          <Dashboard />
        </div>
        <div className={styles.col3}>
          <RightNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
