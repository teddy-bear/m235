define([
    'jquery',
    'uiComponent',
    'ko'], function ($, Component, ko) {

    'use strict';

    var self;
    return Component.extend({
        getTitle: function () {
            var string = $('.page-title-wrapper').text();
            return string;
        },
        sampleContent: 'sample content string from ko 2 file',
        numberOfClicks: ko.observable(0),

        registerClick: function () {
            this.numberOfClicks(this.numberOfClicks() + 1);
        },

        resetClicks: function () {
            this.numberOfClicks(0);
        },
        theValue: ko.observable("1"),
        randomValueSet: ko.observable('random value here'),
        resetValue: function () {
            this.theValue(2);
        },
        randomValue: function () {
            var val = Math.floor(Math.random() * (3)) + 1;
            this.randomValueSet(val);
        }
    })
});
