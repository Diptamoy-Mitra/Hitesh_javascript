//All dom selectors

//getelementbyId 
document.getElementById('title') //<h1 id="title" class="heading">DOM Learning on chai aur code</h1>
document.getElementById('title').id //title
document.getElementById('title').className //'heading'
document.getElementById('title').getAttribute('class') //'heading'
document.getElementById('title').setAttribute('class', 'test heading') //<h1 id="title" class="test heading">DOM Learning on chai aur code</h1>

document.getElementById('title').style.backgroundColor = 'green' //title's background becomes green
document.getElementById('title').style.padding = '15px' //add padding in title

//add contents
document.getElementById('title').textContent // 'DOM Learning on chai aur code Test text'
document.getElementById('title').innerText //'DOM Learning on chai aur code'
document.getElementById('title').innerHTML //'DOM Learning on chai aur code <span style="display: none">Test text</span>'

//queryselector
document.querySelector('h2') //<h2>Lorem ipsum dolor sit.</h2>
document.querySelector('.heading') //<h1 id="title" class="test heading" style="background-color: green; padding: 15px;">DOM Learning on chai aur code <span style="display: none">Test text</span></h1>

document.querySelector('ul')
//output
/*
 <ul>
<li>one</li>
<li>two</li>
<li>three</li>
</ul>
 */
const myul=document.querySelector('ul')
myul.querySelector('li') //show all li list

//querySelectorAll
document.querySelectorAll('li') //NodeList(3) [li, li, li] 

temp[0].style.color='red'  //1st li text red color

//we can eterate this nodeList through forEachLoop
temp.forEach((l)=>{ return l.style.backgroundColor='green' }) //background green

//getElementByClassName
const temp=document.getElementsByClassName('list-item')
//its return html collection which is not iterable so make it in arrays

Array.from(temp)
//(4) [li.list-item, li.list-item, li.list-item, li.list-item]

//iterate
Array.from(temp).forEach((li)=>{
  console.log(li) //print all li tag 
})

//54:00 continue
const my=document.querySelectorAll('.mw-headline') //NodeList(74)
my.forEach((h)=>{ h.style.color='red'; h.style.backgroundColor='green';
})

//