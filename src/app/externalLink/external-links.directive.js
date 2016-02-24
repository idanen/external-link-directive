(function () {
  'use strict';

  angular
    .module('externalLink')
    .directive('a', AFactory);

  function AFactory() {
    return {
      restrict: 'E',
      link: linkFn
    };
  }

  function linkFn($scope, $element, $attrs) {
    $attrs.$observe('href', function (href) {
      var domainPattern = /^(?:[a-z]{2,30}:)?(?:\/\/)([^:\/?]*)/i,
          domainMatch = domainPattern.exec(href),
          domain, currentDomain;

      if (!domainMatch || domainMatch.length < 2) {
        return;
      }

      domain = domainMatch[1].toLowerCase();
      currentDomain = window.location.hostname.toLowerCase();

      if (domain !== currentDomain) {
        $attrs.$set('target', '_blank');
        // Mark that this directive added the target attribute
        $element.data('externalLink', true);
      } else if ($element.data('externalLink')) {
        $attrs.$set('target', '_self');
      }
    });
  }
}());
