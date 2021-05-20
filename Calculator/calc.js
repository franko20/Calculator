//Displaying value

function dis(val)
{
    document.getElementById("input").value += val;

    let x = document.getElementById("input").value;
    document.getElementById("result").value = eval(x);
}

//display the answer as input

function solve()
{
    let x = document.getElementById("input").value;
    document.getElementById("input").value = eval(x);
}
 //clear the display

 function clr()
 {
    document.getElementById("input").value = "";
    document.getElementById("result").value = "";
 }
