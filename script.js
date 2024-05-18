function toggleMode() {
  const html = document.documentElement // Criando uma variável
  html.classList.toggle("light")
  //subsituir a foto quando for o light mode
  // pegar a tag img
  const img=document.querySelector("#profile img")
  //substituir as imagens

   if(html.classList.contains("light")) {
    // se tiver, trocar a iamgem
    img.setAttribute('src','./assets/Avatar_light_mode.png')
  }
  else{
    // 
    img.setAttribute('src','./assets/Avatar_light_mode.png')

  }
}



  



