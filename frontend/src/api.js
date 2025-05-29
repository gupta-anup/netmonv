export async function fetchPackets() {
  const res = await fetch("http://localhost:8000/api/packets");
  return res.json();
}
