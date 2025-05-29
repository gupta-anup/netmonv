import React, { useEffect, useState } from "react";
import { fetchPackets } from "./api";
import PacketTable from "./components/PacketTable";

function App() {
  const [packets, setPackets] = useState([]);

  useEffect(() => {
    const interval = setInterval(async () => {
      const data = await fetchPackets();
      setPackets(data);
    }, 1000); // poll every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 p-4">
      <h1 className="text-2xl font-bold mb-4">Network Monitor</h1>
      <PacketTable packets={packets} />
    </div>
  );
}

export default App;
