document.querySelector(".button-34").addEventListener('click',function(){
    this.classList.add("hide");
    document.querySelector(".scoreboard").classList.remove("hide");
    document.querySelector(".row1").classList.remove("hide");
    document.querySelector(".row2").classList.remove("hide");
    document.querySelector(".row3").classList.remove("hide");
    document.querySelector(".rules").classList.remove("hide");
    var lives=3;
    var score=0;
    var l=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var x=setInterval(() => {
        var target=l[Math.floor(Math.random()*26)];
        document.querySelector("."+target).innerHTML="🎯";
        document.addEventListener("keydown",logic);
        function logic(event){
            if(event.key==target){
                score++;
                document.querySelector(".scoreboard").innerHTML="<h2 style='font-family:Tron'>Score:"+score;
                document.querySelector("."+target).innerHTML=target.toUpperCase();
            }
            else{
                lives--;
                if(lives<=0){
                    document.querySelector(".Title>h1").innerHTML="Game Over!You fought well, Refresh to Restart.";
                    clearInterval(x);
                }
            }
        };
        for(i=0;i<l.length;i++){
            document.querySelector("."+l[i]).addEventListener("click",logic2);
        };
        function logic2(){
            if(this.innerHTML=="🎯"){
                score++;
                document.querySelector(".scoreboard").innerHTML="<h2 style='font-family:Tron'>Score:"+score;
                document.querySelector("."+target).innerHTML=target.toUpperCase();
            }
            else{
                lives--;
                if(lives<=0){
                    document.querySelector(".Title>h1").innerHTML="Game Over!You fought well, Refresh to Restart.";
                    clearInterval(x);
                }
            }
        };
        setTimeout(() => {
            document.removeEventListener("keydown",logic);
            for(i=0;i<l.length;i++){
            document.querySelector("."+l[i]).removeEventListener("click",logic2);
        };
            document.querySelector("."+target).innerHTML=target.toUpperCase();
        }, 3000);
        console.log(lives);
        console.log(target);
    }, 7000);
});
