
//setTimeout(function() {document.write('Teste')}, 2000)

var i = 50
var x = setInterval(function() {document.write(i + '<br/>'); i = i - 10
     if(i === -10){
        clearInterval(x)
     }
    }, 1000)