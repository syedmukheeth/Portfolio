"use client";

import { useSyncExternalStore } from "react";

const formatter = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Kolkata", hour: "numeric", minute: "2-digit" });

const subscribe = (onChange: () => void) => {
  const id = window.setInterval(onChange, 10_000);
  return () => window.clearInterval(id);
};

/**
 * Live clock for Syed's timezone. The server can't know the time at render, so it
 * reserves the space with an invisible placeholder and the client fills it in.
 */
export function LocalTime() {
  const time = useSyncExternalStore(subscribe, () => formatter.format(new Date()), () => null);

  return (
    <span className="tabular-nums">
      <span className={time ? undefined : "invisible"}>{time ?? "0:00 PM"}</span> IST
    </span>
  );
}
