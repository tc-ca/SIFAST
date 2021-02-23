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
interface si_FeeGroup_Base extends WebEntity {
}
interface si_FeeGroup_Fixed extends WebEntity_Fixed {
  si_feegroupid: string;
}
interface si_FeeGroup extends si_FeeGroup_Base, si_FeeGroup_Relationships {
}
interface si_FeeGroup_Relationships {
}
interface si_FeeGroup_Result extends si_FeeGroup_Base, si_FeeGroup_Relationships {
}
interface si_FeeGroup_FormattedResult {
}
interface si_FeeGroup_Select {
}
interface si_FeeGroup_Expand {
}
interface si_FeeGroup_Filter {
}
interface si_FeeGroup_Create extends si_FeeGroup {
}
interface si_FeeGroup_Update extends si_FeeGroup {
}
interface si_Service_Base extends WebEntity {
}
interface si_Service_Fixed extends WebEntity_Fixed {
  si_serviceid: string;
}
interface si_Service extends si_Service_Base, si_Service_Relationships {
}
interface si_Service_Relationships {
}
interface si_Service_Result extends si_Service_Base, si_Service_Relationships {
}
interface si_Service_FormattedResult {
}
interface si_Service_Select {
}
interface si_Service_Expand {
}
interface si_Service_Filter {
}
interface si_Service_Create extends si_Service {
}
interface si_Service_Update extends si_Service {
}
interface si_Service_si_ServiceStandard_Base extends WebEntity {
}
interface si_Service_si_ServiceStandard_Fixed extends WebEntity_Fixed {
  si_service_si_servicestandardid: string;
}
interface si_Service_si_ServiceStandard extends si_Service_si_ServiceStandard_Base, si_Service_si_ServiceStandard_Relationships {
}
interface si_Service_si_ServiceStandard_Relationships {
}
interface si_Service_si_ServiceStandard_Result extends si_Service_si_ServiceStandard_Base, si_Service_si_ServiceStandard_Relationships {
}
interface si_Service_si_ServiceStandard_FormattedResult {
}
interface si_Service_si_ServiceStandard_Select {
}
interface si_Service_si_ServiceStandard_Expand {
}
interface si_Service_si_ServiceStandard_Filter {
}
interface si_Service_si_ServiceStandard_Create extends si_Service_si_ServiceStandard {
}
interface si_Service_si_ServiceStandard_Update extends si_Service_si_ServiceStandard {
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
interface si_ServiceStandardValueType_Base extends WebEntity {
}
interface si_ServiceStandardValueType_Fixed extends WebEntity_Fixed {
  si_servicestandardvaluetypeid: string;
}
interface si_ServiceStandardValueType extends si_ServiceStandardValueType_Base, si_ServiceStandardValueType_Relationships {
}
interface si_ServiceStandardValueType_Relationships {
}
interface si_ServiceStandardValueType_Result extends si_ServiceStandardValueType_Base, si_ServiceStandardValueType_Relationships {
}
interface si_ServiceStandardValueType_FormattedResult {
}
interface si_ServiceStandardValueType_Select {
}
interface si_ServiceStandardValueType_Expand {
}
interface si_ServiceStandardValueType_Filter {
}
interface si_ServiceStandardValueType_Create extends si_ServiceStandardValueType {
}
interface si_ServiceStandardValueType_Update extends si_ServiceStandardValueType {
}
