import { GiDeathSkull } from "react-icons/gi";

import styles from "./index.module.css";
import BtnPrimary from "../../utilities/BtnPrimary";


const FailureView = () => (
  <div className={styles.failureView}>
    <GiDeathSkull className={styles.icon} />
    <h3>We are having a hard time loading this page.</h3>
    <p>Try Again</p>
    <BtnPrimary type="button">Retry</BtnPrimary>
  </div>
);

export default FailureView;
