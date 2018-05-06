angular.module('NRFAPP.services', [])
  .factory('servicoNRF', function() {

    var nrf = {};

    nrf.getResposta = function() {
      return "ok, resposta recebida";
    }


    return nrf;
  });