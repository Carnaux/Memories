var fullpage = new PureFullPage();

fullpage.init();

function Down(){
    fullpage.goDown();
}

function changeLan(n){
    if(n == 1){
        document.getElementById("titleText").innerHTML = "Memorias";
        document.getElementById("textDescription").innerText = "Desenhei a arquitetura das casas da minha infancia a mão \r\n baseado somente em lembranças e a partir disso criei os modelos 3D.";
        document.getElementById("beginBT").textContent = "Começar";
        document.getElementById("letterE").style.display = "none";
        
    }else if(n == 2){
        document.getElementById("titleText").innerHTML = "Memori<span>a</span>s";
        document.getElementById("textDescription").innerText = " I draw the architecture from my childhood houses,\r\n based only in memories and from that i made the 3D models";
        document.getElementById("beginBT").textContent = "Begin";
        document.getElementById("letterE").style.display = "block";
        document.getElementById("letterE").style.position = "relative";
        document.getElementById("letterE").style.top = "-55px";
        document.getElementById("letterE").style.right = "100px";
    }
}
