var degrees = 0;

var spins = 100;

var spintime = 100;

var multiplyer = 1;

var Actualpenspin;

var degreenumber = 1;

var weight = 1;

var speed = 1;

var speedpreis = 1.04;

var weightpreis = 1.05;

var multypreis = 1.055;

var speedlimit = 2;

var weightlimit = 50;

var multylimit = 50;

var pen = "./StartPen.jpg";
let music = new Audio()
music.src = "./Background-Music.mp3"
music.volume = 0.3

    let speedkosten = 10

    let weightkosten = 15

    var multykosten = 10

    function save() {
        localStorage.setItem('Speed', JSON.stringify(speed));
        localStorage.setItem('Weigh',JSON.stringify(weight));
        localStorage.setItem('Multy', JSON.stringify(multiplyer));
        localStorage.setItem('Spins', JSON.stringify(spins));
        localStorage.setItem('Pen', JSON.stringify(pen));
      }
      
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
      }

      jQuery(document).ready(function(){
        load()
        if(pen == "./Pen2.jpg"){
            document.getElementById("pen2").innerText = "Using Pen 2"
        }

        if(pen == "./Pen3.jpg"){
            document.getElementById("pen3").innerText = "Using Pen 3"
        }
          document.getElementById("penid").src=pen
          document.getElementById("penid").style.width = "425px"
          document.getElementById("penid").style.height = "425px"
          document.getElementById("spintextid").innerText = "Spins: " + spins
          document.getElementById("spinspeedid").innerText = "Speed: " + speed
          document.getElementById("spinweightid").innerText = "Weight: " + weight

          spintime -= speed+1
          degreenumber += weight-1

          if(degreenumber >= weightlimit){
              degreenumber = weightlimit
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

                degrees = 1
            }
        }, spintime)
      })

    Actualpenspin = setInterval(function() {

        music.play()
        let rotateimage = document.getElementById("penid");

        rotateimage.style.transform = `rotate(${degrees}deg)`


        degrees+=degreenumber
        if(degrees > 359) {

            spins+=1*multiplyer
            save()

        document.getElementById("spintextid").innerText = "Spins: " + spins

            degrees = 1
        }
    }, spintime)

    function Pen2(){

        if(spins < 100000) return console.log("Zu wenig!");

        if(pen == "./Pen2.jpg"){
                document.getElementById("pen2").innerText = "Using Pen 2"
            return;
        }

        if(pen == "./Pen3.jpg"){
            document.getElementById("pen2").innerText = "Using Pen 3"
        return;
    }
        pen = "./Pen2.jpg"
        document.getElementById("penid").src=pen
        document.getElementById("penid").style.width = "425px"
        document.getElementById("penid").style.height = "425px"

        degreenumber = 5

        speed = 5

        spintime = 100

        multiplyer = 5

        weight = 5

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

                degrees = 1
            }
        }, spintime)

    }

    function Pen3(){
        if(spins < 10000000) return console.log("Zu wenig!");

        if(pen == "./Pen3.jpg"){
                document.getElementById("pen3").innerText = "Using Pen 3"
            return;
        }
        pen = "./Pen3.jpg"
        document.getElementById("penid").src=pen
        document.getElementById("penid").style.width = "425px"
        document.getElementById("penid").style.height = "425px"

        degreenumber = 10

        speed = 10

        spintime = 100

        multiplyer = 10

        weight = 10

        speedpreis += 0.06
        weightpreis += 0.06
        multypreis += 0.06

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

                degrees = 1
            }
        }, spintime)
    }

    function Pen4(){
        clearInterval(Actualpenspin)
    }

    function Pen5(){
        localStorage.clear()
    }


    function faster(){

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
        if(degrees >= 360) {

            spins+=1*multiplyer
            save()

        document.getElementById("spintextid").innerText = "Spins: " + Math.floor(spins)

            degrees = 1
        }
    }, spintime)

    }

    function heavier(){

        if(Math.floor(spins) < Math.floor(weightkosten)) return;

        if(degreenumber >= weightlimit){
            document.getElementById("weight").style.backgroundColor ="RED"
                document.getElementById("weight").innerText = "MAX"

                degreenumber = weightlimit
                weight = weightlimit*2
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

        degreenumber+=0.50

        clearInterval(Actualpenspin)

        Actualpenspin = setInterval(() =>{
        music.play()
        let rotateimage = document.getElementById("penid");

        rotateimage.style.transform = `rotate(${degrees}deg)`

        degrees+=degreenumber

        if(degrees >= 360) {

            spins+=1*multiplyer
            save()

        document.getElementById("spintextid").innerText = "Spins: " + Math.floor(spins)

            degrees = 1
        }
    }, spintime)
    }

    function multy(){
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

        if(degrees >= 360) {

            spins+=1*multiplyer
            save()

        document.getElementById("spintextid").innerText = "Spins: " + Math.floor(spins)

            degrees = 1
        }
    }, spintime)
    }
