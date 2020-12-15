define(
    ['mage/translate', 'Magento_Ui/js/model/messageList'],
    function ($t, messageList) {
        'use strict';
        return {
            validate: function () {

                let isValid = false;
                if (jQuery('input[name="billing-address-same-as-shipping"]').attr("checked")) {
                    isValid = true;
                }


                if (!isValid) {
                    messageList.addErrorMessage({message: $t('a possible failure message ...  ')});
                }

                return isValid;
            }
        }
    }
);
