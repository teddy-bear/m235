define([
    'jquery',
    'mage/collapsible'
], function ($, widget) {
    'use strict';

    $.widget('mike_test.collapsible', widget, {

        /**
         * @private
         */
        _create: function () {
            this._super();
            console.log('custom collapsible inited');
        },
    });

    return $.mike_test.collapsible;
});
