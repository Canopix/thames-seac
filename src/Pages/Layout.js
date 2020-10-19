import React from "react";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        background: "#3A9FF1",
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
