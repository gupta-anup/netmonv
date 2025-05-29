import React from "react";

export default function PacketTable({ packets }) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Live Packet Data</h2>
      <table className="w-full text-sm border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Source IP</th>
            <th className="p-2 border">Destination IP</th>
            <th className="p-2 border">Protocol</th>
            <th className="p-2 border">Length</th>
          </tr>
        </thead>
        <tbody>
          {packets.map((pkt, i) => (
            <tr key={i} className="text-center border-t">
              <td className="p-2 border">{pkt.src}</td>
              <td className="p-2 border">{pkt.dst}</td>
              <td className="p-2 border">{pkt.proto}</td>
              <td className="p-2 border">{pkt.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
