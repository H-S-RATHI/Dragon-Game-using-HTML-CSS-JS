score = 0;
cross = true;

document.addEventListener('keydown', function (e) {
    console.log('key code is ' + e.keyCode);

    if (e.keyCode == 38) {
        dino = document.querySelector('.dino')
        dino.classList.add('animatedDino');
        setTimeout(() => {
            dino.classList.remove('animatedDino')
        }, 2000);
    }
    if (e.keyCode == 39) {
        dino = document.querySelector('.dino')
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
    }
    if (e.keyCode == 37) {
        dino = document.querySelector('.dino')
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX - 112 + "px";
    }
})

setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);

    if (offsetX < 113 && offsetY < 72) {
        gameOver.style.visibility = 'Visible';
        obstacle.classList.remove('obstacleAni')
    } else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true
        }, 1000);
        function decreaseAnimationDuration(element, decrement, targetDuration) {
            const currentDuration = parseFloat(window.getComputedStyle(element, null).getPropertyValue('animation-duration'));
            if (currentDuration > targetDuration) {
                const newDuration = Math.max(currentDuration - decrement, targetDuration);
                element.style.animationDuration = newDuration + 's';
                setTimeout(() => {
                    decreaseAnimationDuration(element, decrement, targetDuration);
                }, 1000); // Adjust the delay between updates (e.g., 100 milliseconds)
            }
        }

        // Call this function to decrease the animation duration by 0.1 seconds each time for animatedDino
        setTimeout(() => {
            const animatedDino = document.querySelector('.animatedDino');
            if (obstacleAni <= -9) {
                let animatedDino = document.querySelector('.animatedDino');
                if (animatedDino) {
                    decreaseAnimationDuration(animatedDino, 0.1);
                }
            }
        }, 1000);

        // Call this function to decrease the animation duration by 0.1 seconds each time for obstacle
        setTimeout(() => {
            const obstacle = document.querySelector('.obstacle');
            if (obstacleAni <= -9) {
                let obstacleAni = document.querySelector('.animatedDino');
                if (animatedDino) {
                    decreaseAnimationDuration(animatedDino, 0.1);
                }
            }
        }, 2000); // Adjust the timing as needed




    }
})

function updateScore(score) {
    scoreCont.innerHTML = "Your Score " + score;
}
