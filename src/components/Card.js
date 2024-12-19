import React from "react";

function Card({ title, content }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-200">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
    </div>
  );
}

export default Card;
