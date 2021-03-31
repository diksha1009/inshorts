import React from "react";

const Component = (props) => {
  return (
    <div className="container shadow bg-white rounded w-75" >
      <img
        className="rounded border border-dark"
        src={props.img_url}
        alt="img"
      />
      <h1>
        <small className="text-muted">{props.heading}</small>
      </h1>
      <p>
        <small>{props.sub_heading}</small>
      </p>
      <p>
        <em>{props.desc}</em>
      </p>
    </div>
  );
};

export default Component;
