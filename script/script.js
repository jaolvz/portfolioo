
function dark()
{

    var pagina = document.getElementById("html");
    var  btn = document.getElementById("btnDark");
    var  imgBtn = document.getElementById("imgBtn");
    var  fotopessoal = document.getElementById("mypicture");


   animaçõestxtDark();
    imgBtn.classList.remove("fa-moon");
    imgBtn.classList.add("fa-sun");
    fotopessoal.setAttribute("src","imgs/user.jpg");
    pagina.classList.add("modeDark");
    btn.setAttribute("onclick","white()");
}

function white()
{   var  btn = document.getElementById("btnDark");
    var pagina = document.getElementById("html");
    var  imgBtn = document.getElementById("imgBtn");
    var  fotopessoal = document.getElementById("mypicture");
    animaçõestxtWhite ();
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

    logo.style.fontFamily="fonteDark"
    logo.classList.add("animacaoTextoDark");

   sobremim.style.fontFamily="fonteDark"
    sobremim.classList.add("animacaoTextoDark");

    projetos.style.fontFamily="fonteDark"
    projetos.classList.add("animacaoTextoDark");

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
    logo.style.fontFamily="fonteLogo"

    sobremim.classList.remove("animacaoTextoDark");
    sobremim.style.fontFamily="fonteLogo"
 
    projetos.classList.remove("animacaoTextoDark");
    projetos.style.fontFamily="fonteLogo"

    contatos.classList.remove("animacaoTextoDark");
    contatos.style.fontFamily="fonteLogo"
 
 }