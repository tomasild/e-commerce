import React, { useState, useEffect } from "react";
import CardUI from "../../components/Card";

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setItems(data.products))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Home</h1>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 m-4">
        {items?.map((item) => (
          <CardUI data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
