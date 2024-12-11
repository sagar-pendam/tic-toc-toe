console.log("Hello World");
let isSelected = false;
let player;
let comp;

//on Page load event
(async function () {

    console.log("Page loading complete.");
    // Your async or initialization code here
    let main = document.getElementsByClassName("main")[0]
    main.style.transition = "all 1.5s"
    main.style.marginTop = "100px"

})();

let occupiedByPlayer = [];
let occupiedByComp = [];
let empty = [];
let list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//Adding event listener to btn
let btn = document.getElementsByClassName("btn");
let arr = Array.from(btn)
let btnIndex = 0;
for (let index = 0; index < arr.length; index++) {

    arr[index].addEventListener("click", (e) => {
        let main = document.getElementsByClassName("main")[0]
        main.style.transition = "all 1s"
        main.style.marginTop = "-100px"
        let btn = document.getElementsByClassName("btn")[index].classList;
        let cls = btn.classList
        if (!isSelected) {
            if (btn.contains("x")) {
                player = 'X'
                comp = "O"
                
            }
            else if (btn.contains("o")) {
                player = 'O'
                comp = "X"
            }
            e.target.style.opacity = "0.5"
            isSelected = true;
            btnIndex = index;
            let gameContainer = document.getElementsByClassName("gameContainer")[0]
            let chose = document.getElementsByClassName("chose")[0];
            // chose.style.transition = "all 0.5s";
            chose.style.visibility = "hidden";

            gameContainer.style.filter = "none";
            gameContainer.style.transition = "all 1s";
            playerChosen();

        }
        console.log(e.target.value)
        console.log(player)





    })
}


//Adding event listener on boxes
// Check if "score" already exists in localStorage
if (localStorage.getItem("win") === null) {
    // If "score" does not exist, set it to a default value (e.g., 0)
    localStorage.setItem("win", "0");
    console.log("Score initialized to 0");
  } else {
    let getScore = localStorage.getItem("win")

let scoreWin = document.getElementsByClassName("scoreWin")[0].innerHTML = getScore;
    console.log("Score already exists:", localStorage.getItem("win"));
  }
  if (localStorage.getItem("loss") === null) {
    
    localStorage.setItem("loss", "0");
    console.log("Score initialized to 0");
  } else {
    let getScore = localStorage.getItem("loss")

let scoreLoss = document.getElementsByClassName("scoreLoss")[0].innerHTML = getScore;
    console.log("Score already exists:", localStorage.getItem("loss"));
  }


