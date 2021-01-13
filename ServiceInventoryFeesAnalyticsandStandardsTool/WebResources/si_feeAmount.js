"use strict";
var SIFAST;
(function (SIFAST) {
    var ServiceStandard;
    (function (ServiceStandard) {
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
            var feeAmountWithPrecisionValue = Number(feeAmountValue.toPrecision(precisionValue));
            Form.getAttribute('si_feeamountwithprecision').setValue(feeAmountWithPrecisionValue);
        }
        ServiceStandard.SetFeeAmountWithPrecision = SetFeeAmountWithPrecision;
    })(ServiceStandard = SIFAST.ServiceStandard || (SIFAST.ServiceStandard = {}));
})(SIFAST || (SIFAST = {}));
