// Write your solution in this file!
<<<<<<< HEAD
let driver = {};
=======
let driver = []
>>>>>>> 00461616c016b940de4c66a95c4a0e2a18de6cbb

function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({},driver,{[key]: value})
}


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value
  return driver;
}
<<<<<<< HEAD

function deleteFromDriverByKey(driver, key){
  let newDriver = {...driver}
  delete newDriver[key]
  return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key]
  return driver
}
=======
>>>>>>> 00461616c016b940de4c66a95c4a0e2a18de6cbb
