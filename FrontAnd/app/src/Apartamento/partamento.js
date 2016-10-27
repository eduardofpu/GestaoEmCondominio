'use strict';

angular.module('mutrack')
  .controller('apCtrl', function($scope, ngNotify, RestSrv, SERVICE_PATH) {

    $scope.ap = {};
    $scope.aps = [];

    $scope.permissao = {};
    $scope.showAddEditUser = false;


    ngNotify.config({
      theme: 'pure',
      position: 'bottom',
      duration: 3000,
      type: 'info',
      sticky: false,
      button: true,
      html: false
  });





    // Show the form used to edit or add users.
    $scope.show = function() {
      $scope.showAddEditUser = true;
    };

    // Hide the form used to edit or add users.
    $scope.hide = function() {
      $scope.showAddEditUser = false;
      $scope.ap = {};
    };

    // Manage CRUD operations.
    var apUrl =  SERVICE_PATH.PRIVATE_PATH + '/apartamento';

    $scope.editAp = function(ap) {
      $scope.ap = angular.copy(ap);
      $scope.show();
    };

    $scope.deleteAp = function(ap) {
      RestSrv.delete(apUrl, ap, function() {
        $scope.aps.splice($scope.aps.indexOf(ap), 1);
        ngNotify.set('Ap \'' + ap.descricao + '\' deleted.', 'success');
      });
    };


    $scope.saveAp = function(ap) {
      if (ap.id ) {


        RestSrv.edit(apUrl, ap, function() {


          for (var i = 0; i < $scope.aps.length; i++) {
            if ($scope.aps[i].id === ap.id) { //=== verifica id e o objeto
              $scope.aps[i] = ap;
            }

          }

          $scope.hide();// para esconder o forme
          ngNotify.set('Apartamento \'' + ap.descricao + '\' updated.', 'success');
        });


      } else {



        RestSrv.add(apUrl, ap, function(newAp) {
          $scope.aps.push(newAp);
          $scope.hide();
          ngNotify.set('Apartamento \'' + ap.descricao + '\' added.', 'success');
          // $scope.messages = data.fieldsErrorMessages;
           //console.log(data);
        });
      }
    };



    RestSrv.find(apUrl,function(data) {
      $scope.aps = data;
      ngNotify.set('Loaded aps with success.', 'success');
    });


    // Request all data (permission and user).



   var permissionUrl =  SERVICE_PATH.PRIVATE_PATH + '/permission';

     RestSrv.find(permissionUrl, function(data) {


         $scope.permissions = data;


  });






  });
