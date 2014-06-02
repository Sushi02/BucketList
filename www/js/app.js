angular.module('starter', ['ionic'])
.controller('todoCtrl',function($scope,$ionicModal){
  var tasks=$scope.tasks=JSON.parse(localStorage.getItem('tasks') || '[]');

  $ionicModal.fromTemplateUrl('new-task.html',function(modal){
    $scope.taskModal=modal;
  },{
    scope:$scope,
    animation:'slide-in-up'
  });
  $scope.createTask=function(task){
      $scope.tasks.push({
      title:task.title,
      completed:false
    });
    $scope.taskModal.hide();
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
    task.title="";
   };
  $scope.newTask=function(){
    $scope.taskModal.show();
  };
  $scope.closeNewTask=function(){
    $scope.taskModal.hide();
  };
  $scope.taskCompleted=function(task){
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  $scope.edit=function(task){
    tasks.splice(tasks.indexOf(task), 1);
    $scope.taskModal.show();
    todoStorage.put(todos);
  }
});

/*.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  }); 
})*/
