//const squares = document.getElementsByClassName('square')
// const allElments = document.querySelectorAll('div')
//const squareStats = document.querySelector('#stats')

//animate distance
// const squareDistance = {
//     distance: 0,
//     progress: '0%'
// }

// anime({
//     targets: squareDistance,
//     distance: 300,
//     progress: '100%',
//     update: function() {
//         //JSON displays object property values
//         squareStats.innerHTML = JSON.stringify(squareDistance)
//     },
//     //rounds to whole number
//     round: 1,
//     easing: 'linear',
// })

// anime({
//     targets: '.square',
//     left: 300,
// })
//------ END ANIMATE DIST-----

// anime({
//     targets: allElments[2],
//     left: 300
// })

// array is a collection of targets
// allElments.forEach((element, i) =>{
//     anime({
//         targets: element,
//         //each element is 50px further from the left
//         left: 300 + (i * 50)
//     })
// })

//target all elements
// anime({
//     targets: [squares, '.circle'],
//     left: 300,
//     rotate: 45,
//     // scale: 0.5,
//     opacity: 0.4,
// })

// anime({
//     targets: squares,
//     borderRadius: 50,
// })

//------ START ANIMATE NUMBERS----
anime({
    targets: '.countUp',
    value: [5,0],
    round: 1,
    easing: 'linear',
    duration: 3000,
})