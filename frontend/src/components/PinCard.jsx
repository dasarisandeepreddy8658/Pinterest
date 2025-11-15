import React from "react";
import { Link } from "react-router-dom";

const PinCard = ({ pin }) => {
  return (
    <Link to={`/pin/${pin._id}`} className="m-4">
      <div className="w-64 h-64 bg-gray-200 rounded-lg overflow-hidden shadow">
        {pin.image?.url ? (
          <img
            src={pin.image.url}
            alt={pin.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}
      </div>

      <h2 className="mt-2 text-lg font-semibold">{pin.title}</h2>
    </Link>
  );
};

export default PinCard;
