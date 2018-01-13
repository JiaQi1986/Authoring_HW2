var myApp = {
  // we could put module-specific global variables here
//  mainMessage : "Welcome to the app!",

  //mainGreeting: function(){
  //  console.log('hey! welcome to the app! this is awesome');
//  }
};

myApp.module1 = {
  // this would be a feature-specific module, like all things video
  //saySomething: function(message){
    //console.log(myApp.mainMessage, message, `I'm the second file!`);
  //},

  //doSomething: function(){
    //console.log('called module1 doSomething', 'hey, this just changed!');
//  }
};

myApp.module2 = {
  // add another module
  //doSomethingElse: function(){
    //console.log('called doSomethingelse from module 2', 'changing this file');
  //}
};

(function(){
  myApp.mainGreeting();

  myApp.module1.saySomething('sup!');

  function myFunc(){
    var theHeading = document.querySelector('h1').textContent = myApp.mainMessage;
  }

});
