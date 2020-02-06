const weatherform = document.querySelector('form')
const search = document.querySelector('#search')
weatherform.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    const messageOne = document.querySelector('#message-1')
    const messageTwo = document.querySelector('#message-2')
    
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address='+location).then((res) => {
    res.json().then((data) => {
        if(data.err){
            messageOne.textContent = data.err
        }else{
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        }
    })
})
})