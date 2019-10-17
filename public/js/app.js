
const form=document.querySelector('form')
const search=document.querySelector('input')
const mssg1=document.querySelector('#mssg1')
const mssg2=document.querySelector('#mssg2')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    mssg1.textContent='Loading ...'
    mssg2.textContent=''
    fetch('/weather?address='+search.value).then((response)=>{
    
    response.json().then((data)=>{
        if(data.error)
        {
        mssg1.textContent=data.error
        mssg2.textContent=null
        }
        else{
            mssg1.textContent=data.location
            mssg2.textContent=data.forecast
        }
        
    })
})
    
})