let winScore = 0
let lossScore = 0
let win = false
let loss = false
let tie = false
let count = 0
let count1 = 0
let stage = 1;
let boxes = document.getElementsByClassName("box");
let arrBox = Array.from(boxes);
function playerChosen() {
    for (let index = 0; index < arrBox.length; index++) {
        arrBox[index].addEventListener("click", () => {

            if (boxes[index].innerHTML == "" && stage == 1) {
                count++
                console.log("clicked");
                boxes[index].innerHTML = player;
                let id = boxes[index].id;
                console.log("id:" + id);
                occupiedByPlayer.unshift(Number(id))
                let valueToRemove = Number(id);
                let newArr = list1.filter(item => item !== valueToRemove);
                list1 = newArr;
                // empty = list1;
                let a = setTimeout(() => {

                    // console.log(newArr); // Output: [1, 2, 4, 5]
                    let length = list1.length
                    const randomNumber = Number(generateRandomNumber(0, length - 1)); // Generates a random number between 1 and 100
                    console.log("Random Number:", randomNumber);
                    // boxes[list1[randomNumber]].innerHTML = comp;
                    document.getElementById(list1[randomNumber]).innerHTML = comp;
                    occupiedByComp.unshift(Number(list1[randomNumber]));
                    let valueToRemove = Number(list1[randomNumber]);
                    let newArr = list1.filter(item => item !== valueToRemove);
                    list1 = newArr;
                    // empty = list1;
                    count1 += 1

                }, 500)

                stage = 2;
            }
            if (boxes[index].innerHTML == "" && stage == 2) {
                count += 1
                if (!loss) {
                    boxes[index].innerHTML = player;
                    let id = Number(boxes[index].id);
                    console.log("id:" + id);
                    occupiedByPlayer.unshift(Number(id))
                    let valueToRemove = id;
                    let newArr = list1.filter(item => item !== valueToRemove);
                    list1 = newArr;
                    empty = list1;
                    console.log("occupiedByPlayer" + occupiedByPlayer);
                    console.log("occupiedBycomp" + occupiedByComp);
                    console.log(occupiedByPlayer);

                    console.log(occupiedByPlayer.includes(1));
                    console.log(occupiedByPlayer.includes(2));
                    console.log("innerHTML:" + (document.getElementById(3).innerHTML === ""));
                }

                // alert("Hi")
                if (count >= 3) {
                    ///Checking for result win ,loss or tie
                    //Player
                    if (((occupiedByPlayer.includes(1)) && (occupiedByPlayer.includes(2))) && occupiedByPlayer.includes(3)) {
                        let gameContainer = document.getElementsByClassName("gameContainer")[0]
                        gameContainer.style.filter = "none";
                        gameContainer.style.transition = "all 1s";
                        // alert("You win")
                        win = true
                    }
                    else if (((occupiedByPlayer.includes(7)) && (occupiedByPlayer.includes(8))) && occupiedByPlayer.includes(9)) {
                        let gameContainer = document.getElementsByClassName("gameContainer")[0]
                        gameContainer.style.filter = "none";
                        gameContainer.style.transition = "all 1s";
                        // alert("You win")
                        win = true
                    }
                    else if (occupiedByPlayer.includes(1) && occupiedByPlayer.includes(4) && occupiedByPlayer.includes(7)) {
                        let gameContainer = document.getElementsByClassName("gameContainer")[0]
                        gameContainer.style.filter = "none";
                        gameContainer.style.transition = "all 1s";
                        // alert("You win")
                        win = true
                    }
                    else if (occupiedByPlayer.includes(3) && occupiedByPlayer.includes(6) && occupiedByPlayer.includes(9)) {
                        let gameContainer = document.getElementsByClassName("gameContainer")[0]
                        gameContainer.style.filter = "none";
                        gameContainer.style.transition = "all 1s";
                        // alert("You win")
                        win = true
                    }
                    else if (occupiedByPlayer.includes(2) && occupiedByPlayer.includes(5) && occupiedByPlayer.includes(8)) {
                        let gameContainer = document.getElementsByClassName("gameContainer")[0]
                        gameContainer.style.filter = "none";
                        gameContainer.style.transition = "all 1s";
                        // alert("You win")
                        win = true
                    }
                    else if (occupiedByPlayer.includes(4) && occupiedByPlayer.includes(5) && occupiedByPlayer.includes(6)) {
                        let gameContainer = document.getElementsByClassName("gameContainer")[0]
                        gameContainer.style.filter = "none";
                        gameContainer.style.transition = "all 1s";
                        // alert("You win")
                        win = true
                    }
                    else if (occupiedByPlayer.includes(3) && occupiedByPlayer.includes(5) && occupiedByPlayer.includes(7)) {
                        let gameContainer = document.getElementsByClassName("gameContainer")[0]
                        gameContainer.style.filter = "none";
                        gameContainer.style.transition = "all 1s";
                        // alert("You win")
                        win = true
                    }
                    else if (occupiedByPlayer.includes(1) && occupiedByPlayer.includes(5) && occupiedByPlayer.includes(9)) {
                        let gameContainer = document.getElementsByClassName("gameContainer")[0]
                        gameContainer.style.filter = "none";
                        gameContainer.style.transition = "all 1s";
                        // alert("You win")
                        win = true
                    }
                    if (win) {

                        // alert("You win")
                        // winScore += 1;

                        // let w = localStorage.getItem("win")
                        // w = Number(w)
                        // w = +1
                        // let s = localStorage.setItem("win", w)
                        // let getScore = localStorage.getItem("win")

                        // let scoreWin = document.getElementsByClassName("scoreWin")[0].innerHTML = getScore;
                        let currentScore = parseInt(localStorage.getItem("win"));
                        currentScore+=1;
                        localStorage.setItem("win",currentScore)
                         let scoreWin = document.getElementsByClassName("scoreWin")[0].innerHTML=currentScore
                        let gameContainer = document.getElementsByClassName("gameContainer")[0]
                        gameContainer.style.filter = "blur(5px)";
                        let matchWin = document.getElementsByClassName("matchWin")[0];
                        matchWin.style.display = "flex"
                        let player1 = document.getElementsByClassName("player1")[0];
                        player1.innerHTML = player;


                        let resultShow = document.getElementsByClassName("resultShow")[0];
                        resultShow.style.display = "flex"
                        resultShow.style.animationPlayState = "running";
                        
                        setTimeout(() => {

                           
                            location.reload()
                        }, 2000)
                    }
                }
                if (!win) {
                    setTimeout(() => {
                       

                        occupiedByPlayer.sort((a, b) => a - b);
                        count1 += 1
                        console.log("innerHTML:" + document.getElementById(3).innerHTML === '');
                        if (((occupiedByPlayer.includes(1)) && (occupiedByPlayer.includes(2))) && document.getElementById(3).innerHTML === '') {

                            let div1 = document.getElementById(3).innerHTML = comp;
                            occupiedByComp.unshift(3)
                            let valueToRemove = 3;
                            let newArr = list1.filter(item => item !== valueToRemove);
                            list1 = newArr;
                            empty = list1;
                        }
                        else if (occupiedByPlayer.includes(1) && occupiedByPlayer.includes(4) && document.getElementById(7).innerHTML === "") {
                            let div1 = document.getElementById(7).innerHTML = comp;
                            occupiedByComp.unshift(7)
                            let valueToRemove = 7;
                            let newArr = list1.filter(item => item !== valueToRemove);
                            list1 = newArr;
                            empty = list1;
                        }
                        else if (occupiedByPlayer.includes(3) && occupiedByPlayer.includes(2) && document.getElementById(1).innerHTML === "") {
                            document.getElementById(1).innerHTML = comp;
                            occupiedByComp.unshift(1)
                            let valueToRemove = 1;
                            let newArr = list1.filter(item => item !== valueToRemove);
                            list1 = newArr;
                            empty = list1;
                        }
                        else if (occupiedByPlayer.includes(4) && occupiedByPlayer.includes(7) && document.getElementById(1).innerHTML === "") {
                            let div1 = document.getElementById(1).innerHTML = comp;
                            occupiedByComp.unshift(1)
                            let valueToRemove = 1;
                            let newArr = list1.filter(item => item !== valueToRemove);
                            list1 = newArr;
                            empty = list1;
                        }
                        else if (occupiedByPlayer.includes(3) && occupiedByPlayer.includes(6) && document.getElementById(9).innerHTML === '') {
                            let div1 = document.getElementById(9).innerHTML = comp;
                            occupiedByComp.unshift(9)
                            let valueToRemove = 9;
                            let newArr = list1.filter(item => item !== valueToRemove);
                            list1 = newArr;
                            empty = list1;
                        }
                        else if (occupiedByPlayer.includes(9) && occupiedByPlayer.includes(6) && document.getElementById(3).innerHTML === '') {
                            let div1 = document.getElementById(3).innerHTML = comp;
                            occupiedByComp.unshift(3)
                            let valueToRemove = 3;
                            let newArr = list1.filter(item => item !== valueToRemove);
                            list1 = newArr;
                            empty = list1;
                        }
                        else if (occupiedByPlayer.includes(7) && occupiedByPlayer.includes(8) && document.getElementById(9).innerHTML === '') {
                            let div1 = document.getElementById(9).innerHTML = comp;
                            occupiedByComp.unshift(9)
                            let valueToRemove = 9;
                            let newArr = list1.filter(item => item !== valueToRemove);
                            list1 = newArr;
                            empty = list1;
                        }
                        else if (occupiedByPlayer.includes(9) && occupiedByPlayer.includes(8) && document.getElementById(7).innerHTML === '') {
                            let div1 = document.getElementById(7).innerHTML = comp;
                            occupiedByComp.unshift(7)
                            let valueToRemove = 7;
                            let newArr = list1.filter(item => item !== valueToRemove);
                            list1 = newArr;
                            empty = list1;
                        }
                        else if (occupiedByPlayer.includes(2) && occupiedByPlayer.includes(5) && document.getElementById(8).innerHTML === '') {
                            document.getElementById(8).innerHTML = comp;
                            occupiedByComp.unshift(8)
                            let valueToRemove = 8;
                            let newArr = list1.filter(item => item !== valueToRemove);
                            list1 = newArr;
                            empty = list1;
                        }
                        else if (occupiedByPlayer.includes(8) && occupiedByPlayer.includes(5) && document.getElementById(2).innerHTML === '') {
                            let div1 = document.getElementById(2).innerHTML = comp;
                            occupiedByComp.unshift(2)
                            let valueToRemove = 2;
                            let newArr = list1.filter(item => item !== valueToRemove);
                            list1 = newArr;
                            empty = list1;
                        }
                        else if (occupiedByPlayer.includes(4) && occupiedByPlayer.includes(5) && document.getElementById(6).innerHTML === '') {
                            let div1 = document.getElementById(6).innerHTML = comp;
                            occupiedByComp.unshift(6)
                            let valueToRemove = 6;
                            let newArr = list1.filter(item => item !== valueToRemove);
                            list1 = newArr;
                            empty = list1;
                        }
                        else if (occupiedByPlayer.includes(6) && occupiedByPlayer.includes(5) && document.getElementById(4).innerHTML === '') {
                            let div1 = document.getElementById(4).innerHTML = comp;
                            occupiedByComp.unshift(4)
                            let valueToRemove = 4;
                            let newArr = list1.filter(item => item !== valueToRemove);
                            list1 = newArr;
                            empty = list1;
                        }
                        else if (occupiedByPlayer.includes(7) && occupiedByPlayer.includes(5) && document.getElementById(3).innerHTML === '') {
                            let div1 = document.getElementById(3).innerHTML = comp;
                            occupiedByComp.unshift(3)
                            let valueToRemove = 3;
                            let newArr = list1.filter(item => item !== valueToRemove);
                            list1 = newArr;
                            empty = list1;
                        }
                        else if (occupiedByPlayer.includes(1) && occupiedByPlayer.includes(5) && document.getElementById(9).innerHTML === '') {
                            let div1 = document.getElementById(9).innerHTML = comp;
                            occupiedByComp.unshift(9)
                            let valueToRemove = 9;
                            let newArr = list1.filter(item => item !== valueToRemove);
                            list1 = newArr;
                            empty = list1;
                        }
                        else {
                            if (list1.length == 1) {
                                document.getElementById(Number(list1[0])).innerHTML = comp
                                occupiedByComp.unshift(Number(list1[0]))
                                // let valueToRemove = Number(list1[randomNumber]);
                                // let newArr = list1.filter(item => item !== valueToRemove);
                                // list1 = newArr;
                                // empty = list1;
                                console.log("else:" + list1);


                            }
                            else {
                                if (list1.length == 2) {
                                    const randomNumber = generateRandomNumber(0, 1);
                                    // alert("else:" + list1 + ":" + randomNumber)
                                    document.getElementById(Number(list1[randomNumber])).innerHTML = comp
                                    let valueToRemove = Number(list1[randomNumber]);
                                    let newArr = list1.filter(item => item !== valueToRemove);
                                    list1 = newArr;
                                    empty = list1;
                                    occupiedByComp.unshift(valueToRemove)
                                    console.log("else:" + list1 + ",random:+" + randomNumber + "," + "count1:" + count1);
                                }
                                else if (list1.length == 1) {
                                    // alert("else:" + list1 + ":")
                                    document.getElementById(Number(list1[0])).innerHTML = comp
                                    let valueToRemove = Number(list1[0]);
                                    let newArr = list1.filter(item => item !== valueToRemove);
                                    list1 = newArr;
                                    empty = list1;
                                    occupiedByComp.unshift(list1[0])
                                    console.log("else:" + list1 + ",random:+" + randomNumber + "," + "count1:" + count1);
                                }
                                else if (list1.length >= 3) {
                                    let length = list1.length
                                    const randomNumber = generateRandomNumber(0, length - 1);
                                    // alert("else:" + list1 + ":" + randomNumber)
                                    document.getElementById(Number(list1[randomNumber])).innerHTML = comp
                                    let valueToRemove = Number(list1[randomNumber]);
                                    let newArr = list1.filter(item => item !== valueToRemove);
                                    list1 = newArr;
                                    empty = list1;
                                    occupiedByComp.unshift(valueToRemove)
                                    console.log("else:" + list1 + ",random:+" + randomNumber + "," + "count1:" + count1 + "list length:" + list1.length);
                                }



                            }
                        }
                        // console.log(numbers); // Output: [5, 7, 23, 32, 34, 62]
                        //Wining Logic for player
                        if (count >= 2) {
                            if ((occupiedByComp.includes(1)) && (occupiedByComp.includes(2)) && occupiedByComp.includes(3)) {
                                let gameContainer = document.getElementsByClassName("gameContainer")[0]
                                gameContainer.style.filter = "none";
                                gameContainer.style.transition = "all 1s";
                                // alert("You loss")
                                loss = true
                            }
                            else if (((occupiedByComp.includes(7)) && (occupiedByComp.includes(8))) && occupiedByComp.includes(9)) {
                                let gameContainer = document.getElementsByClassName("gameContainer")[0]
                                gameContainer.style.filter = "none";
                                gameContainer.style.transition = "all 1s";
                                // alert("You loss")
                                loss = true
                            }
                            else if (occupiedByComp.includes(1) && occupiedByComp.includes(4) && occupiedByComp.includes(7)) {
                                let gameContainer = document.getElementsByClassName("gameContainer")[0]
                                gameContainer.style.filter = "none";
                                gameContainer.style.transition = "all 1s";
                                // alert("You loss")
                                loss = true
                            }
                            else if (occupiedByComp.includes(3) && occupiedByComp.includes(6) && occupiedByComp.includes(9)) {
                                let gameContainer = document.getElementsByClassName("gameContainer")[0]
                                gameContainer.style.filter = "none";
                                gameContainer.style.transition = "all 1s";
                                // alert("You loss")
                                loss = true
                            }
                            else if (occupiedByComp.includes(2) && occupiedByComp.includes(5) && occupiedByComp.includes(8)) {
                                let gameContainer = document.getElementsByClassName("gameContainer")[0]
                                gameContainer.style.filter = "none";
                                gameContainer.style.transition = "all 1s";
                                // alert("You loss")
                                loss = true
                            }
                            else if (occupiedByComp.includes(4) && occupiedByComp.includes(5) && occupiedByComp.includes(6)) {
                                let gameContainer = document.getElementsByClassName("gameContainer")[0]
                                gameContainer.style.filter = "none";
                                gameContainer.style.transition = "all 1s";
                                // alert("You loss")
                                loss = true
                            }

                            else if (occupiedByComp.includes(3) && occupiedByComp.includes(5) && occupiedByComp.includes(7)) {
                                let gameContainer = document.getElementsByClassName("gameContainer")[0]
                                gameContainer.style.filter = "none";
                                gameContainer.style.transition = "all 1s";
                                // alert("You loss")
                                loss = true
                            }
                            else if (occupiedByComp.includes(1) && occupiedByComp.includes(5) && occupiedByComp.includes(9)) {
                                let gameContainer = document.getElementsByClassName("gameContainer")[0]
                                gameContainer.style.filter = "none";
                                gameContainer.style.transition = "all 1s";
                                // alert("You loss")
                                loss = true
                            }

                            if (loss) {
                                // alert("You Loss")
                                let gameContainer = document.getElementsByClassName("gameContainer")[0]
                                gameContainer.style.filter = "blur(5px)";
                                let matchLoss = document.getElementsByClassName("matchLoss")[0];
                                matchLoss.style.display = "flex"
                                let player1 = document.getElementsByClassName("player1")[0];
                                player1.innerHTML = player;
                                let resultShow = document.getElementsByClassName("resultShow")[0];
                                resultShow.style.animationPlayState = "running";
                                setTimeout(() => {
                                    let currentScore = parseInt(localStorage.getItem("loss"));
                        currentScore+=1;
                        localStorage.setItem("loss",currentScore)
                         let scoreWin = document.getElementsByClassName("scoreWin")[0].innerHTML=currentScore
                                    location.reload()
                                }, 2000)
                            }

                        }
                    }, 500)

                }
                // stage+=1;



                ///Checking for result win ,loss or tie
                //Player
                console.log("list1:" + list1);

                console.log("count:" + count);
                console.log("count1:" + count1);
                if (count == 5 & count1 == 4 && !(win) && !(loss)) {
                    let gameContainer = document.getElementsByClassName("gameContainer")[0]
                    gameContainer.style.filter = "blur(5px)";
                    let matchTie = document.getElementsByClassName("matchTie")[0];
                    matchTie.style.display = "flex"

                    let resultShow = document.getElementsByClassName("resultShow")[0];
                    resultShow.style.animationPlayState = "running";
                    // alert("you Tie")
                    location.reload()
                }

            }


        })


    }

}


// Add event listener to the button
document.getElementById('restartButton').addEventListener('click', function () {
    // Reload the page
    location.reload();
});


// Function to generate a random number between min (inclusive) and max (inclusive)
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:




