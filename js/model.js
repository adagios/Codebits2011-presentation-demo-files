Model = function(){
   var _listOfStuff = []

   return {
      loadListOfStuff: function(){
         //we would get something from some server
         setTimeout(function(){
            _listOfStuff = ["this", "that", "other"];
            App.publish('stuff-loaded');
         }, 300);
      },
      getListOfStuff: function(){
         return _listOfStuff;
      },
      addStuff: function(stuff){
         _listOfStuff.push(stuff);
      }
   }
}
