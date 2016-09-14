'use strict';

angular.module('worldWideApp')
    .controller('CharterCtrl', function ($scope) {
       
        var charterType = [
            'Commercial Charter / Public (*) (More than 17 Paxs)',
            'Group Charter / Private (**) (More than 17 Paxs)',
            'Private/VIP Charter (1 to 17 Paxs Maximum)',
            'Aero-Ambulance',
            'Cargo Charter',
            'Helicopter Charter'
        ];
        $scope.charterType = charterType;
        
        var aircraft = [
            'ALL Coach',
            '1st Class + Coach',
            'VIP'
        ];
        $scope.aircraft = aircraft;
        
        var flightOp = [
            'Round Trip',
            'One Way',
            'Multi-City'
        ];
        $scope.flightOp = flightOp;
        
        $scope.numberFlight = [1];
        
        var beverage = [
            'Standard Service (No Alcoholic Beverages)',
            'Open Bar',
            'Cash Bar',
            'See Remarks'
        ];
        $scope.beverage = beverage;
        
        var catering = [
            'Standard Service',
            'VIP / Premium',
            'Athletic Portions (1.5 to 2 X Standard Service)',
            'Kosher',
            'NO Catering Service',
            'See Remarks'
        ];
        $scope.catering = catering;
        
  });
