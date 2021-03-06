/**
 * Created by Devon on 2/18/2015.
 */
var foodieAppServices = angular.module('foodieAppServices', ["firebase"]);

foodieAppServices.factory("FirebaseGet", ["$firebase", function($firebase){
    return {
        pullFromFirebase: function(){
            var ref = new Firebase("https://sandwiches-data.firebaseio.com/");
            var sync = $firebase(ref);
            var sandwiches = sync.$asArray();
            return sandwiches
        },
        pullNonFavorites: function(){
            var ref = new Firebase("https://sandwiches-data.firebaseio.com/");
            var sync = $firebase(ref.orderByChild("addFavorite").equalTo(0));
            var nonFavoriteSandwiches = sync.$asArray();
            return nonFavoriteSandwiches
        },
        pullFavorites: function(){
            var ref = new Firebase("https://sandwiches-data.firebaseio.com/");
            var sync = $firebase(ref.orderByChild("addFavorite").equalTo(1));
            var favoriteSandwiches = sync.$asArray();
            return favoriteSandwiches
        }
    };
}]);
