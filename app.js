const inputNode = document.querySelector('.input-node')

const btnNode = document.querySelector('.btn-node')

const hrefNode = document.querySelector('.href')

const contactsNode = document.querySelector('.contacts-btn')


btnNode.addEventListener('click', e => {
    e.preventDefault()
if(!inputNode.value.includes('@')){
    alert('Please enter a valid input')
}
})




hrefNode.addEventListener('click', () => {
window.location.href = 'akhi.html'
})





contactsNode.addEventListener('click', () => {
    window.location.href = 'contacts.html'
})






