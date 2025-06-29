function addNumbers()
                {
                    const num1 = parseFloat(document.getElementById("input1").value);
                    const num2 = parseFloat(document.getElementById("input2").value);
                    const sum = num1 + num2;
                    document.getElementById("result").innerText = "Result: "+ sum;
                    setTimeout(function(){},500);
                    if(isNaN(num1) || isNaN(num2))
                        document.getElementById("result").innerText = "Result: Invalid input!"

                }
function subtractNumbers()
                {
                    const num1 = parseFloat(document.getElementById("input1").value);
                    const num2 = parseFloat(document.getElementById("input2").value);
                    const difference = num1 - num2;
                    document.getElementById("result").innerText = "Result: "+ difference;
                    setTimeout(function(){},500);   
                    if(isNaN(num1) || isNaN(num2))
                        document.getElementById("result").innerText = "Result: Invalid input!"
                }
                /*This script has undergone the Update 4.7 Modifications! [latest]*/