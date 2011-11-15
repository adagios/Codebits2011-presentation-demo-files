View = function(onAddButtonCb, onClearButtonCb){
   var _list = $('#list-of-stuff'),
       _addBtn = $('#add-btn'),
       _clearBtn = $('#clear-btn');

   _addBtn.click(onAddButtonCb);
   _clearBtn.click(onClearButtonCb);

   return {
      addStuffToList: function(stuff){
         _list.append($('<li>' + stuff + '</li>'));
      },
      clearList: function(){
         _list.html('');
      }

   }
}
