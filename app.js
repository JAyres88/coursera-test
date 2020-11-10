(function() {
'use strict'; //use strict para não declarar variáveis de escopo global. 

angular.module("1stApp", [])

.controller('StrLenController', function ($scope) //deixar $ para variáveis do angular
{
     $scope.username = "";
     $scope.strLenValue = 0;

     $scope.ImprimeChar = function() {
         
         var valorCalculado = 
         calculaNumeroDeChars($scope.username ); 
         $scope.strLenValue = valorCalculado; // passando valor calculado para o escopo do app.
     };


   function calculaNumeroDeChars(string){
    var totalStringValue=0;
    for(var i=0; i < string.length; i++){
        totalStringValue += string.charCodeAt(i);
    }
    return totalStringValue
   };    

});
})();