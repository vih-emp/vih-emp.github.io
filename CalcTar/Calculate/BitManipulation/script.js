function toBinary() {
  let n = parseInt(document.getElementById('bitnum').value);
  let s = n.toString(2);
  showBitResult(`Binary: ${s}`);
}
function bitwiseNot() {
  let n = parseInt(document.getElementById('bitnum').value);
  showBitResult(`~${n} = ${~n} (bin: ${(~n).toString(2)})`);
}
function bitwiseShift(dir) {
  let n = parseInt(document.getElementById('bitnum').value);
  if (dir==='l') showBitResult(`${n} << 1 = ${n<<1} (bin: ${(n<<1).toString(2)})`);
  else showBitResult(`${n} >> 1 = ${n>>1} (bin: ${(n>>1).toString(2)})`);
}
function bitwiseAnd() {
  let n1 = parseInt(document.getElementById('bitnum').value);
  let n2 = parseInt(document.getElementById('bitnum2').value);
  showBitResult(`${n1} & ${n2} = ${n1&n2} (bin: ${(n1&n2).toString(2)})`);
}
function bitwiseOr() {
  let n1 = parseInt(document.getElementById('bitnum').value);
  let n2 = parseInt(document.getElementById('bitnum2').value);
  showBitResult(`${n1} | ${n2} = ${n1|n2} (bin: ${(n1|n2).toString(2)})`);
}
function bitwiseXor() {
  let n1 = parseInt(document.getElementById('bitnum').value);
  let n2 = parseInt(document.getElementById('bitnum2').value);
  showBitResult(`${n1} ^ ${n2} = ${n1^n2} (bin: ${(n1^n2).toString(2)})`);
}
function showBitResult(msg) {
  document.getElementById('bitresult').innerHTML = msg;
}
function clearBitResult() {
  document.getElementById('bitresult').innerHTML = '';
}