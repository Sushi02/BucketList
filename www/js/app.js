// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])
.controller('todoCtrl',function($scope,$ionicModal){
  $scope.tasks=[
  {title:'Go to Eiffle Tower'},
  {title:'Get a tatoo'}
  ];
  $ionicModal.fromTemplateUrl('new-task.html',function(modal){
    $scope.taskModal=modal;
  },{
    scope:$scope,
    animation:'slide-in-up'
  });
  $scope.createTask=function(task){
    $scope.tasks.push({
      title:task.title
    });
    $scope.taskModal.hide();
    task.title="";
  };
  $scope.newTask=function(){
    $scope.taskModal.show();
  };
  $scope.closeNewTask=function(){
    $scope.taskModal.hide();
  };
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
