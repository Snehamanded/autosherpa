export async function getCarStock() {
  const res = await fetch("http://localhost:8000/car-stock");
  return await res.json();
}
