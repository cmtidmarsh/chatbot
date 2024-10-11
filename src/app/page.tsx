"use client";

import { useState } from "react";
import axios from "axios";
import "./globals.css";
import "./assets/no-face-avatar.svg";
import "./assets/spirited-away-night-sky.jpg";
import { PiCursorClickLight } from "react-icons/pi";

const App = () => {
  const [response, setResponse] = useState<string>("*Stares intensely at you*");
  const [value, setValue] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);
  let isLoading: boolean = false;

  const handleSubmit = async () => {
    try {
      isLoading = true;

      if (isLoading == true) {
        setResponse("Just a moment...");
      }
      const response = (await axios.post("/chat", { question: value })).data
        .choices[0].message.content;
      setResponse(response);
    } catch (e) {
      isLoading = false;
      throw setResponse(`${e} - See console for more details.`);
    }
  };

  return (
    <div className="flex justify-center items-center w-full m-auto mt-2 p-2">
      <div id="items" className="">
        <div className="border-4 border-blue-300  rounded-md shadow-md p-4 mb-4">
          <input
            type="text"
            value={value}
            onChange={onChange}
            className="w-full p-2 mt-2 mb-2 rounded-md h-[52px] border-2 border-gray-300 bg-slate-100 shadow-lg"
          ></input>
          <button
            onClick={handleSubmit}
            className="bg-blue-700 text-black text-lg rounded-md p-2 w-full hover:bg-yellow-300 flex justify-center items-center shadow-md font-mono"
          >
            Ask me a question
            <PiCursorClickLight className="ml-1" />
          </button>
        </div>
        <div className="flex items-center border-4 border-blue-300 rounded-md shadow-xl">
          <svg
            width="75"
            height="75"
            className="bg-chatbot-avatar bg-contain m-2 bg-no-repeat"
          ></svg>
          <div className="mx-2 text-white font-mono">{response}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
