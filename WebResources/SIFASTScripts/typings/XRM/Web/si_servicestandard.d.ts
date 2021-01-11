interface si_ServiceStandard_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  si_nameen?: string | null;
  si_namefr?: string | null;
  si_servicestandardid?: string | null;
  si_value?: number | null;
  statecode?: si_servicestandard_statecode | null;
  statuscode?: si_servicestandard_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface si_ServiceStandard_Relationships {
  si_Template?: si_ServiceStandardTemplate_Result | null;
}
interface si_ServiceStandard extends si_ServiceStandard_Base, si_ServiceStandard_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  si_Channel_bind$si_servicestandardchannels?: string | null;
  si_Template_bind$si_servicestandardtemplates?: string | null;
  si_Type_bind$si_servicestandardtypes?: string | null;
  si_ValueType_bind$si_servicestandardvaluetypes?: string | null;
  si_Window_bind$si_servicestandardwindows?: string | null;
}
interface si_ServiceStandard_Create extends si_ServiceStandard {
}
interface si_ServiceStandard_Update extends si_ServiceStandard {
}
interface si_ServiceStandard_Select {
  createdby_guid: WebAttribute<si_ServiceStandard_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<si_ServiceStandard_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<si_ServiceStandard_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<si_ServiceStandard_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<si_ServiceStandard_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<si_ServiceStandard_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<si_ServiceStandard_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<si_ServiceStandard_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<si_ServiceStandard_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<si_ServiceStandard_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<si_ServiceStandard_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<si_ServiceStandard_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  si_channel_guid: WebAttribute<si_ServiceStandard_Select, { si_channel_guid: string | null }, { si_channel_formatted?: string }>;
  si_nameen: WebAttribute<si_ServiceStandard_Select, { si_nameen: string | null }, {  }>;
  si_namefr: WebAttribute<si_ServiceStandard_Select, { si_namefr: string | null }, {  }>;
  si_servicestandardid: WebAttribute<si_ServiceStandard_Select, { si_servicestandardid: string | null }, {  }>;
  si_template_guid: WebAttribute<si_ServiceStandard_Select, { si_template_guid: string | null }, { si_template_formatted?: string }>;
  si_type_guid: WebAttribute<si_ServiceStandard_Select, { si_type_guid: string | null }, { si_type_formatted?: string }>;
  si_value: WebAttribute<si_ServiceStandard_Select, { si_value: number | null }, {  }>;
  si_valuetype_guid: WebAttribute<si_ServiceStandard_Select, { si_valuetype_guid: string | null }, { si_valuetype_formatted?: string }>;
  si_window_guid: WebAttribute<si_ServiceStandard_Select, { si_window_guid: string | null }, { si_window_formatted?: string }>;
  statecode: WebAttribute<si_ServiceStandard_Select, { statecode: si_servicestandard_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<si_ServiceStandard_Select, { statuscode: si_servicestandard_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<si_ServiceStandard_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<si_ServiceStandard_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<si_ServiceStandard_Select, { versionnumber: number | null }, {  }>;
}
interface si_ServiceStandard_Filter {
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
  si_channel_guid: XQW.Guid;
  si_nameen: string;
  si_namefr: string;
  si_servicestandardid: XQW.Guid;
  si_template_guid: XQW.Guid;
  si_type_guid: XQW.Guid;
  si_value: number;
  si_valuetype_guid: XQW.Guid;
  si_window_guid: XQW.Guid;
  statecode: si_servicestandard_statecode;
  statuscode: si_servicestandard_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface si_ServiceStandard_Expand {
  si_Template: WebExpand<si_ServiceStandard_Expand, si_ServiceStandardTemplate_Select, si_ServiceStandardTemplate_Filter, { si_Template: si_ServiceStandardTemplate_Result }>;
}
interface si_ServiceStandard_FormattedResult {
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
  si_channel_formatted?: string;
  si_template_formatted?: string;
  si_type_formatted?: string;
  si_valuetype_formatted?: string;
  si_window_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface si_ServiceStandard_Result extends si_ServiceStandard_Base, si_ServiceStandard_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  si_channel_guid: string | null;
  si_template_guid: string | null;
  si_type_guid: string | null;
  si_valuetype_guid: string | null;
  si_window_guid: string | null;
}
interface si_ServiceStandard_RelatedOne {
  si_Template: WebMappingRetrieve<si_ServiceStandardTemplate_Select,si_ServiceStandardTemplate_Expand,si_ServiceStandardTemplate_Filter,si_ServiceStandardTemplate_Fixed,si_ServiceStandardTemplate_Result,si_ServiceStandardTemplate_FormattedResult>;
}
interface si_ServiceStandard_RelatedMany {
}
interface WebEntitiesRetrieve {
  si_servicestandards: WebMappingRetrieve<si_ServiceStandard_Select,si_ServiceStandard_Expand,si_ServiceStandard_Filter,si_ServiceStandard_Fixed,si_ServiceStandard_Result,si_ServiceStandard_FormattedResult>;
}
interface WebEntitiesRelated {
  si_servicestandards: WebMappingRelated<si_ServiceStandard_RelatedOne,si_ServiceStandard_RelatedMany>;
}
interface WebEntitiesCUDA {
  si_servicestandards: WebMappingCUDA<si_ServiceStandard_Create,si_ServiceStandard_Update,si_ServiceStandard_Select>;
}
