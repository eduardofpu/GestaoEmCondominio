'use strict';

angular.module('mutrack')
  .service('HttpRequestSrv', function($http, ngNotify) {
    return function(url, method, data, callback) {
      var requestParams = {
        method: method,
        url: url,
        headers: { 'Content-Type': 'application/json' },
        data: data
      };

      $http(requestParams).then(
        function successCallback(response) {
          callback && callback(response.data);
        },
        function errorCallback(response) {
          //  ngNotify.set('Atenção Error: ' + response.statusText + '.', 'error');Culd
          //  ngNotify.set('Atenção Error: ' + response.data.message+ '.', 'error');
           ngNotify.set('Error no campo' + response.data.fieldsErrorMessages[0] + '.', 'error');


        });


    };
  })
  .service('RestSrv', function(HttpRequestSrv) {
    var restFactory = {};

    // Find all data.
    restFactory.find = function(url, callback) {
      HttpRequestSrv(url, 'GET', {}, callback);
    };

    restFactory.findPesqFuncionario = function(url,data,callback) {
    HttpRequestSrv(url, 'POST', data, callback);
  };

  restFactory.findPesqPrestador = function(url,data,callback) {
  HttpRequestSrv(url, 'POST', data, callback);
};

  restFactory.findCadastro = function(url,callback) {
    HttpRequestSrv(url, 'GET', {}, callback);
  };


    // Aadd a new data.
    restFactory.add = function(url, data, callback) {
      HttpRequestSrv(url, 'POST', data, callback);
    };

    // Edit a data.
    restFactory.edit = function(url, data, callback) {
      HttpRequestSrv(url, 'PUT', data, callback);
    };

    // Delete a data.
    restFactory.delete = function(url, data, callback) {
      HttpRequestSrv(url, 'DELETE', data, callback);
    };

    return restFactory;
  });
