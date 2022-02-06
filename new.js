function makefun(){
    var emoji = '\1F923'
    alert('You Are Already On That Page ',emoji);
}
function closeme(){
    x=document.getElementById('demo');
    x.style.display="none"
}
function openme(){
    x = document.getElementById('demo');
    x.style.display="block";
}

function get_name(){
    var fname = document.getElementById('fname').value;
    document.getElementById('ans').innerHTML = fname;
    }