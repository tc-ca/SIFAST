interface si_Fee_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  si_defaultallotment?: string | null;
  si_defaultexpenseaccount?: string | null;
  si_defaultlocation?: string | null;
  si_defaultproject?: string | null;
  si_defaultresponsibilitycode?: string | null;
  si_defaultrevenueaccount?: string | null;
  si_displaynameen?: string | null;
  si_displaynamefr?: string | null;
  si_feecode?: string | null;
  si_feeid?: string | null;
  si_feetype?: si_feetype | null;
  si_isonlineservice?: boolean | null;
  si_materialityapplication?: si_materialityapplication | null;
  si_name?: string | null;
  si_remissiontype?: si_remissiontype | null;
  statecode?: si_fee_statecode | null;
  statuscode?: si_fee_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface si_Fee_Relationships {
  si_FeeAmount_Fee_si_Fee?: si_FeeAmount_Result[] | null;
}
interface si_Fee extends si_Fee_Base, si_Fee_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  si_DefaultProgram_bind$si_programs?: string | null;
  si_FeeGroup_bind$si_feegroups?: string | null;
  si_FeeReportingGroup_bind$si_feereportinggroups?: string | null;
  si_FeeSettingAuthority_bind$si_feesettingauthorities?: string | null;
  si_Formula_bind$si_formulas?: string | null;
  si_HourRateType_bind$si_hourratetypes?: string | null;
  si_LineObject_bind$si_lineobjects?: string | null;
  si_PaymentType_bind$si_paymenttypes?: string | null;
  si_RegulationFeeNotice_bind$si_regulationfeenotices?: string | null;
  si_UnitBasis_bind$si_unitbasises?: string | null;
  si_UnitType_bind$si_unittypes?: string | null;
}
interface si_Fee_Create extends si_Fee {
}
interface si_Fee_Update extends si_Fee {
}
interface si_Fee_Select {
  createdby_guid: WebAttribute<si_Fee_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<si_Fee_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<si_Fee_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<si_Fee_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<si_Fee_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<si_Fee_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<si_Fee_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<si_Fee_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<si_Fee_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<si_Fee_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<si_Fee_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<si_Fee_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  si_defaultallotment: WebAttribute<si_Fee_Select, { si_defaultallotment: string | null }, {  }>;
  si_defaultexpenseaccount: WebAttribute<si_Fee_Select, { si_defaultexpenseaccount: string | null }, {  }>;
  si_defaultlocation: WebAttribute<si_Fee_Select, { si_defaultlocation: string | null }, {  }>;
  si_defaultprogram_guid: WebAttribute<si_Fee_Select, { si_defaultprogram_guid: string | null }, { si_defaultprogram_formatted?: string }>;
  si_defaultproject: WebAttribute<si_Fee_Select, { si_defaultproject: string | null }, {  }>;
  si_defaultresponsibilitycode: WebAttribute<si_Fee_Select, { si_defaultresponsibilitycode: string | null }, {  }>;
  si_defaultrevenueaccount: WebAttribute<si_Fee_Select, { si_defaultrevenueaccount: string | null }, {  }>;
  si_displaynameen: WebAttribute<si_Fee_Select, { si_displaynameen: string | null }, {  }>;
  si_displaynamefr: WebAttribute<si_Fee_Select, { si_displaynamefr: string | null }, {  }>;
  si_feecode: WebAttribute<si_Fee_Select, { si_feecode: string | null }, {  }>;
  si_feegroup_guid: WebAttribute<si_Fee_Select, { si_feegroup_guid: string | null }, { si_feegroup_formatted?: string }>;
  si_feeid: WebAttribute<si_Fee_Select, { si_feeid: string | null }, {  }>;
  si_feereportinggroup_guid: WebAttribute<si_Fee_Select, { si_feereportinggroup_guid: string | null }, { si_feereportinggroup_formatted?: string }>;
  si_feesettingauthority_guid: WebAttribute<si_Fee_Select, { si_feesettingauthority_guid: string | null }, { si_feesettingauthority_formatted?: string }>;
  si_feetype: WebAttribute<si_Fee_Select, { si_feetype: si_feetype | null }, { si_feetype_formatted?: string }>;
  si_formula_guid: WebAttribute<si_Fee_Select, { si_formula_guid: string | null }, { si_formula_formatted?: string }>;
  si_hourratetype_guid: WebAttribute<si_Fee_Select, { si_hourratetype_guid: string | null }, { si_hourratetype_formatted?: string }>;
  si_isonlineservice: WebAttribute<si_Fee_Select, { si_isonlineservice: boolean | null }, {  }>;
  si_lineobject_guid: WebAttribute<si_Fee_Select, { si_lineobject_guid: string | null }, { si_lineobject_formatted?: string }>;
  si_materialityapplication: WebAttribute<si_Fee_Select, { si_materialityapplication: si_materialityapplication | null }, { si_materialityapplication_formatted?: string }>;
  si_name: WebAttribute<si_Fee_Select, { si_name: string | null }, {  }>;
  si_paymenttype_guid: WebAttribute<si_Fee_Select, { si_paymenttype_guid: string | null }, { si_paymenttype_formatted?: string }>;
  si_regulationfeenotice_guid: WebAttribute<si_Fee_Select, { si_regulationfeenotice_guid: string | null }, { si_regulationfeenotice_formatted?: string }>;
  si_remissiontype: WebAttribute<si_Fee_Select, { si_remissiontype: si_remissiontype | null }, { si_remissiontype_formatted?: string }>;
  si_unitbasis_guid: WebAttribute<si_Fee_Select, { si_unitbasis_guid: string | null }, { si_unitbasis_formatted?: string }>;
  si_unittype_guid: WebAttribute<si_Fee_Select, { si_unittype_guid: string | null }, { si_unittype_formatted?: string }>;
  statecode: WebAttribute<si_Fee_Select, { statecode: si_fee_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<si_Fee_Select, { statuscode: si_fee_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<si_Fee_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<si_Fee_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<si_Fee_Select, { versionnumber: number | null }, {  }>;
}
interface si_Fee_Filter {
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
  si_defaultallotment: string;
  si_defaultexpenseaccount: string;
  si_defaultlocation: string;
  si_defaultprogram_guid: XQW.Guid;
  si_defaultproject: string;
  si_defaultresponsibilitycode: string;
  si_defaultrevenueaccount: string;
  si_displaynameen: string;
  si_displaynamefr: string;
  si_feecode: string;
  si_feegroup_guid: XQW.Guid;
  si_feeid: XQW.Guid;
  si_feereportinggroup_guid: XQW.Guid;
  si_feesettingauthority_guid: XQW.Guid;
  si_feetype: si_feetype;
  si_formula_guid: XQW.Guid;
  si_hourratetype_guid: XQW.Guid;
  si_isonlineservice: boolean;
  si_lineobject_guid: XQW.Guid;
  si_materialityapplication: si_materialityapplication;
  si_name: string;
  si_paymenttype_guid: XQW.Guid;
  si_regulationfeenotice_guid: XQW.Guid;
  si_remissiontype: si_remissiontype;
  si_unitbasis_guid: XQW.Guid;
  si_unittype_guid: XQW.Guid;
  statecode: si_fee_statecode;
  statuscode: si_fee_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface si_Fee_Expand {
  si_FeeAmount_Fee_si_Fee: WebExpand<si_Fee_Expand, si_FeeAmount_Select, si_FeeAmount_Filter, { si_FeeAmount_Fee_si_Fee: si_FeeAmount_Result[] }>;
}
interface si_Fee_FormattedResult {
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
  si_defaultprogram_formatted?: string;
  si_feegroup_formatted?: string;
  si_feereportinggroup_formatted?: string;
  si_feesettingauthority_formatted?: string;
  si_feetype_formatted?: string;
  si_formula_formatted?: string;
  si_hourratetype_formatted?: string;
  si_lineobject_formatted?: string;
  si_materialityapplication_formatted?: string;
  si_paymenttype_formatted?: string;
  si_regulationfeenotice_formatted?: string;
  si_remissiontype_formatted?: string;
  si_unitbasis_formatted?: string;
  si_unittype_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface si_Fee_Result extends si_Fee_Base, si_Fee_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  si_defaultprogram_guid: string | null;
  si_feegroup_guid: string | null;
  si_feereportinggroup_guid: string | null;
  si_feesettingauthority_guid: string | null;
  si_formula_guid: string | null;
  si_hourratetype_guid: string | null;
  si_lineobject_guid: string | null;
  si_paymenttype_guid: string | null;
  si_regulationfeenotice_guid: string | null;
  si_unitbasis_guid: string | null;
  si_unittype_guid: string | null;
}
interface si_Fee_RelatedOne {
}
interface si_Fee_RelatedMany {
  si_FeeAmount_Fee_si_Fee: WebMappingRetrieve<si_FeeAmount_Select,si_FeeAmount_Expand,si_FeeAmount_Filter,si_FeeAmount_Fixed,si_FeeAmount_Result,si_FeeAmount_FormattedResult>;
}
interface WebEntitiesRetrieve {
  si_fees: WebMappingRetrieve<si_Fee_Select,si_Fee_Expand,si_Fee_Filter,si_Fee_Fixed,si_Fee_Result,si_Fee_FormattedResult>;
}
interface WebEntitiesRelated {
  si_fees: WebMappingRelated<si_Fee_RelatedOne,si_Fee_RelatedMany>;
}
interface WebEntitiesCUDA {
  si_fees: WebMappingCUDA<si_Fee_Create,si_Fee_Update,si_Fee_Select>;
}
