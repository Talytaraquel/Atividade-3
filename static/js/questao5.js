var galeria = ["begonia", "bromelia", "girassol", "lirio", "margarida", "narciso", "orquidea", "petunia", "rosa", "tulipas"]


  for (i=0;i<galeria.length; i++){
    document.getElementById("imgs").innerHTML+="<img src='static/imgs/"+galeria[i]+".jpg' alt=''>"
  }
