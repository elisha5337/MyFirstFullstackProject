import React, { useState } from "react";
import quotes from "./quotes";
import "./Quote.css";
import "./bootstrap.css";
import Card from "./QuoteCard.jsx";
import { Link } from "react-router";
import Home from "../TodoApp/Home.jsx";

function Quote() {
  const [quotea, setQuote] = useState(""); // Initialize as an empty string
  const [author, setAuthor] = useState("");
  const [count, setCount] = useState(0);

  const prevous = () => {
    if (count > 0) {
      setCount(count - 1);
      const data = quotes.data[count - 1];
      setQuote(data.quote);
      setAuthor(data.author);
    }
  };

  const change = () => {
    if (count < quotes.data.length) {
      const data = quotes.data[count];
      setQuote(data.quote);
      setAuthor(data.author);
      setCount(count + 1);
    } else {
      setQuote("All quotes have been visited");
      setAuthor(""); // Clear author when all quotes are visited
    }
  }; 
  return (
    <>
      <div>
        <Card quote={quotea} author={author} count={count} />
      </div>

      <div className="text-center">
        
      <button
          className="btn btn-primary btn-outline-danger btn-lg"
          onClick={prevous}
          disabled={count <= 0} // Disable button if at the first quote
        >
          See previous
        </button>
        <button
          className="btn btn-primary btn-outline-danger btn-lg"
          onClick={change}
          disabled={count >= quotes.data.length} // Disable button if all quotes are visited
        >
          {count < quotes.data.length ? "See next" : "You finished visiting"}
        </button>
      </div>
      <div className="text-center">
        <Link to="/"className="btn btn-primary back">Go Back to Home</Link>
      </div>
    </>
  );
}

export default Quote;
