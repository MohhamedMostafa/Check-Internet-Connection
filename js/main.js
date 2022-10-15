let title = document.querySelector('.title');
let ul = document.querySelector('ul');
let reload = document.querySelector('.reload');

window.addEventListener('online' , function(){
    Online()
})

window.addEventListener('offline' , function(){
    OffLine()
})

window.onload = function(){
    if(window.navigator.onLine){
        Online()
    }else{
        OffLine()
    }
}





function Online() {
    title.innerHTML = 'Online Now' ; 
    title.style.color='green';
    ul.classList.add('hiad');
    reload.classList.add('hiad');
    
    }

    function OffLine() {
        title.innerHTML = 'OffLine Now' ; 
        title.style.color ='red'
        ul.classList.remove('hiad');
        reload.classList.remove('hiad');
        
        }
            
