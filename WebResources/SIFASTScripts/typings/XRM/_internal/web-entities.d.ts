interface WebMappingRetrieve<ISelect, IExpand, IFilter, IFixed, Result, FormattedResult> {
}
interface WebMappingCUDA<ICreate, IUpdate, ISelect> {
}
interface WebMappingRelated<ISingle, IMultiple> {
}
interface WebEntity {
}
interface WebEntity_Fixed {
  "@odata.etag": string;
}
interface si_ServiceStandard_Base extends WebEntity {
}
interface si_ServiceStandard_Fixed extends WebEntity_Fixed {
  si_servicestandardid: string;
}
interface si_ServiceStandard extends si_ServiceStandard_Base, si_ServiceStandard_Relationships {
}
interface si_ServiceStandard_Relationships {
}
interface si_ServiceStandard_Result extends si_ServiceStandard_Base, si_ServiceStandard_Relationships {
}
interface si_ServiceStandard_FormattedResult {
}
interface si_ServiceStandard_Select {
}
interface si_ServiceStandard_Expand {
}
interface si_ServiceStandard_Filter {
}
interface si_ServiceStandard_Create extends si_ServiceStandard {
}
interface si_ServiceStandard_Update extends si_ServiceStandard {
}
interface si_ServiceStandardTemplate_Base extends WebEntity {
}
interface si_ServiceStandardTemplate_Fixed extends WebEntity_Fixed {
  si_servicestandardtemplateid: string;
}
interface si_ServiceStandardTemplate extends si_ServiceStandardTemplate_Base, si_ServiceStandardTemplate_Relationships {
}
interface si_ServiceStandardTemplate_Relationships {
}
interface si_ServiceStandardTemplate_Result extends si_ServiceStandardTemplate_Base, si_ServiceStandardTemplate_Relationships {
}
interface si_ServiceStandardTemplate_FormattedResult {
}
interface si_ServiceStandardTemplate_Select {
}
interface si_ServiceStandardTemplate_Expand {
}
interface si_ServiceStandardTemplate_Filter {
}
interface si_ServiceStandardTemplate_Create extends si_ServiceStandardTemplate {
}
interface si_ServiceStandardTemplate_Update extends si_ServiceStandardTemplate {
}
