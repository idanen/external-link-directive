(function() {
  'use strict';

  angular
    .module('externalLinks')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
