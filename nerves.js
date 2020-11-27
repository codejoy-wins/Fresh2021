function hoverboard(thing){
    if(thing == 'chess'){
        console.log("you are hovering over chess");
        document.getElementById("rapper").className="chess";
        document.getElementById("secret").innerHTML=`
        <div>
            <h1>2000+ Chess Rating</h1>
            <h2>Codejoy on lichess.org</h2>
        </div>
        `

    }
    else if(thing == 'school'){
        console.log("you are hovering over school");
        document.getElementById("rapper").className="school";
        document.getElementById("secret").innerHTML=`
        <div>
            <h1>University of California at Santa Cruz</h1>
            <h2>B.A. Philsophy Class of 2017</h2>

        </div>
        `
    }
    else if(thing == 'space'){
        console.log("you are hovering over space");
        document.getElementById("rapper").className="space";
        document.getElementById("secret").innerHTML=`
        <div>
            <h1>Planet Earth</h1>
            <h2>Thousand Oaks, California</h2>
        </div>
        `
    }
    else if(thing == 'reset'){
        console.log("you are hovering over the reset");
        document.getElementById("rapper").className="neutral";
        document.getElementById("secret").innerHTML=`
        <p>
            Hover around!
        </p>
        `
    }
    else{
        console.log("you are hovering over something else");
        document.getElementById("rapper").className="wonder";
    }
}