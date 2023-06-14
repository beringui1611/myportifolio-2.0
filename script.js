function toggleMenu() {
    const textoDiv = document.getElementById('texto');
    
    
    if (textoDiv.style.display === 'none') {
      textoDiv.style.display = 'block';
    } else {
      textoDiv.style.display = 'none';
    }
  } 

  function like (){
    const likeDiv = document.getElementById("curtir");
    if (likeDiv.style.background ===  "#F23D3D"){
      likeDiv.style.background = "none"
    }else{
      likeDiv.style.background = "#F23D3D"
    }
  
  
   
  }
  var likeCount = 0
  function curtir () {
    likeCount++;
    document.getElementById( "likeCount").textContent  = likeCount  +  " likes";
  }
    
  










