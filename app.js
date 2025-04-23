const inputNode = document.querySelector('.input-node')

const btnNode = document.querySelector('.btn-node')

const hrefNode = document.querySelector('.href')


btnNode.addEventListener('click', e => {
    e.preventDefault()
if(!inputNode.value.includes('@')){
    alert('Please enter a valid input')
}
})




hrefNode.addEventListener('click', () => {
window.location.href = 'akhi.html'
})











