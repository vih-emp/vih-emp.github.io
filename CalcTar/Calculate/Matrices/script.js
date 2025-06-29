function parseMatrix(input) {
  return input.trim().split(';').map(row => row.split(',').map(Number));
}

function displayResult(res) {
  const el = document.getElementById('result');
  if (typeof res === "string") el.innerHTML = res;
  else if (Array.isArray(res))
    el.innerHTML = "<pre>" + res.map(r => r.join('\t')).join('\n') + "</pre>";
  else
    el.innerHTML = res;
}

function addMatrices() {
  try {
    const A = parseMatrix(document.getElementById('matrixA').value);
    const B = parseMatrix(document.getElementById('matrixB').value);
    if (A.length !== B.length || A[0].length !== B[0].length)
      return displayResult("Dimension mismatch.");
    let C = A.map((row,i)=>row.map((v,j)=>v+B[i][j]));
    displayResult(C);
  } catch { displayResult("Invalid input."); }
}

function multiplyMatrices() {
  try {
    const A = parseMatrix(document.getElementById('matrixA').value);
    const B = parseMatrix(document.getElementById('matrixB').value);
    let rowsA = A.length, colsA = A[0].length, rowsB = B.length, colsB = B[0].length;
    if (colsA !== rowsB)
      return displayResult("A's columns must match B's rows.");
    let C = Array(rowsA).fill().map(()=>Array(colsB).fill(0));
    for (let i=0;i<rowsA;i++)
      for (let j=0;j<colsB;j++)
        for (let k=0;k<colsA;k++)
          C[i][j] += A[i][k]*B[k][j];
    displayResult(C);
  } catch { displayResult("Invalid input."); }
}

function dotProduct() {
  try {
    const A = parseMatrix(document.getElementById('matrixA').value).flat();
    const B = parseMatrix(document.getElementById('matrixB').value).flat();
    if (A.length !== B.length)
      return displayResult("Vectors must be same length.");
    let dot = A.reduce((sum,v,i)=>sum+v*B[i],0);
    displayResult(`Dot product: ${dot}`);
  } catch { displayResult("Invalid input."); }
}

function clearResult() {
  document.getElementById('result').innerHTML = '';
}
