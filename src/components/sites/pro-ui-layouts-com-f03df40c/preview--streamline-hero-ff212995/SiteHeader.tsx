"use client";

import { useEffect, useRef, useState } from "react";

import {
  BrandLogoIcon,
  CloseIcon,
  ComponentIcon,
  MenuIcon,
  PanelsIcon,
  WalletIcon,
  XBrandIcon,
} from "../shared/icons";
import styles from "./streamline-hero.module.css";
import type { StreamlineNavItem } from "./types";

const navItems: StreamlineNavItem[] = [
  { label: "Blocks", href: "/blocks", icon: "component" },
  { label: "Templates", href: "/templates", icon: "panels" },
  { label: "Pricing", href: "/pricing", icon: "wallet" },
];

function NavIcon({ icon }: Pick<StreamlineNavItem, "icon">) {
  if (icon === "component") {
    return <ComponentIcon className={styles.navIcon} />;
  }

  if (icon === "panels") {
    return <PanelsIcon className={styles.navIcon} />;
  }

  return <WalletIcon className={styles.navIcon} />;
}

function Brand() {
  return (
    <a className={styles.brand} href="/" aria-label="UI Layouts Pro home">
      <span className={styles.brandMark}>
        <BrandLogoIcon className={styles.brandLogo} />
        <span className={styles.proBadge}>pro</span>
      </span>
    </a>
  );
}

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      menuButtonRef.current?.focus();
    };
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <nav className={styles.desktopNav} aria-label="Primary navigation">
        <Brand />
        {navItems.map((item) => (
          <a className={styles.navLink} href={item.href} key={item.href}>
            <NavIcon icon={item.icon} />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <button
        ref={menuButtonRef}
        className={styles.menuButton}
        type="button"
        aria-label="Open navigation menu"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="streamline-navigation-menu"
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon className={styles.menuIcon} />
      </button>

      <nav className={styles.rightNav} aria-label="Account navigation">
        <a
          className={styles.xLink}
          href="https://twitter.com/naymur_dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
        >
          <XBrandIcon className={styles.xIcon} />
        </a>
        <a className={styles.login} href="https://pro.ui-layouts.com/login">
          Login
        </a>
      </nav>

      {isOpen ? (
        <>
          <div
            className={styles.drawerOverlay}
            aria-hidden="true"
            onClick={() => setIsOpen(false)}
          />
          <aside
            id="streamline-navigation-menu"
            className={styles.drawer}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className={styles.drawerInner}>
              <div className={styles.drawerTop}>
                <Brand />
                <button
                  ref={closeButtonRef}
                  className={styles.closeButton}
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={() => setIsOpen(false)}
                >
                  <CloseIcon className={styles.menuIcon} />
                </button>
              </div>
              <nav className={styles.drawerNav} aria-label="Mobile navigation">
                {navItems.map((item, index) => (
                  <a
                    className={`${styles.drawerLink} ${index === 0 ? styles.drawerActive : ""}`}
                    href={item.href}
                    key={item.href}
                    aria-current={index === 0 ? "page" : undefined}
                    onClick={() => setIsOpen(false)}
                  >
                    <NavIcon icon={item.icon} />
                    <span>{item.label}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        </>
      ) : null}
    </header>
  );
}
