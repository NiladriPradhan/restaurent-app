import { useEffect, useState } from "react";

const NetworkStatusWarning = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    !isOnline && (
      <div className="bg-red-500 text-white text-center p-2 fixed top-0 left-0 w-full z-50">
        ⚠️ Please connect your network
      </div>
    )
  );
};

export default NetworkStatusWarning;
