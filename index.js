var h=document.getElementById('hour');
var m=document.getElementById('min');
var s=document.getElementById('second');
var ampm=document.getElementById('ampm');
var greet=document.getElementById('greet');

function update() {
    var hr= new Date().getHours();
    var min=new Date().getMinutes();
    var sec=new Date().getSeconds();

    var amp='AM'
    if(hr>12){
        hr=hr-12;
        amp='PM';
        if(hr<=4 ){
            document.body.style.backgroundImage="url('aft.jpg')";
            greet.innerHTML='GOOD AFTERNOON';
        }else if(hr<=7){
            document.body.style.backgroundImage="url('tree.jpg')";
            greet.innerHTML="GOOD EVENING";
        }else{
            document.body.style.backgroundImage="url('night.jpg')";
            greet.innerHTML="GOOD NIGHT";
        }
        
    }
    hr = hr<10 ? '0'+ hr : hr;
    min = min<10 ? '0'+ min : min;
    sec = sec<10 ? '0'+ sec : sec;
    h.innerHTML=hr;
    m.innerHTML=min;
    s.innerHTML=sec;
    ampm.innerHTML=amp;
    setTimeout(() => {
        update()
    }, 1000);
    
}
update();