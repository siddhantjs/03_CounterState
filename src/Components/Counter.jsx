import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const increase = () => setCount(prev => prev + 1);
  const decrease = () => setCount(prev => (prev > 0 ? prev - 1 : 0));
  const reset = () => setCount(0);

  const setCounterFromInput = () => {
    setCount(Number(inputValue));
    setInputValue("");
  };

  return (
    <div className="relative w-80 p-6 rounded-3xl 
      bg-white/10 backdrop-blur-xl 
      shadow-[0_0_40px_rgba(0,0,0,0.6)] 
      border border-white/20
      hover:shadow-[0_0_60px_rgba(99,102,241,0.6)]
      transition-all duration-300">

      {/* Glow Effect */}
      <div className="absolute -inset-0.5 rounded-3xl 
        bg-gradient-to-r from-indigo-500/30 to-purple-500/30 
        blur-xl opacity-50 -z-10" />

      <h1 className="text-center text-2xl font-bold text-gray-100 tracking-wide">
        Counter
      </h1>

      <p className="text-center text-4xl font-extrabold text-indigo-400 mt-2">
        {count}
      </p>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={increase}
          className="counter-btn"
        >
          +
        </button>

        <button
          onClick={decrease}
          className="counter-btn"
        >
          −
        </button>

        <button
          onClick={reset}
          className="counter-btn text-red-400"
        >
          ⟳
        </button>
      </div>

      {/* Input Section */}
      <div className="flex gap-2 mt-6">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Set value"
          className="flex-1 p-2 rounded-xl bg-black/40 
            text-gray-200 outline-none 
            focus:ring-2 focus:ring-indigo-500
            backdrop-blur-md"
        />

        <button
          onClick={setCounterFromInput}
          disabled={inputValue === ""}
          className="px-4 rounded-xl bg-indigo-600/80 
            text-white font-semibold
            hover:bg-indigo-600
            transition disabled:opacity-40"
        >
          Set
        </button>
      </div>
    </div>
  );
};

export default Counter;
