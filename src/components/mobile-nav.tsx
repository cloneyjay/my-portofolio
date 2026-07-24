"use client";

import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { navItems } from "@/lib/portfolio-data";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const hasOpenedRef = useRef(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleChange = () => {
      if (mediaQuery.matches) {
        closeMenu();
      }
    };

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [closeMenu]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    hasOpenedRef.current = true;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== "Tab" || !drawerRef.current) {
        return;
      }

      const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) {
        event.preventDefault();
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeMenu, isOpen]);

  useEffect(() => {
    if (!isOpen && hasOpenedRef.current) {
      triggerRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <>
      <header className="fixed left-4 right-4 top-[16px] z-40 flex translate-y-0 items-center justify-between rounded-full border border-transparent bg-portfolio-panel/65 px-5 py-3 shadow-2xl backdrop-blur-md lg:hidden">
        <a
          href="#profile"
          className="text-base font-black tracking-[-0.03em] text-portfolio-text"
          onClick={closeMenu}
        >
          James Angatia
        </a>
        <button
          ref={triggerRef}
          type="button"
          className="flex size-10 items-center justify-center rounded-full border border-transparent bg-portfolio-card text-portfolio-text transition hover:text-portfolio-accent"
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="size-5" aria-hidden="true" />
        </button>
      </header>

      {isOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/55 lg:hidden"
          aria-label="Close navigation menu"
          onClick={closeMenu}
        />
      ) : null}

      {isOpen ? (
        <aside
          ref={drawerRef}
          id="mobile-navigation"
          className="fixed right-0 top-0 z-50 flex h-dvh w-[min(22rem,86vw)] translate-x-0 flex-col justify-between border-l border-portfolio-line bg-portfolio-panel px-6 py-6 shadow-2xl transition-transform duration-300 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xl font-black leading-tight tracking-[-0.04em] text-portfolio-text">
                  James
                  <br />
                  Angatia
                </p>
                <p className="mt-3 text-sm leading-6 text-portfolio-muted">
                  Mobile product engineer
                  <br />
                  Nairobi, Kenya
                </p>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                className="flex size-10 shrink-0 items-center justify-center rounded-full border border-transparent bg-portfolio-card text-portfolio-text transition hover:text-portfolio-accent"
                aria-label="Close navigation menu"
                onClick={closeMenu}
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>

            <nav
              className="mt-10 grid gap-0"
              aria-label="Mobile portfolio sections"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="grid grid-cols-[2.25rem_1fr] items-center gap-3 border-b border-portfolio-line/70 py-4 text-sm text-portfolio-muted transition hover:text-portfolio-text"
                  onClick={closeMenu}
                >
                  <span className="font-mono text-xs text-portfolio-dim">
                    {item.index}
                  </span>
                  <span className="font-semibold">{item.label}</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="border-t border-portfolio-line pt-5">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-portfolio-dim">
              Status
            </p>
            <p className="mt-3 text-sm leading-6 text-portfolio-accent">
              Open to freelance
              <br />
              & side projects
            </p>
          </div>
        </aside>
      ) : null}
    </>
  );
}
