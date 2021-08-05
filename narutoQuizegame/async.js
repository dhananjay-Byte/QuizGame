let Quecontent = document.querySelector('p')
let Restart = document.getElementById('start');
let start = document.getElementById('start1');
let li = document.querySelector('li');
let displayQue = document.getElementsByClassName('Ques');
let answerx = document.querySelectorAll('li');
let counter = document.getElementById('counter');
let endresult = document.getElementById('ans');
let enddisplay = document.getElementById('result');
let body = document.querySelector('body');
const buttonNext = document.getElementById('next-btn');
let ul = document.getElementById('list');
let index,t=0,mt=0,wrong=0;
let que =[
    {
        question:'What is the name of father of Naruto?',
        answer:[
            {text:'Kakashi',correct:false},
            {text:'iruka',correct:false},
            {text:'Minato',correct:true},
            {text:'Hashirama',correct:false}
        ]
    },
    {
        question:'What is the nature type of Naruto chakra?',
        answer:[
            {text:'Fire',correct:false},
            {text:'Earth',correct:false},
            {text:'Wind',correct:true},
            {text:'Lightning',correct:false}
        ]
    },
    {
        question:'What was the name of Kaguya first son? ',
        answer:[
            {text:'Ida',correct:false},
            {text:'Madara',correct:false},
            {text:'Indra',correct:false},
            {text:'Hagoromo',correct:true}
        ]
    },
    {
        question:'Who killed Rin ?',
        answer:[
            {text:'Obito',correct:false},
            {text:'mist ninja',correct:false},
            {text:'Zetsu',correct:false},
            {text:'Kakashi',correct:true}
        ]
    },
    {
        question:'What is Kakashi last name?',
        answer:[
            {text:'Senju',correct:false},
            {text:'Uchiha',correct:false},
            {text:'Hatake',correct:true},
            {text:'Yamamoto',correct:false}
        ]
    },
    {
        question:'Who slaugthered the Uchiha Clan?',
        answer:[
            {text:'Kakuzu and hidan',correct:false},
            {text:'Itachi and Pain',correct:false},
            {text:'Itachi',correct:false},
            {text:'Itachi and Obito',correct:true}
        ]
    },
    {
        question:'Who is the leader of ANBU?',
        answer:[
            {text:'Danzo',correct:true},
            {text:'Kakashi',correct:false},
            {text:'Naruto',correct:false},
            {text:'Orochimaru',correct:false}
        ]
    },
    {
        question:'Who taught the Rasengan to Naruto?',
        answer:[
            {text:'Kakshi',correct:false},
            {text:'Tsunade',correct:false},
            {text:'Jiraiya',correct:true},
            {text:'Nagoto',correct:false}
        ]
    },
    {
        question:'What is the name of the 5th Hokage?',
        answer:[
            {text:'Tsunade',correct:true},
            {text:'Minato',correct:false},
            {text:'Tobirama',correct:false},
            {text:'Hashirama',correct:false}
        ]
    },
    {
        question:'Do you think naruto can beat Goku?',
        answer:[
            {text:'YES',correct:false},
            {text:'NO',correct:false},
            {text:'Doesnt matter',correct:true},
            {text:'Maybe',correct:false}
        ]
    }
]
start1.addEventListener('click',()=>
{   
    displayQue[0].classList.remove('display1');
    counter.classList.remove('display1');
    start1.classList.add('display1');
    index=0;
    updateQUE();
})
Restart.addEventListener('click',()=>
{
    index=0;
    mt=0;
    wrong=0;
    counter.innerText = mt;
    updateQUE();
    answerx[t].classList.remove('btn-bkg');
    answerx[t].classList.remove('btn-bkgW');
})
buttonNext.addEventListener('click', ()=>
{
    answerx[t].classList.remove('btn-bkg');
    answerx[t].classList.remove('btn-bkgW');
    counter.innerText = mt;
    wrong=0;
   if(index<que.length-1){
    index++;
    }
    else{
        body.classList.add('resultbg');
        displayQue[0].classList.add('display1');
        counter.classList.add('display1');
        enddisplay.classList.remove('display1');
            resultend();
    }
    updateQUE();   
})
function resultend(){

   if(mt==que.length)
   {
      endresult.innerText = 'Hokage level';   
   }
   else if(mt==8)
   {
    endresult.innerText = 'Jonin Level';  
   }
   else if(mt>=5 && mt<8)
   {
    endresult.innerText = 'Chunin Level';
   }
   else if(mt<5)
   {
    endresult.innerText = 'Academy Level';
   }
}
function updateQUE()
{
    
    Quecontent.innerText = que[index].question; 
    updateAns();
}
function updateAns()
{
    answerx[0].innerText = que[index].answer[0].text;
    answerx[1].innerText = que[index].answer[1].text;
    answerx[2].innerText = que[index].answer[2].text;
    answerx[3].innerText = que[index].answer[3].text;
}
function check(number)
{
    if(wrong==0){
        if(que[index].answer[number].correct==true)
        {
            answerx[number].classList.add('btn-bkg');
            t=number;
            mt++;
        }
else if(que[index].answer[number].correct==false)
{
    answerx[number].classList.add('btn-bkgW');
    t=number;
}
    }
   wrong++;
}


