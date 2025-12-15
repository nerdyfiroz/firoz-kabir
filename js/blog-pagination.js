const posts=[...document.querySelectorAll("article")];
const perPage=3;
let page=1;

function render(){
  posts.forEach((p,i)=>{
    p.style.display=(i>=((page-1)*perPage)&&i<(page*perPage))?"block":"none";
  });
}
render();
