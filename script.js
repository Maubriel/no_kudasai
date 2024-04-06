
var comentarios = document.querySelector("div.WdgtCn:not(.DwsldCn)")
// seccion_comentarios.style = "display:none"
if (comentarios){
    comentarios.remove();
}

var compartir = document.querySelector("div.ShrCnB.fa-share-alt")
// seccion_compartir.style = "display:none"
if (compartir){
    compartir.remove();
}

var noticias = document.querySelector("div.CpCnC")
// seccion_noticias.style = "display:none"
if (noticias){
    noticias.remove();
}

var flvbanner = document.querySelector("div.AnflvTl")
if (flvbanner){
    flvbanner.remove();
}

var twitchbanner = document.querySelector("a.lvbx")
if (twitchbanner){
    twitchbanner.remove();
}