import React, { useState, useEffect } from "react";
import "./App.css";

const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=60",
  },
  {
    text: "Stay hungry, stay foolish.",
    author: "Steve Jobs",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
  },
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60",
  },
  {
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=60",
  },
  {
    text: "Code is like humor. When you have to explain it, it’s bad.",
    author: "Cory House",
    image:
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=60",
  },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
    image:
      "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?auto=format&fit=crop&w=800&q=60",
  },
  {
    text: "Experience is the name everyone gives to their mistakes.",
    author: "Oscar Wilde",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=60",
  },
  {
    text:
      "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=60",
  },
  {
    text:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60",
  },
];

function App() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const getNewQuote = () => {
    setFade(false);
    setTimeout(() => {
      let rand;
      do {
        rand = Math.floor(Math.random() * quotes.length);
      } while (rand === index);
      setIndex(rand);
      setFade(true);
    }, 350);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getNewQuote();
    }, 16000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div
      className="app-container"
      style={{
        backgroundImage: `url(${quotes[index].image})`,
      }}
    >
      <div className={`quote-box ${fade ? "fade-in" : "fade-out"}`}>
        <div className="quote-icon">❝</div>
        <h1 className="quote-text">“{quotes[index].text}”</h1>
        <p className="quote-author">— {quotes[index].author}</p>
        <button className="new-quote-btn" onClick={getNewQuote} aria-label="Next Quote">
          Next Quote <span className="arrow">→</span>
        </button>
      </div>
      <footer className="footer">Made with ❤️ by React</footer>
    </div>
  );
}

export default App;
