interface si_ServiceStandardValueType_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  si_name?: string | null;
  si_servicestandardvaluetypeid?: string | null;
  si_valuetypecode?: string | null;
  si_valuetypeenm?: string | null;
  si_valuetypefnm?: string | null;
  statecode?: si_servicestandardvaluetype_statecode | null;
  statuscode?: si_servicestandardvaluetype_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface si_ServiceStandardValueType_Relationships {
  si_ServiceStandard_ValueType_si_ServiceSt?: si_ServiceStandard_Result[] | null;
}
interface si_ServiceStandardValueType extends si_ServiceStandardValueType_Base, si_ServiceStandardValueType_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface si_ServiceStandardValueType_Create extends si_ServiceStandardValueType {
}
interface si_ServiceStandardValueType_Update extends si_ServiceStandardValueType {
}
interface si_ServiceStandardValueType_Select {
  createdby_guid: WebAttribute<si_ServiceStandardValueType_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<si_ServiceStandardValueType_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<si_ServiceStandardValueType_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<si_ServiceStandardValueType_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<si_ServiceStandardValueType_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<si_ServiceStandardValueType_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<si_ServiceStandardValueType_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<si_ServiceStandardValueType_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<si_ServiceStandardValueType_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<si_ServiceStandardValueType_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<si_ServiceStandardValueType_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<si_ServiceStandardValueType_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  si_name: WebAttribute<si_ServiceStandardValueType_Select, { si_name: string | null }, {  }>;
  si_servicestandardvaluetypeid: WebAttribute<si_ServiceStandardValueType_Select, { si_servicestandardvaluetypeid: string | null }, {  }>;
  si_valuetypecode: WebAttribute<si_ServiceStandardValueType_Select, { si_valuetypecode: string | null }, {  }>;
  si_valuetypeenm: WebAttribute<si_ServiceStandardValueType_Select, { si_valuetypeenm: string | null }, {  }>;
  si_valuetypefnm: WebAttribute<si_ServiceStandardValueType_Select, { si_valuetypefnm: string | null }, {  }>;
  statecode: WebAttribute<si_ServiceStandardValueType_Select, { statecode: si_servicestandardvaluetype_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<si_ServiceStandardValueType_Select, { statuscode: si_servicestandardvaluetype_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<si_ServiceStandardValueType_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<si_ServiceStandardValueType_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<si_ServiceStandardValueType_Select, { versionnumber: number | null }, {  }>;
}
interface si_ServiceStandardValueType_Filter {
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
  si_name: string;
  si_servicestandardvaluetypeid: XQW.Guid;
  si_valuetypecode: string;
  si_valuetypeenm: string;
  si_valuetypefnm: string;
  statecode: si_servicestandardvaluetype_statecode;
  statuscode: si_servicestandardvaluetype_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface si_ServiceStandardValueType_Expand {
  si_ServiceStandard_ValueType_si_ServiceSt: WebExpand<si_ServiceStandardValueType_Expand, si_ServiceStandard_Select, si_ServiceStandard_Filter, { si_ServiceStandard_ValueType_si_ServiceSt: si_ServiceStandard_Result[] }>;
}
interface si_ServiceStandardValueType_FormattedResult {
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
interface si_ServiceStandardValueType_Result extends si_ServiceStandardValueType_Base, si_ServiceStandardValueType_Relationships {
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
interface si_ServiceStandardValueType_RelatedOne {
}
interface si_ServiceStandardValueType_RelatedMany {
  si_ServiceStandard_ValueType_si_ServiceSt: WebMappingRetrieve<si_ServiceStandard_Select,si_ServiceStandard_Expand,si_ServiceStandard_Filter,si_ServiceStandard_Fixed,si_ServiceStandard_Result,si_ServiceStandard_FormattedResult>;
}
interface WebEntitiesRetrieve {
  si_servicestandardvaluetypes: WebMappingRetrieve<si_ServiceStandardValueType_Select,si_ServiceStandardValueType_Expand,si_ServiceStandardValueType_Filter,si_ServiceStandardValueType_Fixed,si_ServiceStandardValueType_Result,si_ServiceStandardValueType_FormattedResult>;
}
interface WebEntitiesRelated {
  si_servicestandardvaluetypes: WebMappingRelated<si_ServiceStandardValueType_RelatedOne,si_ServiceStandardValueType_RelatedMany>;
}
interface WebEntitiesCUDA {
  si_servicestandardvaluetypes: WebMappingCUDA<si_ServiceStandardValueType_Create,si_ServiceStandardValueType_Update,si_ServiceStandardValueType_Select>;
}
