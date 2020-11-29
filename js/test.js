// // console.log('pravin');
// // const button =document.querySelector('button');
// // button.addEventListener('click', e => {
 
// //     console.log(e);
// //     // e.target.remove();

    

// // });
// // const test=document.querySelector('.tst');

// //     test.addEventListener('copy', () => {
// //       console.log('Oh My God');
// //     });

// //     const box=document.querySelector('.box');
// //     box.addEventListener('mousemove', e => {
// //        box.textContent = `x pos -${e.offsetX} y pos -${e.offsetY}`;
// //     });

// // const button=document.querySelector('button');
// // const box=document.querySelector('.popup-wrapper');
// // const close = document.querySelector('.popup-close');

// // button.addEventListener('click', () => {
// //    box.style.display = 'block';
// // });

// // close.addEventListener('click', () => {
// //   box.style.display = 'none';
// // });
// // const submit=document.querySelector('#form');

// // submit.addEventListener('click',e => {
// //      e.preventDefault();
// //      console.log(submit.username.value);
// // });

// // const name ='pravin654';
// // const pattern =/[a-z]{6,}/;

// // let result =pattern.test(name);
// // console.log(result);

// // const form =document.querySelector('#form');
// // const msg =document.querySelector('.message');
// // const usernamepattern =/^[a-zA-Z]{6,12}$/;

// // form.addEventListener('submit', e => {
 
// //     const username = form.username.value;
// //     // const usernamepattern =/^[a-zA-Z]{6,12}$/;

// //     if(usernamepattern.test(username)){
       
// //       msg.textContent='Valid User Name';

// //     }else{
// //       msg.textContent='user name must Be letters Only & between 6 to 12';
// //     }
  
// // });

// // form.username.addEventListener('keyup', e => {
// //   // const username = form.username.value;

// //          console.log(e.target.value);
// //    if(usernamepattern.test(e.target.value)){
     
// //     form.username.setAttribute('class','success');
     
// //    }else{
// //     form.username.setAttribute('class','error');
// //    }

// // });

// const correctanswers =['b','b','b','b'];
// const form=document.querySelector('.actionpage');
// const result=document.querySelector('.result');


// form.addEventListener('submit', e => {
//   e.preventDefault();
  
//   let score =0;
//   const useranswer =[form.q1.value, form.q2.value, form.q3.value, form.q4.value];

//   useranswer.forEach((answer,inder) =>{

//     if(answer === correctanswers[inder]){
//       score += 25;
//     }
     
//   });
  
//   // answer
//     result.querySelector('span').textcontent = `${score}%`;
//     console.log(score);
//     result.classList.remove('d-none');

  
// });

// const values=[
//  {name:'pravin',price:200},
//  {name:'raj',price:100},
//  {name:'beni',price:150},
//  {name:'rach',price:350},

// ];
// const prices=values.map((value) =>{
 
//    if(value.price >20){
//      return{name:value.name,price:value.price/10};
//    }else{
//     return values;
//    }
   
// });
// console.log(prices,values);

const form =document.querySelector('.add');
const vall=document.querySelector('.todos');
const search=document.querySelector('.search');
generatedata = (test) =>{

  const html =`
  
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${test}</span>
        <i class="fa fa-trash delete"></i>
    </li>
  
  `;
   vall.innerHTML +=html;
}

form.addEventListener('submit', e => {

   e.preventDefault();
   const test=form.add.value.trim();
   if(test.length){
    generatedata(test);
    form.reset();
   }

});

vall.addEventListener('click', e =>{

   if(e.target.classList.contains('delete')){
     e.target.parentElement.remove();
   }
});
// search

searchgenerate =(term) =>{

    console.log(Array.from(vall.children));
};


search.addEventListener('keyup', () =>{

   const term= search.value.trim();
    searchgenerate(term);
});

const clock=document.querySelector('.clock');

const tick =() => {

  const date=new Date();

  const h=date.getHours();
  const m=date.getMinutes();
  const s=date.getSeconds();

  const html =`
  
     <span>${h}</span>:
     <span>${m}</span>:
     <span>${s}</span>
   
  `;
  
  clock.innerHTML=html;
    
};
setInterval(tick, 1000);

// xml http request

// const getodo =(url,callback) => {

//    const sml=new XMLHttpRequest();

//    sml.addEventListener('readystatechange', () => {
    
//       // console.log(sml,sml.readyState);
//       if(sml.readyState ===4)
//       {
   
//          const res=sml.responseText;
//          callback(undefined,res);
//          // vall.innerHTML=res;
//       }
       
//    });
   
//    sml.open('GET',url);
//    sml.send();
// };
// getodo('http://localhost/rest_php/api/test_api.php?action=fetch_all',(err,data) => {
  
//    if(err)
//    {
//       console.log(err);
//    }else{
//       console.log(data);
//    }
// });

// Finished

// promise API


// const getodo =(resource) =>{

//    return new Promise((resolve, reject) => {

//       const sml=new XMLHttpRequest();
//       sml.addEventListener('readystatechange', () =>{
   
//          if(sml.readyState ===4){
//             const res=JSON.parse(sml.responseText);
//              resolve(res);
//          }else{
//             reject('No Fetch Data');
//          }
   
//       });

//       sml.open('GET',resource);
//       sml.send();

//    });
  
    

// };

// getodo('http://localhost/rest_php/api/test_api.php?action=fetch_all').then(res => {
//    console.log('Promise Resolved:', res);
// }).catch(err =>{
   
//     console.log(err);
// }); 

// Finished


// Fetch Api

// fetch('http://localhost/rest_php/api/test_api.php?action=fetch_all').then((response)=>{
//    return response.json();

// }).then(data => {
//    console.log(data);
//    // data.forEach(element => {
//    //    vall.innerHTML=data;
//    // });
   
// }).catch(err =>{
//    console.log("Error",err);
// });


// Finished

// Await

const getodo =async () => {

    const response =await fetch('http://localhost/rest_php/api/test_api.php?action=fetch_all');
    const data =await response.json();
    return data;

};
getodo().then(data =>console.log('resolved',data));
// Finished