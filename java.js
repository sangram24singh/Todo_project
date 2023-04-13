let data = []
let cardId;
console.log('data', data)
function callplus(){
 let mycover = document.getElementsByClassName('popup')
 let head = document.querySelector('.text1')
 head. style.display='none'
 mycover[0].style.display='block';
}
function closebtn(){
    let mypop = document.getElementsByClassName('popup')
    mypop[0].setAttribute('style','display:none')
}
function calladd(){
    const card = document.getElementById('inputcard').value;
    const mycard = {
        id: new Date().getTime().toString(),
        text:card,
        content: [],
    }
    if (card === "")
    {
        alert('Please Enter Your Card Name')
    }
    else {
        data.push(mycard);
        showcard()
    }
    document.getElementById('inputcard').value=""
    closebtn();
    const cardhead = document.getElementById('mycards')
    cardhead.innerHTML = '';
    const backbutton = document.querySelector('.backpage')
    backbutton.style.display = 'none'
    const navbar = document.querySelector('.b1')
    navbar.style.display='block'
}
function renderContent(){
    for(let i=0; i<data.length;i++){
        const myelement = document.getElementById(`itemlist_${data[i].id}`)
        let child = ''
        for(let j=0; j<data[i].content.length;j++){
            const content = data[i].content[j]
            child += `<li class="content ${content.done ? "checked": ""}" id="list_${content.id}" onclick="donetask(${ content.id},  ${data[i].id})">${content.contenttask}</li>`
        }
        myelement.innerHTML = child;
    }

}
function showcard(){
    const newcard = document.getElementById('maincontainer'); 
    let mychild = ''
    for (let i=0; i<data.length; i++){
        mychild += `<div id ="${data[i].id}" class='mylist flex'><h2 id="listtext" value = '${data[i].text}' onclick="cardcall(${data[i].id},this.getAttribute('value'))">${data[i].text}</h2> 
        <hr>
        <ul id="itemlist_${data[i].id}" ></ul>
        <img src="./th (1).jpeg" alt="" id="pic1" onclick="removecard(${data[i].id})">
        <img src="./th.jpeg" alt="" id="pic2" onclick="cardmyadd(${data[i].id})"></div>`
        }
    newcard.innerHTML = mychild;
    renderContent()
}
    function removecard(id){
    const newcard = document.getElementById('maincontainer');
    const cardId = `${id}`
    const delcard = document.getElementById(cardId)     
    delcard.parentNode.removeChild(delcard) 
    data = data.filter(item => item.id != id)
     } 
function cardmyadd(id){
    const cardcall = document.getElementsByClassName('popup1')
    cardcall[0].style.display='block'
    cardId = id;
}
function removecontentcard(){
    const cardcall = document.getElementsByClassName('popup1')
    cardcall[0].style.display='none'
}
function addcontentcard(){
    const listid = `itemlist_${cardId}`;  
    const unorderlist = document.getElementById(listid);
    const cardscontent = document.getElementById('inputcard1').value; 
    if (cardscontent)
    {  
        document.getElementById('inputcard1').value=""
        const liNode = document.createElement('li');
        const myId = new Date().getTime().toString(); 
        liNode.innerHTML=cardscontent;
        liNode.id = `list_${myId}`
        liNode.onclick = function(){
            donetask(myId, cardId)
        }
        unorderlist.appendChild(liNode);
        removecontentcard() 
        console.log('data', data)
        for (let i=0; i<data.length; i++)
        {
            if (data[i].id==cardId){
                let context ={
                    id: myId, 
                    contenttask: cardscontent,
                    done: false,
                }
                data[i].content.push(context) 
            }  
        }
        console.log(data)
    }
    else {
        alert('Please Enter Your item Name')
    } 
}
function donetask(myId, cardId){   
    const contentId = `list_${myId}`;
    const liElement = document.getElementById(contentId);
    liElement.classList.toggle("checked")
    for(let i=0; i<data.length;i++){
        if(data[i].id == cardId){
            for(let j=0; j<data[i].content.length; j++ ){
                const content = data[i].content[j];
                if (content.id == myId){
                        data[i].content[j].done = !data[i]. content[j].done;
                }

            }
        }
    }
} 
function cardcall(id, value){
    console.log(id)
    const cardhead = document.getElementById('mycards')
    cardhead.innerHTML = value;
    const crds = document.querySelectorAll('.mylist')
    crds.forEach(allcards =>{
        allcards.style.display='none'
    })
    const cardshow = document.getElementById(id);
    cardshow.style.display='block'

    const navbar = document.querySelector('.b1')
    navbar.style.display='none'

    const backbutton = document.querySelector('.backpage')
    backbutton.style.display = 'block'
}
function firstpage(){
    const crds = document.querySelectorAll('.mylist')
    crds.forEach(allcards =>{
        allcards.style.display='block'
    })
    const navbar = document.querySelector('.b1')
    navbar.style.display='block'

    const backbutton = document.querySelector('.backpage')
    backbutton.style.display = 'flex = !flex'

    const cardhead = document.getElementById('mycards')
    cardhead.innerHTML = '';

}