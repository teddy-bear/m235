define([
    'jquery'
], function ($) {
    'use strict';

    return function (widget) {
        $.widget('mage.accordion', widget, {

            /**
             * Prevent default behavior that closes the other sections when one gets activated if the Accordion allows
             * multiple sections simultaneous
             * @private
             */
            _closeOthers: function () {
                var self = this;

                if (!this.options.multipleCollapsible) {
                    $.each(this.collapsibles, function () {
                        $(this).on('beforeOpen', function () {
                            self.collapsibles.not(this).collapsible('deactivate');
                            console.log('not multipleCollapsible');
                        });
                    });
                }
                $.each(this.collapsibles, function () {
                    $(this).on('beforeOpen', function () {
                        var section = $(this);

                        section.addClass('allow').prevAll().addClass('allow');
                        section.nextAll().removeClass('allow');
                        console.log('close others triggered');
                    });
                });
            }
        });

        return $.mage.accordion;
    };
});
