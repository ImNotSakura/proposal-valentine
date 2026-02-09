"use client";
import React, { useState } from "react";

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
      "With a chocolate rice cake on top", "What about a matcha frostie",
      "PLEASE POOKIE", "But :*(", "I am going to die", "Yep im dead",
      "ok ur talking to nathan's ghost", "please babe", ":((((",
      "PRETTY PLEASE", "Estoy muerto", "No :(",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-white px-4 text-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="Success" />
          <div className="my-4 text-4xl font-bold text-pink-600">WOOOOOO!!! I love you pookie!! ;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="Asking"
          />
          <h1 className="my-4 text-4xl font-bold">Will you be my Valentine?</h1>
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
