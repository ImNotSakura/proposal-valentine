"use client";
import { useState } from "react";

export default function ValentinePage() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "EW NO GO AWAY",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "What about we go get some ramen? :3",
      "What about a matcha latte?",
      "PLEASE POOKIE",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to my ghost",
      "please babe",
      "Im sorry I took so long to ask you",
      "PRETTY PLEASE",
      "Im shooting my shot",
      ":<",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-white">
      {yesPressed ? (
        <>
          <img 
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExenBrcjluamJwdGUzdzBwdmlkdDBxdmhzYmY5OHpvY240NjZsZXBrNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vDhDcIEmShbUI/giphy.gif" 
            alt="Bear Kissing" 
          />
          <div className="my-4 text-4xl font-bold text-pink-600">
            Thx Queen !!! ❤️ I hope you have a great valentines this year! ;))
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWdjdTZycGR5YmJrNGV4OTF4bGJ4N3ozNHcwbzJiM2V1ZXBvZHc0cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6nWhy3ulBL7GSCvKw6/giphy.gif"
            alt="Bear with Roses"
          />
          <h1 className="my-4 text-4xl font-bold">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className="mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
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
