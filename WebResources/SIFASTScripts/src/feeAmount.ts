namespace SIFAST.FeeAmount {
  var Form: Form.si_feeamount.Main.Information;

  export function SetFeeAmountWithPrecision(eContext: Xrm.ExecutionContext<any, any>): void {
    Form = <Form.si_feeamount.Main.Information>eContext.getFormContext();

    const feeAmount = Form.getAttribute('si_feeamount');
    const precision = Form.getAttribute('si_feeprecision');
    
    
    const feeAmountValue = feeAmount.getValue();
    const precisionValue = precision.getValue();

    if(feeAmountValue==null){
      return;
    }
    if(precisionValue==null){
      return;
    }

    const feeAmountWithPrecisionValue = feeAmountValue.toFixed(precisionValue);
        
    Form.getAttribute('si_feeamountwithprecision').setValue(feeAmountWithPrecisionValue);
  }

  
}
