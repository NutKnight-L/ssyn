var footer = document.getElementById('footer');
var afooter = footer.getElementsByTagName('a');
//判断选中并高亮底部超链接
for(var i=0;i<afooter.length;i++){
    afooter[i].onclick = a_visited;
}
function a_visited(){
    for(var i=0; i<afooter.length; i++){
        if(afooter[i] === this){
            afooter[i].className = "avisited";
        }
        else {
            afooter[i].className = "";
        }
    }
}