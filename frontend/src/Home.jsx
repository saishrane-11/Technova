import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]); // State for storing restaurant data
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error
  const [token, setToken] = useState("")

  // Fetch restaurant data on component mount
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/restaurants",{headers:token}); // Replace with your API endpoint
        setRestaurants(response.data); // Update state with fetched data
      } catch (err) {
        console.error("Error fetching restaurant data:", err);
        setError("Failed to fetch restaurant data");
      } finally {
        setLoading(false); // Set loading to false once fetch is complete
      }
    };

    fetchRestaurants();
  }, []);

  // Render loading, error, or data
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Restaurants</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-lg bg-white"
          >
            <h2 className="text-xl font-semibold mb-2">{restaurant.name}</h2>
            <p className="text-gray-700 mb-2">
              <strong>Description:</strong> {restaurant.description}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Location:</strong> Lat: {restaurant.location.latitude}, Lon: {restaurant.location.longitude}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Cuisine:</strong> {restaurant.cuisine.join(", ")}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Price:</strong> ${restaurant.price}
            </p>
            <p className="text-gray-700">
              <strong>Ratings:</strong> {restaurant.ratings} (Reviews: {restaurant.numOfReviews})
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
