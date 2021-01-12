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
interface si_FeeAmount_Base extends WebEntity {
}
interface si_FeeAmount_Fixed extends WebEntity_Fixed {
  si_feeamountid: string;
}
interface si_FeeAmount extends si_FeeAmount_Base, si_FeeAmount_Relationships {
}
interface si_FeeAmount_Relationships {
}
interface si_FeeAmount_Result extends si_FeeAmount_Base, si_FeeAmount_Relationships {
}
interface si_FeeAmount_FormattedResult {
}
interface si_FeeAmount_Select {
}
interface si_FeeAmount_Expand {
}
interface si_FeeAmount_Filter {
}
interface si_FeeAmount_Create extends si_FeeAmount {
}
interface si_FeeAmount_Update extends si_FeeAmount {
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
interface si_Fee_Base extends WebEntity {
}
interface si_Fee_Fixed extends WebEntity_Fixed {
  si_feeid: string;
}
interface si_Fee extends si_Fee_Base, si_Fee_Relationships {
}
interface si_Fee_Relationships {
}
interface si_Fee_Result extends si_Fee_Base, si_Fee_Relationships {
}
interface si_Fee_FormattedResult {
}
interface si_Fee_Select {
}
interface si_Fee_Expand {
}
interface si_Fee_Filter {
}
interface si_Fee_Create extends si_Fee {
}
interface si_Fee_Update extends si_Fee {
}
