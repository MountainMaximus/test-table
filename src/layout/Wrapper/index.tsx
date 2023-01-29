import React from "react";
import { Outlet } from "react-router-dom";
import { Header, SideBar, Footer } from "../../components";
import fetchData from "../../redux/data/asyncAction";
import { useAppDispatch } from "../../redux/store";
import styles from "./Wrapper.module.scss";

export const Wrapper: React.FC = () => {
  const dispatch = useAppDispatch();
  const [showSideBar, setShowSideBar] = React.useState(false);
  React.useEffect(() => {
    dispatch(fetchData());
  }, []);
  const OnShowSideBar = React.useCallback(() => {
    setShowSideBar((prev) => !prev);
  }, []);

  return (
    <div className={styles.wrapper}>
      {showSideBar && (
        <span className={styles.mask} onClick={() => setShowSideBar(false)} />
      )}
      <SideBar showSideBar={showSideBar} />

      <Header showSideBar={showSideBar} setShowSideBar={OnShowSideBar} />

      <div className={styles.main}>
        <div className={styles.content}>
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
};
