/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path='../typings/XRM/dg.xrmquery.web.d.ts' />
namespace SIFAST.ServiceStandard {
  var Form: Form.si_servicestandard.Main.Information;

  export function SetNames(eContext: Xrm.ExecutionContext<any, any>): void {
    Form = <Form.si_servicestandard.Main.Information>eContext.getFormContext();

    const template = Form.getAttribute('si_template');
    if(template==null){
      return;
    }
    const templateObject = template.getValue();
    if(templateObject==null){
      return;
    }
        
    const serviceTemplate = XrmQuery.retrieve((x) => x.si_servicestandardtemplates, templateObject[0].id)
    .select(x => [x.si_englishname, x.si_frenchname])
    .execute(serviceTemplate =>{
      Form.getAttribute('si_nameen').setValue(serviceTemplate.si_englishname);
      Form.getAttribute('si_namefr').setValue(serviceTemplate.si_frenchname);
    });
  }

  
}
