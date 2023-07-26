function conhecer(){
    var forma = document.getElementById("forma").value;
    
    if (forma == "triângulo"){
      document.getElementById("img").src = "triangulo.png"
    }
      
    else if(forma == "quadrado"){
      document.getElementById("img").src = "quadrado.png"
    }
      
    else if (forma == "circulo"){
      document.getElementById("img").src = "circulo.png"
    }
  
    else{
      window.alert("Esta forma não está disponível, tente outro.")
    }
  }