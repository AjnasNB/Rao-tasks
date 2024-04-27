import React from "react";
import styles from "./RightNav.module.css";
//card
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CompAct from "./CompAct/CompAct";
import SchAct from "./SchAct/SchAct";
import { DataProvider } from "../RightNav/Context/Context";

const RightNav = () => {
  //current date
  const date = new Date();
  return (
    <div>
      <DataProvider>
        <div className={styles.rightnav_cont}>
          <div className={styles.highlights}>
            <div className={styles.head}>Todays Highlights(14)</div>
            <div className={styles.date}>{date.toDateString()}</div>
            <div className={styles.cards}>
              <Card
                sx={{
                  width: 150,
                  borderRadius: "0.25rem",
                  border: "1px solid #CBCBCB",
                  background: "#FFF",
                }}
                style={{ marginRight: "10px" }}
              >
                <CardContent className={styles.inc_card}>
                  <div className={styles.inc}>Income</div>
                  <div className={styles.inc_cad}>100000 CAD</div>
                  <div className={styles.payments}>2 payments received</div>
                </CardContent>
              </Card>
              <Card
                sx={{
                  width: 150,
                  borderRadius: "0.25rem",
                  border: "1px solid #CBCBCB",
                  background: "#FFF",
                }}
              >
                <CardContent>
                  <div className={styles.exp}>Expense</div>
                  <div className={styles.exp_cad}>100000 CAD</div>
                  <div className={styles.payments}>2 payments received</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Completed Activities */}
          <div className={styles.completed}>
            <CompAct />
          </div>
          <div className={styles.scheduled}>
            <SchAct />
          </div>
        </div>
      </DataProvider>
    </div>
  );
};

export default RightNav;
