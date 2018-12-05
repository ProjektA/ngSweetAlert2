(function(root, factory) {
    "use strict";

    /*global define*/
    if (typeof define === 'function' && define.amd) {
        define(['angular', 'sweetalert'], factory); // AMD
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory(require('angular'), require('sweetalert')); // Node
    } else {
        factory(root.angular, root.swal); // Browser
    }

}(this, function(angular, swal) {
    "use strict";

    angular.module('oitozero.ngSweetAlert', [])
        .factory('SweetAlert', ['$rootScope', function($rootScope) {
            //public methods
            var self = {

                swal: function(arg1, arg2, arg3) {
                    return new Promise(function(resolve, reject) {
                        $rootScope.$evalAsync(function() {
                            swal(arg1, arg2, arg3).then(function() {
                                resolve();
                            }, function(dismiss) {
                                reject(dismiss);
                            }).catch(swal.noop);
                        })
                    });
                },
                success: function(title, message) {
                    $rootScope.$evalAsync(function() {
                        swal(title, message, 'success');
                    });
                },
                error: function(title, message) {
                    $rootScope.$evalAsync(function() {
                        swal(title, message, 'error');
                    });
                },
                warning: function(title, message) {
                    $rootScope.$evalAsync(function() {
                        swal(title, message, 'warning');
                    });
                },
                info: function(title, message) {
                    $rootScope.$evalAsync(function() {
                        swal(title, message, 'info');
                    });
                },
                showInputError: function(message) {
                    $rootScope.$evalAsync(function() {
                        swal.showInputError(message);
                    });
                },
                close: function() {
                    $rootScope.$evalAsync(function() {
                        swal.close();
                    });
                }
            };

            return self;
        }]);
}));
