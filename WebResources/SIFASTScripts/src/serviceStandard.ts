/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path='../typings/XRM/dg.xrmquery.web.d.ts' />
namespace SIFAST.ServiceStandard {
  var Form: Form.si_servicestandard.Main.Information;

  export async function SetNames(
    eContext: Xrm.ExecutionContext<any, any>
  ): Promise<void> {
    Form = <Form.si_servicestandard.Main.Information>eContext.getFormContext();

    const template = Form.getAttribute("si_template");

    const templateObject = template.getValue();
    if (templateObject == null) {
      return;
    }

    const templateValue = Form.getAttribute("si_value").getValue();
    if (templateValue == null) {
      return;
    }
    const templateValueType = Form.getAttribute("si_valuetype").getValue();
    if (templateValueType == null) {
      return;
    }

    const serviceTemplate = await XrmQuery.retrieve(
      (x) => x.si_servicestandardtemplates,
      templateObject[0].id
    )
      .select((x) => [x.si_englishname, x.si_frenchname])
      .promise();

    const valueType = await XrmQuery.retrieve(
      (x) => x.si_servicestandardvaluetypes,
      templateValueType[0].id
    )
      .select((x) => [x.si_valuetypeenm, x.si_valuetypefnm])
      .promise();

    if (valueType.si_valuetypeenm == null||valueType.si_valuetypefnm==null) {
      return;
    }

    Form.getAttribute("si_nameen").setValue(
      serviceTemplate.si_englishname
        ?.replace("{value}", templateValue.toString())
        .replace("{valuetype}", valueType.si_valuetypeenm)
    );
    Form.getAttribute("si_namefr").setValue(
      serviceTemplate.si_frenchname
        ?.replace("{value}", templateValue.toString())
        .replace("{valuetype}", valueType.si_valuetypefnm)
    );

    
  }
}
