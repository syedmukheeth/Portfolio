"use client";

import { Check, Copy } from "lucide-react";
import { PROFILE } from "@/lib/data";
import { useCopy } from "@/lib/use-copy";
import { cn } from "@/lib/utils";

function useCopyEmail() {
  const { copied, copy } = useCopy(PROFILE.email);
  const onClick = async () => {
    // Clipboard can be blocked (insecure context, permissions): fall back to the mail client.
    if (!(await copy())) window.location.href = `mailto:${PROFILE.email}`;
  };
  return { copied, onClick };
}

/**
 * Primary contact action. Both labels share one grid cell so the button keeps
 * its width when "Copy email" swaps to "Copied".
 */
export function CopyEmailButton({ className }: { className?: string }) {
  const { copied, onClick } = useCopyEmail();

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "press inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-medium text-accent-ink hover:opacity-90",
        className,
      )}
    >
      {copied ? <Check className="size-4" aria-hidden /> : <Copy className="size-4" aria-hidden />}
      <span className="grid">
        <span className={cn("[grid-area:1/1] transition-opacity", copied && "opacity-0")}>Copy email</span>
        <span aria-hidden className={cn("[grid-area:1/1] transition-opacity", !copied && "opacity-0")}>
          Copied
        </span>
      </span>
      <span className="sr-only" aria-live="polite">
        {copied ? `${PROFILE.email} copied to clipboard` : ""}
      </span>
    </button>
  );
}

/** The email address itself as the target, for the closing section. */
export function CopyEmailLarge() {
  const { copied, onClick } = useCopyEmail();
  const [user, domain] = PROFILE.email.split("@");

  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        aria-label={`Copy email address ${PROFILE.email}`}
        className="press group inline-flex max-w-full items-center gap-3 text-left text-xl font-semibold tracking-tight wrap-anywhere min-[375px]:text-2xl sm:text-3xl md:text-4xl"
      >
        {/* On narrow screens, wrap at the @ rather than mid-name. */}
        <span className="link">
          {user}
          <wbr />@{domain}
        </span>
        <span className="grid size-10 shrink-0 place-items-center rounded-full border border-line text-muted transition-colors group-hover:border-accent-text group-hover:text-accent-text">
          {copied ? <Check className="size-4" aria-hidden /> : <Copy className="size-4" aria-hidden />}
        </span>
      </button>
      <p className="mt-3 text-sm text-muted" aria-live="polite">
        {copied ? (
          "Copied to clipboard."
        ) : (
          <>
            <span className="pointer-coarse:hidden">Click to copy.</span>
            <span className="hidden pointer-coarse:inline">Tap to copy.</span>
          </>
        )}
      </p>
    </div>
  );
}
