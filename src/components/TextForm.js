import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpperCaseClick = () => {
    let upperText = text.toUpperCase();
    setText(upperText);
    props.showAlert("Converted to UPPERCASE.", "success");
  };
  const handleLowerCaseClick = () => {
    let upperText = text.toLowerCase();
    setText(upperText);
    props.showAlert("Converted to lowercase.", "success");
  };
  const handleClearClick = () => {
    let upperText = "";
    setText(upperText);
    props.showAlert("Textarea cleared.", "success");
  };

  const handleCopy = () => {
    // let text = document.getElementById("myBox");
    // text.select();
    // navigator.clipboard.writeText(text.value);
    navigator.clipboard.writeText(text);
    props.showAlert("copied to clipboard !", "success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed.", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#353f42",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpperCaseClick}
        >
          Convert to UPPERCASE
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLowerCaseClick}
        >
          Convert to lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Textarea
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpace}
        >
          Remove Extra Space
        </button>
      </div>

      <div
        className="comtainer my-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h3>Your text summary</h3>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words & {text.length} characters.
        </p>

        <p>
          {0.01 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read.
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview !"}</p>
      </div>
    </>
  );
}
