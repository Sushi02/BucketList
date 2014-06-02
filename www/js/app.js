angular.module('starter', ['ionic'])
.controller('todoCtrl',function($scope,$ionicModal,$ionicSideMenuDelegate){

  var Buckets=$scope.Buckets=JSON.parse(localStorage.getItem('Buckets') || '[]');
  var recentBucket=$scope.recentBucket=$scope.Buckets[parseInt(window.localStorage['active'])||0];


//Create new task--------------------------------------------------------------------------------------------------------------------
  $ionicModal.fromTemplateUrl('new-task.html',function(modal){
    $scope.taskModal=modal;
  },{
    scope:$scope,
    animation:'slide-in-up'
  });

  $scope.createTask=function(task){
      console.log($scope.recentBucket.title);
     $scope.recentBucket.tasks.push({
      title:task.title,
      completed:false
    });
    $scope.taskModal.hide();
    window.localStorage.setItem('Buckets', JSON.stringify(Buckets));
    task.title="";
   };
//-----------------------------------------------------------------------------------------------------------------------------------------
 
//Create new bucket-----------------------------------------------------------------------------------------------------------------------

  $ionicModal.fromTemplateUrl('new-bucket.html',function(modal){
    $scope.bucketModal=modal;
  },{
    scope:$scope,
    animation:'slide-in-up'
  });
 

   $scope.createBucket=function(bucket){
      console.log(bucket.title);
      $scope.Buckets.push({
      title:bucket.title,
      tasks:[]
    });
    $scope.bucketModal.hide();
    window.localStorage.setItem('Buckets', JSON.stringify(Buckets));
    bucket.title="";
   };

//--------------------------------------------------------------------------------------------------------------------------------------------

  $scope.newTask=function(){
    $scope.taskModal.show();
  };
  $scope.closeNewTask=function(){
    $scope.taskModal.hide();
  };
  $scope.closeNewBucket=function(){
    $scope.bucketModal.hide();
  };
  $scope.taskCompleted=function(){
    window.localStorage.setItem('Buckets', JSON.stringify(Buckets));
  }
  
  $scope.edit=function(task){
    tasks.splice(tasks.indexOf(task), 1);
    $scope.taskModal.show();
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  $scope.newBucket=function(){
    $scope.bucketModal.show();
  }
//open new bucket-----------------------------------------------------------------------------------------------------------------------------------
  $scope.open=function(bucket,index){
    $scope.recentBucket=$scope.Buckets[index];
    window.localStorage['active']=index;
    $ionicSideMenuDelegate.toggleLeft(false);
  }
//-----------------------------------------------------------------------------------------------------------------------------------------------------
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
