var config = {
    map: {
        '*': {
            'collapsible': 'js/collapsible_mike'
        }
    },
    paths: {
        owl_carousel: 'js/owl.carousel.min'
    },
    shim: {
        owl_carousel: {
            deps: ['jquery']
        }
    },
    config: {
        mixins: {
            'mage/accordion': {
                'js/accordion-mixin': true
            }
        }
    }
};
