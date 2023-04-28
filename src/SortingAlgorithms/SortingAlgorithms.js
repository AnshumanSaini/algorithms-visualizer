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
  let i=l;
  let k=l;
  let j=m+1;
  let auxiliary = piles.slice();

  while(i<=m && j<=r)
  {
    if(auxiliary[i]<=auxiliary[j])
    {
      piles[k]=auxiliary[i];
      const temp = {piles: piles.slice(), changing: [k, j]};
      statesInOrder.push(temp);
      ++k;
      ++i;
    }
    else
    {
      piles[k]=auxiliary[j];
      const temp = {piles: piles.slice(), changing: [k, j]};
      statesInOrder.push(temp);
      ++j;
      ++k;
    }
  }

  while(i<=m)
  {
    piles[k]=auxiliary[i];
    const temp = {piles: piles.slice(), changing: [k, i]};
    statesInOrder.push(temp);
    ++i;
    ++k;
  }

  while(j<=r)
  {
    piles[k]=auxiliary[j];
    const temp = {piles: piles.slice(), changing: [k, j]};
    statesInOrder.push(temp);
    ++j;
    ++k;
  }
}

function quickSort(piles) {
  let statesInOrder = [];
  
  return statesInOrder;
}

export { selectionSort, bubbleSort, insertionSort, mergeSort, quickSort, swap };