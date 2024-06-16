
            var wins = parseInt(localStorage.getItem('wins1'), 10) || 0;
            var losses = parseInt(localStorage.getItem('losses1'), 10) || 0;
            console.log(wins);
            document.getElementById('win').textContent = wins;
            document.getElementById('loss').textContent = losses;
            function resetScore()
            {
                localStorage.setItem('wins1' , 0);
                localStorage.setItem('losses1' , 0);
                document.getElementById('win').textContent = 0;
                document.getElementById('loss').textContent = 0;
                wins = 0;
                losses = 0;
                
            }
            function increaseWin()
            {
                wins += 1;
                document.getElementById('win').textContent = wins;
                localStorage.setItem('wins1', wins);
            }
            function increaseLoss()
            {
                losses += 1;
                document.getElementById('loss').textContent = losses;
                localStorage.setItem('losses1', losses);
            
            }
            const rockButton = document.getElementById('rock');
            const paperButton = document.getElementById('paper');
            const scissorsButton = document.getElementById('scissors');
            
            let options = ['rock', 'paper', 'scissors'];
            
            function displayResult(message, pIcon, cIcon)
            {
                const resultElement = document.getElementById('result');
                resultElement.textContent = message;
                const result1Element = document.getElementById('result1');

                var resultIcon1 = document.querySelector('.result-icon1');
                resultIcon1.src = pIcon;
                

                var resultIcon2 = document.querySelector('.result-icon2');
                resultIcon2.src = cIcon;
                
                
            }
            function computerTurn()
            {
                let randomIndex = Math.floor(Math.random() * options.length);
                return randomIndex;
            }
            function selectedRock()
            {
                let randomIndex = computerTurn();
                if (randomIndex == 1)
                {
                    displayResult('Draw', 'rock-emoji.png', 'rock-emoji.png');
                }
                else if (randomIndex == 2)
                {
                    displayResult('You Lose.', 'rock-emoji.png', 'paper-emoji.png');
                    increaseLoss();
                }
                else
                {
                    displayResult('You Won.', 'rock-emoji.png', 'scissors-emoji.png');
                    increaseWin();
                }
            }

            function selectedScissors()
            {
                let randomIndex = computerTurn();
                if (randomIndex == 1)
                {
                    displayResult('You Lose.', 'scissors-emoji.png', 'rock-emoji.png');
                    increaseLoss();
                    
                }
                else if (randomIndex == 2)
                {
                    displayResult('You Won.', 'scissors-emoji.png', 'paper-emoji.png');
                    increaseWin();
                }
                else
                {
                    displayResult('Draw.', 'scissors-emoji.png', 'scissors-emoji.png');
                }
            }

            function selectedPaper()
            {
                let randomIndex = computerTurn();
                if (randomIndex == 1)
                {
                    displayResult('You Won.', 'paper-emoji.png', 'rock-emoji.png');
                    increaseWin();
                    
                }
                else if (randomIndex == 2)
                {
                    displayResult('Draw.', 'paper-emoji.png', 'paper-emoji.png');
                }
                else
                {
                    displayResult('You Lose.', 'paper-emoji.png', 'scissors-emoji.png');
                    increaseLoss();
                }
            }

           
           let continueGame = false;
           let intervalid;
                        
            function autoPlay()
            {
                const autoPlayButton = document.querySelector('.autoplay');
                if(!continueGame)
                    {
                        autoPlayButton.innerHTML = 'Stop';
                        playerMoves = [selectedRock, selectedPaper, selectedScissors];
                        const playButton = document.querySelector('.autoplay');
                        intervalid = setInterval(function () {
                            playerMove = computerTurn();
                            playerMoves[playerMove]();
                        }, 1000
                        );
                        continueGame = true;
                    }
                    else{
                        clearInterval(intervalid);
                        continueGame = false;
                        autoPlayButton.innerHTML = 'Autoplay';
                    }
                
            }

          

            
            