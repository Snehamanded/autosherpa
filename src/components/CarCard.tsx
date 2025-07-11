
import React from 'react';
import { Car, Fuel, Settings, MapPin } from 'lucide-react';

interface Car {
  id: string;
  name: string;
  year: number;
  price: string;
  mileage: string;
  fuel: string;
  transmission: string;
  color?: string;
  ownership?: number;
}

interface CarCardProps {
  car: Car;
}

export const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start space-x-4">
        {/* Car Image Placeholder */}
        <div className="flex-shrink-0 w-24 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
          <Car className="h-8 w-8 text-gray-400" />
        </div>
        
        {/* Car Details */}
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-semibold text-gray-900">{car.name} {car.year}</h4>
              <p className="text-lg font-bold text-blue-600">{car.price}</p>
            </div>
            {car.ownership && (
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                {car.ownership} Owner
              </span>
            )}
          </div>
          
          <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>{car.mileage}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Fuel className="h-4 w-4" />
              <span>{car.fuel}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Settings className="h-4 w-4" />
              <span>{car.transmission}</span>
            </div>
          </div>
          
          {car.color && (
            <p className="mt-2 text-sm text-gray-600">Color: {car.color}</p>
          )}
        </div>
      </div>
    </div>
  );
};
