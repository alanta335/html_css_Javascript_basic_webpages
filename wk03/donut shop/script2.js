    var vars = {};
window.onload = getUrlVars();
function getUrlVars() {
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    var subtotal = parseInt(covertDozen(vars['noCakeDonuts']))*20 + parseInt(covertDozen(vars['noBakedDonuts']))*15;
    var tax  = subtotal*0.015;
    document.getElementById("name").innerHTML = "Name: "+ vars['name'].replace(/\+/g ," ");
    document.getElementById("noBakedDonuts").innerHTML = "Number of Baked Donuts: "+ covertDozen(vars['noBakedDonuts']);
    document.getElementById("noCakeDonuts").innerHTML = "Number of Cake Donuts: "+ covertDozen(vars['noCakeDonuts']);
    document.getElementById("minutes").innerHTML = "Number of Minutes "+ vars['minutes'];
    document.getElementById("subtotal").innerHTML = "SubTotal: "+ (subtotal).toString();
    document.getElementById("tax").innerHTML = "Tax: "+ tax.toString();
    document.getElementById("total").innerHTML = "Total: "+ (tax+subtotal).toString();
}

function covertDozen(a){
    let t = a.split("+");
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