
function dark()
{

    var pagina = document.getElementById("html");
    var  btn = document.getElementById("btnDark");
    var  imgBtn = document.getElementById("imgBtn");
    var  fotopessoal = document.getElementById("mypicture");
    var  fotoCanario = document.getElementById("imgCanario");


   animaçõestxtDark();
    imgBtn.classList.remove("fa-moon");
    imgBtn.classList.add("fa-sun");
    fotopessoal.setAttribute("src","imgs/user.jpg");
    fotoCanario.setAttribute("src","imgs/canario_dark.png");
    pagina.classList.add("modeDark");
    btn.setAttribute("onclick","white()");
}



function white()
{   var  btn = document.getElementById("btnDark");
    var pagina = document.getElementById("html");
    var  imgBtn = document.getElementById("imgBtn");
    var  fotopessoal = document.getElementById("mypicture");
    var  fotoCanario = document.getElementById("imgCanario");
    
    
    animaçõestxtWhite ();
    fotoCanario.setAttribute("src","imgs/canario_claro.png");

    fotopessoal.setAttribute("src","imgs/my.jpg");
    imgBtn.classList.remove("fa-sun");
    imgBtn.classList.add("fa-moon");
    pagina.classList.remove("modeDark");
    btn.setAttribute("onclick","dark()");
    
}


function animaçõestxtDark (){
    var logo = document.getElementById("logo");
    var sobremim = document.getElementById("sobremim");
    var projetos = document.getElementById("projetos");
    var contatos = document.getElementById("contatos");

    logo.classList.remove("animacaoTextoWhite");
    logo.style.fontFamily="fonteDark"
    logo.classList.add("animacaoTextoDark");

    sobremim.classList.remove("animacaoTextoWhite")
   sobremim.style.fontFamily="fonteDark"
    sobremim.classList.add("animacaoTextoDark");

    projetos.classList.remove("animacaoTextoWhite")
    projetos.style.fontFamily="fonteDark"
    projetos.classList.add("animacaoTextoDark");

    contatos.classList.remove("animacaoTextoWhite")
    contatos.style.fontFamily="fonteDark"
    contatos.classList.add("animacaoTextoDark");
}

 function animaçõestxtWhite()
 {

    var logo = document.getElementById("logo");
    var sobremim = document.getElementById("sobremim");
    var projetos = document.getElementById("projetos");
    var contatos = document.getElementById("contatos");

    logo.classList.remove("animacaoTextoDark");
    logo.classList.add("animacaoTextoWhite");
    logo.style.fontFamily="fonteLogo"

    sobremim.classList.remove("animacaoTextoDark");
    sobremim.classList.add("animacaoTextoWhite");
    sobremim.style.fontFamily="fonteLogo"
 
    projetos.classList.remove("animacaoTextoDark");
    projetos.classList.add("animacaoTextoWhite");
    projetos.style.fontFamily="fonteLogo"

    contatos.classList.remove("animacaoTextoDark");
    contatos.classList.add("animacaoTextoWhite");
    contatos.style.fontFamily="fonteLogo"
 
 }
