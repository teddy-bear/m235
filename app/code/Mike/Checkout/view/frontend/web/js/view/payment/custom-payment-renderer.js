define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (
        Component,
        rendererList
    ) {
        'use strict';
        rendererList.push(
            {
                type: 'custom_payment',
                component: '%js_renderer_component%'
            },
            // other payment method renderers if required
        );
        /** Add view logic here if needed */
        return Component.extend({});
    }
);
