var config = {
    map: {
        '*': {
            /*abstractStep: 'Residential_Checkout/js/view/steps/abstract',
            accordionItems: 'Residential_Checkout/js/view/success/accordion-details',
            totalsProcessor: 'Residential_Checkout/js/model/response-processors/totals-processor',
            invalidateProcessor: 'Residential_Checkout/js/model/response-processors/invalidate-processor',
            placeOrderProcessor: 'Residential_Checkout/js/model/place-order/place-order-processor',
            cmsBlocksConfig: 'Residential_Checkout/js/model/cms-blocks-config',
            urlBuilder: 'Magento_Checkout/js/model/url-builder'*/
        }
    },
    config: {
        mixins: {
            'Magento_Checkout/js/view/shipping': {
                'Mike_Checkout/js/view/shipping-payment-mixin': true
            },
            'Magento_Checkout/js/view/payment': {
                'Mike_Checkout/js/view/shipping-payment-mixin': true
            }
        }
    }
};
