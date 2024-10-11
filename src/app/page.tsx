"use client";

import { useState } from "react";
import axios from "axios";
import "./globals.css";
import "./assets/no-face-avatar.svg";
import "./assets/spirited-away-night-sky.jpg";
import { PiCursorClickLight } from "react-icons/pi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [response, setResponse] = useState<string>("*Stares intensely at you*");
  const [value, setValue] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const handleSubmit = async () => {
    try {
      const response = (await axios.post("/chat", { question: value })).data
        .choices[0].message.content;
      setResponse(response);
    } catch (e) {
      throw setResponse(`${e} - See console for more details.`);
    }
  };

  return (
    <div className="container flex justify-center items-center w-fll m-auto mt-2 p-2">
      <div id="items" className="">
        <div className="border rounded-md shadow-md p-4 mb-4">
          <input
            type="text"
            value={value}
            onChange={onChange}
            className="w-full p-2 mt-2 mb-2 rounded-md h-[52px] border border-gray-400"
          ></input>
          <button
            onClick={handleSubmit}
            className="bg-blue-700 text-black text-lg rounded-md p-2 w-full hover:bg-yellow-300 flex justify-center items-center"
          >
            Ask me a question
            <PiCursorClickLight className="ml-1" />
          </button>
        </div>
        <div className="flex items-center border border-y-gray-500 rounded-md shadow-xl">
          <svg
            width="75"
            height="75"
            className="bg-chatbot-avatar bg-contain m-2 bg-no-repeat"
          ></svg>
          <div className="mx-2 text-white">{response}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
