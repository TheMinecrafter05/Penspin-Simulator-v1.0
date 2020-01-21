//Alle Variabeln

var degrees = 0;

var spins = 150;

var spintime = 100;

var multiplyer = 1;

var Actualpenspin;

var degreenumber = 1;

var weight = 1;

var speed = 1;

var speedpreis = 1.035;

var weightpreis = 1.04;

var multypreis = 1.05;

var speedlimit = 0;

var weightlimit = 100;

var multylimit = 50;

var openShop = 0;

var back = "./StarterBackground.jpg"

var pen = "./StartPen.jpg";

let music = new Audio()
music.src = "./Background-Music.mp3"
music.volume = 0.3

let speedkosten = 10

let weightkosten = 15

var multykosten = 10


    //speichern der Daten
    function save() {
        localStorage.setItem('Speed', JSON.stringify(speed));
        localStorage.setItem('Weigh',JSON.stringify(weight));
        localStorage.setItem('Weighlimit', JSON.stringify(weightlimit));
        localStorage.setItem('Multy', JSON.stringify(multiplyer));
        localStorage.setItem('Multylimit', JSON.stringify(multylimit));
        localStorage.setItem('Spins', JSON.stringify(spins));
        localStorage.setItem('Pen', JSON.stringify(pen));
        localStorage.setItem('Background', JSON.stringify(back));
      }


      //laden der Daten
      function load() {
          if(localStorage.getItem('Speed')){
            speed = JSON.parse(localStorage.getItem('Speed'));
          }

          if(localStorage.getItem('Spins')){
            spins = JSON.parse(localStorage.getItem('Spins'));
          }
        
          if(localStorage.getItem('Weigh')){
            weight = JSON.parse(localStorage.getItem('Weigh'));
          }

          if(localStorage.getItem('Multy')){
            multiplyer = JSON.parse(localStorage.getItem('Multy'));
          }

          if(localStorage.getItem('Pen')){
            pen = JSON.parse(localStorage.getItem('Pen'));
          }

          if(localStorage.getItem('Background')){
            back = JSON.parse(localStorage.getItem('Background'));
          }

          if(localStorage.getItem('Weighlimit')){
            weightlimit = JSON.parse(localStorage.getItem('Weighlimit'));
          }

          if(localStorage.getItem('Multylimit')){
            multylimit = JSON.parse(localStorage.getItem('Multylimit'));
          }
      }

      //Laden, wenn man das Spiel öffnet
      jQuery(document).ready(function(){
        load()
        if(pen == "./Pen2.jpg"){
            document.getElementById("pen2").innerText = "Using Pen 2"
        }

        if(pen == "./Pen3.jpg"){
            document.getElementById("pen3").innerText = "Using Pen 3"
        }

        if(pen == "./Pen4.jpg"){
            document.getElementById("pen4").innerText = "Using Pen 4"
        }

        if(pen == "./Pen5.jpg"){
            document.getElementById("pen5").innerText = "Using Pen 5"
        }

        document.body.style.backgroundImage = "url("+back+")"

        if(back == "./Background1.jpg"){
            document.body.style.backgroundImage = "url("+back+")"
        }

        if(back == "./Background2.png"){
            document.body.style.backgroundImage = "url("+back+")"
        }

        if(back == "./Background3.gif"){
            document.body.style.backgroundImage = "url("+back+")"
        }

        if(back == "./Background4.jpg"){
            document.body.style.backgroundImage = "url("+back+")"
        }

        if(back == "./Background5.png"){
            document.body.style.backgroundImage = "url("+back+")"
        }

          document.getElementById("penid").src=pen
          document.getElementById("penid").style.width = "425px"
          document.getElementById("penid").style.height = "425px"
          document.getElementById("spintextid").innerText = "Spins: " + spins
          document.getElementById("spinspeedid").innerText = "Speed: " + speed
          document.getElementById("spinweightid").innerText = "Weight: " + weight

          spintime -= speed+1
          degreenumber += Math.floor(weight/2)

          if(weight >= weightlimit){
              degreenumber = weightlimit/2
              document.getElementById("weight").style.backgroundColor ="RED"
            document.getElementById("weight").innerText = "MAX"
          }

          if(spintime <=speedlimit){
              spintime = speedlimit
              document.getElementById("faster").style.backgroundColor ="RED"
                document.getElementById("faster").innerText = "MAX"
          }

          if(multiplyer >= multylimit){
              multiplyer = multylimit
              document.getElementById("multy").style.backgroundColor ="RED"
                document.getElementById("multy").innerText = "MAX"
          }

          clearInterval(Actualpenspin)

          Actualpenspin = setInterval(function() {

            music.play()
            let rotateimage = document.getElementById("penid");

            rotateimage.style.transform = `rotate(${degrees}deg)`


            degrees+=degreenumber
            if(degrees > 359) {

                spins+=1*multiplyer
                save()

            document.getElementById("spintextid").innerText = "Spins: " + spins

                degrees -=360
            }
        }, spintime)
      })


      //Start, wenn man kein Spielfortschritt hat
    Actualpenspin = setInterval(function() {

        music.play()
        let rotateimage = document.getElementById("penid");

        rotateimage.style.transform = `rotate(${degrees}deg)`


        degrees+=degreenumber
        if(degrees > 359) {

            spins+=1*multiplyer
            save()

        document.getElementById("spintextid").innerText = "Spins: " + spins

            degrees -=360
        }
    }, spintime)


    //Wenn man sich den 2. Stift kauft
    function Pen2(){
        let click = new Audio()
        click.src = "./click.mp3"
        click.play()

        if(pen == "./Pen2.jpg"){
                document.getElementById("pen2").innerText = "Already using Pen 2"
            return;
        }

        if(pen == "./Pen3.jpg"){
            document.getElementById("pen2").innerText = "Already using Pen 3"
        return;
        }

        if(pen == "./Pen4.jpg"){
            document.getElementById("pen2").innerText = "Already using Pen 4"
        return;
        }

        if(pen == "./Pen5.jpg"){
            document.getElementById("pen2").innerText = "Already using Pen 5"
        return;
        }  

        if(spins < 100000) return console.log("Zu wenig!");

        pen = "./Pen2.jpg"
        document.getElementById("penid").src=pen
        document.getElementById("penid").style.width = "425px"
        document.getElementById("penid").style.height = "425px"

        spins -= 100000

        degreenumber = 5

        multylimit += 5

        weightlimit += 5

        speed = 5

        spintime = 95

        multiplyer = 5

        weight = 5

        speedpreis = 1.035;

        weightpreis = 1.04;

        multypreis = 1.05;

        speedkosten = 10

        weightkosten = 15

        multykosten = 10

        speedpreis += 0.02
        weightpreis += 0.02
        multypreis += 0.02

        document.getElementById("spintextid").innerText = "Spins: " + spins
        document.getElementById("spinspeedid").innerText = "Speed: " + speed
        document.getElementById("spinweightid").innerText = "Weight: " + weight

        if(document.getElementById("faster").innerText = "MAX"){
            document.getElementById("faster").innerText = "Faster Spin ("+Math.floor(speedkosten)+" Spins)"
            document.getElementById("faster").style.backgroundColor = "lightblue"
        }

        if(document.getElementById("weight").innerText = "MAX"){
            document.getElementById("weight").innerText = "Heavier Pen ("+Math.floor(weightkosten)+" Spins)"
            document.getElementById("weight").style.backgroundColor = "lightblue"
        }

        if(document.getElementById("multy").innerText = "MAX"){
            document.getElementById("multy").innerText = "Spin Multiplyer ("+Math.floor(multykosten)+" Spins)"
            document.getElementById("multy").style.backgroundColor = "lightblue"
        }

        save()

        clearInterval(Actualpenspin)

        Actualpenspin = setInterval(function() {

            music.play()
            let rotateimage = document.getElementById("penid");

            rotateimage.style.transform = `rotate(${degrees}deg)`


            degrees+=degreenumber
            if(degrees > 359) {

                spins+=1*multiplyer
                save()

            document.getElementById("spintextid").innerText = "Spins: " + spins

                degrees -=360
            }
        }, spintime)

    }


    //Wenn man sich den 3. Stift kauft
    function Pen3(){
        let click = new Audio()
        click.src = "./click.mp3"
        click.play()

    if(pen == "./Pen3.jpg"){
        document.getElementById("pen3").innerText = "Already using Pen 3"
    return;
    }

    if(pen == "./Pen4.jpg"){
        document.getElementById("pen3").innerText = "Already using Pen 4"
    return;
    }

    if(pen == "./Pen5.jpg"){
        document.getElementById("pen3").innerText = "Already using Pen 5"
    return;
    }  

    if(spins < 1000000) return console.log("Zu wenig!");

        pen = "./Pen3.jpg"
        document.getElementById("penid").src=pen
        document.getElementById("penid").style.width = "425px"
        document.getElementById("penid").style.height = "425px"

        spins -= 1000000

        degreenumber = 10

        speed = 10

        spintime = 90

        multiplyer = 10

        multylimit += 10

        weightlimit += 10

        weight = 10

        speedpreis = 1.035;

        weightpreis = 1.04;

        multypreis = 1.05;

        speedkosten = 10

        weightkosten = 15

        multykosten = 10

        speedpreis += 0.02
        weightpreis += 0.02
        multypreis += 0.02

        document.getElementById("spintextid").innerText = "Spins: " + spins
        document.getElementById("spinspeedid").innerText = "Speed: " + speed
        document.getElementById("spinweightid").innerText = "Weight: " + weight

        if(document.getElementById("faster").innerText = "MAX"){
            document.getElementById("faster").innerText = "Faster Spin ("+Math.floor(speedkosten)+" Spins)"
            document.getElementById("faster").style.backgroundColor = "lightblue"
        }

        if(document.getElementById("weight").innerText = "MAX"){
            document.getElementById("weight").innerText = "Heavier Pen ("+Math.floor(weightkosten)+" Spins)"
            document.getElementById("weight").style.backgroundColor = "lightblue"
        }

        if(document.getElementById("multy").innerText = "MAX"){
            document.getElementById("multy").innerText = "Spin Multiplyer ("+Math.floor(multykosten)+" Spins)"
            document.getElementById("multy").style.backgroundColor = "lightblue"
        }

        save()

        clearInterval(Actualpenspin)

        Actualpenspin = setInterval(function() {

            music.play()
            let rotateimage = document.getElementById("penid");

            rotateimage.style.transform = `rotate(${degrees}deg)`


            degrees+=degreenumber
            if(degrees > 359) {

                spins+=1*multiplyer
                save()

            document.getElementById("spintextid").innerText = "Spins: " + spins

                degrees -=360
            }
        }, spintime)
    }


    //Wenn man sich den 4. Stift kauft
    function Pen4(){
        let click = new Audio()
        click.src = "./click.mp3"
        click.play()
        if(pen == "./Pen4.jpg"){
            document.getElementById("pen4").innerText = "Already using Pen 4"
        return;
        }
    
        if(pen == "./Pen5.jpg"){
            document.getElementById("pen4").innerText = "Already using Pen 5"
        return;
        }  

        if(spins < 5000000) return console.log("Zu wenig!");

        pen = "./Pen4.jpg"
        document.getElementById("penid").src=pen
        document.getElementById("penid").style.width = "425px"
        document.getElementById("penid").style.height = "425px"

        spins -= 5000000

        degreenumber = 15

        multylimit += 15

        weightlimit += 15

        speed = 15

        spintime = 85

        multiplyer = 15

        weight = 15

        speedpreis = 1.035;

        weightpreis = 1.04;

        multypreis = 1.05;

        speedkosten = 10

        weightkosten = 15

        multykosten = 10

        speedpreis += 0.02
        weightpreis += 0.02
        multypreis += 0.02

        document.getElementById("spintextid").innerText = "Spins: " + spins
        document.getElementById("spinspeedid").innerText = "Speed: " + speed
        document.getElementById("spinweightid").innerText = "Weight: " + weight

        if(document.getElementById("faster").innerText = "MAX"){
            document.getElementById("faster").innerText = "Faster Spin ("+Math.floor(speedkosten)+" Spins)"
            document.getElementById("faster").style.backgroundColor = "lightblue"
        }

        if(document.getElementById("weight").innerText = "MAX"){
            document.getElementById("weight").innerText = "Heavier Pen ("+Math.floor(weightkosten)+" Spins)"
            document.getElementById("weight").style.backgroundColor = "lightblue"
        }

        if(document.getElementById("multy").innerText = "MAX"){
            document.getElementById("multy").innerText = "Spin Multiplyer ("+Math.floor(multykosten)+" Spins)"
            document.getElementById("multy").style.backgroundColor = "lightblue"
        }

        save()

        clearInterval(Actualpenspin)

        Actualpenspin = setInterval(function() {

            music.play()
            let rotateimage = document.getElementById("penid");

            rotateimage.style.transform = `rotate(${degrees}deg)`


            degrees+=degreenumber
            if(degrees > 359) {

                spins+=1*multiplyer
                save()

            document.getElementById("spintextid").innerText = "Spins: " + spins

                degrees -=360
            }
        }, spintime)
    }



    //Wenn man sich den 5. Stift kauft
    function Pen5(){
        let click = new Audio()
        click.src = "./click.mp3"
        click.play()

    if(pen == "./Pen5.jpg"){
        document.getElementById("pen5").innerText = "Already using Pen 5"
    return;
    }  

    if(spins < 10000000) return console.log("Zu wenig!");

        pen = "./Pen5.jpg"
        document.getElementById("penid").src=pen
        document.getElementById("penid").style.width = "425px"
        document.getElementById("penid").style.height = "425px"

        spins -= 10000000

        degreenumber = 20

        multylimit += 20

        weightlimit += 20

        speed = 20

        spintime = 70

        multiplyer = 20

        weight = 20

        speedpreis = 1.035;

        weightpreis = 1.04;

        multypreis = 1.05;

        speedkosten = 10

        weightkosten = 15

        multykosten = 10

        speedpreis += 0.2
        weightpreis += 0.2
        multypreis += 0.2

        document.getElementById("spintextid").innerText = "Spins: " + spins
        document.getElementById("spinspeedid").innerText = "Speed: " + speed
        document.getElementById("spinweightid").innerText = "Weight: " + weight

        if(document.getElementById("faster").innerText = "MAX"){
            document.getElementById("faster").innerText = "Faster Spin ("+Math.floor(speedkosten)+" Spins)"
            document.getElementById("faster").style.backgroundColor = "lightblue"
        }

        if(document.getElementById("weight").innerText = "MAX"){
            document.getElementById("weight").innerText = "Heavier Pen ("+Math.floor(weightkosten)+" Spins)"
            document.getElementById("weight").style.backgroundColor = "lightblue"
        }

        if(document.getElementById("multy").innerText = "MAX"){
            document.getElementById("multy").innerText = "Spin Multiplyer ("+Math.floor(multykosten)+" Spins)"
            document.getElementById("multy").style.backgroundColor = "lightblue"
        }

        save()

        clearInterval(Actualpenspin)

        Actualpenspin = setInterval(function() {

            music.play()
            let rotateimage = document.getElementById("penid");

            rotateimage.style.transform = `rotate(${degrees}deg)`


            degrees+=degreenumber
            if(degrees > 359) {

                spins+=1*multiplyer
                save()

            document.getElementById("spintextid").innerText = "Spins: " + spins

                degrees -=360
            }
        }, spintime)
    }



    //wenn man sich die schneller erweiterung kauft
    function faster(){
        let click = new Audio()
        click.src = "./click.mp3"
        click.play()

        if(Math.floor(spins) < Math.floor(speedkosten)) return;


            if(spintime <=speedlimit){
                document.getElementById("faster").style.backgroundColor ="RED"
                document.getElementById("faster").innerText = "MAX"

                spintime = speedlimit
                speed = 100
                document.getElementById("spinspeedid").innerText = "Speed: " + speed
                return;
            }

            spins -= Math.floor(speedkosten)

            speedkosten *=speedpreis

            document.getElementById("faster").innerText = "Faster Spin ("+Math.floor(speedkosten)+" Spins)"
            document.getElementById("spintextid").innerText = "Spins: " + Math.floor(spins)

            speed++

            save()

            document.getElementById("spinspeedid").innerText = "Speed: " + speed

            spintime -= 1

        clearInterval(Actualpenspin)

        Actualpenspin = setInterval(function() {
        music.play()
        let rotateimage = document.getElementById("penid");

        rotateimage.style.transform = `rotate(${degrees}deg)`


        degrees+=degreenumber
        if(degrees > 359) {

            spins+=1*multiplyer
            save()

        document.getElementById("spintextid").innerText = "Spins: " + Math.floor(spins)

            degrees -=360
        }
    }, spintime)

    }


    //wenn man sich die schwerer erweiterung kauft
    function heavier(){
        let click = new Audio()
        click.src = "./click.mp3"
        click.play()

        if(Math.floor(spins) < Math.floor(weightkosten)) return;

        if(weight >= weightlimit){
            document.getElementById("weight").style.backgroundColor ="RED"
                document.getElementById("weight").innerText = "MAX"

                degreenumber = weightlimit/2
                weight = weightlimit
                document.getElementById("spinweightid").innerText = "Weight: " + weight
                return;
            }

            spins -= Math.floor(weightkosten)

            weightkosten *= weightpreis

            document.getElementById("weight").innerText = "Heavier Pen ("+Math.floor(weightkosten)+" Spins)"
            document.getElementById("spintextid").innerText = "Spins: " + Math.floor(spins)

            weight++

            save()

            document.getElementById("spinweightid").innerText = "Weight: " + weight

        degreenumber+=0.5

        clearInterval(Actualpenspin)

        Actualpenspin = setInterval(() =>{
        music.play()
        let rotateimage = document.getElementById("penid");

        rotateimage.style.transform = `rotate(${degrees}deg)`

        degrees+=degreenumber

        if(degrees > 359) {

            spins+=1*multiplyer
            save()

        document.getElementById("spintextid").innerText = "Spins: " + Math.floor(spins)

            degrees -=360
        }
    }, spintime)
    }


    //wenn man sich die multiplikator erweiterung kauft
    function multy(){
        let click = new Audio()
        click.src = "./click.mp3"
        click.play()
        if(Math.floor(spins) < Math.floor(multykosten)) return;

        if(multiplyer >= multylimit){
            document.getElementById("multy").style.backgroundColor ="RED"
                document.getElementById("multy").innerText = "MAX"

                multiplyer = multylimit
                return;
        }

            spins -= Math.floor(multykosten)

            multykosten *= multypreis

            document.getElementById("multy").innerText = "Spin Multiplyer ("+Math.floor(multykosten)+" Spins)"
            document.getElementById("spintextid").innerText = "Spins: " + Math.floor(spins)


        multiplyer++

        save()

        clearInterval(Actualpenspin)

        Actualpenspin = setInterval(() =>{
        music.play()
        let rotateimage = document.getElementById("penid");

        rotateimage.style.transform = `rotate(${degrees}deg)`

        degrees+=degreenumber

        if(degrees > 359) {

            spins+=1*multiplyer
            save()
        document.getElementById("spintextid").innerText = "Spins: " + Math.floor(spins)

            degrees -=360
        }
    }, spintime)
    }



    //Wenn man den Hintergrund Shop öffnet
