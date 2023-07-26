function calcular(){
   
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var opr = document.getElementById("opr").value;
    
    if (opr == "soma") {
       document.getElementById("result").textContent = parseInt(n1) + parseInt(n2);
    }
    if (opr == "subt") {
       document.getElementById("result").textContent = parseInt(n1) - parseInt(n2);
    }
    if (opr == "div") {
       document.getElementById("result").textContent = parseInt(n1) / parseInt(n2);
    }
    if (opr == "mult") {
      document.getElementById("result").textContent = parseInt(n1) * parseInt(n2);
    }
  }