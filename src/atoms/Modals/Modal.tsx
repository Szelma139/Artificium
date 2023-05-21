import { ReactNode } from "react";

const shadow =
  "0px 24px 64px -16px rgba(0, 0, 0, 0.24), inset 16px 24px 64px -24px rgba(255, 255, 255, 0.04), inset 0px 8px 12px rgba(255, 255, 255, 0.04)";

type PropType = {
  children?: ReactNode;
};
export const Modal = ({ children }: PropType) => {
  return (
    <div
      style={{
        left: "50%",
        top: "50%",
        position: "absolute",
        transform: "translate(-50%, -50%)",
        maxWidth: "540px",
        backgroundColor: "#1A1D21F4",
        boxShadow: shadow,
        borderRadius: "16px",
        padding: "2.5rem",
        border: "1px solid #ffffff14",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        {children}
      </div>
    </div>
  );
};
