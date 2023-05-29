import React from "react";

interface ItemProps {
  id: string;
  title: string;
  url: string;
}

export const GifItem: React.FC<ItemProps> = (props) => {
  return (
    <>
      <div className="card">
        <img src={props.url} alt={props.title}></img>
        <p>{props.title}</p>
      </div>
    </>
  );
};
