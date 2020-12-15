define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/additional-validators',
        'Mike_Checkout/js/model/mike-validate'
    ],
    function (Component, additionalValidators, yourValidator) {
        'use strict';
        additionalValidators.registerValidator(yourValidator);
        return Component.extend({});
    }
);
