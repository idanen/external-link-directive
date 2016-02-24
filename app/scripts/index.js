(function () {
    angular
        .module('tester', ['externalLinks'])
        .controller('TestsCtrl', TestsCtrl);

    function TestsCtrl() {
        this.links = ['pathLink/specific', '/pathWithRoot', '#/hashLink', 'domain.com/domainLink', '//www.google.com', 'https://www.google.com', ''];
    }
}());