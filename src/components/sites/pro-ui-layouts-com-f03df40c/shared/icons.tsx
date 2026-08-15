import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  strokeWidth: 2,
};

export function BrandLogoIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 374 421" fill="none" aria-hidden="true" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M.005 107.365v-78.67c0-7.808 3.575-14.64 10.726-20.496C17.405 2.733 25.51 0 35.044 0h172.339c11.441 0 21.214 3.318 29.319 9.955 8.104 6.637 12.156 14.445 12.156 23.425v29.28c0 8.199 2.384 15.812 7.151 22.84s11.442 12.492 20.023 16.396c8.104 4.295 17.162 6.637 27.173 7.028h30.034c10.965 0 20.5 3.123 28.604 9.369C369.948 124.93 374 132.934 374 142.303v157.198c0 .345-.002.691-.005 1.036v90.992c0 8.02-3.575 15.036-10.726 21.051-6.674 5.613-14.779 8.42-24.313 8.42H166.617c-11.441 0-21.214-3.408-29.319-10.224-8.104-6.817-12.156-14.836-12.156-24.058v-30.072c0-8.42-2.384-16.239-7.151-23.456-4.767-7.217-11.442-12.831-20.023-16.84-8.104-4.411-17.162-6.817-27.173-7.217H40.76c-10.965 0-20.499-3.208-28.603-9.624C4.052 292.693 0 284.474 0 274.851V108.257c0-.298.002-.595.005-.892Zm248.138 196.737V119.465c0-2.733-.953-5.076-2.86-7.028-2.384-1.952-5.244-2.928-8.581-2.928H135.873c-3.337 0-6.198.976-8.581 2.928-.366.3-.704.609-1.014.927l-.421 184.943c0 2.806.953 5.212 2.86 7.217 2.384 2.005 5.244 3.007 8.581 3.007h100.829c3.337 0 6.198-1.002 8.581-3.007.539-.454 1.018-.928 1.435-1.422Z" fill="url(#brand-gradient)" />
      <defs><radialGradient id="brand-gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(187 210.5) rotate(90) scale(210.5 187)"><stop offset=".445416" stopColor="#2994FD" /><stop offset="1" stopColor="#1761FF" /></radialGradient></defs>
    </svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) { return <svg viewBox="0 0 24 24" aria-hidden="true" {...strokeProps} {...props}><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>; }
export function MenuIcon(props: IconProps) { return <svg viewBox="0 0 24 24" aria-hidden="true" {...strokeProps} {...props}><path d="M4 6h16M4 12h16M4 18h16"/></svg>; }
export function CloseIcon(props: IconProps) { return <svg viewBox="0 0 24 24" aria-hidden="true" {...strokeProps} {...props}><path d="M18 6 6 18M6 6l12 12"/></svg>; }
export function PlayIcon(props: IconProps) { return <svg viewBox="0 0 24 24" aria-hidden="true" {...strokeProps} {...props}><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19Z"/></svg>; }
export function StarIcon(props: IconProps) { return <svg viewBox="0 0 24 24" aria-hidden="true" {...strokeProps} {...props}><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16Z"/></svg>; }
export function UsersIcon(props: IconProps) { return <svg viewBox="0 0 24 24" aria-hidden="true" {...strokeProps} {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>; }
export function ComponentIcon(props: IconProps) { return <svg viewBox="0 0 24 24" aria-hidden="true" {...strokeProps} {...props}><path d="m15.536 11.293 2.376-2.377a1 1 0 0 1 1.414 0l2.377 2.377a1 1 0 0 1 0 1.414l-2.377 2.377a1 1 0 0 1-1.414 0l-2.376-2.377a1 1 0 0 1 0-1.414ZM2.297 11.293l2.377-2.377a1 1 0 0 1 1.414 0l2.377 2.377a1 1 0 0 1 0 1.414l-2.377 2.377a1 1 0 0 1-1.414 0l-2.377-2.377a1 1 0 0 1 0-1.414ZM8.916 17.912l2.377-2.376a1 1 0 0 1 1.414 0l2.377 2.376a1 1 0 0 1 0 1.415l-2.377 2.376a1 1 0 0 1-1.414 0l-2.377-2.376a1 1 0 0 1 0-1.415ZM8.916 4.674l2.377-2.377a1 1 0 0 1 1.414 0l2.377 2.377a1 1 0 0 1 0 1.414l-2.377 2.376a1 1 0 0 1-1.414 0L8.916 6.088a1 1 0 0 1 0-1.414Z"/></svg>; }
export function PanelsIcon(props: IconProps) { return <svg viewBox="0 0 24 24" aria-hidden="true" {...strokeProps} {...props}><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M9 21V9"/></svg>; }
export function WalletIcon(props: IconProps) { return <svg viewBox="0 0 24 24" aria-hidden="true" {...strokeProps} {...props}><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>; }
export function XBrandIcon(props: IconProps) { return <svg viewBox="0 0 24 24" role="img" aria-label="X" {...props}><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932Zm-1.291 19.491h2.039L6.486 3.24H4.298Z"/></svg>; }

