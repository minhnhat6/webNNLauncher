"use client";

import Image from "next/image";
import { useRef, useState, type PointerEvent } from "react";

import styles from "./streamline-hero.module.css";

const workflowPreviewAsset =
  "/sites/pro-ui-layouts-com-f03df40c/preview--streamline-hero-ff212995/nnlauncher-workflow.png";
const editorPreviewAsset =
  "/sites/pro-ui-layouts-com-f03df40c/preview--streamline-hero-ff212995/nnlauncher-editor-portrait.png";

export function WorkflowShowcase() {
  const stageRef = useRef<HTMLDivElement>(null);
  const stageBoundsRef = useRef<DOMRect | null>(null);
  const pointerFrameRef = useRef<number | null>(null);
  const [activePreview, setActivePreview] = useState<"workflow" | "editor">(
    "editor",
  );

  function cacheStageBounds() {
    stageBoundsRef.current = stageRef.current?.getBoundingClientRect() ?? null;
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const stage = stageRef.current;
    if (!stage) return;

    const bounds = stageBoundsRef.current;
    if (!bounds || pointerFrameRef.current !== null) return;

    const { clientX, clientY } = event;
    pointerFrameRef.current = requestAnimationFrame(() => {
      const horizontal = (clientX - bounds.left) / bounds.width - 0.5;
      const vertical = (clientY - bounds.top) / bounds.height - 0.5;

      stage.style.setProperty("--workflow-rotate-x", `${vertical * -5}deg`);
      stage.style.setProperty("--workflow-rotate-y", `${horizontal * 8}deg`);
      stage.style.setProperty("--workflow-glow-x", `${(horizontal + 0.5) * 100}%`);
      stage.style.setProperty("--workflow-glow-y", `${(vertical + 0.5) * 100}%`);
      pointerFrameRef.current = null;
    });
  }

  function resetPerspective() {
    const stage = stageRef.current;
    if (!stage) return;

    if (pointerFrameRef.current !== null) {
      cancelAnimationFrame(pointerFrameRef.current);
      pointerFrameRef.current = null;
    }
    stageBoundsRef.current = null;

    stage.style.setProperty("--workflow-rotate-x", "2deg");
    stage.style.setProperty("--workflow-rotate-y", "-3deg");
    stage.style.setProperty("--workflow-glow-x", "52%");
    stage.style.setProperty("--workflow-glow-y", "35%");
  }

  return (
    <section className={styles.workflowShowcase}>
      <div className={styles.workflowShowcaseHeader}>
        <div>
          <span className={styles.workflowEyebrow}>NNLauncher Workflow</span>
          <h3 className={styles.workflowTitle}>Một quy trình. Mọi công cụ.</h3>
        </div>
        <p className={styles.workflowDescription}>
          Kết nối các tác vụ AI và tự động hóa toàn bộ quy trình xử lý video
          trên một giao diện trực quan.
        </p>
      </div>

      <div
        className={styles.workflowStage}
        onPointerEnter={cacheStageBounds}
        onPointerLeave={resetPerspective}
        onPointerMove={handlePointerMove}
        ref={stageRef}
      >
        <div className={styles.workflowOrbit} aria-hidden="true" />
        <div className={styles.workflowDepthPlate} aria-hidden="true" />
        <button
          aria-label="Đưa giao diện tự động hóa lên phía trước"
          aria-pressed={activePreview === "workflow"}
          className={`${styles.workflowShowcaseFrame} ${styles.workflowFrameBack} ${
            activePreview === "workflow"
              ? styles.workflowFrameActive
              : styles.workflowFrameInactive
          }`}
          onClick={() => setActivePreview("workflow")}
          type="button"
        >
          <Image
            className={styles.workflowShowcaseImage}
            src={workflowPreviewAsset}
            alt="Giao diện tự động hóa quy trình video của NNLauncher"
            width={1889}
            height={1024}
            sizes="(max-width: 767px) 92vw, 72vw"
            draggable={false}
          />
          <div className={styles.workflowLight} aria-hidden="true" />
          <span className={styles.workflowSelectHint}>
            {activePreview === "workflow" ? "Đang xem" : "Nhấn để xem"}
          </span>
        </button>
        <button
          aria-label="Đưa giao diện chỉnh sửa video lên phía trước"
          aria-pressed={activePreview === "editor"}
          className={`${styles.workflowShowcaseFrame} ${styles.workflowFrameFront} ${
            activePreview === "editor"
              ? styles.workflowFrameActive
              : styles.workflowFrameInactive
          }`}
          onClick={() => setActivePreview("editor")}
          type="button"
        >
          <Image
            className={styles.workflowShowcaseImage}
            src={editorPreviewAsset}
            alt="Giao diện chỉnh sửa video và tạo phụ đề của NNLauncher"
            width={1889}
            height={1023}
            loading="eager"
            sizes="(max-width: 767px) 92vw, 76vw"
            draggable={false}
          />
          <div className={styles.workflowLight} aria-hidden="true" />
          <span className={styles.workflowSelectHint}>
            {activePreview === "editor" ? "Đang xem" : "Nhấn để xem"}
          </span>
        </button>
        <div className={`${styles.workflowFloatTag} ${styles.workflowFloatTop}`}>
          <span className={styles.workflowLiveDot} />
          Live workflow
        </div>
        <div
          className={`${styles.workflowFloatTag} ${styles.workflowFloatBottom}`}
        >
          Video editor
        </div>
      </div>
    </section>
  );
}
