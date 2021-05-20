//Displaying value

function dis(val)
{
    document.getElementById("input").value += val

    let x = document.getElementById("input").value
    let y = eval(x);
    let z = y
    document.getElementById("result").value = ""
    document.getElementById("result").value = z
}

//display the answer as input

function solve()
{
    let x = document.getElementById("input").value
    let y = eval(x);
    let z = y
    document.getElementById("input").value = ""
    document.getElementById("input").value = z
}
 //clear the display

 function clr()
 {
    document.getElementById("input").value = ""
    document.getElementById("result").value = ""
 }