function Backgrounds(){
    let click = new Audio()
    click.src = "./click.mp3"
    click.play()
    if(openShop == 0){
        openShop = 1
        document.getElementById("BackgroundShop").style.left="30%"
    }else{
        document.getElementById("BackgroundShop").style.left="200%"
        openShop = 0
    }
}


//Wenn man sich Hintergrund 1 kauft
function Backgr1(){
let click = new Audio()
click.src = "./click.mp3"
click.play()
if(spins < 500) return console.log("Zu wenig");
if(back == "./Background1.jpg") return;
document.body.style.backgroundImage = "url(./Background1.jpg)"
document.getElementById("BackgroundShop").style.left = "200%"
back = "./Background1.jpg"
spins -= 500
document.getElementById("spintextid").innerText = "Spins: " + Math.floor(spins)
openShop = 0
save()
}

//Wenn man sich Hintergrund 2 kauft
function Backgr2(){
let click = new Audio()
click.src = "./click.mp3"
click.play()
if(spins < 500) return console.log("Zu wenig");
if(back == "./Background2.png") return;
document.body.style.backgroundImage = "url(./Background2.png)"
document.getElementById("BackgroundShop").style.left = "200%"
back = "./Background2.png"
spins -= 500
document.getElementById("spintextid").innerText = "Spins: " + Math.floor(spins)
openShop = 0
save()
}

