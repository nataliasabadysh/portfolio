"use client";
import { emojisplosion } from "emojisplosion";
import styles from "./styles.module.css";

export function EmojisplosionHeart() {
  return (
    <div className={styles.container}>
      <p
        as="button"
        className={styles.heart}
        fontSize="small"
        fontWeight="light"
        onClick={() => emojisplosion()}
        type="button"
      >
        😊
      </p>
    </div>
  );
}
