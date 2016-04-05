var data;
var id = 1;
var singlePokeUrl = "http://pokeapi.co/api/v2/pokemon/" + id + "/";
var allPokeUrl = "http://pokeapi.co/api/v1/pokemon/?limit=12";

function load(url){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState == 4 && xhttp.status == 200){
            return data = xhttp.responseText;            
        }      
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

load(allPokeUrl);
