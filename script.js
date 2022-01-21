const squares = document.getElementsByClassName('square')
const allElments = document.querySelectorAll('div')


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
anime({
    targets: [squares, '.circle'],
    left: 300,
    rotate: 45,
    // scale: 0.5,
    opacity: 0.4,
})

anime({
    targets: squares,
    borderRadius: 50,
})