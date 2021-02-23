/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path='../typings/XRM/dg.xrmquery.web.d.ts' />
namespace SIFAST.TCService {
  var Form: Form.si_service.Main.Information;

  export async function SetTabVisibility(
    eContext: Xrm.ExecutionContext<any, any>
  ): Promise<void> {
    Form = <Form.si_service.Main.Information>eContext.getFormContext();

    const tabChildrenServices = Form.ui.tabs.get("tabChildrenServices");
    const tabFees = Form.ui.tabs.get("tabServiceStandardFee");

    const serviceId = Form.data.entity.getId();

    const childrenServices = await XrmQuery.retrieveMultiple(
      (x) => x.si_services     
    )
      .filter(x=>Filter.equals(x.si_parentservice_guid, Filter.makeGuid(serviceId.slice(1,-1))))
      .promise();

    if(childrenServices.length>0){
      tabChildrenServices.setVisible(true);
      tabFees.setVisible(false);
    }
    else{
      tabChildrenServices.setVisible(false);
      tabFees.setVisible(true);
    }  

    
  }
}
