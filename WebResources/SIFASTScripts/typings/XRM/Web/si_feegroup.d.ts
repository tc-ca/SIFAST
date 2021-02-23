interface si_FeeGroup_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  si_feegroupenm?: string | null;
  si_feegroupfnm?: string | null;
  si_feegroupid?: string | null;
  si_name?: string | null;
  statecode?: si_feegroup_statecode | null;
  statuscode?: si_feegroup_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface si_FeeGroup_Relationships {
  si_Fee_FeeGroup_si_FeeGroup?: si_Fee_Result[] | null;
}
interface si_FeeGroup extends si_FeeGroup_Base, si_FeeGroup_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  si_Program_bind$si_programs?: string | null;
}
interface si_FeeGroup_Create extends si_FeeGroup {
}
interface si_FeeGroup_Update extends si_FeeGroup {
}
interface si_FeeGroup_Select {
  createdby_guid: WebAttribute<si_FeeGroup_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<si_FeeGroup_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<si_FeeGroup_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<si_FeeGroup_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<si_FeeGroup_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<si_FeeGroup_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<si_FeeGroup_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<si_FeeGroup_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<si_FeeGroup_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<si_FeeGroup_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<si_FeeGroup_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<si_FeeGroup_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  si_feegroupenm: WebAttribute<si_FeeGroup_Select, { si_feegroupenm: string | null }, {  }>;
  si_feegroupfnm: WebAttribute<si_FeeGroup_Select, { si_feegroupfnm: string | null }, {  }>;
  si_feegroupid: WebAttribute<si_FeeGroup_Select, { si_feegroupid: string | null }, {  }>;
  si_name: WebAttribute<si_FeeGroup_Select, { si_name: string | null }, {  }>;
  si_program_guid: WebAttribute<si_FeeGroup_Select, { si_program_guid: string | null }, { si_program_formatted?: string }>;
  statecode: WebAttribute<si_FeeGroup_Select, { statecode: si_feegroup_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<si_FeeGroup_Select, { statuscode: si_feegroup_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<si_FeeGroup_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<si_FeeGroup_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<si_FeeGroup_Select, { versionnumber: number | null }, {  }>;
}
interface si_FeeGroup_Filter {
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
  si_feegroupenm: string;
  si_feegroupfnm: string;
  si_feegroupid: XQW.Guid;
  si_name: string;
  si_program_guid: XQW.Guid;
  statecode: si_feegroup_statecode;
  statuscode: si_feegroup_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface si_FeeGroup_Expand {
  si_Fee_FeeGroup_si_FeeGroup: WebExpand<si_FeeGroup_Expand, si_Fee_Select, si_Fee_Filter, { si_Fee_FeeGroup_si_FeeGroup: si_Fee_Result[] }>;
}
interface si_FeeGroup_FormattedResult {
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
  si_program_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface si_FeeGroup_Result extends si_FeeGroup_Base, si_FeeGroup_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  si_program_guid: string | null;
}
interface si_FeeGroup_RelatedOne {
}
interface si_FeeGroup_RelatedMany {
  si_Fee_FeeGroup_si_FeeGroup: WebMappingRetrieve<si_Fee_Select,si_Fee_Expand,si_Fee_Filter,si_Fee_Fixed,si_Fee_Result,si_Fee_FormattedResult>;
}
interface WebEntitiesRetrieve {
  si_feegroups: WebMappingRetrieve<si_FeeGroup_Select,si_FeeGroup_Expand,si_FeeGroup_Filter,si_FeeGroup_Fixed,si_FeeGroup_Result,si_FeeGroup_FormattedResult>;
}
interface WebEntitiesRelated {
  si_feegroups: WebMappingRelated<si_FeeGroup_RelatedOne,si_FeeGroup_RelatedMany>;
}
interface WebEntitiesCUDA {
  si_feegroups: WebMappingCUDA<si_FeeGroup_Create,si_FeeGroup_Update,si_FeeGroup_Select>;
}
