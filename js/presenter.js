Presenter = function(){
   var _model = Model(),
       _view;

   var onAddButtonPressed = function(){
      var addedStuff = 'added stuff';
      _model.addStuff(addedStuff);
      _view.addStuffToList(addedStuff);
   }

   var onClearButtonPressed = function(){
      _model.loadListOfStuff();
   }

   _view = View(onAddButtonPressed, onClearButtonPressed);

   App.subscribe('stuff-loaded', function(){
      _view.clearList();
      _model.getListOfStuff().map(function(stuff){
         _view.addStuffToList(stuff);
      });
   });
}
