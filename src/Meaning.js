import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definition.maps(function (definitions, index) {
        <div key={index}>
          <p>{definitions.definition}</p>
          <p>{definitions.example}</p>
        </div>;
      })}
    </div>
  );
}
