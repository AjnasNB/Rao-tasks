import React from "react";
import styles from "./DashboardActions.module.css";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import RvHookupOutlinedIcon from "@mui/icons-material/RvHookupOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";

const DashboardActions = () => {
  return (
    <div>
      <div className={styles.actions_head}>Quick Actions</div>
      <div className={styles.actions_cont}>
        <div className={styles.actions}>
          <LabelOutlinedIcon className={styles.action_icons} />
          <div className={styles.actions_head}>Create Indents</div>
        </div>
        <hr className={styles.act_hr}></hr>
        <div className={styles.actions}>
          <LocalShippingOutlinedIcon className={styles.action_icons} />
          <div className={styles.actions_head}>Add Vehicle</div>
        </div>
        <hr className={styles.act_hr}></hr>
        <div className={styles.actions}>
          <RvHookupOutlinedIcon className={styles.action_icons} />
          <div className={styles.actions_head}>Add Trailer</div>
        </div>
        <hr className={styles.act_hr}></hr>
        <div className={styles.actions}>
          <Person2OutlinedIcon className={styles.action_icons} />
          <div className={styles.actions_head}>Add Driver</div>
        </div>
        <hr className={styles.act_hr}></hr>
        <div className={styles.actions}>
          <LocalShippingOutlinedIcon className={styles.action_icons} />
          <div className={styles.actions_head}>Add Indents</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardActions;
