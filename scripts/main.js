const addButtonHandler = () => {
    // getting the DOM elements
    const input = document.getElementById("todoInput")
    const listSection = document.getElementsByClassName("listSection")[0]

    // creating new elements
    const span = document.createElement("span")
    const p = document.createElement("p")
    const button = document.createElement("button")

    //appending p and button in span element
    p.innerText = input.value
    button.innerText = "Done"
    span.appendChild(p)
    span.appendChild(button)

    //appending the span element into the listSection
    listSection.appendChild(span)
}