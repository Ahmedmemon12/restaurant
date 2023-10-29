let exploreBtn = document.getElementById('explore');

let body = document.getElementById('Lbody');

let contentDiv = document.getElementById('content');

let Loader = document.getElementById('loader');

exploreBtn.addEventListener('click', function loader(){
     contentDiv.style.display = 'none';
     Loader.style.display = 'block';
     body.style.backgroundColor = 'rgba(0, 0, 0, 0.800)';



     setTimeout (function(){
        window.location.href = 'main.html'; 
     },2000)
});

