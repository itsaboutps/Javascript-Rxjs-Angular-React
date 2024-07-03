//Observable work is to emit data time to time---->
//it emit data stream

//Observer is used to listen data and we use
//subscribe to listen the data emitted by Observable

/**
 * 1--> Learning Promise --Its a Part of Javascript
 */

//difference between Promise and Observable

/**
 * Promise- is Asyn/Return single value(resolve/reject)
 * Observable- is Async and synchronous/return stream of data
 * 
 */

/**
 * 
 */
//let is block scoped

//Promise take funtion as argrument which have resolve and reject as argument

// function learnPromise(){
//     let buylaptop=new Promise(function (resolve,reject){
//         // resolve('Promise is resolved');
//         reject('Promise is Reject');

//     })

//     buylaptop.then(res=>{
//         console.log("Then Code ==> "+ res)
//     }).catch(res=>{
//         console.log("catch code ==> "+res);
        
//     })
// }



//Practical Example  

// function isDellAvailable(){
//     return true;
// }
// function isHpLaptopAvailable(){
//     return false;
// }


// function laptopPurchase(){

//     let buyLaptop=new Promise((resolve,reject)=>{
//         if(this.isDellAvailable){
//             return setTimeout(()=>{
//                 resolve("dell is purchased");

//             },3000)
//         }else if(this.isHpLaptopAvailable){

//             return setTimeout(() => {
//                 resolve("HP is purchased")
//             }, 3000);



//         }else{
//             return setTimeout(() => {
//                 reject("HP is purchased")
//             }, 3000);        
//         }
//     })

//     buyLaptop.then(res=>{
//         console.log('then code=> ',res)
//     }).catch(res=>{
//         console.log('catch code=> ',res);
        
//     })

// }

// laptopPurchase()

/** ways to add comment
 * ?
 * !
 * todo
 * *
 * // 
 */

/**
 * !End of Promise and Resolve 
 */



