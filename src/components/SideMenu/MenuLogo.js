import DrawerContent from "../Drawer/DrawerContent";
import styles from "./MenuLogo.module.css";
import { Drawer } from "antd";

const MenuLogo = ({ drawerOpened, setDrawerOpened }) => {
  return (
    <Drawer
      closable={false}
      placement="left"
      open={drawerOpened}
      onClose={() => setDrawerOpened(false)}
      className={`${styles.drawerWrapper} drawer-custom-transition`}
      getContainer=".mainLayoutWrapper"
    >
      <DrawerContent
        onClose={() => setDrawerOpened(false)}
        setDrawerOpened={setDrawerOpened}
      />
    </Drawer>
  );
};

export default MenuLogo;
