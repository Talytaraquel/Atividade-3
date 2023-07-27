function conhecer(){
    var forma = document.getElementById("forma").value;
    
    if (forma == "triângulo"){
      document.getElementById("img").src = "static/imgs/triangulo.png"
    }
      
    else if(forma == "quadrado"){
      document.getElementById("img").src = "static/imgs/quadrado.png"
    }
      
    else if (forma == "circulo"){
      document.getElementById("img").src = "static/imgs/circulo.png"
    }
  
    else{
      window.alert("Esta forma não está disponível, tente outro.")
    }
  }