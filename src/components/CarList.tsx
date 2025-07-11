import { useEffect, useState } from "react";

interface Car {
  id: number;
  Brand: string;
  Model: string;
  Variant: string;
  Fuel_Type: string;
  Year: number;
  Purchase_Price: number;
}

export default function CarList() {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/car-stock")
      .then(res => res.json())
      .then(setCars)
      .catch(console.error);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🚗 Available Cars</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cars.map(car => (
          <div key={car.id} className="border rounded-xl p-4 shadow bg-white">
            <h2 className="text-lg font-semibold">{car.Brand} {car.Model}</h2>
            <p><strong>Variant:</strong> {car.Variant}</p>
            <p><strong>Fuel:</strong> {car.Fuel_Type}</p>
            <p><strong>Year:</strong> {car.Year}</p>
            <p><strong>Price:</strong> ₹{car.Purchase_Price.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
