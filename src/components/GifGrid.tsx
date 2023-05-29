import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

interface GigGridProps {
  category: string;
}

interface ImageProps {
  id: string;
  title: string;
  url: string;
}

export const GifGrid: React.FC<GigGridProps> = (props) => {
  const { images, isLoading } = useFetchGifs(props.category);

  return (
    <>
      <h3>{props.category}</h3>
      {isLoading && <h2>Cargando...</h2>}

      <div className="card-grid">
        {images.map((image: ImageProps) => (
          <GifItem key={image.id} {...image}></GifItem>
        ))}
      </div>
    </>
  );
};
