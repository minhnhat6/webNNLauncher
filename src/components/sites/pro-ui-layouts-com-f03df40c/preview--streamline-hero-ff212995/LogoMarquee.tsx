import Image from "next/image";
import type { CSSProperties } from "react";

import type { StreamlineLogoItem } from "./types";

import styles from "./streamline-hero.module.css";

const assetRoot =
  "/sites/pro-ui-layouts-com-f03df40c/preview--streamline-hero-ff212995/images";

const logos: StreamlineLogoItem[] = [
  { src: `${assetRoot}/doordash.png`, alt: "booking" },
  { src: `${assetRoot}/eventbrite.png`, alt: "booking" },
  { src: `${assetRoot}/smeg.png`, alt: "booking" },
  { src: `${assetRoot}/surveymonkey.png`, alt: "booking" },
  { src: `${assetRoot}/netflix.png`, alt: "booking" },
  { src: `${assetRoot}/zapier.png`, alt: "booking" },
];

const maskStops = [
  ["0%", "11.1111%", "22.2222%", "33.3333%"],
  ["11.1111%", "22.2222%", "33.3333%", "44.4444%"],
  ["22.2222%", "33.3333%", "44.4444%", "55.5556%"],
  ["33.3333%", "44.4444%", "55.5556%", "66.6667%"],
  ["44.4444%", "55.5556%", "66.6667%", "77.7778%"],
  ["55.5556%", "66.6667%", "77.7778%", "88.8889%"],
  ["66.6667%", "77.7778%", "88.8889%", "100%"],
  ["77.7778%", "88.8889%", "100%", "111.111%"],
] as const;

function ProgressiveBlur({ side }: { side: "left" | "right" }) {
  const angle = side === "left" ? "90deg" : "270deg";

  return (
    <div
      aria-hidden="true"
      className={`${styles.blurEdge} ${
        side === "left" ? styles.blurLeft : styles.blurRight
      }`}
    >
      {maskStops.map(([start, opaqueStart, opaqueEnd, end], index) => {
        const maskImage = `linear-gradient(${angle}, rgba(255, 255, 255, 0) ${start}, rgb(255, 255, 255) ${opaqueStart}, rgb(255, 255, 255) ${opaqueEnd}, rgba(255, 255, 255, 0) ${end})`;
        const stripStyle: CSSProperties = {
          backdropFilter: `blur(${index}px)`,
          maskImage,
          WebkitMaskImage: maskImage,
        };

        return (
          <div
            className={styles.blurStrip}
            key={`${side}-${index}`}
            style={stripStyle}
          />
        );
      })}
    </div>
  );
}

export function LogoMarquee() {
  return (
    <section className={styles.marqueeSection}>
      <div className={styles.marqueeTrack}>
        {Array.from({ length: 4 }, (_, groupIndex) => (
          <div
            aria-hidden={groupIndex > 0 ? true : undefined}
            className={styles.marqueeGroup}
            key={groupIndex}
          >
            {logos.map((logo) => (
              <div className={styles.logoItem} key={logo.src}>
                <Image
                  alt={logo.alt}
                  className={styles.logo}
                  height={400}
                  src={logo.src}
                  width={400}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      <ProgressiveBlur side="left" />
      <ProgressiveBlur side="right" />
    </section>
  );
}