//Wenn man sich Hintergrund 3 kauft
function Backgr3(){
    let click = new Audio()
    click.src = "./click.mp3"
    click.play()
    if(spins < 1500) return console.log("Zu wenig");
    if(back == "./Background3.gif") return;
    document.body.style.backgroundImage = "url(./Background3.gif)"
    document.getElementById("BackgroundShop").style.left = "200%"
    back = "./Background3.gif"
    spins -= 1500
    document.getElementById("spintextid").innerText = "Spins: " + Math.floor(spins)
    openShop = 0
    save()
    }

    //Wenn man sich Hintergrund 4 kauft
function Backgr4(){
    let click = new Audio()
    click.src = "./click.mp3"
    click.play()
    if(spins < 500) return console.log("Zu wenig");
    if(back == "./Background4.jpg") return;
    document.body.style.backgroundImage = "url(./Background4.jpg)"
    document.getElementById("BackgroundShop").style.left = "200%"
    back = "./Background4.jpg"
    spins -= 500
    document.getElementById("spintextid").innerText = "Spins: " + Math.floor(spins)
    openShop = 0
    save()
    }

    //Wenn man sich Hintergrund 5 kauft
function Backgr5(){
    let click = new Audio()
    click.src = "./click.mp3"
    click.play()
    if(spins < 500) return console.log("Zu wenig");
    if(back == "./Background5.png") return;
    document.body.style.backgroundImage = "url(./Background5.png)"
    document.getElementById("BackgroundShop").style.left = "200%"
    back = "./Background5.png"
    spins -= 500
    document.getElementById("spintextid").innerText = "Spins: " + Math.floor(spins)
    openShop = 0
    save()
    }

    // Wenn man sich den Hack geholt hat
    var Hacking;
    var fortschritt = 0;
    var ishacking = 0;
    function Hack() {
        let click = new Audio()
        click.src = "./click.mp3"
        click.play()
        if(ishacking != 0) return;
        ishacking = 1;
        Hacking = setInterval(()=>{
            fortschritt++
            let clicks = new Audio()
            clicks.src = "./hackclicks.mp3"
            clicks.volume = 0.3
            clicks.play()
            document.getElementById("hackbutton").innerText = fortschritt+"%"
            if(fortschritt >= 100){
                let change = Math.floor(Math.random() * 5)
                if(change == 1){
                    document.getElementById("hackbutton").innerText = "Hack was good!"
                    if(pen == "./StartPen.jpg"){
                        spins += 10000
                    }
                    if(pen == "./Pen2.jpg"){
                        spins += 100000
                    }
                    if(pen == "./Pen3.jpg"){
                        spins += 500000
                    }
                    if(pen == "./Pen4.jpg"){
                        spins += 1000000
                    }
                    if(pen == "./Pen5.jpg"){
                        spins += 5000000
                    }
                    document.getElementById("spintextid").innerText = "Spins: " + Math.floor(spins)
                    save()
                    setTimeout(()=>{
                        document.getElementById("hackbutton").innerText = "Hack Spins"
                        fortschritt = 0
                        ishacking = 0
                    },5000)
                }else{
                    document.getElementById("hackbutton").innerText = "Hack was bad!"
                    setTimeout(()=>{
                        document.getElementById("hackbutton").innerText = "Hack Spins"
                        fortschritt = 0;
                        ishacking = 0;
                    },5000)
                }
                clearInterval(Hacking)
            }
        },100)
    }
