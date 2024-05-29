function calculate() {
    const expression = document.getElementById("expression").value;
    let result;
  
    try {
      result = eval(expression);
      document.getElementById("result").value = result;
    } catch (error) {
      document.getElementById("result").value = error.message;
    }
  }