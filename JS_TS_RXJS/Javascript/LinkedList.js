let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
list.next.next.next.next = null;

console.log(list);



//! Here above we are creating the linked list -->JavaScript

//!Insertion at start or end is pretty easy or optimised 
let newVal={value:"new item",next:list}
console.log(newVal)


//!To remove value from middle 
list.next = list.next.next