//SCOPE
function test(){
    var myname="priyanshu"// functional scope
    for(let i=0;i<5;i++){
        var lastname="Vatsal";
        let surname="Goriyan"//block scope
        console.log(myname);
    }
    console.log(lastname);
    console.log(surname); //surname is not defined
}

test();

let x=12;

function outer(){
    let y=36;

    function inner(){
        return (x,y);
    }

    inner();
}

let ans=outer();
console.log(ans);






