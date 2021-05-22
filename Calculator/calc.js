//Displaying value

function dis(val)
{
    document.getElementById("input").value += val;
    
    if(val == "+" || val == "-" || val == "*" || val == "/" || val == "**(")
    {
        document.getElementById("result").value = " ";
    }
    else{
        let x = document.getElementById("input").value;
        document.getElementById("result").value = eval(x);
    }
}

//display the answer as input

function solve()
{
    let x = document.getElementById("input").value;
    document.getElementById("input").value = eval(x);
    document.getElementById("result").value = eval(x);
}

//clear the last value

function bs()
{
    size = document.getElementById("input").value.length;
    let x = document.getElementById("input").value = document.getElementById("input").value.substring(0, size - 1);
    y = ["+","-","*","/","**"];

    if(x == 0)
    {
        document.getElementById("result").value = "";
    }
    else if(y.indexOf(x)){
        document.getElementById("result").value = " ";
        document.getElementById("result").value = eval(x);
    }
    else{
        document.getElementById("result").value = eval(x);
    }
}

//clear the display

function clr()
{
   document.getElementById("input").value = "";
   document.getElementById("result").value = "";
}
