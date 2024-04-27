import React from "react";
import styles from "./DashboardAlerts.module.css";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

const DashboardAlerts = () => {
  const alertsData = [
    {
      issue: "Driver Raised Concern",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      LoadNo: 12454,
      BillTo: "RoaDo demo Bangalore",
      date: new Date(),
    },
    {
      issue: "Driver Raised Concern",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      LoadNo: 12454,
      BillTo: "RoaDo demo Bangalore",
      date: new Date(),
    },
    // More items can be added here
  ];

  return (
    <div>
      <div className={styles.alerts_cont}>
        <div className={styles.alerts_head}>
          <div className={styles.alerts_heading}>High Priority alerts (14)</div>
          <div className={styles.view_all}>
            <div>View All</div>
            <ChevronRightOutlinedIcon className={styles.icon_right} />
          </div>
        </div>
        <div className={styles.alerts_boxcont}>
          {alertsData.slice(0, 2).map((alert, index) => (
            <div key={index} className={styles.alerts_box}>
              <div className={styles.status}>
                <div className={styles.profile}>
                  <Person2OutlinedIcon className={styles.icon} />
                  <div className={styles.details_cont}>
                    <div className={styles.issue}>{alert.issue}</div>
                    <div className={styles.load_bill}>
                      <div className={styles.load}>{alert.LoadNo}, </div>
                      <div className={styles.bill}> {alert.BillTo}</div>
                    </div>
                  </div>
                </div>
                <div className={styles.date}>{alert.date.toDateString()} </div>
              </div>
              <div className={styles.message_details}>{alert.message}</div>
              <div className={styles.ign_res}>
                <div className={styles.ignore}>Ignore</div>
                <button className={styles.resolve}>Resolve</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardAlerts;
