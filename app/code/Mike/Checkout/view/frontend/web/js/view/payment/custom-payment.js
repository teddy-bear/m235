define(
    [
        'Magento_Checkout/js/view/payment/default'
    ],
    function (Component) {
        'use strict';
        return Component.extend({
            defaults: {
                template: 'Mike_Checkout/payment/custom_method'
            },
            // add required logic here
        });
    }
);
