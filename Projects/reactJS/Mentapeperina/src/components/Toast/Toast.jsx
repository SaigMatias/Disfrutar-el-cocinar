import { Toaster } from "react-hot-toast";

export function Toast() {
  return (
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#363636",
            color: "#fff",
            padding: "1rem 3rem",
            filter: "drop-shadow(0 5px 5px rgba(30,30,30,0.3))",
            fontWeight: "bold",
          },
        }}
      />
    </>
  );
}