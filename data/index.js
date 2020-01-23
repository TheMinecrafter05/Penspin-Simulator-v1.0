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
var openSShop = 0;

var back = "./StarterBackground.jpg"

var pen = "./StartPen.png";

var skin = "NaN"

let music = new Audio()
music.src = "./Background-Music.mp3"
music.volume = 0.2

let speedkosten = 10

let weightkosten = 15

var multykosten = 10

var SECRET_BACKGROUND = "OFF"

var SECRET_PEN = "OFF"

var price = "ON"

var limit = "ON"

var cheats = [
    'SECRET_BACKGROUND = "ON" >> Bekommt einen Extra Hintergrund',
    'SECRET_PEN = "ON" >> Bekommt einen Extra Stift',
    'price = "OFF" >> Setzt alle Preise auf 0',
    'limit = "OFF" >> Habe kein Weight/Multy Limit',
    'spins =  NUMBER >> Gebt euch Spins'
]


    //speichern der Daten
    function save() {
        localStorage.setItem('Speed', JSON.stringify(speed));
        localStorage.setItem('Speedpreis', JSON.stringify(speedpreis));
        localStorage.setItem('Speedkosten', JSON.stringify(Math.floor(speedkosten)));
        localStorage.setItem('Weigh',JSON.stringify(weight));
        localStorage.setItem('Weighpreis', JSON.stringify(weightpreis));
        localStorage.setItem('Weighlimit', JSON.stringify(weightlimit));
        localStorage.setItem('Weighkosten', JSON.stringify(Math.floor(weightkosten)));
        localStorage.setItem('Multy', JSON.stringify(multiplyer));
        localStorage.setItem('Multypreis', JSON.stringify(multypreis));
        localStorage.setItem('Multylimit', JSON.stringify(multylimit));
        localStorage.setItem('Multykosten', JSON.stringify(Math.floor(multykosten)));
        localStorage.setItem('Spins', JSON.stringify(spins));
        localStorage.setItem('Pen', JSON.stringify(pen));
        localStorage.setItem('Background', JSON.stringify(back));
        localStorage.setItem('Skin', JSON.stringify(skin));
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

          if(localStorage.getItem('Multypreis')){
            multypreis = JSON.parse(localStorage.getItem('Multypreis'));
          }

          if(localStorage.getItem('Weighpreis')){
            weightpreis = JSON.parse(localStorage.getItem('Weighpreis'));
          }

          if(localStorage.getItem('Speedpreis')){
            speedpreis = JSON.parse(localStorage.getItem('Speedpreis'));
          }

          if(localStorage.getItem('Speedkosten')){
            speedkosten = JSON.parse(localStorage.getItem('Speedkosten'));
          }

          if(localStorage.getItem('Weighkosten')){
            weightkosten = JSON.parse(localStorage.getItem('Weighkosten'));
          }

          if(localStorage.getItem('Multykosten')){
            multykosten = JSON.parse(localStorage.getItem('Multykosten'));
          }

          if(localStorage.getItem('Skin')){
            skin = JSON.parse(localStorage.getItem('Skin'));
          }
      }

      //Laden, wenn man das Spiel öffnet
      jQuery(document).ready(function(){
        load()
        if(pen == "./Pen2.png"){
            document.getElementById("pen2").innerText = "Using Pen 2"
        }

        if(pen == "./Pen3.png"){
            document.getElementById("pen3").innerText = "Using Pen 3"
        }

        if(pen == "./Pen4.png"){
            document.getElementById("pen4").innerText = "Using Pen 4"
        }

        if(pen == "./Pen5.png"){
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
          document.getElementById("penid").style.width = "500px"
          document.getElementById("penid").style.height = "500px"
          document.getElementById("spintextid").innerText = "Spins: " + spins+"/∞"
          document.getElementById("spinspeedid").innerText = "Speed: " + speed+"/100"
          document.getElementById("spinweightid").innerText = "Weight: " + weight+"/"+weightlimit
          document.getElementById("spinmultyid").innerText = "Spins per spin: " + multiplyer+"/"+multylimit

          if(skin == "Skin1"){
            if(pen == "./StartPen.png"){
              document.getElementById("penid").src="./StartSkin1.png"
            }

            if(pen == "./Pen2.png"){
              document.getElementById("penid").src="./Pen2Skin1.png"
            }

            if(pen == "./Pen3.png"){
              document.getElementById("penid").src="./Pen3Skin1.png"
            }

            if(pen == "./Pen4.png"){
              document.getElementById("penid").src="./Pen4Skin1.png"
            }

            if(pen == "./Pen5.png"){
              document.getElementById("penid").src="./Pen5Skin1.png"
            }
        }

        if(skin == "Skin2"){
            if(pen == "./StartPen.png"){
              document.getElementById("penid").src="./StartSkin2.png"
            }

            if(pen == "./Pen2.png"){
              document.getElementById("penid").src="./Pen2Skin2.png"
            }

            if(pen == "./Pen3.png"){
              document.getElementById("penid").src="./Pen3Skin2.png"
            }

            if(pen == "./Pen4.png"){
              document.getElementById("penid").src="./Pen4Skin2.png"
            }

            if(pen == "./Pen5.png"){
              document.getElementById("penid").src="./Pen5Skin2.png"
            }
        }


        if(skin == "Skin3"){
            if(pen == "./StartPen.png"){
              document.getElementById("penid").src="./StartSkin3.gif"
            }

            if(pen == "./Pen2.png"){
              document.getElementById("penid").src="./Pen2Skin3.gif"
            }

            if(pen == "./Pen3.png"){
              document.getElementById("penid").src="./Pen3Skin3.gif"
            }

            if(pen == "./Pen4.png"){
              document.getElementById("penid").src="./Pen4Skin3.gif"
            }

            if(pen == "./Pen5.png"){
              document.getElementById("penid").src="./Pen5Skin3.gif"
            }
        }

          document.getElementById("faster").innerText = "Faster Spin ("+Math.floor(speedkosten)+" Spins)"
          document.getElementById("weight").innerText = "Heavier Pen ("+Math.floor(weightkosten)+" Spins)"
          document.getElementById("multy").innerText = "Spin Multiplyer ("+Math.floor(multykosten)+" Spins)"

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


            if(SECRET_BACKGROUND == "ON"){
                document.body.style.backgroundImage = "url(./Hackground.jpg)"
              }

            if(SECRET_PEN == "ON"){
                document.getElementById("penid").src = "./SECRET_PEN.png"
            }

            if(price == "OFF"){
                speedkosten = 0
                speedpreis = 0
                document.getElementById("faster").innerText = "Faster Spin ("+Math.floor(speedkosten)+" Spins)"

                weightkosten = 0
                weightpreis = 0
                document.getElementById("weight").innerText = "Heavier Pen ("+Math.floor(weightkosten)+" Spins)"

                multykosten = 0
                multypreis = 0
                document.getElementById("multy").innerText = "Spin Multiplyer ("+Math.floor(multykosten)+" Spins)"

                document.getElementById("back1").innerText ="Background 1 (0 Spins)"
                document.getElementById("back2").innerText ="Background 2 (0 Spins)"
                document.getElementById("back3").innerText ="Background 3 (0 Spins)"
                document.getElementById("back4").innerText ="Background 4 (0 Spins)"
                document.getElementById("back5").innerText ="Background 5 (0 Spins)"

                document.getElementById("skin1").innerText ="Skin 1 (0 Spins)"
                document.getElementById("skin2").innerText ="Skin 2 (0 Spins)"
                document.getElementById("skin3").innerText ="Skin 3 (0 Spins)"

                document.getElementById("pen2").innerText ="Pen 2 (0 Spins)"
                document.getElementById("pen3").innerText ="Pen 3 (0 Spins)"
                document.getElementById("pen4").innerText ="Pen 4 (0 Spins)"
                document.getElementById("pen5").innerText ="Pen 5 (0 Spins)"
            }

            if(limit == "OFF"){
                weightlimit = 99999999999999999999999999999999999999999999999999999999999999999999999999999999
                document.getElementById("spinweightid").innerText = "Weight: " + weight+"/∞"

                multylimit = 999999999999999999999999999999999999999999999999999999999999999999999999999999999
                document.getElementById("spinmultyid").innerText = "Spins per spin: " + multiplyer+"/∞"
            }

            music.play()
            let rotateimage = document.getElementById("penid");

            rotateimage.style.transform = `rotate(${degrees}deg)`


            degrees+=degreenumber
            if(degrees > 359) {

                spins+=1*multiplyer
                save()

            document.getElementById("spintextid").innerText = "Spins: " + spins+"/∞"

                degrees -=360
            }
        }, spintime)
      })


      //Start, wenn man kein Spielfortschritt hat
    Actualpenspin = setInterval(function() {

        if(SECRET_BACKGROUND == "ON"){
            document.body.style.backgroundImage = "url(./Hackground.jpg)"
          }

          if(SECRET_PEN == "ON"){
            document.getElementById("penid").src = "./SECRET_PEN.png"
        }

        if(price == "OFF"){
            speedkosten = 0
            speedpreis = 0
            document.getElementById("faster").innerText = "Faster Spin ("+Math.floor(speedkosten)+" Spins)"

            weightkosten = 0
            weightpreis = 0
            document.getElementById("weight").innerText = "Heavier Pen ("+Math.floor(weightkosten)+" Spins)"

            multykosten = 0
            multypreis = 0
            document.getElementById("multy").innerText = "Spin Multiplyer ("+Math.floor(multykosten)+" Spins)"

            document.getElementById("back1").innerText ="Background 1 (0 Spins)"
            document.getElementById("back2").innerText ="Background 2 (0 Spins)"
            document.getElementById("back3").innerText ="Background 3 (0 Spins)"
            document.getElementById("back4").innerText ="Background 4 (0 Spins)"
            document.getElementById("back5").innerText ="Background 5 (0 Spins)"

            document.getElementById("skin1").innerText ="Skin 1 (0 Spins)"
            document.getElementById("skin2").innerText ="Skin 2 (0 Spins)"
            document.getElementById("skin3").innerText ="Skin 3 (0 Spins)"

            document.getElementById("pen2").innerText ="Pen 2 (0 Spins)"
            document.getElementById("pen3").innerText ="Pen 3 (0 Spins)"
            document.getElementById("pen4").innerText ="Pen 4 (0 Spins)"
            document.getElementById("pen5").innerText ="Pen 5 (0 Spins)"
        }

        if(limit == "OFF"){
            weightlimit = 99999999999999999999999999999999999999999999999999999999999999999999999999999999
            document.getElementById("spinweightid").innerText = "Weight: " + weight+"/∞"

            multylimit = 999999999999999999999999999999999999999999999999999999999999999999999999999999999
            document.getElementById("spinmultyid").innerText = "Spins per spin: " + multiplyer+"/∞"
        }

        music.play()
        let rotateimage = document.getElementById("penid");

        rotateimage.style.transform = `rotate(${degrees}deg)`


        degrees+=degreenumber
        if(degrees > 359) {

            spins+=1*multiplyer
            save()

        document.getElementById("spintextid").innerText = "Spins: " + spins+"/∞"

            degrees -=360
        }
    }, spintime)


    //Wenn man sich den 2. Stift kauft
    function Pen2(){
        let click = new Audio()
        click.src = "./click.mp3"
        click.play()

        if(pen == "./Pen2.png"){
                document.getElementById("pen2").innerText = "Already using Pen 2"
            return;
        }

        if(pen == "./Pen3.png"){
            document.getElementById("pen2").innerText = "Already using Pen 3"
        return;
        }

        if(pen == "./Pen4.png"){
            document.getElementById("pen2").innerText = "Already using Pen 4"
        return;
        }

        if(pen == "./Pen5.png"){
            document.getElementById("pen2").innerText = "Already using Pen 5"
        return;
        }  

        if(price == "OFF") {
            pen = "./Pen2.png"
        document.getElementById("penid").src=pen
        document.getElementById("penid").style.width = "500px"
        document.getElementById("penid").style.height = "500px"

        if(skin == "Skin1"){
            document.getElementById("penid").src="./Pen2Skin1.png"
        }

        if(skin == "Skin2"){
            document.getElementById("penid").src="./Pen2Skin2.png"
        }

        if(skin == "Skin3"){
            document.getElementById("penid").src="./Pen2Skin3.gif"
        }

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
        document.getElementById("spinweightid").innerText = "Weight: " + weight+"/"+weightlimit
        document.getElementById("spinmultyid").innerText = "Spins per spin: " + multiplyer+"/"+multylimit

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

            if(SECRET_BACKGROUND == "ON"){
                document.body.style.backgroundImage = "url(./Hackground.jpg)"
              }

              if(SECRET_PEN == "ON"){
                document.getElementById("penid").src = "./SECRET_PEN.png"
            }

            if(price == "OFF"){
                speedkosten = 0
                speedpreis = 0
                document.getElementById("faster").innerText = "Faster Spin ("+Math.floor(speedkosten)+" Spins)"

                weightkosten = 0
                weightpreis = 0
                document.getElementById("weight").innerText = "Heavier Pen ("+Math.floor(weightkosten)+" Spins)"

                multykosten = 0
                multypreis = 0
                document.getElementById("multy").innerText = "Spin Multiplyer ("+Math.floor(multykosten)+" Spins)"

                document.getElementById("back1").innerText ="Background 1 (0 Spins)"
                document.getElementById("back2").innerText ="Background 2 (0 Spins)"
                document.getElementById("back3").innerText ="Background 3 (0 Spins)"
                document.getElementById("back4").innerText ="Background 4 (0 Spins)"
                document.getElementById("back5").innerText ="Background 5 (0 Spins)"

                document.getElementById("skin1").innerText ="Skin 1 (0 Spins)"
                document.getElementById("skin2").innerText ="Skin 2 (0 Spins)"
                document.getElementById("skin3").innerText ="Skin 3 (0 Spins)"

                document.getElementById("pen2").innerText ="Pen 2 (0 Spins)"
                document.getElementById("pen3").innerText ="Pen 3 (0 Spins)"
                document.getElementById("pen4").innerText ="Pen 4 (0 Spins)"
                document.getElementById("pen5").innerText ="Pen 5 (0 Spins)"
            }

            if(limit == "OFF"){
                weightlimit = 99999999999999999999999999999999999999999999999999999999999999999999999999999999
                document.getElementById("spinweightid").innerText = "Weight: " + weight+"/∞"

                multylimit = 999999999999999999999999999999999999999999999999999999999999999999999999999999999
                document.getElementById("spinmultyid").innerText = "Spins per spin: " + multiplyer+"/∞"
            }

            music.play()
            let rotateimage = document.getElementById("penid");

            rotateimage.style.transform = `rotate(${degrees}deg)`


            degrees+=degreenumber
            if(degrees > 359) {

                spins+=1*multiplyer
                save()

            document.getElementById("spintextid").innerText = "Spins: " + spins+"/∞"

                degrees -=360
            }
        }, spintime)
        return;
        }

        if(spins < 100000) return console.log("Zu wenig!");

        pen = "./Pen2.png"
        document.getElementById("penid").src=pen
        document.getElementById("penid").style.width = "500px"
        document.getElementById("penid").style.height = "500px"

        if(skin == "Skin1"){
            document.getElementById("penid").src="./Pen2Skin1.png"
        }

        if(skin == "Skin2"){
            document.getElementById("penid").src="./Pen2Skin2.png"
        }

        if(skin == "Skin3"){
            document.getElementById("penid").src="./Pen2Skin3.gif"
        }
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
        document.getElementById("spinweightid").innerText = "Weight: " + weight+"/"+weightlimit
        document.getElementById("spinmultyid").innerText = "Spins per spin: " + multiplyer+"/"+multylimit

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

            if(SECRET_BACKGROUND == "ON"){
                document.body.style.backgroundImage = "url(./Hackground.jpg)"
              }

              if(SECRET_PEN == "ON"){
                document.getElementById("penid").src = "./SECRET_PEN.png"
            }

            if(price == "OFF"){
                speedkosten = 0
                speedpreis = 0
                document.getElementById("faster").innerText = "Faster Spin ("+Math.floor(speedkosten)+" Spins)"

                weightkosten = 0
                weightpreis = 0
                document.getElementById("weight").innerText = "Heavier Pen ("+Math.floor(weightkosten)+" Spins)"

                multykosten = 0
                multypreis = 0
                document.getElementById("multy").innerText = "Spin Multiplyer ("+Math.floor(multykosten)+" Spins)"

                document.getElementById("back1").innerText ="Background 1 (0 Spins)"
                document.getElementById("back2").innerText ="Background 2 (0 Spins)"
                document.getElementById("back3").innerText ="Background 3 (0 Spins)"
                document.getElementById("back4").innerText ="Background 4 (0 Spins)"
                document.getElementById("back5").innerText ="Background 5 (0 Spins)"

                document.getElementById("skin1").innerText ="Skin 1 (0 Spins)"
                document.getElementById("skin2").innerText ="Skin 2 (0 Spins)"
                document.getElementById("skin3").innerText ="Skin 3 (0 Spins)"

                document.getElementById("pen2").innerText ="Pen 2 (0 Spins)"
                document.getElementById("pen3").innerText ="Pen 3 (0 Spins)"
                document.getElementById("pen4").innerText ="Pen 4 (0 Spins)"
                document.getElementById("pen5").innerText ="Pen 5 (0 Spins)"
            }

            if(limit == "OFF"){
                weightlimit = 99999999999999999999999999999999999999999999999999999999999999999999999999999999
                document.getElementById("spinweightid").innerText = "Weight: " + weight+"/∞"

                multylimit = 999999999999999999999999999999999999999999999999999999999999999999999999999999999
                document.getElementById("spinmultyid").innerText = "Spins per spin: " + multiplyer+"/∞"
            }

            music.play()
            let rotateimage = document.getElementById("penid");

            rotateimage.style.transform = `rotate(${degrees}deg)`


            degrees+=degreenumber
            if(degrees > 359) {

                spins+=1*multiplyer
                save()

            document.getElementById("spintextid").innerText = "Spins: " + spins+"/∞"

                degrees -=360
            }
        }, spintime)

    }


    //Wenn man sich den 3. Stift kauft
    function Pen3(){
        let click = new Audio()
        click.src = "./click.mp3"
        click.play()

    if(pen == "./Pen3.png"){
        document.getElementById("pen3").innerText = "Already using Pen 3"
    return;
    }

    if(pen == "./Pen4.png"){
        document.getElementById("pen3").innerText = "Already using Pen 4"
    return;
    }

    if(pen == "./Pen5.png"){
        document.getElementById("pen3").innerText = "Already using Pen 5"
    return;
    }  

    if(price == "OFF"){
        pen = "./Pen3.png"
        document.getElementById("penid").src=pen
        document.getElementById("penid").style.width = "500px"
        document.getElementById("penid").style.height = "500px"

        if(skin == "Skin1"){
            document.getElementById("penid").src="./Pen3Skin1.png"
        }

        if(skin == "Skin2"){
            document.getElementById("penid").src="./Pen3Skin2.png"
        }

        if(skin == "Skin3"){
            document.getElementById("penid").src="./Pen3Skin3.gif"
        }

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

        document.getElementById("spintextid").innerText = "Spins: " + spins+"/∞"
        document.getElementById("spinspeedid").innerText = "Speed: " + speed+"/100"
        document.getElementById("spinweightid").innerText = "Weight: " + weight+"/"+weightlimit
        document.getElementById("spinmultyid").innerText = "Spins per spin: " + multiplyer+"/"+multylimit

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

            if(SECRET_BACKGROUND == "ON"){
                document.body.style.backgroundImage = "url(./Hackground.jpg)"
              }

              if(SECRET_PEN == "ON"){
                document.getElementById("penid").src = "./SECRET_PEN.png"
            }

            if(price == "OFF"){
                speedkosten = 0
                speedpreis = 0
                document.getElementById("faster").innerText = "Faster Spin ("+Math.floor(speedkosten)+" Spins)"

                weightkosten = 0
                weightpreis = 0
                document.getElementById("weight").innerText = "Heavier Pen ("+Math.floor(weightkosten)+" Spins)"

                multykosten = 0
                multypreis = 0
                document.getElementById("multy").innerText = "Spin Multiplyer ("+Math.floor(multykosten)+" Spins)"

                document.getElementById("back1").innerText ="Background 1 (0 Spins)"
                document.getElementById("back2").innerText ="Background 2 (0 Spins)"
                document.getElementById("back3").innerText ="Background 3 (0 Spins)"
                document.getElementById("back4").innerText ="Background 4 (0 Spins)"
                document.getElementById("back5").innerText ="Background 5 (0 Spins)"

                document.getElementById("skin1").innerText ="Skin 1 (0 Spins)"
                document.getElementById("skin2").innerText ="Skin 2 (0 Spins)"
                document.getElementById("skin3").innerText ="Skin 3 (0 Spins)"

                document.getElementById("pen2").innerText ="Pen 2 (0 Spins)"
                document.getElementById("pen3").innerText ="Pen 3 (0 Spins)"
                document.getElementById("pen4").innerText ="Pen 4 (0 Spins)"
                document.getElementById("pen5").innerText ="Pen 5 (0 Spins)"
            }

            if(limit == "OFF"){
                weightlimit = 99999999999999999999999999999999999999999999999999999999999999999999999999999999
                document.getElementById("spinweightid").innerText = "Weight: " + weight+"/∞"

                multylimit = 999999999999999999999999999999999999999999999999999999999999999999999999999999999
                document.getElementById("spinmultyid").innerText = "Spins per spin: " + multiplyer+"/∞"
            }

            music.play()
            let rotateimage = document.getElementById("penid");

            rotateimage.style.transform = `rotate(${degrees}deg)`


            degrees+=degreenumber
            if(degrees > 359) {

                spins+=1*multiplyer
                save()

            document.getElementById("spintextid").innerText = "Spins: " + spins+"/∞"

                degrees -=360
            }
        }, spintime)
        return;
    }

    if(spins < 1000000) return console.log("Zu wenig!");

        pen = "./Pen3.png"
        document.getElementById("penid").src=pen
        document.getElementById("penid").style.width = "500px"
        document.getElementById("penid").style.height = "500px"

        if(skin == "Skin1"){
            document.getElementById("penid").src="./Pen3Skin1.png"
        }

        if(skin == "Skin2"){
            document.getElementById("penid").src="./Pen3Skin2.png"
        }

        if(skin == "Skin3"){
            document.getElementById("penid").src="./Pen3Skin3.gif"
        }

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

        document.getElementById("spintextid").innerText = "Spins: " + spins+"/∞"
        document.getElementById("spinspeedid").innerText = "Speed: " + speed+"/100"
        document.getElementById("spinweightid").innerText = "Weight: " + weight+"/"+weightlimit
        document.getElementById("spinmultyid").innerText = "Spins per spin: " + multiplyer+"/"+multylimit

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

            if(SECRET_BACKGROUND == "ON"){
                document.body.style.backgroundImage = "url(./Hackground.jpg)"
              }

              if(SECRET_PEN == "ON"){
                document.getElementById("penid").src = "./SECRET_PEN.png"
            }

            if(price == "OFF"){
                speedkosten = 0
                speedpreis = 0
                document.getElementById("faster").innerText = "Faster Spin ("+Math.floor(speedkosten)+" Spins)"

                weightkosten = 0
                weightpreis = 0
                document.getElementById("weight").innerText = "Heavier Pen ("+Math.floor(weightkosten)+" Spins)"

                multykosten = 0
                multypreis = 0
                document.getElementById("multy").innerText = "Spin Multiplyer ("+Math.floor(multykosten)+" Spins)"

                document.getElementById("back1").innerText ="Background 1 (0 Spins)"
                document.getElementById("back2").innerText ="Background 2 (0 Spins)"
                document.getElementById("back3").innerText ="Background 3 (0 Spins)"
                document.getElementById("back4").innerText ="Background 4 (0 Spins)"
                document.getElementById("back5").innerText ="Background 5 (0 Spins)"

                document.getElementById("skin1").innerText ="Skin 1 (0 Spins)"
                document.getElementById("skin2").innerText ="Skin 2 (0 Spins)"
                document.getElementById("skin3").innerText ="Skin 3 (0 Spins)"

                document.getElementById("pen2").innerText ="Pen 2 (0 Spins)"
                document.getElementById("pen3").innerText ="Pen 3 (0 Spins)"
                document.getElementById("pen4").innerText ="Pen 4 (0 Spins)"
                document.getElementById("pen5").innerText ="Pen 5 (0 Spins)"
            }

            if(limit == "OFF"){
                weightlimit = 99999999999999999999999999999999999999999999999999999999999999999999999999999999
                document.getElementById("spinweightid").innerText = "Weight: " + weight+"/∞"

                multylimit = 999999999999999999999999999999999999999999999999999999999999999999999999999999999
                document.getElementById("spinmultyid").innerText = "Spins per spin: " + multiplyer+"/∞"
            }

            music.play()
            let rotateimage = document.getElementById("penid");

            rotateimage.style.transform = `rotate(${degrees}deg)`


            degrees+=degreenumber
            if(degrees > 359) {

                spins+=1*multiplyer
                save()

            document.getElementById("spintextid").innerText = "Spins: " + spins+"/∞"

                degrees -=360
            }
        }, spintime)
    }


    //Wenn man sich den 4. Stift kauft
    function Pen4(){
        let click = new Audio()
        click.src = "./click.mp3"
        click.play()
        if(pen == "./Pen4.png"){
            document.getElementById("pen4").innerText = "Already using Pen 4"
        return;
        }
    
        if(pen == "./Pen5.png"){
            document.getElementById("pen4").innerText = "Already using Pen 5"
        return;
        }  

        if(price =="OFF"){
            pen = "./Pen4.png"
        document.getElementById("penid").src=pen
        document.getElementById("penid").style.width = "500px"
        document.getElementById("penid").style.height = "500px"

        if(skin == "Skin1"){
            document.getElementById("penid").src="./Pen4Skin1.png"
        }

        if(skin == "Skin2"){
            document.getElementById("penid").src="./Pen4Skin2.png"
        }

        if(skin == "Skin3"){
            document.getElementById("penid").src="./Pen4Skin3.gif"
        }

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

        document.getElementById("spintextid").innerText = "Spins: " + spins+"/∞"
        document.getElementById("spinspeedid").innerText = "Speed: " + speed+"/100"
        document.getElementById("spinweightid").innerText = "Weight: " + weight+"/"+weightlimit
        document.getElementById("spinmultyid").innerText = "Spins per spin: " + multiplyer+"/"+multylimit

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

            if(SECRET_BACKGROUND == "ON"){
                document.body.style.backgroundImage = "url(./Hackground.jpg)"
              }

              if(SECRET_PEN == "ON"){
                document.getElementById("penid").src = "./SECRET_PEN.png"
            }

            if(price == "OFF"){
                speedkosten = 0
                speedpreis = 0
                document.getElementById("faster").innerText = "Faster Spin ("+Math.floor(speedkosten)+" Spins)"

                weightkosten = 0
                weightpreis = 0
                document.getElementById("weight").innerText = "Heavier Pen ("+Math.floor(weightkosten)+" Spins)"

                multykosten = 0
                multypreis = 0
                document.getElementById("multy").innerText = "Spin Multiplyer ("+Math.floor(multykosten)+" Spins)"

                document.getElementById("back1").innerText ="Background 1 (0 Spins)"
                document.getElementById("back2").innerText ="Background 2 (0 Spins)"
                document.getElementById("back3").innerText ="Background 3 (0 Spins)"
                document.getElementById("back4").innerText ="Background 4 (0 Spins)"
                document.getElementById("back5").innerText ="Background 5 (0 Spins)"

                document.getElementById("skin1").innerText ="Skin 1 (0 Spins)"
                document.getElementById("skin2").innerText ="Skin 2 (0 Spins)"
                document.getElementById("skin3").innerText ="Skin 3 (0 Spins)"

                document.getElementById("pen2").innerText ="Pen 2 (0 Spins)"
                document.getElementById("pen3").innerText ="Pen 3 (0 Spins)"
                document.getElementById("pen4").innerText ="Pen 4 (0 Spins)"
                document.getElementById("pen5").innerText ="Pen 5 (0 Spins)"
            }

            if(limit == "OFF"){
                weightlimit = 99999999999999999999999999999999999999999999999999999999999999999999999999999999
                document.getElementById("spinweightid").innerText = "Weight: " + weight+"/∞"

                multylimit = 999999999999999999999999999999999999999999999999999999999999999999999999999999999
                document.getElementById("spinmultyid").innerText = "Spins per spin: " + multiplyer+"/∞"
            }

            music.play()
            let rotateimage = document.getElementById("penid");

            rotateimage.style.transform = `rotate(${degrees}deg)`


            degrees+=degreenumber
            if(degrees > 359) {

                spins+=1*multiplyer
                save()

            document.getElementById("spintextid").innerText = "Spins: " + spins+"/∞"

                degrees -=360
            }
        }, spintime)
            return;
        }

        if(spins < 5000000) return console.log("Zu wenig!");

        pen = "./Pen4.png"
        document.getElementById("penid").src=pen
        document.getElementById("penid").style.width = "500px"
        document.getElementById("penid").style.height = "500px"

        if(skin == "Skin1"){
            document.getElementById("penid").src="./Pen4Skin1.png"
        }

        if(skin == "Skin2"){
            document.getElementById("penid").src="./Pen4Skin2.png"
        }

        if(skin == "Skin3"){
            document.getElementById("penid").src="./Pen4Skin3.gif"
        }

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

        document.getElementById("spintextid").innerText = "Spins: " + spins+"/∞"
        document.getElementById("spinspeedid").innerText = "Speed: " + speed+"/100"
        document.getElementById("spinweightid").innerText = "Weight: " + weight+"/"+weightlimit
        document.getElementById("spinmultyid").innerText = "Spins per spin: " + multiplyer+"/"+multylimit

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

            if(SECRET_BACKGROUND == "ON"){
                document.body.style.backgroundImage = "url(./Hackground.jpg)"
              }

              if(SECRET_PEN == "ON"){
                document.getElementById("penid").src = "./SECRET_PEN.png"
            }

            if(price == "OFF"){
                speedkosten = 0
                speedpreis = 0
                document.getElementById("faster").innerText = "Faster Spin ("+Math.floor(speedkosten)+" Spins)"

                weightkosten = 0
                weightpreis = 0
                document.getElementById("weight").innerText = "Heavier Pen ("+Math.floor(weightkosten)+" Spins)"

                multykosten = 0
                multypreis = 0
                document.getElementById("multy").innerText = "Spin Multiplyer ("+Math.floor(multykosten)+" Spins)"

                document.getElementById("back1").innerText ="Background 1 (0 Spins)"
                document.getElementById("back2").innerText ="Background 2 (0 Spins)"
                document.getElementById("back3").innerText ="Background 3 (0 Spins)"
                document.getElementById("back4").innerText ="Background 4 (0 Spins)"
                document.getElementById("back5").innerText ="Background 5 (0 Spins)"

                document.getElementById("skin1").innerText ="Skin 1 (0 Spins)"
                document.getElementById("skin2").innerText ="Skin 2 (0 Spins)"
                document.getElementById("skin3").innerText ="Skin 3 (0 Spins)"

                document.getElementById("pen2").innerText ="Pen 2 (0 Spins)"
                document.getElementById("pen3").innerText ="Pen 3 (0 Spins)"
                document.getElementById("pen4").innerText ="Pen 4 (0 Spins)"
                document.getElementById("pen5").innerText ="Pen 5 (0 Spins)"
            }

            if(limit == "OFF"){
                weightlimit = 99999999999999999999999999999999999999999999999999999999999999999999999999999999
                document.getElementById("spinweightid").innerText = "Weight: " + weight+"/∞"

                multylimit = 999999999999999999999999999999999999999999999999999999999999999999999999999999999
                document.getElementById("spinmultyid").innerText = "Spins per spin: " + multiplyer+"/∞"
            }

            music.play()
            let rotateimage = document.getElementById("penid");

            rotateimage.style.transform = `rotate(${degrees}deg)`


            degrees+=degreenumber
            if(degrees > 359) {

                spins+=1*multiplyer
                save()

            document.getElementById("spintextid").innerText = "Spins: " + spins+"/∞"

                degrees -=360
            }
        }, spintime)
    }


    //Wenn man sich den 5. Stift kauft
    function Pen5(){
        let click = new Audio()
        click.src = "./click.mp3"
        click.play()

    if(pen == "./Pen5.png"){
        document.getElementById("pen5").innerText = "Already using Pen 5"
    return;
    }  

    if(price =="OFF"){
        pen = "./Pen5.png"
        document.getElementById("penid").src=pen
        document.getElementById("penid").style.width = "500px"
        document.getElementById("penid").style.height = "500px"

        if(skin == "Skin1"){
            document.getElementById("penid").src="./Pen5Skin1.png"
        }

        if(skin == "Skin2"){
            document.getElementById("penid").src="./Pen5Skin2.png"
        }

        if(skin == "Skin3"){
            document.getElementById("penid").src="./Pen5Skin3.gif"
        }

        degreenumber = 20

        multylimit += 20

        weightlimit += 20

        speed = 20

        spintime = 70

        multiplyer = 20

        weight = 20

        speedpreis = 1.055;

        weightpreis = 1.06;

        multypreis = 1.07;

        speedkosten = 10

        weightkosten = 15

        multykosten = 10

        document.getElementById("spintextid").innerText = "Spins: " + spins+"/∞"
        document.getElementById("spinspeedid").innerText = "Speed: " + speed+"/100"
        document.getElementById("spinweightid").innerText = "Weight: " + weight+"/"+weightlimit
        document.getElementById("spinmultyid").innerText = "Spins per spin: " + multiplyer+"/"+multylimit

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

            if(SECRET_BACKGROUND == "ON"){
                document.body.style.backgroundImage = "url(./Hackground.jpg)"
              }

              if(SECRET_PEN == "ON"){
                document.getElementById("penid").src = "./SECRET_PEN.png"
            }

            if(price == "OFF"){
                speedkosten = 0
                speedpreis = 0
                document.getElementById("faster").innerText = "Faster Spin ("+Math.floor(speedkosten)+" Spins)"

                weightkosten = 0
                weightpreis = 0
                document.getElementById("weight").innerText = "Heavier Pen ("+Math.floor(weightkosten)+" Spins)"

                multykosten = 0
                multypreis = 0
                document.getElementById("multy").innerText = "Spin Multiplyer ("+Math.floor(multykosten)+" Spins)"

                document.getElementById("back1").innerText ="Background 1 (0 Spins)"
                document.getElementById("back2").innerText ="Background 2 (0 Spins)"
                document.getElementById("back3").innerText ="Background 3 (0 Spins)"
                document.getElementById("back4").innerText ="Background 4 (0 Spins)"
                document.getElementById("back5").innerText ="Background 5 (0 Spins)"

                document.getElementById("skin1").innerText ="Skin 1 (0 Spins)"
                document.getElementById("skin2").innerText ="Skin 2 (0 Spins)"
                document.getElementById("skin3").innerText ="Skin 3 (0 Spins)"

                document.getElementById("pen2").innerText ="Pen 2 (0 Spins)"
                document.getElementById("pen3").innerText ="Pen 3 (0 Spins)"
                document.getElementById("pen4").innerText ="Pen 4 (0 Spins)"
                document.getElementById("pen5").innerText ="Pen 5 (0 Spins)"
            }

            if(limit == "OFF"){
                weightlimit = 99999999999999999999999999999999999999999999999999999999999999999999999999999999
                document.getElementById("spinweightid").innerText = "Weight: " + weight+"/∞"

                multylimit = 999999999999999999999999999999999999999999999999999999999999999999999999999999999
                document.getElementById("spinmultyid").innerText = "Spins per spin: " + multiplyer+"/∞"
            }

            music.play()
            let rotateimage = document.getElementById("penid");

            rotateimage.style.transform = `rotate(${degrees}deg)`


            degrees+=degreenumber
            if(degrees > 359) {

                spins+=1*multiplyer
                save()

            document.getElementById("spintextid").innerText = "Spins: " + spins+"/∞"

                degrees -=360
            }
        }, spintime)
        return;
    }

    if(spins < 10000000) return console.log("Zu wenig!");

        pen = "./Pen5.png"
        document.getElementById("penid").src=pen
        document.getElementById("penid").style.width = "500px"
        document.getElementById("penid").style.height = "500px"

        if(skin == "Skin1"){
            document.getElementById("penid").src="./Pen5Skin1.png"
        }

        if(skin == "Skin2"){
            document.getElementById("penid").src="./Pen5Skin2.png"
        }

        if(skin == "Skin3"){
            document.getElementById("penid").src="./Pen5Skin3.gif"
        }

        spins -= 10000000

        degreenumber = 20

        multylimit += 20

        weightlimit += 20

        speed = 20

        spintime = 70

        multiplyer = 20

        weight = 20

        speedpreis = 1.055;

        weightpreis = 1.06;

        multypreis = 1.07;

        speedkosten = 10

        weightkosten = 15

        multykosten = 10

        document.getElementById("spintextid").innerText = "Spins: " + spins+"/∞"
        document.getElementById("spinspeedid").innerText = "Speed: " + speed+"/100"
        document.getElementById("spinweightid").innerText = "Weight: " + weight+"/"+weightlimit
        document.getElementById("spinmultyid").innerText = "Spins per spin: " + multiplyer+"/"+multylimit

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

            if(SECRET_BACKGROUND == "ON"){
                document.body.style.backgroundImage = "url(./Hackground.jpg)"
              }

              if(SECRET_PEN == "ON"){
                document.getElementById("penid").src = "./SECRET_PEN.png"
            }

            if(price == "OFF"){
                speedkosten = 0
                speedpreis = 0
                document.getElementById("faster").innerText = "Faster Spin ("+Math.floor(speedkosten)+" Spins)"

                weightkosten = 0
                weightpreis = 0
                document.getElementById("weight").innerText = "Heavier Pen ("+Math.floor(weightkosten)+" Spins)"

                multykosten = 0
                multypreis = 0
                document.getElementById("multy").innerText = "Spin Multiplyer ("+Math.floor(multykosten)+" Spins)"

                document.getElementById("back1").innerText ="Background 1 (0 Spins)"
                document.getElementById("back2").innerText ="Background 2 (0 Spins)"
                document.getElementById("back3").innerText ="Background 3 (0 Spins)"
                document.getElementById("back4").innerText ="Background 4 (0 Spins)"
                document.getElementById("back5").innerText ="Background 5 (0 Spins)"

                document.getElementById("skin1").innerText ="Skin 1 (0 Spins)"
                document.getElementById("skin2").innerText ="Skin 2 (0 Spins)"
                document.getElementById("skin3").innerText ="Skin 3 (0 Spins)"

                document.getElementById("pen2").innerText ="Pen 2 (0 Spins)"
                document.getElementById("pen3").innerText ="Pen 3 (0 Spins)"
                document.getElementById("pen4").innerText ="Pen 4 (0 Spins)"
                document.getElementById("pen5").innerText ="Pen 5 (0 Spins)"
            }

            if(limit == "OFF"){
                weightlimit = 99999999999999999999999999999999999999999999999999999999999999999999999999999999
                document.getElementById("spinweightid").innerText = "Weight: " + weight+"/∞"

                multylimit = 999999999999999999999999999999999999999999999999999999999999999999999999999999999
                document.getElementById("spinmultyid").innerText = "Spins per spin: " + multiplyer+"/∞"
            }

            music.play()
            let rotateimage = document.getElementById("penid");

            rotateimage.style.transform = `rotate(${degrees}deg)`


            degrees+=degreenumber
            if(degrees > 359) {

                spins+=1*multiplyer
                save()

            document.getElementById("spintextid").innerText = "Spins: " + spins+"/∞"

                degrees -=360
            }
        }, spintime)
    }



    //wenn man sich die schneller erweiterung kauft
    function faster(){
        let click = new Audio()
        click.src = "./click.mp3"
        click.play()

            if(spintime <=speedlimit){
                document.getElementById("faster").style.backgroundColor ="RED"
                document.getElementById("faster").innerText = "MAX"

                spintime = speedlimit
                speed = 100
                document.getElementById("spinspeedid").innerText = "Speed: " + speed+"/100"
                return;
            }

            if(Math.floor(spins) < Math.floor(speedkosten)) return;

            spins -= Math.floor(speedkosten)

            speedkosten *=speedpreis

            document.getElementById("faster").innerText = "Faster Spin ("+Math.floor(speedkosten)+" Spins)"
            document.getElementById("spintextid").innerText = "Spins: " + Math.floor(spins)+"/∞"

            speed++

            save()

            document.getElementById("spinspeedid").innerText = "Speed: " + speed+"/100"

            spintime -= 1

        clearInterval(Actualpenspin)

        Actualpenspin = setInterval(function() {

            if(SECRET_BACKGROUND == "ON"){
                document.body.style.backgroundImage = "url(./Hackground.jpg)"
              }

              if(SECRET_PEN == "ON"){
                document.getElementById("penid").src = "./SECRET_PEN.png"
            }

            if(price == "OFF"){
                speedkosten = 0
                speedpreis = 0
                document.getElementById("faster").innerText = "Faster Spin ("+Math.floor(speedkosten)+" Spins)"

                weightkosten = 0
                weightpreis = 0
                document.getElementById("weight").innerText = "Heavier Pen ("+Math.floor(weightkosten)+" Spins)"

                multykosten = 0
                multypreis = 0
                document.getElementById("multy").innerText = "Spin Multiplyer ("+Math.floor(multykosten)+" Spins)"

                document.getElementById("back1").innerText ="Background 1 (0 Spins)"
                document.getElementById("back2").innerText ="Background 2 (0 Spins)"
                document.getElementById("back3").innerText ="Background 3 (0 Spins)"
                document.getElementById("back4").innerText ="Background 4 (0 Spins)"
                document.getElementById("back5").innerText ="Background 5 (0 Spins)"

                document.getElementById("skin1").innerText ="Skin 1 (0 Spins)"
                document.getElementById("skin2").innerText ="Skin 2 (0 Spins)"
                document.getElementById("skin3").innerText ="Skin 3 (0 Spins)"

                document.getElementById("pen2").innerText ="Pen 2 (0 Spins)"
                document.getElementById("pen3").innerText ="Pen 3 (0 Spins)"
                document.getElementById("pen4").innerText ="Pen 4 (0 Spins)"
                document.getElementById("pen5").innerText ="Pen 5 (0 Spins)"
            }

            if(limit == "OFF"){
                weightlimit = 99999999999999999999999999999999999999999999999999999999999999999999999999999999
                document.getElementById("spinweightid").innerText = "Weight: " + weight+"/∞"

                multylimit = 999999999999999999999999999999999999999999999999999999999999999999999999999999999
                document.getElementById("spinmultyid").innerText = "Spins per spin: " + multiplyer+"/∞"
            }

        music.play()
        let rotateimage = document.getElementById("penid");

        rotateimage.style.transform = `rotate(${degrees}deg)`


        degrees+=degreenumber
        if(degrees > 359) {

            spins+=1*multiplyer
            save()

        document.getElementById("spintextid").innerText = "Spins: " + Math.floor(spins)+"/∞"

            degrees -=360
        }
    }, spintime)

    }


    //wenn man sich die schwerer erweiterung kauft
    function heavier(){
        let click = new Audio()
        click.src = "./click.mp3"
        click.play()

        if(weight >= weightlimit){
            document.getElementById("weight").style.backgroundColor ="RED"
                document.getElementById("weight").innerText = "MAX"

                degreenumber = weightlimit/2
                weight = weightlimit
                document.getElementById("spinweightid").innerText = "Weight: " + weight+"/"+weightlimit
                return;
            }

            if(Math.floor(spins) < Math.floor(weightkosten)) return;

            spins -= Math.floor(weightkosten)

            weightkosten *= weightpreis

            document.getElementById("weight").innerText = "Heavier Pen ("+Math.floor(weightkosten)+" Spins)"
            document.getElementById("spintextid").innerText = "Spins: " + Math.floor(spins)+"/∞"

            weight++

            save()

            document.getElementById("spinweightid").innerText = "Weight: " + weight+"/"+weightlimit

        degreenumber+=0.5

        clearInterval(Actualpenspin)

        Actualpenspin = setInterval(() =>{

            if(SECRET_BACKGROUND == "ON"){
                document.body.style.backgroundImage = "url(./Hackground.jpg)"
              }

              if(SECRET_PEN == "ON"){
                document.getElementById("penid").src = "./SECRET_PEN.png"
            }

            if(price == "OFF"){
                speedkosten = 0
                speedpreis = 0
                document.getElementById("faster").innerText = "Faster Spin ("+Math.floor(speedkosten)+" Spins)"

                weightkosten = 0
                weightpreis = 0
                document.getElementById("weight").innerText = "Heavier Pen ("+Math.floor(weightkosten)+" Spins)"

                multykosten = 0
                multypreis = 0
                document.getElementById("multy").innerText = "Spin Multiplyer ("+Math.floor(multykosten)+" Spins)"

                document.getElementById("back1").innerText ="Background 1 (0 Spins)"
                document.getElementById("back2").innerText ="Background 2 (0 Spins)"
                document.getElementById("back3").innerText ="Background 3 (0 Spins)"
                document.getElementById("back4").innerText ="Background 4 (0 Spins)"
                document.getElementById("back5").innerText ="Background 5 (0 Spins)"

                document.getElementById("skin1").innerText ="Skin 1 (0 Spins)"
                document.getElementById("skin2").innerText ="Skin 2 (0 Spins)"
                document.getElementById("skin3").innerText ="Skin 3 (0 Spins)"

                document.getElementById("pen2").innerText ="Pen 2 (0 Spins)"
                document.getElementById("pen3").innerText ="Pen 3 (0 Spins)"
                document.getElementById("pen4").innerText ="Pen 4 (0 Spins)"
                document.getElementById("pen5").innerText ="Pen 5 (0 Spins)"
            }

            if(limit == "OFF"){
                weightlimit = 99999999999999999999999999999999999999999999999999999999999999999999999999999999
                document.getElementById("spinweightid").innerText = "Weight: " + weight+"/∞"

                multylimit = 999999999999999999999999999999999999999999999999999999999999999999999999999999999
                document.getElementById("spinmultyid").innerText = "Spins per spin: " + multiplyer+"/∞"
            }

        music.play()
        let rotateimage = document.getElementById("penid");

        rotateimage.style.transform = `rotate(${degrees}deg)`

        degrees+=degreenumber

        if(degrees > 359) {

            spins+=1*multiplyer
            save()

        document.getElementById("spintextid").innerText = "Spins: " + Math.floor(spins)+"/∞"

            degrees -=360
        }
    }, spintime)
    }


    //wenn man sich die multiplikator erweiterung kauft
    function multy(){
        let click = new Audio()
        click.src = "./click.mp3"
        click.play()

        if(multiplyer >= multylimit){
            document.getElementById("multy").style.backgroundColor ="RED"
                document.getElementById("multy").innerText = "MAX"

                multiplyer = multylimit

                document.getElementById("spinmultyid").innerText = "Spins per spin: " + multiplyer+"/"+multylimit
                return;
        }

        if(Math.floor(spins) < Math.floor(multykosten)) return;

            spins -= Math.floor(multykosten)

            multykosten *= multypreis

            document.getElementById("multy").innerText = "Spin Multiplyer ("+Math.floor(multykosten)+" Spins)"
            document.getElementById("spintextid").innerText = "Spins: " + Math.floor(spins)+"/∞"


        multiplyer++

        document.getElementById("spinmultyid").innerText = "Spins per spin: " + multiplyer+"/"+multylimit

        save()

        clearInterval(Actualpenspin)

        Actualpenspin = setInterval(() =>{

            if(SECRET_BACKGROUND == "ON"){
                document.body.style.backgroundImage = "url(./Hackground.jpg)"
              }

              if(SECRET_PEN == "ON"){
                document.getElementById("penid").src = "./SECRET_PEN.png"
            }

            if(price == "OFF"){
                speedkosten = 0
                speedpreis = 0
                document.getElementById("faster").innerText = "Faster Spin ("+Math.floor(speedkosten)+" Spins)"

                weightkosten = 0
                weightpreis = 0
                document.getElementById("weight").innerText = "Heavier Pen ("+Math.floor(weightkosten)+" Spins)"

                multykosten = 0
                multypreis = 0
                document.getElementById("multy").innerText = "Spin Multiplyer ("+Math.floor(multykosten)+" Spins)"

                document.getElementById("back1").innerText ="Background 1 (0 Spins)"
                document.getElementById("back2").innerText ="Background 2 (0 Spins)"
                document.getElementById("back3").innerText ="Background 3 (0 Spins)"
                document.getElementById("back4").innerText ="Background 4 (0 Spins)"
                document.getElementById("back5").innerText ="Background 5 (0 Spins)"

                document.getElementById("skin1").innerText ="Skin 1 (0 Spins)"
                document.getElementById("skin2").innerText ="Skin 2 (0 Spins)"
                document.getElementById("skin3").innerText ="Skin 3 (0 Spins)"

                document.getElementById("pen2").innerText ="Pen 2 (0 Spins)"
                document.getElementById("pen3").innerText ="Pen 3 (0 Spins)"
                document.getElementById("pen4").innerText ="Pen 4 (0 Spins)"
                document.getElementById("pen5").innerText ="Pen 5 (0 Spins)"
            }

            if(limit == "OFF"){
                weightlimit = 99999999999999999999999999999999999999999999999999999999999999999999999999999999
                document.getElementById("spinweightid").innerText = "Weight: " + weight+"/∞"

                multylimit = 999999999999999999999999999999999999999999999999999999999999999999999999999999999
                document.getElementById("spinmultyid").innerText = "Spins per spin: " + multiplyer+"/∞"
            }

        music.play()
        let rotateimage = document.getElementById("penid");

        rotateimage.style.transform = `rotate(${degrees}deg)`

        degrees+=degreenumber

        if(degrees > 359) {

            spins+=1*multiplyer
            save()
        document.getElementById("spintextid").innerText = "Spins: " + Math.floor(spins)+"/∞"

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
    if(price = "OFF"){
        if(back == "./Background1.jpg") return;
        document.body.style.backgroundImage = "url(./Background1.jpg)"
        document.getElementById("BackgroundShop").style.left = "200%"
        back = "./Background1.jpg"
        openShop = 0
        save()
        return;
    }
let click = new Audio()
click.src = "./click.mp3"
click.play()
if(spins < 500) return console.log("Zu wenig");
if(back == "./Background1.jpg") return;
document.body.style.backgroundImage = "url(./Background1.jpg)"
document.getElementById("BackgroundShop").style.left = "200%"
back = "./Background1.jpg"
spins -= 500
document.getElementById("spintextid").innerText = "Spins: " + Math.floor(spins)+"/∞"
openShop = 0
save()
}

//Wenn man sich Hintergrund 2 kauft
function Backgr2(){
    if(price = "OFF"){
        if(back == "./Background2.png") return;
        document.body.style.backgroundImage = "url(./Background2.png)"
        document.getElementById("BackgroundShop").style.left = "200%"
        back = "./Background2.png"
        openShop = 0
        save()
        return;
    }
let click = new Audio()
click.src = "./click.mp3"
click.play()
if(spins < 500) return console.log("Zu wenig");
if(back == "./Background2.png") return;
document.body.style.backgroundImage = "url(./Background2.png)"
document.getElementById("BackgroundShop").style.left = "200%"
back = "./Background2.png"
spins -= 500
document.getElementById("spintextid").innerText = "Spins: " + Math.floor(spins)+"/∞"
openShop = 0
save()
}

//Wenn man sich Hintergrund 3 kauft
function Backgr3(){
    if(price = "OFF"){
        if(back == "./Background3.gif") return;
        document.body.style.backgroundImage = "url(./Background3.gif)"
        document.getElementById("BackgroundShop").style.left = "200%"
        back = "./Background3.gif"
        openShop = 0
        save()
        return;
    }
    let click = new Audio()
    click.src = "./click.mp3"
    click.play()
    if(spins < 1500) return console.log("Zu wenig");
    if(back == "./Background3.gif") return;
    document.body.style.backgroundImage = "url(./Background3.gif)"
    document.getElementById("BackgroundShop").style.left = "200%"
    back = "./Background3.gif"
    spins -= 1500
    document.getElementById("spintextid").innerText = "Spins: " + Math.floor(spins)+"/∞"
    openShop = 0
    save()
    }

    //Wenn man sich Hintergrund 4 kauft
function Backgr4(){
    if(price = "OFF"){
        if(back == "./Background4.jpg") return;
        document.body.style.backgroundImage = "url(./Background4.jpg)"
        document.getElementById("BackgroundShop").style.left = "200%"
        back = "./Background4.jpg"
        openShop = 0
        save()
        return;
    }
    let click = new Audio()
    click.src = "./click.mp3"
    click.play()
    if(spins < 500) return console.log("Zu wenig");
    if(back == "./Background4.jpg") return;
    document.body.style.backgroundImage = "url(./Background4.jpg)"
    document.getElementById("BackgroundShop").style.left = "200%"
    back = "./Background4.jpg"
    spins -= 500
    document.getElementById("spintextid").innerText = "Spins: " + Math.floor(spins)+"/∞"
    openShop = 0
    save()
    }

    //Wenn man sich Hintergrund 5 kauft
function Backgr5(){
    if(price = "OFF"){
        if(back == "./Background5.png") return;
        document.body.style.backgroundImage = "url(./Background5.png)"
        document.getElementById("BackgroundShop").style.left = "200%"
        back = "./Background5.png"
        openShop = 0
        save()
        return;
    }
    let click = new Audio()
    click.src = "./click.mp3"
    click.play()
    if(spins < 500) return console.log("Zu wenig");
    if(back == "./Background5.png") return;
    document.body.style.backgroundImage = "url(./Background5.png)"
    document.getElementById("BackgroundShop").style.left = "200%"
    back = "./Background5.png"
    spins -= 500
    document.getElementById("spintextid").innerText = "Spins: " + Math.floor(spins)+"/∞"
    openShop = 0
    save()
    }

    //Wenn man den Skin Shop öffnet
function SkinShop(){
    let click = new Audio()
    click.src = "./click.mp3"
    click.play()
    if(openSShop == 0){
        openSShop = 1
        document.getElementById("PenSkinShop").style.right="30%"
    }else{
        document.getElementById("PenSkinShop").style.right="200%"
        openSShop = 0
    }
}

//wenn man keinen skin haben will
function noSkin(){
    let click = new Audio()
    click.src = "./click.mp3"
    click.play()
if(skin == "NaN") return;
skin = "NaN"


if(pen == "./StartPen.png") {
    document.getElementById("penid").src = "./StartPen.png"
}

if(pen == "./Pen2.png") {
    document.getElementById("penid").src = "./Pen2.png"
}

if(pen == "./Pen3.png") {
    document.getElementById("penid").src = "./Pen3.png"
}

if(pen == "./Pen4.png") {
    document.getElementById("penid").src = "./Pen4.png"
}

if(pen == "./Pen5.png") {
    document.getElementById("penid").src = "./Pen5.png"
}
document.getElementById("PenSkinShop").style.right = "200%"
openSShop = 0
save()
}


//Wenn man sich Skin 1 kauft
function Skin1(){
    let click = new Audio()
    click.src = "./click.mp3"
    click.play()

    if(price == "OFF"){
        if(skin == "Skin1") return;

    if(pen =="./StartPen.png") {
        document.getElementById("penid").src = "./StartSkin1.png"
    }

    if(pen =="./Pen2.png") {
        document.getElementById("penid").src = "./Pen2Skin1.png"
    }

    if(pen =="./Pen3.png") {
        document.getElementById("penid").src = "./Pen3Skin1.png"
    }

    if(pen =="./Pen4.png") {
        document.getElementById("penid").src = "./Pen4Skin1.png"
    }

    if(pen =="./Pen5.png") {
        document.getElementById("penid").src = "./Pen5Skin1.png"
    }

    skin = "Skin1"
    document.getElementById("PenSkinShop").style.right = "200%"
    openSShop = 0
    save()
    return;
    }

    if(spins < 1000) return console.log("Zu wenig");

    if(skin == "Skin1") return;

    if(pen =="./StartPen.png") {
        document.getElementById("penid").src = "./StartSkin1.png"
    }

    if(pen =="./Pen2.png") {
        document.getElementById("penid").src = "./Pen2Skin1.png"
    }

    if(pen =="./Pen3.png") {
        document.getElementById("penid").src = "./Pen3Skin1.png"
    }

    if(pen =="./Pen4.png") {
        document.getElementById("penid").src = "./Pen4Skin1.png"
    }

    if(pen =="./Pen5.png") {
        document.getElementById("penid").src = "./Pen5Skin1.png"
    }

    skin = "Skin1"
    document.getElementById("PenSkinShop").style.right = "200%"
    spins -= 1000
    document.getElementById("spintextid").innerText = "Spins: " + Math.floor(spins)+"/∞"
    openSShop = 0
    save()
    }

//Wenn man sich Skin 2 kauft
function Skin2(){
    let click = new Audio()
    click.src = "./click.mp3"
    click.play()

    if(price == "OFF"){
        if(skin == "Skin2") return;

    if(pen =="./StartPen.png") {
        document.getElementById("penid").src = "./StartSkin2.png"
    }

    if(pen =="./Pen2.png") {
        document.getElementById("penid").src = "./Pen2Skin2.png"
    }

    if(pen =="./Pen3.png") {
        document.getElementById("penid").src = "./Pen3Skin2.png"
    }

    if(pen =="./Pen4.png") {
        document.getElementById("penid").src = "./Pen4Skin2.png"
    }

    if(pen =="./Pen5.png") {
        document.getElementById("penid").src = "./Pen5Skin2.png"
    }

    skin = "Skin2"
    document.getElementById("PenSkinShop").style.right = "200%"
    openSShop = 0
    save()
    return;
    }

    if(spins < 250) return console.log("Zu wenig");

    if(skin == "Skin2") return;

    if(pen =="./StartPen.png") {
        document.getElementById("penid").src = "./StartSkin2.png"
    }

    if(pen =="./Pen2.png") {
        document.getElementById("penid").src = "./Pen2Skin2.png"
    }

    if(pen =="./Pen3.png") {
        document.getElementById("penid").src = "./Pen3Skin2.png"
    }

    if(pen =="./Pen4.png") {
        document.getElementById("penid").src = "./Pen4Skin2.png"
    }

    if(pen =="./Pen5.png") {
        document.getElementById("penid").src = "./Pen5Skin2.png"
    }

    skin = "Skin2"
    document.getElementById("PenSkinShop").style.right = "200%"
    spins -= 250
    document.getElementById("spintextid").innerText = "Spins: " + Math.floor(spins)+"/∞"
    openSShop = 0
    save()
    }

//Wenn man sich Skin 3 kauft
function Skin3(){
    let click = new Audio()
    click.src = "./click.mp3"
    click.play()

    if(price == "OFF"){
        if(skin == "Skin3") return;

    if(pen =="./StartPen.png") {
        document.getElementById("penid").src = "./StartSkin3.gif"
    }

    if(pen =="./Pen2.png") {
        document.getElementById("penid").src = "./Pen2Skin3.gif"
    }

    if(pen =="./Pen3.png") {
        document.getElementById("penid").src = "./Pen3Skin3.gif"
    }

    if(pen =="./Pen4.png") {
        document.getElementById("penid").src = "./Pen4Skin3.gif"
    }

    if(pen =="./Pen5.png") {
        document.getElementById("penid").src = "./Pen5Skin3.gif"
    }

    skin = "Skin3"
    document.getElementById("PenSkinShop").style.right = "200%"
    openSShop = 0
    save()
    return;
    }

    if(spins < 2500) return console.log("Zu wenig");

    if(skin == "Skin3") return;

    if(pen =="./StartPen.png") {
        document.getElementById("penid").src = "./StartSkin3.gif"
    }

    if(pen =="./Pen2.png") {
        document.getElementById("penid").src = "./Pen2Skin3.gif"
    }

    if(pen =="./Pen3.png") {
        document.getElementById("penid").src = "./Pen3Skin3.gif"
    }

    if(pen =="./Pen4.png") {
        document.getElementById("penid").src = "./Pen4Skin3.gif"
    }

    if(pen =="./Pen5.png") {
        document.getElementById("penid").src = "./Pen5Skin3.gif"
    }

    skin = "Skin3"
    document.getElementById("PenSkinShop").style.right = "200%"
    spins -= 2500
    document.getElementById("spintextid").innerText = "Spins: " + Math.floor(spins)+"/∞"
    openSShop = 0
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
                    let good = new Audio()
                    good.src ="./hack complete.mp3"
                    good.volume = 0.8
                    good.play()
                    document.getElementById("hackbutton").innerText = "Hack was good!"
                    if(pen == "./StartPen.png"){
                        spins += 20000
                    }
                    if(pen == "./Pen2.png"){
                        spins += 200000
                    }
                    if(pen == "./Pen3.png"){
                        spins += 1000000
                    }
                    if(pen == "./Pen4.png"){
                        spins += 2000000
                    }
                    if(pen == "./Pen5.png"){
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
                    let bad = new Audio()
                    bad.src ="./hack bad.mp3"
                    bad.play()
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


    //wenn man sich das win geholt hat
    var Winning;
    var winfortschritt = 0;
    var iswinning = 0;
    function Win() {
        let click = new Audio()
        click.src = "./click.mp3"
        click.play()
        if(iswinning != 0) return;
        iswinning = 1;
        Winning = setInterval(()=>{
            winfortschritt++
            let clicks = new Audio()
            clicks.src = "./hackclicks.mp3"
            clicks.volume = 0.3
            clicks.play()
            document.getElementById("winbutton").innerText = winfortschritt+"%"
            if(winfortschritt >= 100){
                let change = Math.floor(Math.random() * 10)
                if(change == 1){
                    let good = new Audio()
                    good.src ="./hack complete.mp3"
                    good.volume = 0.8
                    good.play()
                    document.getElementById("winbutton").innerText = "You won!"
                    if(pen == "./StartPen.png"){
                        spins += 100000
                    }
                    if(pen == "./Pen2.png"){
                        spins += 1000000
                    }
                    if(pen == "./Pen3.png"){
                        spins += 5000000
                    }
                    if(pen == "./Pen4.png"){
                        spins += 10000000
                    }
                    if(pen == "./Pen5.png"){
                        spins += 10000000
                    }
                    document.getElementById("spintextid").innerText = "Spins: " + Math.floor(spins)+"/∞"
                    save()
                    setTimeout(()=>{
                        document.getElementById("winbutton").innerText = "Win Spins"
                        winfortschritt = 0
                        iswinning = 0
                    },5000)
                }else{
                    let bad = new Audio()
                    bad.src ="./hack bad.mp3"
                    bad.play()
                    document.getElementById("winbutton").innerText = "You lose!"
                    setTimeout(()=>{
                        document.getElementById("winbutton").innerText = "Win Spins"
                        winfortschritt = 0;
                        iswinning = 0;
                    },5000)
                }
                clearInterval(Winning)
            }
        },50)
    }
