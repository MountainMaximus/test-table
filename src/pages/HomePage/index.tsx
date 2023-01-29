import React from "react";
import { Table } from "../../components/Table";
import styles from "./HomePage.module.scss";

export const HomePage: React.FC = () => {
  return (
    <div className={styles.section}>
      <Table />
    </div>
  );
};
