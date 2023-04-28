import React, { useState } from "react";
import "./SortingStyle.css";
import { selectionSort, bubbleSort, insertionSort, mergeSort, quickSort } from "../SortingAlgorithms/SortingAlgorithms";

const Sorting = () => {
  const [currState, updateState] = useState([]);

  const resetArray = () => {
    let arr = [];
    for (let i = 0; i < 100; ++i) {
      arr.push(randomNumber(5, 1000));
    }
    updateState(arr);
  };

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const generateArray = () => {
    resetArray();
  };

  //Making call to various Sorting Algorithms in the "SortingAlgoritm.js" file
  const sSort = ()=>{
    sortTheArray(selectionSort(currState));
  }

  const mSort = ()=>{
    sortTheArray(mergeSort(currState));
  }

  const bSort = ()=>{
    sortTheArray(bubbleSort(currState));
  }

  const qSort = ()=>{
    sortTheArray(quickSort(currState));
  }

  const iSort = ()=>{
    sortTheArray(insertionSort(currState));
  }

  //This function perform the changes in the bar in the frontend.
  const sortTheArray = (arr) => {
    const ele = document.getElementsByClassName("bar");

    for (let i = 0; i < arr.length; ++i) {
      let element = arr[i];
      if (element.changing.length === 2) {
        const minInd = element.changing[0];
        const maxInd = element.changing[1];

        const minBarStyle = ele[minInd].style;
        const maxBarStyle = ele[maxInd].style;

        setTimeout(() => {
          setTimeout(() => {
            minBarStyle.backgroundColor = "red";
            maxBarStyle.backgroundColor = "red";
          }, i*5);
          const hmin = minBarStyle.height;
          const hmax = maxBarStyle.height;
          //console.log(`${hmin}`);
          maxBarStyle.height = `${hmin}`;
          minBarStyle.height = `${hmax}`;

          setTimeout(() => {
            minBarStyle.backgroundColor = "blueviolet";
            maxBarStyle.backgroundColor = "blueviolet";
          }, i*5);
          
        }, i * 5);
      }
    }
  };

  return (
    <div className="container">
      <div className="container-bar">
        <button className="btn btn-primary mx-2" onClick={generateArray}>
          Generate Array
        </button>
        <button className="btn btn-primary mx-2" onClick={sSort}>
          Selection Sort
        </button>
        <button className="btn btn-primary mx-2" onClick={mSort}>
          Merge Sort
        </button>
        <button className="btn btn-primary mx-2" onClick={iSort}>
          Insertion Sort
        </button>
        <button className="btn btn-primary mx-2" onClick={qSort}>
          Quick Sort
        </button>
        <button className="btn btn-primary mx-2" onClick={bSort}>
          Bubble Sort
        </button>
        <br />
        {currState.map((val, ind) => {
          return (
            <div className="bar" key={ind} style={{ height: `${val}px` }}></div>
          );
        })}
      </div>
    </div>
  );
};

export default Sorting;

// const hmin = minBarStyle.height;
//             const hmax = maxBarStyle.height;

//             maxBarStyle.height = `${hmin}px`
//             minBarStyle.height = `${hmax}px`
