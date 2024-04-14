"use client";

import { useEffect, useRef } from "react";
import styles from "./Moon.module.scss";
import { KEYFRAMES } from "./keyframes";

type Props = {
  /** -1 ~ 1 사이의 값으로, 0이 가장 밝은 달이고, -1과 1은 가장 어두운 달입니다. */
  phase: number;
};

export function Moon({ phase }: Props) {
  const lightElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lightElementRef.current) return;
    const animation = lightElementRef.current.animate(KEYFRAMES, 2);
    animation.pause();
    animation.currentTime = phase + 1;
  }, [phase]);

  return (
    <div className={styles.moon}>
      <div ref={lightElementRef} className={styles.light}></div>
      <div className={styles.texture}></div>
      <div className={styles.sphere}></div>
    </div>
  );
}
