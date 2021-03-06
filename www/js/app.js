var app=angular.module('ionic-socketio-chat-client', ['ionic', 'ngSanitize', 'btford.socket-io'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('chat', {
      url: "/chat/:nickname",
      templateUrl: "templates/chat.html"
    })
    .state('login', {
      url: "/login",
      templateUrl: "templates/login.html"
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
  })
