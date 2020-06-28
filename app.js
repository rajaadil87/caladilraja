
function number(n){
   var r=document.getElementById("r")
   r.value += n
}
function cr(){
    var r=document.getElementById("r")
    r.value = ""
}
function rOne(){
    // var r=document.getElementById("r")
    r.value = eval(r.value)
}

function rPercentage(){
    var r=document.getElementById("r")
    r.value = eval(r.value)*100
}
function rsquare(){
    // var r=document.getElementById("r")
    r.value = Math.pow(r.value,2)
}
function rcub(){
    // var r=document.getElementById("r")
    r.value = Math.pow(r.value , 3)
}

function rSqrt(){
    // var r= document.getElementById("r")
    r.value = Math.sqrt(r.value)
}

function backSpace() {
    var number = r.value;
    var len = number.length - 1;
    var newNumber = number.substring( 0, len );
    r.value = newNumber;
  }

function temp(){   

  r.value =  (r.value * 9/5) + 32
}

function tempTwo(){   

    r.value =  (r.value - 32) * 5/9
  }

  function pie(){
      var number = r.value;
      var pie = 3.142;
      r.value = pie;
   
  }
  function pow() {
    var r = document.getElementById("r") 
     r.value = Math.pow(r.value,r.value)
  }
  function tenToPow() { 
    var r = document.getElementById("r") 
     r.value = Math.pow(10,r.value)
  }
 function factorial(){
    var n = r.value -1

    for(i = 1; i <=n ; i++){
        r.value = r.value * (i)
    }
 } 
function logOne(){
    
       r.value = Math.log(r.value)
  
}

function sinOne(){
    r.value = Math.sin(r.value)
}

function cosOne(){
    r.value = Math.cos(r.value)
}
function tanOne(){
    r.value = Math.tan(r.value)
}

function expOne(){
    r.value = Math.exp(r.value)
}



