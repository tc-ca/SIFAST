/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path='../typings/XRM/dg.xrmquery.web.d.ts' />
namespace SIFAST.Fee {
  var Form: Form.si_fee.Main.Information;

  export async function ValidateFeeGroup(eContext: Xrm.ExecutionContext<any, any>): Promise<void> {
    Form = <Form.si_fee.Main.Information>eContext.getFormContext();

    const defaultProgram = Form.getAttribute('si_defaultprogram').getValue();
    const feeGroup = Form.getAttribute('si_feegroup').getValue();
    const feeGroupControl = Form.getControl('si_feegroup');
    
    if(defaultProgram==null){
      return;
    }
    if(feeGroup==null){
      return;
    }

    const feeGroupProgram = await XrmQuery.retrieve(
      (x) => x.si_feegroups,
      feeGroup[0].id
    )
      .select((x) => [x.si_program_guid])
      .promise();
      debugger;
      console.log(feeGroupProgram.si_program_guid);
      console.log(defaultProgram[0].id);
    if(feeGroupProgram.si_program_guid?.toUpperCase()!==defaultProgram[0].id.slice(1,-1)){
      var errorMsg: string = 'Fee Group Program does not match Default Program.';
      feeGroupControl.setNotification(errorMsg);
    }
    else{
      feeGroupControl.clearNotification();
    }
       
  }

  
}
