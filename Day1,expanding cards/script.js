const panels = document.querySelectorAll('.panel');


//The forEach() method calls a function once for each element in an array, in order.

// panels.forEach(panel => {
//     panel.addEventListener('click', () =>{
//         panel.classList.add('active');
//     })
// })

//The classList property returns the class name(s) of an element, as a DOMTokenList object.This property is useful to add, remove and toggle CSS classes on an element.
//The classList property is read-only, however, you can modify it by using the add() and remove() methods.\
//This example uses the addEventListener() method to attach a click event to a button.

panels.forEach(panel => {
    panel.addEventListener('click', () =>{
        removeActiveClasses()
        panel.classList.add('active');
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

//in order to remove the active classes, we create a function removeactiveclasses.
