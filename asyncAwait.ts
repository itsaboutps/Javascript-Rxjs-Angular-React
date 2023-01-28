/**
 * console.log(asyncAwait())
VM122:1 Promise {<fulfilled>: 'data received'}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: "data received"

 */


/**
 * Lecture Numbe 5
 */

/**
 * !Asyn await
 */
function Async() {
  console.log("I am being called")
}

//calling above function
//**uncomment me-> Async()

/**
 * !ASYNC KEYWORD BEFORE FUNCTION ALWAYS RETURNS PROMISE
 */
async function AsyncA() {
  console.log("I am being called")
}
/**
 * !VM122:1 Promise {<fulfilled>: 'data received'}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: "data received"
    console will return like this
 */

//*uncomment me->  AsyncA()  

/**
 *    async function AsyncA(){
      console.log("I am being called")
}
      AsyncA()
      VM268:2 I am being called
      Promise {<fulfilled>: undefined}
 */
// *uncomment me-> AsyncA().then(console.log)
// ------------------------------------------------
//******************************************************START************************************************** */
let promise=new Promise((resolve,reject)=>{
  setTimeout(()=>{
      const person={
        name:"Prashant Singh",
        Age:24,
        City:'Delhi'
      }
      resolve(person)
  },2000);

})

//!Now going to show two method to resolve above Promise-- Below are the two methods


//!Method 1 - using promise method
function getDataUsingPromise(){
    promise.then(responseGotFromPromise=>{
      console.log(responseGotFromPromise)
    })
}

//!Method 2 - using async await method
async function getDataUsingAsyncAwait(){
    let response= await promise;
    console.log(response);
    //above will print Person object in above promise resolve
}

//* data will be received after 2 seconds

//* uncoment me ---> getDataUsingAsyncAwait();
//* uncoment me ---> 
getDataUsingPromise();

//******************************************************END************************************************** */



















