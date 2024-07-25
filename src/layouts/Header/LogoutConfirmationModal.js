import { Modal } from "antd";
import styles from "./LogoutConfirmationModal.module.css";
import LogoutImg from "../../../Assets/login-register/Logout2.png";
import useLogout from "./useLogout";

const LogoutConfirmationModal = ({ logoutModal, closeLogoutModal }) => {
  const logout = useLogout();
  return (
    <Modal
      className={`${styles.modalOverlay} headerModalParent`}
      open={logoutModal}
      cancelButtonProps={{ style: { display: "none" } }}
      okButtonProps={{ style: { display: "none" } }}
      closable={false}
    >
      <div onClick={closeLogoutModal} className={styles.logoutOverlay}>
        <div className={styles.logoutImgwrapper}>
          <div>
            <img src={LogoutImg} alt="logout" width={45} />
          </div>
          <p>Logout</p>
        </div>
        <div className={styles.logoutMsg}>
          Are you sure that you want <br />
          to logout?
        </div>
        <div className={styles.logoutButtons}>
          <button onClick={closeLogoutModal}>Cancel</button>
          <button
            onClick={() => {
              closeLogoutModal();
              logout();
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default LogoutConfirmationModal;
