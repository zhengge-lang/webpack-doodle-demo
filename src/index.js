import x from './x'
import png from './assets/1.jpg'
console.log(png);
const div = document.getElementById('app')
div.innerHTML= `<img src="${png}">`

const button =document.createElement('button')
button.innerText = '懒加载'
button.onclick = ()=>{

    const promise =import('./lazy')//异步操作
    promise.then((fn)=>{
        console.log(fn.default());
        
    },()=>{})
}
div.appendChild(button)