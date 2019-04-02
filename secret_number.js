'use strict';
module.exports = function() {
  const secretNumber = Math.floor(Math.random()*1000000);

  let secretNumberGenerator = function(){

      return secretNumber;
  
  }
  return secretNumberGenerator
};