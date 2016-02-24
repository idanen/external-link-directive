(function(undefined) {
  'use strict';

  describe('externalLink directive', function () {
    var links;

    beforeEach(module('externalLink'));

    it('should add target `_blank` to `a` with external linking `href`s', inject(function($compile, $rootScope, $document) {
      var tmpl = angular.element('<a/>'),
          body = $document.find('body'),
          scope = $rootScope.$new(),
          element;

      links.forEach(function (link) {
        element = tmpl.clone();
        element.attr('href', link.href);
        body.append(element);
        element = $compile(element)(scope);
        scope.$digest();
        if (link.external) {
          expect(element.attr('target')).toEqual('_blank');
          expect(element.data('externalLink')).toBeTruthy();
        } else {
          expect(element.attr('target')).toBeFalsy();
        }
        element.remove();
      });
    }));

    links = [
      {
        href: 'pathLink/specific',
        external: false
      }, {
        href: '/pathWithRoot',
        external: false
      }, {
        href: '#/hashLink',
        external: false
      }, {
        href: 'domain.com/domainLink',
        external: false
      }, {
        href: '//www.google.com',
        external: true
      }, {
        href: 'https://www.google.com',
        external: true
      }, {
        href: '',
        external: false
      }
    ];
  });
})();
