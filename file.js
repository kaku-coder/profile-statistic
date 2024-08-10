let counterels = document.querySelectorAll(".counter");
counterels.forEach((counterel) => {
    counterel.innerText = "0";

    incrementtext()

    function incrementtext(){
        let currentNum = +counterel.innerText
        let dataCeil= counterel.getAttribute("data-ceil")
        console.log(dataCeil);
        
        const increment = dataCeil / 15
        currentNum=Math.ceil(currentNum + increment) 
        counterel.innerText=currentNum
        
        if(currentNum < dataCeil){
setTimeout(incrementtext,50)
        }
    }
});