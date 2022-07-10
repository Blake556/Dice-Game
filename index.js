
let player1 = 1
let player2 = 1

function playGame() {

    let randomNum = Math.floor(Math.random() * 6) + 1

    let grabSrc = 'images/dice' + randomNum + '.png'

    document.querySelectorAll('img')[0].setAttribute('src', grabSrc)



    let randomNum2 = Math.floor(Math.random() * 6) + 1

    let grabSrc2 = 'images/dice' + randomNum2 + '.png'

    document.querySelectorAll('img')[1].setAttribute('src', grabSrc2)

            if (randomNum > randomNum2) {
                document.querySelector('h1').innerHTML = 'Player 1 Won!' 
                document.querySelector('.tracker1').innerHTML = 'Player1: ' + player1++
            } else if (randomNum < randomNum2) {
                document.querySelector('h1').innerHTML = 'Player 2 Won!'
                document.querySelector('.tracker2').innerHTML = 'Player2: ' + player2++
            } else {
                document.querySelector('h1').innerHTML = 'Draw!!'
            }  
            
}


document.querySelector('button').addEventListener('click', playGame)







    // let player1 = 1
    // let player2 = 1


    // function handleClick() {

    //     let randomNum = Math.floor(Math.random() * 6) + 1
    //     let randomNum2 = Math.floor(Math.random() * 6) + 1

    //     if (randomNum > randomNum2) {
    //         document.querySelector('.tracker1').innerHTML = 'Player1: ' + player1++
    //     } else if (randomNum < randomNum2) {
    //         document.querySelector('.tracker2').innerHTML = 'Player2: ' + player2++
    //     } else {
    //         console.log('No Winner!')
    //     }

    // }


    // document.querySelector('button').addEventListener('click', handleClick)

       

