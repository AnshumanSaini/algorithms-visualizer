function swap(piles, a, b) {
  const tempVal = piles[a];
  piles[a] = piles[b];
  piles[b] = tempVal;
}




function selectionSort(piles) {

  let statesInOrder = [];
  for (let i = 0; i < piles.length - 1; i++) {
      let minId = i;
      for (let j = i + 1; j < piles.length; j++) {
          if (piles[j] < piles[minId]) {
              minId = j;
          }
      }
      swap(piles, minId, i);
      const temp = { piles: piles.slice(), changing: [minId, i] };
      statesInOrder.push(temp);
  }
  return statesInOrder;
}




function bubbleSort(piles) {
  let statesInOrder = [];
  var n=piles.length;
  for(var i=0;i<n;++i)
  {
    for(var j=0;j<n-i-1;++j)
    {
      if(piles[j]>piles[j+1])
      {
        swap(piles, j, j+1);
        const temp = {piles: piles.slice(), changing: [j, j+1]};
        statesInOrder.push(temp);
      }
    }
  }
  
  return statesInOrder;
}




function insertionSort(piles) {
  let statesInOrder = [];
    for (let i = 1; i < piles.length; i++) {
        for (let j = i; j > 0 && piles[j - 1] > piles[j]; j--) {
            swap(piles, j, j - 1);
            const temp = { piles: piles.slice(), changing: [j - 1, j] };
            statesInOrder.push(temp);
        }
    }
    console.log(statesInOrder);
    return statesInOrder;
}




function mergeSort(piles) {
  let statesInOrder = [];
  mSort(piles, statesInOrder, 0, piles.length-1);
  return statesInOrder;
}

function mSort(piles, statesInOrder, l, r)
{
  if(l===r)
  {
    return;//returns recursively
  }
  const m = Math.floor((l + r) / 2);
  mSort(piles,statesInOrder,l,m);
  mSort(piles,statesInOrder,m+1,r);
  merge(piles,statesInOrder,l,m,r);
}

function merge(piles, statesInOrder, l, m, r)
{
  for (let i = l+1; i <= r; i++) 
  {
    for (let j = i; j > 0 && piles[j - 1] > piles[j]; j--) 
    {
      swap(piles, j, j - 1);
      const temp = { piles: piles.slice(), changing: [j - 1, j] };
      statesInOrder.push(temp);
    }
  }
}



function quickSort(piles) {
  let statesInOrder = [];
  doQuickSort(statesInOrder, 0, piles.length-1, piles);
  return statesInOrder;
}

function doQuickSort(statesInOrder, start, end, piles)
{
  if(start<end)
  {
    let pivot = partition(statesInOrder, start, end, piles);
    doQuickSort(statesInOrder, start, pivot-1, piles);
    doQuickSort(statesInOrder, pivot+1, end, piles);
  }
}

function partition(statesInOrder, start, end, piles)
{
  let pivot = piles[end];
  let i=start-1;

  for(let j=start;j<end;++j)
  {
    if(piles[j]<pivot)
    {
      ++i;
      swap(piles, i, j);
      const temp = {piles: piles.slice(), changing: [i, j]};
      statesInOrder.push(temp);
    }
  }
  swap(piles, i+1, end);
  const temp = {piles: piles.slice(), changing: [i+1, end]};
  statesInOrder.push(temp);

  return (i+1);

}

export { selectionSort, bubbleSort, insertionSort, mergeSort, quickSort, swap };