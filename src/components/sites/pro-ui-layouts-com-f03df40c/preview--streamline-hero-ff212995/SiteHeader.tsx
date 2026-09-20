"use client";

import { useEffect, useRef, useState } from "react";
import {
  DownloadIcon,
  MailIcon,
  MonitorDownIcon,
  PackageOpenIcon,
  TerminalIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  CloseIcon,
  MenuIcon,
  WalletIcon,
} from "../shared/icons";
import styles from "./streamline-hero.module.css";
import type { StreamlineNavItem } from "./types";

const navItems: StreamlineNavItem[] = [
  { label: "Liên hệ", href: "#lien-he", icon: "component" },
  { label: "Bảng giá", href: "#bang-gia", icon: "wallet" },
];

const downloadOptions = [
  {
    name: "Windows 10/11",
    detail: "Bộ cài 64-bit · 475 MB",
    href: "https://github.com/minhnhat6/NNLauncher-Downloads/releases/latest/download/NNLauncher-windows-x64-Setup.exe",
    Icon: MonitorDownIcon,
  },
  {
    name: "Ubuntu / Debian",
    detail: "Gói .deb 64-bit · 710 MB",
    href: "https://github.com/minhnhat6/NNLauncher-Downloads/releases/latest/download/NNLauncher-linux-amd64.deb",
    Icon: PackageOpenIcon,
  },
  {
    name: "Linux portable",
    detail: "Gói tar.gz 64-bit · 710 MB",
    href: "https://github.com/minhnhat6/NNLauncher-Downloads/releases/latest/download/NNLauncher-linux-x86_64.tar.gz",
    Icon: TerminalIcon,
  },
] as const;

function NavIcon({ icon }: Pick<StreamlineNavItem, "icon">) {
  if (icon === "component") {
    return <MailIcon className={styles.navIcon} />;
  }

  return <WalletIcon className={styles.navIcon} />;
}

function Brand() {
  return (
    <Link className={styles.brand} href="/" aria-label="Trang chủ NNLauncher">
      <span className={styles.brandMark}>
        <Image
          className={styles.brandLogo}
          src="/sites/pro-ui-layouts-com-f03df40c/shared/nnlauncher-logo.svg"
          alt=""
          width={256}
          height={256}
          priority
        />
        <span className={styles.proBadge}>pro</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const downloadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const menuButton = menuButtonRef.current;
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
      menuButton?.focus();
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isDownloadOpen) {
      return;
    }

    function closeDownloadMenu(event: MouseEvent) {
      if (!downloadRef.current?.contains(event.target as Node)) {
        setIsDownloadOpen(false);
      }
    }

    function handleDownloadKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsDownloadOpen(false);
      }
    }

    document.addEventListener("mousedown", closeDownloadMenu);
    window.addEventListener("keydown", handleDownloadKeyDown);

    return () => {
      document.removeEventListener("mousedown", closeDownloadMenu);
      window.removeEventListener("keydown", handleDownloadKeyDown);
    };
  }, [isDownloadOpen]);

  return (
    <header className={styles.header}>
      <nav className={styles.desktopNav} aria-label="Điều hướng chính">
        <Brand />
        {navItems.map((item) => (
          <Link className={styles.navLink} href={item.href} key={item.href}>
            <NavIcon icon={item.icon} />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <button
        ref={menuButtonRef}
        className={styles.menuButton}
        type="button"
        aria-label="Mở menu điều hướng"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="streamline-navigation-menu"
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon className={styles.menuIcon} />
      </button>

      <nav className={styles.rightNav} aria-label="Tải NNLauncher">
        <div className={styles.downloadArea} ref={downloadRef}>
        <button
          aria-controls="nnlauncher-download-menu"
          aria-expanded={isDownloadOpen}
          aria-haspopup="menu"
          className={styles.login}
          onClick={() => setIsDownloadOpen((isVisible) => !isVisible)}
          type="button"
        >
          <span className={styles.trialSpark} aria-hidden="true">
            ✦
          </span>
          <span>Dùng thử free</span>
        </button>
        {isDownloadOpen ? (
          <div
            className={styles.downloadMenu}
            id="nnlauncher-download-menu"
            role="menu"
          >
            <div className={styles.downloadMenuHeader}>
              <span className={styles.downloadMenuIcon}>
                <DownloadIcon aria-hidden="true" />
              </span>
              <span>
                <strong>Tải NNLauncher</strong>
                <small>Luôn tải phiên bản mới nhất</small>
              </span>
            </div>
            <div className={styles.downloadOptions}>
              {downloadOptions.map(({ name, detail, href, Icon }) => (
                <a
                  className={styles.downloadOption}
                  href={href}
                  key={name}
                  onClick={() => setIsDownloadOpen(false)}
                  rel="noreferrer"
                  role="menuitem"
                  target="_blank"
                >
                  <span className={styles.downloadOptionIcon}>
                    <Icon aria-hidden="true" />
                  </span>
                  <span className={styles.downloadOptionCopy}>
                    <strong>{name}</strong>
                    <small>{detail}</small>
                  </span>
                  <DownloadIcon
                    aria-hidden="true"
                    className={styles.downloadArrow}
                  />
                </a>
              ))}
            </div>
            <a
              className={styles.releaseLink}
              href="https://github.com/minhnhat6/NNLauncher-Downloads/releases/latest"
              rel="noreferrer"
              target="_blank"
            >
              Xem ghi chú phát hành
            </a>
          </div>
        ) : null}
        </div>
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
            aria-label="Menu điều hướng"
          >
            <div className={styles.drawerInner}>
              <div className={styles.drawerTop}>
                <Brand />
                <button
                  ref={closeButtonRef}
                  className={styles.closeButton}
                  type="button"
                  aria-label="Đóng menu điều hướng"
                  onClick={() => setIsOpen(false)}
                >
                  <CloseIcon className={styles.menuIcon} />
                </button>
              </div>
              <nav className={styles.drawerNav} aria-label="Điều hướng di động">
                {navItems.map((item, index) => (
                  <Link
                    className={`${styles.drawerLink} ${index === 0 ? styles.drawerActive : ""}`}
                    href={item.href}
                    key={item.href}
                    aria-current={index === 0 ? "page" : undefined}
                    onClick={() => setIsOpen(false)}
                  >
                    <NavIcon icon={item.icon} />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </aside>
        </>
      ) : null}
    </header>
  );
}
