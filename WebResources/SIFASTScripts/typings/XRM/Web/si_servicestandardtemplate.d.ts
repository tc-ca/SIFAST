interface si_ServiceStandardTemplate_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  si_englishname?: string | null;
  si_frenchname?: string | null;
  si_name?: string | null;
  si_servicestandardtemplateid?: string | null;
  statecode?: si_servicestandardtemplate_statecode | null;
  statuscode?: si_servicestandardtemplate_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface si_ServiceStandardTemplate_Relationships {
  si_ServiceStandard_Template_si_ServiceSta?: si_ServiceStandard_Result[] | null;
}
interface si_ServiceStandardTemplate extends si_ServiceStandardTemplate_Base, si_ServiceStandardTemplate_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface si_ServiceStandardTemplate_Create extends si_ServiceStandardTemplate {
}
interface si_ServiceStandardTemplate_Update extends si_ServiceStandardTemplate {
}
interface si_ServiceStandardTemplate_Select {
  createdby_guid: WebAttribute<si_ServiceStandardTemplate_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<si_ServiceStandardTemplate_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<si_ServiceStandardTemplate_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<si_ServiceStandardTemplate_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<si_ServiceStandardTemplate_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<si_ServiceStandardTemplate_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<si_ServiceStandardTemplate_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<si_ServiceStandardTemplate_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<si_ServiceStandardTemplate_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<si_ServiceStandardTemplate_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<si_ServiceStandardTemplate_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<si_ServiceStandardTemplate_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  si_englishname: WebAttribute<si_ServiceStandardTemplate_Select, { si_englishname: string | null }, {  }>;
  si_frenchname: WebAttribute<si_ServiceStandardTemplate_Select, { si_frenchname: string | null }, {  }>;
  si_name: WebAttribute<si_ServiceStandardTemplate_Select, { si_name: string | null }, {  }>;
  si_servicestandardtemplateid: WebAttribute<si_ServiceStandardTemplate_Select, { si_servicestandardtemplateid: string | null }, {  }>;
  statecode: WebAttribute<si_ServiceStandardTemplate_Select, { statecode: si_servicestandardtemplate_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<si_ServiceStandardTemplate_Select, { statuscode: si_servicestandardtemplate_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<si_ServiceStandardTemplate_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<si_ServiceStandardTemplate_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<si_ServiceStandardTemplate_Select, { versionnumber: number | null }, {  }>;
}
interface si_ServiceStandardTemplate_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  si_englishname: string;
  si_frenchname: string;
  si_name: string;
  si_servicestandardtemplateid: XQW.Guid;
  statecode: si_servicestandardtemplate_statecode;
  statuscode: si_servicestandardtemplate_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface si_ServiceStandardTemplate_Expand {
  si_ServiceStandard_Template_si_ServiceSta: WebExpand<si_ServiceStandardTemplate_Expand, si_ServiceStandard_Select, si_ServiceStandard_Filter, { si_ServiceStandard_Template_si_ServiceSta: si_ServiceStandard_Result[] }>;
}
interface si_ServiceStandardTemplate_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface si_ServiceStandardTemplate_Result extends si_ServiceStandardTemplate_Base, si_ServiceStandardTemplate_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface si_ServiceStandardTemplate_RelatedOne {
}
interface si_ServiceStandardTemplate_RelatedMany {
  si_ServiceStandard_Template_si_ServiceSta: WebMappingRetrieve<si_ServiceStandard_Select,si_ServiceStandard_Expand,si_ServiceStandard_Filter,si_ServiceStandard_Fixed,si_ServiceStandard_Result,si_ServiceStandard_FormattedResult>;
}
interface WebEntitiesRetrieve {
  si_servicestandardtemplates: WebMappingRetrieve<si_ServiceStandardTemplate_Select,si_ServiceStandardTemplate_Expand,si_ServiceStandardTemplate_Filter,si_ServiceStandardTemplate_Fixed,si_ServiceStandardTemplate_Result,si_ServiceStandardTemplate_FormattedResult>;
}
interface WebEntitiesRelated {
  si_servicestandardtemplates: WebMappingRelated<si_ServiceStandardTemplate_RelatedOne,si_ServiceStandardTemplate_RelatedMany>;
}
interface WebEntitiesCUDA {
  si_servicestandardtemplates: WebMappingCUDA<si_ServiceStandardTemplate_Create,si_ServiceStandardTemplate_Update,si_ServiceStandardTemplate_Select>;
}
