const main = document.createElement("main")
main.id = "main"
const body = document.querySelector("body")
const listaDeProdutos = document.createElement("ul")

const buttonFinalizar = document.createElement("button")
buttonFinalizar.innerText = "Finalizar Compra"

const section = document.createElement("section")
section.id = "section"
section.classList.add("section")


const header = document.createElement("div")
header.classList.add("divCabecalho")
const itemTitulo = document.createElement("p")
itemTitulo.innerText = "Item"
const itemValor = document.createElement("p")
itemValor.innerText = "Valor"

header.appendChild(itemTitulo)
header.appendChild(itemValor)




let soma =






    const productsList = [{
            id: 1,
            name: "Banana",
            price: 100.99
        },
        {
            id: 2,
            name: "Caqui",
            price: 100.99
        },
        {
            id: 3,
            name: "Beterraba",
            price: 100.99
        },
        {
            id: 4,
            name: "Chocolate",
            price: 100.99
        }
    ]

console.log(productsList[1].name)

for (let i = 0; i < productsList.length; i++) {
    const item = document.createElement("li")
        /*  const id = document.createElement("p") */
    const name = document.createElement("p")
    const price = document.createElement("p")

    /*   id.innerText = productsList[i].id */
    name.innerText = productsList[i].name
    price.innerText = `R$ ${productsList[i].price}`

    /* item.appendChild(id) */
    item.appendChild(name)
    item.appendChild(price)


    listaDeProdutos.appendChild(item)
        /* item.id = "divItem" */
    item.classList.add("divItem")

}





body.appendChild(main)
main.appendChild(header)
main.appendChild(listaDeProdutos)
listaDeProdutos.appendChild(item)
    /* main.appendChild(section) */
listaDeProdutos.appendChild(buttonFinalizar)
main.appendChild(soma)

main.insertAdjacentHTML("beforeend", `<div class=divCabecalho >Texto renderizado pelo JS</div>`);