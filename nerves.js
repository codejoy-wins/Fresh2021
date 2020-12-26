function hoverboard(thing){
    if(thing == 'chess'){
        console.log("you are hovering over chess");
        document.getElementById("rapper").className="chess";
        document.getElementById("secret").innerHTML=`
        <div class="resize">
            <a href="https://lichess.org/@/codejoy/perf/classical"><div id="chesslink">I am a chess expert</div></a>
        </div>
        `

    }
    else if(thing == 'school'){
        console.log("you are hovering over school");
        document.getElementById("rapper").className="school";
        document.getElementById("secret").innerHTML=`
        <div class="resize">
            <h1>University of California at Santa Cruz</h1>
            <h2>B.A. Philsophy Class of 2017</h2>

        </div>
        `
    }
    else if(thing == 'space'){
        console.log("you are hovering over space");
        document.getElementById("rapper").className="space";
        document.getElementById("secret").innerHTML=`
        <div class="resize">
            <h2>Thousand Oaks, California</h2>
            <h3>805 940 5096</h3>
        </div>
        `
    }
    else if(thing == 'reset'){
        console.log("you are hovering over the reset");
        document.getElementById("rapper").className="neutral";
        document.getElementById("secret").innerHTML=`
        <div class="resize">
            <h2>Hover Around!</h2>
        </div>
        `
    }
    else if(thing == 'music'){
        console.log("you are hovering over music");
        document.getElementById("rapper").className="music";
        document.getElementById("secret").innerHTML=`
        <div class="resize">
        <h2>I am an amateur singer-songwriter</h2>
        <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/954293368&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/maxwelljann" title="Maxwell Jann" target="_blank" style="color: #cccccc; text-decoration: none;">Maxwell Jann</a> · <a href="https://soundcloud.com/maxwelljann/riding-too-high" title="Riding Too High" target="_blank" style="color: #cccccc; text-decoration: none;">Riding Too High</a></div>
        `
    }
    else{
        console.log("you are hovering over something else");
        document.getElementById("rapper").className="wonder";
    }
}