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
//**uncomment me-> 
// Async()

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


     async function AsyncA(){
      console.log("I am being called")
}
      // AsyncA()
      // VM268:2 I am being called
      // Promise {<fulfilled>: undefined}

// *uncomment me-> 
// AsyncA().then(console.log)
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

//* uncoment me ---> 
getDataUsingAsyncAwait();
//* uncoment me ---> 
// getDataUsingPromise();

//******************************************************END************************************************** */

/**
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!IMPORTANT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */

/**
 * !using promise
 */
  // private calcAspectRatio(selectedFile): Promise<boolean> {
  //   return new Promise((resolve, reject) => {
  //     const file = selectedFile;
  //     const img = new Image();
  //     let aspectRatio: boolean;
  //     img.src = URL.createObjectURL(file);
  //     img.onload = () => {
  //       console.log(img.width / img.height)
  //       aspectRatio = (img.width / img.height) > 2.0 ? true : false;
  //       resolve(aspectRatio);
  //     };
  //   })
  // }


/**
 * !using async await 
 */
  // private async calcAspectRatio(selectedFile): Promise<boolean> {
  //   const file = selectedFile;
  //   const img = new Image();
  //   let aspectRatio: boolean;
  //   img.src = URL.createObjectURL(file);
  //   await new Promise((resolve, reject) => img.onload = resolve);
  //   aspectRatio = (img.width / img.height) > 2.0;
  //   return aspectRatio;
  // }


  // private previewLogoOnUpload(extension: string, reader: FileReader, selectedFile, formData: FormData) {
  //   this.calcAspectRatio(selectedFile).then((hasValidAspectRatio :boolean)=>{
  //       if (hasValidAspectRatio) {
  //         this.setImgData(extension, reader, selectedFile);
  //         formData.append('file', selectedFile);
  //         formData.append('path', this.http.request?.toString());
  //         this.logoData = formData;
  //       } else {
  //         this.commonService.showErrorMessage({ msg: "Aspect ratio should be greater than 2." });
  //       }
  //   })
    
  // }


/**
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!IMPORTANT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */












