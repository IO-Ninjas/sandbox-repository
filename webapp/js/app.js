/**
 * Created by Devbook on 2/20/16.
 */
var colorPickerApp = angular.module('colorPickerApp', ['ngMaterial']);
colorPickerApp.controller('MainCtrl', function ($scope) {
    $scope.onColorChange = function (r, g, b, a) {
        console.log('onColorChange', r, g, b, a);
    };
});

colorPickerApp.config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('red')
            .accentPalette('purple');
    });