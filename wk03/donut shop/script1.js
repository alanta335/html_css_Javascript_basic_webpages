function cal(){
    var b = document.getElementById("noBakedDonuts");
    var c = document.getElementById("noCakeDonuts");
    var s = document.getElementById("subtotal");
    var t = document.getElementById("tax");
    var total = document.getElementById("total");

    var subtotal = parseInt(covertDozen(b.value))*15+parseInt(covertDozen(c.value))*20;
    var tax  = subtotal*0.015;
    s.value = subtotal;
    t.value = tax;
    total.value = tax+subtotal;
}   

function covertDozen(a){
    let t = a.split(" ");
    if(t.length > 1){
        if(t[1].toLowerCase() == "dozen"){
            var s = parseInt(t[0])*12;
            return s.toString();
        }
        else{
            var s = t[0];
            return s.toString();
        }
    }
    else{
            var s = t[0];
            return s.toString();
    }
    
}