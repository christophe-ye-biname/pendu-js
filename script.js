alert("jouons");
let ask = prompt("entrez un mot");
let targ = document.getElementById("target");
let answer = document.getElementById("pass-two");
let pic = document.createElement("img");
targ.appendChild(pic);
let count;
let final = "";
let score = parseInt(ask.length * 0.50);
console.log(score);
let good;
let tab = [];


console.log(score);
for (let j = 0; j < ask.length; j++)
        {
        let sp = document.createElement("span")
        sp.setAttribute("id", "n-" + j);
        targ.appendChild(sp);
        document.getElementById("n-" + j).innerHTML = "_ ";
        }

document.getElementById("but").addEventListener("click", () => {
    
    good = 0;
    count = 0;
    for (let i = 0; i < ask.length; i++)
    {
        if (answer.value == ask[i])
        {
            document.getElementById("n-" + i).innerHTML = answer.value;
            count++;
        }
    }
    if (count == 0)
    {
        score--;
        tab.push(answer.value);
        document.getElementById("bravo").innerHTML = tab;
        alert("ton score " + score);
        console.log(score);
    }
    answer.value = "";
    if (score <= 0)
    {
        pic.setAttribute("src", "image/def.gif");
        alert("refresh stp");
    }
    for (let j = 0; j < ask.length; j++)
        {
            if (document.getElementById("n-" + j).innerHTML == ask[j])
            {
                good++;
            }
        }

    if (good == ask.length)
    {
        pic.setAttribute("src", "image/vic.gif");
        alert("refresh stp");
    }
});