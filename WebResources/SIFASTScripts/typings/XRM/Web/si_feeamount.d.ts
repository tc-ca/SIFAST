interface si_FeeAmount_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  si_enddate?: Date | null;
  si_feeadjustmentauthority?: si_feeadjustmentauthority | null;
  si_feeadjustmenttype?: si_feeadjustmenttype | null;
  si_feeamount?: number | null;
  si_feeamountid?: string | null;
  si_feeamountrule?: string | null;
  si_feeamountwithprecision?: string | null;
  si_feeprecision?: number | null;
  si_name?: string | null;
  si_startdate?: Date | null;
  statecode?: si_feeamount_statecode | null;
  statuscode?: si_feeamount_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface si_FeeAmount_Relationships {
  si_Fee?: si_Fee_Result | null;
}
interface si_FeeAmount extends si_FeeAmount_Base, si_FeeAmount_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  si_Fee_bind$si_fees?: string | null;
}
interface si_FeeAmount_Create extends si_FeeAmount {
}
interface si_FeeAmount_Update extends si_FeeAmount {
}
interface si_FeeAmount_Select {
  createdby_guid: WebAttribute<si_FeeAmount_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<si_FeeAmount_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<si_FeeAmount_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<si_FeeAmount_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<si_FeeAmount_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<si_FeeAmount_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<si_FeeAmount_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<si_FeeAmount_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<si_FeeAmount_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<si_FeeAmount_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<si_FeeAmount_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<si_FeeAmount_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  si_enddate: WebAttribute<si_FeeAmount_Select, { si_enddate: Date | null }, { si_enddate_formatted?: string }>;
  si_fee_guid: WebAttribute<si_FeeAmount_Select, { si_fee_guid: string | null }, { si_fee_formatted?: string }>;
  si_feeadjustmentauthority: WebAttribute<si_FeeAmount_Select, { si_feeadjustmentauthority: si_feeadjustmentauthority | null }, { si_feeadjustmentauthority_formatted?: string }>;
  si_feeadjustmenttype: WebAttribute<si_FeeAmount_Select, { si_feeadjustmenttype: si_feeadjustmenttype | null }, { si_feeadjustmenttype_formatted?: string }>;
  si_feeamount1;
  si_feeamountid: WebAttribute<si_FeeAmount_Select, { si_feeamountid: string | null }, {  }>;
  si_feeamountrule: WebAttribute<si_FeeAmount_Select, { si_feeamountrule: string | null }, {  }>;
  si_feeamountwithprecision: WebAttribute<si_FeeAmount_Select, { si_feeamountwithprecision: string | null }, {  }>;
  si_feeprecision: WebAttribute<si_FeeAmount_Select, { si_feeprecision: number | null }, {  }>;
  si_name: WebAttribute<si_FeeAmount_Select, { si_name: string | null }, {  }>;
  si_startdate: WebAttribute<si_FeeAmount_Select, { si_startdate: Date | null }, { si_startdate_formatted?: string }>;
  statecode: WebAttribute<si_FeeAmount_Select, { statecode: si_feeamount_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<si_FeeAmount_Select, { statuscode: si_feeamount_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<si_FeeAmount_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<si_FeeAmount_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<si_FeeAmount_Select, { versionnumber: number | null }, {  }>;
}
interface si_FeeAmount_Filter {
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
  si_enddate: Date;
  si_fee_guid: XQW.Guid;
  si_feeadjustmentauthority: si_feeadjustmentauthority;
  si_feeadjustmenttype: si_feeadjustmenttype;
  si_feeamount: any;
  si_feeamountid: XQW.Guid;
  si_feeamountrule: string;
  si_feeamountwithprecision: string;
  si_feeprecision: number;
  si_name: string;
  si_startdate: Date;
  statecode: si_feeamount_statecode;
  statuscode: si_feeamount_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface si_FeeAmount_Expand {
  si_Fee: WebExpand<si_FeeAmount_Expand, si_Fee_Select, si_Fee_Filter, { si_Fee: si_Fee_Result }>;
}
interface si_FeeAmount_FormattedResult {
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
  si_enddate_formatted?: string;
  si_fee_formatted?: string;
  si_feeadjustmentauthority_formatted?: string;
  si_feeadjustmenttype_formatted?: string;
  si_startdate_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface si_FeeAmount_Result extends si_FeeAmount_Base, si_FeeAmount_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  si_fee_guid: string | null;
}
interface si_FeeAmount_RelatedOne {
  si_Fee: WebMappingRetrieve<si_Fee_Select,si_Fee_Expand,si_Fee_Filter,si_Fee_Fixed,si_Fee_Result,si_Fee_FormattedResult>;
}
interface si_FeeAmount_RelatedMany {
}
interface WebEntitiesRetrieve {
  si_feeamounts: WebMappingRetrieve<si_FeeAmount_Select,si_FeeAmount_Expand,si_FeeAmount_Filter,si_FeeAmount_Fixed,si_FeeAmount_Result,si_FeeAmount_FormattedResult>;
}
interface WebEntitiesRelated {
  si_feeamounts: WebMappingRelated<si_FeeAmount_RelatedOne,si_FeeAmount_RelatedMany>;
}
interface WebEntitiesCUDA {
  si_feeamounts: WebMappingCUDA<si_FeeAmount_Create,si_FeeAmount_Update,si_FeeAmount_Select>;
}
