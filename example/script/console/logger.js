define(["moduleMediator"], function(moduleMediator){
  var exports = {};

  exports.init = function(elem){

    moduleMediator.subscribe("like.facebook", function(){
      console.log('event happend: like.facebook')
    });

  };

  return exports;
});
