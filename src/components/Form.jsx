import React, { useEffect, useState } from "react";
import { useRef } from "react";
import Show from "./Show";

function Form() {
  const [range, setRange] = useState(20);
  const [upperLetters, setUpperLetters] = useState(false);
  const [lowerLetters, setLowerLetters] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [pW, setPW] = useState("s$aEf-e!");
  //functions
  const handleFor = (num, arr1, arr2) => {
    for (let i = 0; i < num; i++) {
      arr1.push(arr2[Math.floor(Math.random() * arr2.length)]);
    }
  };

  //library
  const lowerLettersLibrary = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
  ];
  const upperLettersLibrary = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
  ];
  const numbersLibrary = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const symbolsLibrary = ["$", "_", "-", "&"];

  //password Length
  const pwLength = useRef();

  let password = [];

  const handleSubmit = (e) => {
    e.preventDefault();

    const bool = [upperLetters, lowerLetters, numbers, symbols];
    const check = [];

    bool.forEach((d) => {
      if (d) {
        check.push(d);
      }
    });
    //keys
    let demoPassword = [];
    const nums = [];
    const upps = [];
    const lows = [];
    const syms = [];

    //check process

    if (check.length >= 4 && range > 4) {
      const limit = pwLength.current.value - 4;
      const num1 = Math.floor(Math.random() * (limit + 1)) + 1;
      const num2 = Math.floor(Math.random() * (limit + 1 - num1)) + 1;
      const num3 = Math.floor(Math.random() * (limit + 1 - (num1 + num2))) + 1;
      const num4 = limit + 4 - (num1 + num2 + num3);

      //lower
      handleFor(num1, lows, lowerLettersLibrary);
      handleFor(num2, upps, upperLettersLibrary);
      handleFor(num3, nums, numbersLibrary);
      handleFor(num4, syms, symbolsLibrary);
      demoPassword.push(...lows, ...nums, ...upps, ...syms);
    } else if (check.length >= 3 && range >= 3) {
      const limit = pwLength.current.value - 3;
      const num1 = Math.floor(Math.random() * (limit + 1)) + 1;
      const num2 = Math.floor(Math.random() * (limit + 1 - num1)) + 1;
      const num3 = limit + 3 - (num1 + num2);

      if (!upperLetters) {
        handleFor(num1, lows, lowerLettersLibrary);
        handleFor(num2, nums, numbersLibrary);
        handleFor(num3, syms, symbolsLibrary);
        demoPassword.push(...lows, ...nums, ...syms);
      } else if (!lowerLetters) {
        handleFor(num1, upps, upperLettersLibrary);
        handleFor(num2, nums, numbersLibrary);
        handleFor(num3, syms, symbolsLibrary);
        demoPassword.push(...nums, ...upps, ...syms);
      } else if (!numbers) {
        handleFor(num1, lows, lowerLettersLibrary);
        handleFor(num2, upps, upperLettersLibrary);
        handleFor(num3, syms, symbolsLibrary);
        demoPassword.push(...lows, ...upps, ...syms);
      } else if (!symbols) {
        handleFor(num1, lows, lowerLettersLibrary);
        handleFor(num2, upps, upperLettersLibrary);
        handleFor(num3, nums, numbersLibrary);
        demoPassword.push(...lows, ...nums, ...upps);
      }
    } else if (check.length >= 2 && range >= 2) {
      const limit = pwLength.current.value - 2;
      const num1 = Math.floor(Math.random() * (limit + 1)) + 1;
      const num2 = limit + 2 - num1;
      if (!upperLetters) {
        if (!lowerLetters) {
          handleFor(num1, nums, numbersLibrary);
          handleFor(num2, syms, symbolsLibrary);
          demoPassword.push(...nums, ...syms);
        } else if (!numbers) {
          handleFor(num1, lows, lowerLettersLibrary);
          handleFor(num2, syms, symbolsLibrary);
          demoPassword.push(...lows, ...syms);
        } else if (!symbols) {
          handleFor(num1, nums, numbersLibrary);
          handleFor(num2, lows, lowerLettersLibrary);
          demoPassword.push(...lows, ...nums);
        }
      } else if (!lowerLetters) {
        if (!upperLetters) {
          handleFor(num1, nums, numbersLibrary);
          handleFor(num2, syms, symbolsLibrary);
          demoPassword.push(...nums, ...syms);
        } else if (!numbers) {
          handleFor(num1, upps, upperLettersLibrary);
          handleFor(num2, syms, symbolsLibrary);
          demoPassword.push(...upps, ...syms);
        } else if (!symbols) {
          handleFor(num1, nums, numbersLibrary);
          handleFor(num2, upps, upperLettersLibrary);
          demoPassword.push(...upps, ...nums);
        }
      } else if (!numbers) {
        if (!upperLetters) {
          handleFor(num1, lows, lowerLettersLibrary);
          handleFor(num2, syms, symbolsLibrary);
          demoPassword.push(...lows, ...syms);
        } else if (!lowerLetters) {
          handleFor(num1, upps, upperLettersLibrary);
          handleFor(num2, syms, symbolsLibrary);
          demoPassword.push(...upps, ...syms);
        } else if (!symbols) {
          handleFor(num1, lows, lowerLettersLibrary);
          handleFor(num2, upps, upperLettersLibrary);
          demoPassword.push(...upps, ...lows);
        }
      } else {
        if (!lowerLetters) {
          handleFor(num1, nums, numbersLibrary);
          handleFor(num2, upps, upperLettersLibrary);
          demoPassword.push(...upps, ...nums);
        } else if (!numbers) {
          handleFor(num1, lows, lowerLettersLibrary);
          handleFor(num2, upps, upperLettersLibrary);
          demoPassword.push(...upps, ...lows);
        } else if (!upperLetters) {
          handleFor(num1, nums, numbersLibrary);
          handleFor(num2, lows, lowerLettersLibrary);
          demoPassword.push(...lows, ...nums);
        }
      }
    } else if (check.length >= 1 && range >= 1) {
      const num1 = pwLength.current.value;
      if (lowerLetters) {
        handleFor(num1, lows, lowerLettersLibrary);
        demoPassword.push(...lows);
      } else if (upperLetters) {
        handleFor(num1, upps, upperLettersLibrary);
        demoPassword.push(...upps);
      } else if (numbers) {
        handleFor(num1, nums, numbersLibrary);
        demoPassword.push(...nums);
      } else {
        handleFor(num1, syms, symbolsLibrary);
        demoPassword.push(...syms);
      }
      // return num1;
    } else {
      handleFor(pwLength.current.value, lows, lowerLettersLibrary);
      demoPassword.push(...lows);
    }

    const dpl = demoPassword.length;
    password = [];

    for (let i = 0; i < dpl; i++) {
      const random = Math.floor(Math.random() * demoPassword.length);
      password.push(demoPassword[random]);
      demoPassword.splice(random, 1);
    }

    let a = "";
    password.forEach((p) => {
      a = a + p;
    });
    setPW(a);
  };

  return (
    <div className=" text-[#E6E5EA]">
      <Show pw={pW} />
      <div className="bg-[#24232C] px-[32px] py-[24px]">
        <div className="flex items-center justify-between">
          <p className="text-sm">Character Length</p>
          <h1 className="text-[#A4FFAF]">{range}</h1>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label>
            <input
              ref={pwLength}
              onChange={(e) => {
                setRange(e.target.value);
              }}
              type="range"
              min="0"
              max="20"
              step="1"
            />
          </label>
          <label>
            <input
              onClick={() =>
                upperLetters ? setUpperLetters(false) : setUpperLetters(true)
              }
              type="checkbox"
            />
            <span>Include Uppercase Letters</span>
          </label>
          <label>
            <input
              onClick={() =>
                lowerLetters ? setLowerLetters(false) : setLowerLetters(true)
              }
              type="checkbox"
            />
            <span>Include Lowercase Letters</span>
          </label>
          <label>
            <input
              onClick={() => (numbers ? setNumbers(false) : setNumbers(true))}
              type="checkbox"
            />
            <span>Include Numbers</span>
          </label>
          <label className="pb-[32px]">
            <input
              onClick={() => (symbols ? setSymbols(false) : setSymbols(true))}
              type="checkbox"
            />
            <span>Include Symbols</span>
          </label>

          <button className="hover:bg-transparent hover:text-[#a4ffaf] hover:border hover:border-[#a4ffaf] p-[8px] text-sm text-[#24232c] bg-[#a4ffaf]">
            Generate
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
