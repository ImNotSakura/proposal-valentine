"use client";
import { useState } from "react";

export default function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No", "Are you sure?", "What if I asked really nicely?", "Pretty please",
      "What about we get some ramen?", "What about a matcha latte?",
      "PLEASE POOKIE", "But :*(", "I am going to die", "Yep im dead",
      "ok ur talking to my ghost", "please babe", "Im shooting my shot here",
      "PRETTY PLEASE", "Sorry I took so long :<", "Ill be sad",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-white px-4 text-center">
      {yesPressed ? (
        <>
          <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHU0ZmJmeWljbzl1MXU1MHVic29pYWpvcHI1dDJ4ZDdmdTQxNDRuaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6nWhy3ulBL7GSCvKw6/giphy.gif" alt="Success" />
          <div className="my-4 text-4xl font-bold text-pink-600">Thx Queen !!! ❤️ I hope you have a great valentines this year!</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExenBrcjluamJwdGUzdzBwdmlkdDBxdmhzYmY5OHpvY240NjZsZXBrNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vDhDcIEmShbUI/giphy.gif"
            alt="Asking"
          />
          <h1 className="my-4 text-4xl font-bold">Pikachu is waiting for your answer :3</h1>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
