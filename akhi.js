const hrefNode2 = document.querySelector('.href2')

const contactsNode = document.querySelector('.contacts-btn')


hrefNode2.addEventListener('click', () => {
    window.location.href = 'index.html'


})

hrefNode2.style.cursor = 'pointer'



contactsNode.addEventListener('click', () => {
    window.location.href = 'contacts.html'
})



