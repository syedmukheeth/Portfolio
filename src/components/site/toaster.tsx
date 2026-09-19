"use client";

import { useEffect, useState } from "react";
import { FEEDBACK_MS } from "@/lib/motion";

const EVENT = "site:toast";

/** Show a short confirmation, e.g. after an action run from the command palette. */
export function toast(message: string) {
  window.dispatchEvent(new CustomEvent<string>(EVENT, { detail: message }));
}

export function Toaster() {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    let timer: number | undefined;
    const onToast = (event: Event) => {
      setMessage((event as CustomEvent<string>).detail);
      window.clearTimeout(timer);
      timer = window.setTimeout(() => setMessage(null), FEEDBACK_MS);
    };
    window.addEventListener(EVENT, onToast);
    return () => {
      window.removeEventListener(EVENT, onToast);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div role="status" aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-[calc(1.5rem+var(--dock))] z-50 flex justify-center px-4">
      {message && (
        <p key={message} className="pop rounded-full border border-line bg-elevated px-4 py-2 text-sm text-fg shadow-lg shadow-black/20">
          {message}
        </p>
      )}
    </div>
  );
}
