/**
 * Mike Custom
 */

define([
    'Magento_Ui/js/form/form',
    'ko',
    'mage/validation'
], function (Component, ko, validate) {
    'use strict';


    return Component.extend({
        availableCountries: ko.observableArray(),

        initialize: function () {
            this._super();
        },

        /**
         * Retrieve countries list from the the rest API and populate the select field
         */
        initConfig: function () {
            this._super();

            let countriesArray = [];

            // Sometimes cannot connect locally because of the following error
            // Refused to connect to 'https://restcountries.eu/rest/v2/all?fields=name' because it violates the following Content Security Policy directive
            const countriesRequest = fetch('https://restcountries.eu/rest/v2/all?fields=name', {})
                .then((response) => {
                    if (response.status === 200) {
                        return response.json()
                    } else {
                        throw Error('Something went wrong ;(')
                    }
                })
                .then((data) => {
                    for (const property in data) {
                        countriesArray.push(data[property].name)
                    }
                    this.availableCountries(countriesArray)
                })
                .catch((error) => {
                    console.log(`Catch: ${error}`)
                })

            return this;
        },

        /**
         * Clear all form fields values
         */
        clearFields: function () {
            document.getElementsByClassName('custom-form')[0].reset()
        },

    });
});
