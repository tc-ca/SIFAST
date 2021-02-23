"use strict";
var SIFAST;
(function (SIFAST) {
    var FeeAmount;
    (function (FeeAmount) {
        var Form;
        function SetFeeAmountWithPrecision(eContext) {
            Form = eContext.getFormContext();
            var feeAmount = Form.getAttribute('si_feeamount');
            var precision = Form.getAttribute('si_feeprecision');
            var feeAmountValue = feeAmount.getValue();
            var precisionValue = precision.getValue();
            if (feeAmountValue == null) {
                return;
            }
            if (precisionValue == null) {
                return;
            }
            var feeAmountWithPrecisionValue = feeAmountValue.toFixed(precisionValue);
debugger;
            Form.getAttribute('si_feeamountwithprecision').setValue(feeAmountWithPrecisionValue);
        }
        FeeAmount.SetFeeAmountWithPrecision = SetFeeAmountWithPrecision;
    })(FeeAmount = SIFAST.FeeAmount || (SIFAST.FeeAmount = {}));
})(SIFAST || (SIFAST = {}));
