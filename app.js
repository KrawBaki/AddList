let table = document.querySelector('.table')
let name = document.querySelector('#name') 
let price =  document.querySelector('#price')
let amount = document.querySelector('#amount') 
let btn = document.querySelector('#btn')
let result = document.querySelector('#result')



btn.addEventListener('click', function () {
    let tr = document.createElement('tr')
    
    
    allowEdit(createCell(tr, name.value, 'name'))
    allowEdit(createCell(tr, price.value, 'price'))
    allowEdit(createCell(tr, amount.value, 'amount'))
    createCell(tr, price.value * amount.value, 'cost');
    createCell(tr, 'Удалить', 'remove').addEventListener('click', function () {
        this.parentElement.remove()
        recountTotal()
    })








    table.appendChild(tr)
    recountTotal()
    name.value = ''
    price.value = ''
    amount.value = ''
})

function allowEdit (td) {
    td.addEventListener('dblclick', function () {
        recountTotal()
        let text = this.innerHTML
        this.innerHTML = ''


        let self = this
        let inp = document.createElement('input')
        inp.value = text
        self.appendChild(inp)
        inp.addEventListener('keyup', function (event) {
            if (event.key == 'Enter') {
                td.innerHTML = this.value;
                if (td.classList.contains('price') || td.classList.contains('amount')) {
                    let costs = table.querySelectorAll('.cost')
                    console.log(costs);
                }
            }   
        })
    })
}


function recountTotal(){
    let costs = table.querySelectorAll('.cost')
    let totals = 0;
    if (costs) {
        for (let elem of costs) {
            totals +=  + Number(elem.innerHTML)
        }
    }
    let num = document.createElement('span')
    num.innerHTML = totals
    result.innerHTML = num.innerHTML
}

function createCell(tr, value, name) {
    let td = document.createElement('td')
    td.innerHTML = value
    td.classList.add(name)
    tr.appendChild(td)
    return td
}