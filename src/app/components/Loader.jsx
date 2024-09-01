// components/Loader.js
import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="spinner"></div>
      <style jsx>{`
        .spinner {
          border: 4px solid rgba(0, 0, 0, 0.1);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border-left-color: #09f;
          animation: spin 1s ease infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

// export default Loader;

export const LoadingOverlay = () => {
  return (
    <div
      className={`flex items-center justify-center overflow-hidden z-50 fixed top-0 left-0 w-full h-full bg-black/50 text-white p-2 transition-all duration-300`}
    >
      <Loader />
    </div>
  );
};
