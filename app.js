const inputNode = document.querySelector('.input-node')

const btnNode = document.querySelector('.btn-node')


btnNode.addEventListener('click', e => {
    e.preventDefault()
if(!inputNode.value.includes('@')){
    alert('Please enter a valid input')
}
})




