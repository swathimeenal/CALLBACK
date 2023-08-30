//!Normal Console
// console.log("first")
// console.log("second")
// console.log("third")
//! callback using settimeout
// console.log("App is started")
// setTimeout(()=>console.log("loading...."),2000)
// setTimeout(()=>console.log("App Completed"),5000)
// console.log("Under Process")
//!callback using function
/*
var complete=()=>{
    console.log("finish")
}
var add=(abc)=>{
    var x=2;
    var y=3;
    console.log("sum",x+y)
    abc();
}
add(complete);
*/
//!call back hell Example
setTimeout(()=>{
    console.log("10")
    document.getElementById("display").innerText="10"
    document.body.style.backgroundColor = "red";
    setTimeout(()=>{
        console.log("9")
        document.getElementById("display").innerText="9"
        document.body.style.backgroundColor = "blue";
        setTimeout(()=>{
            console.log("8")
            document.getElementById("display").innerText="8"
            document.body.style.backgroundColor = "orange";
            setTimeout(()=>{
                console.log("7")
                document.getElementById("display").innerText="7"
                document.body.style.backgroundColor = "aqua";
                setTimeout(()=>{
                    console.log("6")
                    document.getElementById("display").innerText="6"
                    document.body.style.backgroundColor = "green";
                    setTimeout(()=>{
                        console.log("5")
                        document.getElementById("display").innerText="5"
                        document.body.style.backgroundColor = "yellow";
                        setTimeout(()=>{
                            console.log("4")
                            document.getElementById("display").innerText="4"
                            document.body.style.backgroundColor = "pink";
                            setTimeout(()=>{
                                console.log("3")
                                document.getElementById("display").innerText="3"
                                document.body.style.backgroundColor = "white";
                                setTimeout(()=>{
                                    console.log("2")
                                    document.getElementById("display").innerText="2"
                                    document.body.style.backgroundColor = "red";
                                    setTimeout(()=>{
                                        console.log("1")
                                        document.getElementById("display").innerText="1"
                                        document.body.style.backgroundColor = "yellow";
                                        setTimeout(()=>{
                                            console.log("1")
                                            document.getElementById("display").innerText="Happy Raksha Bandhan💐😎"
                                            document.body.style.backgroundColor = "orange";
                                        },1000)
    },1000)
    
    },1000)
    
    },1000)
    
    },1000)
    },1000)
    
    },1000)
    
    },1000)
    
    },1000)
    
    },1000)
},1000)