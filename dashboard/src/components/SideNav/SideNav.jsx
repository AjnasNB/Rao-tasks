import React from "react";
import styles from "./SideNav.module.css";
import logo from "../../assets/logo.png";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AddToQueueOutlinedIcon from "@mui/icons-material/AddToQueueOutlined";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import vector from "../../assets/vector.png";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import parcel from "../../assets/parcel_tracking.png";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import DynamicFeedOutlinedIcon from "@mui/icons-material/DynamicFeedOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const SideNav = () => {
  return (
    <div>
      <div className={styles.sidenav_cont}>
        <div className={styles.sidenav}>
          <img src={logo} alt="logo" className={styles.logo} />
          <DashboardOutlinedIcon className={styles.icon} />
          <AddToQueueOutlinedIcon className={styles.icon} />
          <LabelOutlinedIcon className={styles.icon} />
          <AssignmentOutlinedIcon className={styles.icon} />
          <LocalShippingOutlinedIcon className={styles.icon} />
          <BusinessCenterOutlinedIcon className={styles.icon} />
          <AccountBalanceWalletOutlinedIcon className={styles.icon} />
          <DynamicFeedOutlinedIcon className={styles.icon} />
          <SettingsOutlinedIcon className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
