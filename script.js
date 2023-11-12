
const array = [];

for (let i = 0; i < Infinity; i++) {
  
  let command = prompt("'add' yoki 'del' bilan boshlangan komandani kiriting")
  // console.log(command);
  let newArray = command.split(',')
  // console.log(newArray);
  // console.log(newArray[0]);
  if (newArray[0]=='add') {
    array.push(newArray[1])
    // console.log(array);
  } else if(newArray[0]=='del'){
    for (let j = 0; j < array.length; j++) {
      // console.log(array[j]);
      if (array[j]==newArray[1]) {
        array.splice(j, 1)
      }
      
      
    }
  } else if(newArray[0]=='stop'){
    break;
  }
}
console.log(array);