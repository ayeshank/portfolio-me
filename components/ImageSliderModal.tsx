"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  images: string[];
  preview?: React.ReactNode;
  initialIndex?: number;
  className?: string;
  ariaLabel?: string;
};

export default function ImageSliderModal({
  images,
  preview,
  initialIndex = 0,
  className = "",
  ariaLabel = "Open image gallery",
}: Props) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(initialIndex);

  // --- swipe handling ---
  const startX = useRef<number | null>(null);
  const deltaX = useRef(0);

  const next = useCallback(() => {
    if (!images?.length) return;
    setIndex((i) => (i + 1) % images.length);
  }, [images]);

  const prev = useCallback(() => {
    if (!images?.length) return;
    setIndex((i) => (i - 1 + images.length) % images.length);
  }, [images]);

  const openAt = (i = 0) => {
    setIndex(Math.min(Math.max(0, i), Math.max(0, images.length - 1)));
    setOpen(true);
  };

  const close = () => setOpen(false);

  // lock body scroll while modal is open
  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [open]);

  // keyboard controls
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, next, prev]);

  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    deltaX.current = 0;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (startX.current == null) return;
    deltaX.current = e.clientX - startX.current;
  };

  const onPointerUp = () => {
    if (startX.current == null) return;
    const threshold = 50; // px
    if (deltaX.current > threshold) prev();
    else if (deltaX.current < -threshold) next();
    startX.current = null;
    deltaX.current = 0;
  };

  // default preview if none provided
  const DefaultPreview = () => (
    <div className="relative group cursor-pointer overflow-hidden rounded-2xl border border-white/10">
      <img
        src={images?.[0] ?? ""}
        alt="Open gallery"
        className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
      />
      <div className="absolute bottom-3 right-3 rounded-full bg-black/70 text-white text-xs px-2 py-1">
        {images?.length ?? 0} {images?.length === 1 ? "image" : "images"}
      </div>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
    </div>
  );

  return (
    <>
      {/* Trigger */}
      <div
        role="button"
        tabIndex={0}
        aria-label={ariaLabel}
        onClick={() => openAt(initialIndex)}
        onKeyDown={(e) =>
          (e.key === "Enter" || e.key === " ") && openAt(initialIndex)
        }
        className={className}
      >
        {preview ?? <DefaultPreview />}
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
          aria-modal="true"
          role="dialog"
        >
          {/* backdrop click to close */}
          <div className="absolute inset-0" onClick={close} />

          <div className="relative z-[61] w-full max-w-5xl">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-zinc-300">
                {index + 1} / {images.length || 0}
              </span>
              <button
                aria-label="Close"
                onClick={close}
                className="rounded-lg bg-zinc-800/80 text-zinc-100 px-3 py-1.5 hover:bg-zinc-700"
              >
                ✕
              </button>
            </div>

            {/* Stage */}
            <div
              className="relative w-full h-[70vh] rounded-2xl bg-zinc-900/60 border border-white/10 overflow-hidden touch-pan-y"
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
            >
              {/* current image */}
              <img
                src={images[index] ?? ""}
                alt={`Slide ${index + 1}`}
                className="absolute inset-0 w-full h-full object-contain select-none"
                draggable={false}
              />

              {/* nav controls */}
              <button
                aria-label="Previous image"
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 text-white w-10 h-10 flex items-center justify-center hover:bg-black/60"
              >
                ‹
              </button>
              <button
                aria-label="Next image"
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 text-white w-10 h-10 flex items-center justify-center hover:bg-black/60"
              >
                ›
              </button>
            </div>

            {/* Thumbnails */}
            {images?.length > 1 && (
              <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                {images.map((src, i) => (
                  <button
                    key={src + i}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`relative h-16 w-24 flex-none overflow-hidden rounded-lg border ${
                      i === index ? "border-emerald-400" : "border-white/10"
                    }`}
                  >
                    <img
                      src={src}
                      alt={`Thumbnail ${i + 1}`}
                      className="h-full w-full object-cover"
                    />
                    {i === index && (
                      <span className="absolute inset-0 ring-2 ring-emerald-400/60 rounded-lg pointer-events-none" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
