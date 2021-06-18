// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(drivers, key, value) {
//this function should take in a driver Object, a key and a value. The function should not mutate the driver parameter and return
 //a new driver that has an updated value for the key passed in.
    

    return Object.assign({}, drivers, { [key]: value });
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){

    driver[key] = value;

    return driver;

};

function deleteFromDriverByKey(driver, key) {
  
      const NEW_OBJ =  Object.assign({}, driver);
  delete NEW_OBJ[key];
  return NEW_OBJ;
};

function destructivelyDeleteFromDriverByKey(driver, key) {
    Object.assign({}, driver);
delete driver[key];
return driver;
}