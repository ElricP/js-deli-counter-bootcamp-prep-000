function takeANumber(line, name){
  line.push(name);
  return  `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  if(line.length == 0){
    return "There is nobody waiting to be served!";
  }
  var first = line[0];
  line.shift();
  return `
}