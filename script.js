function stringChop(str, size) {
  if(str===null){return [];}
  let newArray=[];
  let index=0;
 while(index<str.length){
  newArray.push(str.slice(index,index+size));
  index+=size
 }

  return newArray;
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));
