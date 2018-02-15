var app = angular.module('app', []);
app.controller('itemsController', ['dataService', function (dataService) {
    var vm = this;
    vm.items = [];
    vm.selectedItem;
    //demonstrate data if clear localStorage
    vm.defaultData = [
                      { "text": "First item with custom name",
                       "comments": [{ "text": "It was introduced to the Information Age in the mid-1980s.A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popu- larized by add" }, 
                                    { "text": "A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popu- larized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s" }] },
                      { "text": "Second item is active",
                      "comments": [{ "text": "A variation of the ordinary lorem ipsum text has been used\n\nin typesetting since the 1960s or earlier, when it was popu-\nlarized by advertisements for Letraset transfer sheets. It was\n\nintroduced to the Information Age in the mid-1980s" }, 
                                   { "text": "A variation of the ordinary lorem ipsum text has been used\n\nin typesetting since the 1960s or earlier, when it was popu-\nlarized by advertisements for Letraset transfer sheets. It was\n\nintroduced to the Information Age in the mid-1980s" }, 
                                   { "text": "A variation of the ordinary lorem ipsum text has been used\n\nin typesetting since the 1960s or earlier, when it was popu-\nlarized by advertisements for Letraset transfer sheets. It was\n\nintroduced to the Information Age in the mid-1980sA varia-\ntion of the ordinary lorem ipsum text has been used in\n\ntypesetting since the 1960s or earlier, when it was popular-\nized by advertisements for Letraset transfer sheets. It was\n\nintroduced to the Information Age in the mid-1980sA varia-\ntion of the ordinary lorem ipsum text has been used in\n\ntypesetting since the 1960s or earlier, when it was popular-\nized by advertisements for Letraset transfer sheets. It was\n\nintroduced to the Information Age in the mid-1980s" }] 
                      }
                    ];
    vm.newCommentText;
    //add new item
    vm.addNew = function (value) {
        vm.items.push({ text: value, comments: [] });
        vm.selectedItem = vm.items[vm.items.length - 1];
        dataService.setObject('items', vm.items);
    }
    //delete item
    vm.deleteItem = function (item) {
        var indx = vm.items.indexOf(item);
        if (item === vm.selectedItem) vm.selectedItem = vm.items[0];
        vm.items.splice(indx, 1);
        dataService.setObject('items', vm.items);
    }
    //add new comment
    vm.addComment = function (text) {
        if (text.length) vm.selectedItem.comments.unshift({ "text": text });
        dataService.setObject('items', vm.items);
    }
    //load data from localStorage if not exist load demontration data
    vm.loadInfo = function () {
        vm.items = dataService.getObject('items', vm.defaultData);
        if (vm.items.length) vm.selectedItem = vm.items[0];
    }
    vm.loadInfo();
}]);