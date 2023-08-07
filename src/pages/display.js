import React from "react";
import { useLoaderData } from "react-router-dom";

export const imageLoader = async () => {
  const clientId = "hn9AB9ssfHtwEEYspleFrtZZcnS-X52aGiisoFKzhJY";

  const url = "https://api.unsplash.com/photos/random?client_id=" + clientId;
  const response = await fetch(url, {
    headers: {
      "Accept-Version": "v1",
    },
  });

  if (!response.ok) {
    throw Error("Could not fetch the image");
  }

  const imageData = await response.json();
  return imageData;
};

imageLoader();

const DisplayPage = () => {
  const imageData = useLoaderData();
  return (
    <div className="display">
      <h1>Display</h1>
      {imageData.urls && <img src={imageData.urls.regular} alt="Random" />}
    </div>
  );
};

export default DisplayPage;
