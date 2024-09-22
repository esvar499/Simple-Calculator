document.getElementById("calculateBtn").addEventListener("click", function() {
    let expression = document.getElementById("expression").value;
    try {
        let result = eval(expression);
        document.getElementById("result").textContent = result;
    } catch (error) {
        document.getElementById("result").textContent = "Error";
    }
});

window.addEventListener("beforeunload", function (event) {
    event.preventDefault(); 
    event.returnValue = ""; 
});
