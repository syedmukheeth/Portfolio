"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Maximize2, X } from "lucide-react";
import type { ExperienceDocument } from "@/lib/data";

/** Thumbnails that open the full document in a lightbox instead of a new tab. */
export function DocumentViewer({ documents }: { documents: ExperienceDocument[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const doc = documents[index];
  const many = documents.length > 1;

  const open = (i: number) => {
    returnFocus.current = document.activeElement as HTMLElement | null;
    setIndex(i);
    setIsOpen(true);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const step = (delta: number) => setIndex((i) => (i + delta + documents.length) % documents.length);

  return (
    <>
      <ul className="mt-5 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
        {documents.map((d, i) => (
          <li key={d.src}>
            <button type="button" onClick={() => open(i)} className="press group block w-full text-left sm:w-44">
              <span className="block aspect-[11/7] overflow-hidden rounded-lg border border-line bg-surface">
                {/* eslint-disable-next-line @next/next/no-img-element -- pre-sized static thumbnail */}
                <img
                  src={d.thumb}
                  alt=""
                  loading="lazy"
                  className="size-full object-cover object-top transition-transform duration-[var(--dur-fast)] ease-[var(--ease-out)] group-hover:scale-[1.03] motion-reduce:transition-none"
                />
              </span>
              <span className="mt-2 flex items-center gap-1.5 text-xs text-muted transition-colors group-hover:text-fg">
                <Maximize2 className="size-3 shrink-0" aria-hidden />
                {d.label}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label={doc.label}
        onClose={() => {
          setIsOpen(false);
          returnFocus.current?.focus({ preventScroll: true });
        }}
        onClick={(event) => event.target === event.currentTarget && close()}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            close();
          } else if (many && event.key === "ArrowRight") step(1);
          else if (many && event.key === "ArrowLeft") step(-1);
        }}
        className="overlay m-auto w-[min(56rem,calc(100vw-2rem))] max-w-none overflow-hidden rounded-xl border border-line bg-surface p-0 text-fg shadow-2xl shadow-black/40"
      >
        <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3">
          <p className="truncate text-sm font-medium">
            {doc.label}
            {many && (
              <span className="ml-2 font-mono text-xs text-muted">
                {index + 1}/{documents.length}
              </span>
            )}
          </p>
          <div className="flex shrink-0 items-center gap-1">
            {many && (
              <>
                <IconButton label="Previous document" onClick={() => step(-1)}>
                  <ChevronLeft className="size-4" aria-hidden />
                </IconButton>
                <IconButton label="Next document" onClick={() => step(1)}>
                  <ChevronRight className="size-4" aria-hidden />
                </IconButton>
              </>
            )}
            <a
              href={doc.src}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open original in a new tab"
              className="press grid size-8 place-items-center rounded-full text-muted hover:bg-elevated hover:text-fg"
            >
              <ExternalLink className="size-4" aria-hidden />
            </a>
            <IconButton label="Close" onClick={close}>
              <X className="size-4" aria-hidden />
            </IconButton>
          </div>
        </div>
        <div className="grid place-items-center bg-elevated">
          {isOpen && (
            // Full-size document is only requested once the viewer opens; width/height reserve its box.
            // eslint-disable-next-line @next/next/no-img-element -- static document scan
            <img
              key={doc.src}
              src={doc.src}
              alt={doc.label}
              width={doc.width}
              height={doc.height}
              className="h-auto max-h-[calc(90vh-3.5rem)] w-auto max-w-full object-contain"
            />
          )}
        </div>
      </dialog>
    </>
  );
}

function IconButton({ label, onClick, children }: { label: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="press grid size-8 place-items-center rounded-full text-muted hover:bg-elevated hover:text-fg"
    >
      {children}
    </button>
  );
}
