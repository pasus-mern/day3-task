// comparing two Json have the same properties without order.

let obj1 = {name:"person1", age:5};
let obj2 = {age:5, name:"person1"};

if(Object.keys(obj1).length==Object.keys(obj2).length){
  console.log(true);
}
else
{
  console.log(false);
}