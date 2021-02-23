interface si_Service_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  si_associatedadm?: si_associatedadm | null;
  si_associatedtoservicestandards?: boolean | null;
  si_channelserviceisoffered?: si_feedbackonlevelofsatisfaction | null;
  si_clientfeedbackbychannel?: si_feedbackonlevelofsatisfaction | null;
  si_commentsdigitalenterpriseidentityplatform?: string | null;
  si_englishcomments?: string | null;
  si_englishcommentsrelatedtoonlineservices?: string | null;
  si_englishdescription?: string | null;
  si_frenchcomments?: string | null;
  si_frenchcommentsrelatedtoonlineservices?: string | null;
  si_frenchdescription?: string | null;
  si_id?: string | null;
  si_lastgbaanalysiscompletedsince20142015?: string | null;
  si_nameen?: string | null;
  si_namefr?: string | null;
  si_numberofapplicationsbymail?: number | null;
  si_numberofapplicationsbytelephone?: number | null;
  si_numberofapplicationsthroughotherchannels?: number | null;
  si_numberofinpersonapplications?: number | null;
  si_numberofonlineapplications?: number | null;
  si_numberoftelephoneinquires?: number | null;
  si_numberofwebsitevisits?: number | null;
  si_piacompleted?: boolean | null;
  si_servicefee?: boolean | null;
  si_serviceid?: string | null;
  si_servicestatus?: si_servicestatus | null;
  si_totalannualvolume?: number | null;
  si_urltoenglishpage?: string | null;
  si_urltofrenchpage?: string | null;
  si_utilizescrabusinessnumber?: si_anayesornooptionset | null;
  si_utilizeseauthentication?: si_anayesornooptionset | null;
  si_utilizesedecision?: si_anayesornooptionset | null;
  si_utilizeseissuance?: si_anayesornooptionset | null;
  si_utilizesentdigitalidentityplatform?: si_anayesornooptionset | null;
  si_utilizeseregistration?: si_anayesornooptionset | null;
  si_utilizeseresolution?: si_anayesornooptionset | null;
  si_utilizessinnumber?: si_anayesornooptionset | null;
  si_utlilizeseapplication?: si_anayesornooptionset | null;
  si_yearoflastpia?: string | null;
  statecode?: si_service_statecode | null;
  statuscode?: si_service_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface si_Service_Relationships {
  si_ParentService?: si_Service_Result | null;
  si_Service_ParentService_si_Service?: si_Service_Result[] | null;
  si_Service_si_ServiceStandard?: si_ServiceStandard_Result[] | null;
}
interface si_Service extends si_Service_Base, si_Service_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  si_AccessType_bind$si_accesstypes?: string | null;
  si_BusinessLine_bind$si_businesslines?: string | null;
  si_ClientTargetGroup_bind$si_clienttargetgroups?: string | null;
  si_Directorate_bind$si_directorates?: string | null;
  si_ParentService_bind$si_services?: string | null;
  si_Program_bind$si_programs?: string | null;
  si_ServiceGroup_bind$si_servicegroups?: string | null;
  si_ServiceType_bind$si_servicetypes?: string | null;
  si_SpecialDesignation_bind$si_specialdesignations?: string | null;
}
interface si_Service_Create extends si_Service {
}
interface si_Service_Update extends si_Service {
}
interface si_Service_Select {
  createdby_guid: WebAttribute<si_Service_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<si_Service_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<si_Service_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<si_Service_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<si_Service_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<si_Service_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<si_Service_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<si_Service_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<si_Service_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<si_Service_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<si_Service_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<si_Service_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  si_accesstype_guid: WebAttribute<si_Service_Select, { si_accesstype_guid: string | null }, { si_accesstype_formatted?: string }>;
  si_associatedadm: WebAttribute<si_Service_Select, { si_associatedadm: si_associatedadm | null }, { si_associatedadm_formatted?: string }>;
  si_associatedtoservicestandards: WebAttribute<si_Service_Select, { si_associatedtoservicestandards: boolean | null }, {  }>;
  si_businessline_guid: WebAttribute<si_Service_Select, { si_businessline_guid: string | null }, { si_businessline_formatted?: string }>;
  si_channelserviceisoffered: WebAttribute<si_Service_Select, { si_channelserviceisoffered: si_feedbackonlevelofsatisfaction | null }, { si_channelserviceisoffered_formatted?: string }>;
  si_clientfeedbackbychannel: WebAttribute<si_Service_Select, { si_clientfeedbackbychannel: si_feedbackonlevelofsatisfaction | null }, { si_clientfeedbackbychannel_formatted?: string }>;
  si_clienttargetgroup_guid: WebAttribute<si_Service_Select, { si_clienttargetgroup_guid: string | null }, { si_clienttargetgroup_formatted?: string }>;
  si_commentsdigitalenterpriseidentityplatform: WebAttribute<si_Service_Select, { si_commentsdigitalenterpriseidentityplatform: string | null }, {  }>;
  si_directorate_guid: WebAttribute<si_Service_Select, { si_directorate_guid: string | null }, { si_directorate_formatted?: string }>;
  si_englishcomments: WebAttribute<si_Service_Select, { si_englishcomments: string | null }, {  }>;
  si_englishcommentsrelatedtoonlineservices: WebAttribute<si_Service_Select, { si_englishcommentsrelatedtoonlineservices: string | null }, {  }>;
  si_englishdescription: WebAttribute<si_Service_Select, { si_englishdescription: string | null }, {  }>;
  si_frenchcomments: WebAttribute<si_Service_Select, { si_frenchcomments: string | null }, {  }>;
  si_frenchcommentsrelatedtoonlineservices: WebAttribute<si_Service_Select, { si_frenchcommentsrelatedtoonlineservices: string | null }, {  }>;
  si_frenchdescription: WebAttribute<si_Service_Select, { si_frenchdescription: string | null }, {  }>;
  si_id: WebAttribute<si_Service_Select, { si_id: string | null }, {  }>;
  si_lastgbaanalysiscompletedsince20142015: WebAttribute<si_Service_Select, { si_lastgbaanalysiscompletedsince20142015: string | null }, {  }>;
  si_nameen: WebAttribute<si_Service_Select, { si_nameen: string | null }, {  }>;
  si_namefr: WebAttribute<si_Service_Select, { si_namefr: string | null }, {  }>;
  si_numberofapplicationsbymail: WebAttribute<si_Service_Select, { si_numberofapplicationsbymail: number | null }, {  }>;
  si_numberofapplicationsbytelephone: WebAttribute<si_Service_Select, { si_numberofapplicationsbytelephone: number | null }, {  }>;
  si_numberofapplicationsthroughotherchannels: WebAttribute<si_Service_Select, { si_numberofapplicationsthroughotherchannels: number | null }, {  }>;
  si_numberofinpersonapplications: WebAttribute<si_Service_Select, { si_numberofinpersonapplications: number | null }, {  }>;
  si_numberofonlineapplications: WebAttribute<si_Service_Select, { si_numberofonlineapplications: number | null }, {  }>;
  si_numberoftelephoneinquires: WebAttribute<si_Service_Select, { si_numberoftelephoneinquires: number | null }, {  }>;
  si_numberofwebsitevisits: WebAttribute<si_Service_Select, { si_numberofwebsitevisits: number | null }, {  }>;
  si_parentservice_guid: WebAttribute<si_Service_Select, { si_parentservice_guid: string | null }, { si_parentservice_formatted?: string }>;
  si_piacompleted: WebAttribute<si_Service_Select, { si_piacompleted: boolean | null }, {  }>;
  si_program_guid: WebAttribute<si_Service_Select, { si_program_guid: string | null }, { si_program_formatted?: string }>;
  si_servicefee: WebAttribute<si_Service_Select, { si_servicefee: boolean | null }, {  }>;
  si_servicegroup_guid: WebAttribute<si_Service_Select, { si_servicegroup_guid: string | null }, { si_servicegroup_formatted?: string }>;
  si_serviceid: WebAttribute<si_Service_Select, { si_serviceid: string | null }, {  }>;
  si_servicestatus: WebAttribute<si_Service_Select, { si_servicestatus: si_servicestatus | null }, { si_servicestatus_formatted?: string }>;
  si_servicetype_guid: WebAttribute<si_Service_Select, { si_servicetype_guid: string | null }, { si_servicetype_formatted?: string }>;
  si_specialdesignation_guid: WebAttribute<si_Service_Select, { si_specialdesignation_guid: string | null }, { si_specialdesignation_formatted?: string }>;
  si_totalannualvolume: WebAttribute<si_Service_Select, { si_totalannualvolume: number | null }, {  }>;
  si_urltoenglishpage: WebAttribute<si_Service_Select, { si_urltoenglishpage: string | null }, {  }>;
  si_urltofrenchpage: WebAttribute<si_Service_Select, { si_urltofrenchpage: string | null }, {  }>;
  si_utilizescrabusinessnumber: WebAttribute<si_Service_Select, { si_utilizescrabusinessnumber: si_anayesornooptionset | null }, { si_utilizescrabusinessnumber_formatted?: string }>;
  si_utilizeseauthentication: WebAttribute<si_Service_Select, { si_utilizeseauthentication: si_anayesornooptionset | null }, { si_utilizeseauthentication_formatted?: string }>;
  si_utilizesedecision: WebAttribute<si_Service_Select, { si_utilizesedecision: si_anayesornooptionset | null }, { si_utilizesedecision_formatted?: string }>;
  si_utilizeseissuance: WebAttribute<si_Service_Select, { si_utilizeseissuance: si_anayesornooptionset | null }, { si_utilizeseissuance_formatted?: string }>;
  si_utilizesentdigitalidentityplatform: WebAttribute<si_Service_Select, { si_utilizesentdigitalidentityplatform: si_anayesornooptionset | null }, { si_utilizesentdigitalidentityplatform_formatted?: string }>;
  si_utilizeseregistration: WebAttribute<si_Service_Select, { si_utilizeseregistration: si_anayesornooptionset | null }, { si_utilizeseregistration_formatted?: string }>;
  si_utilizeseresolution: WebAttribute<si_Service_Select, { si_utilizeseresolution: si_anayesornooptionset | null }, { si_utilizeseresolution_formatted?: string }>;
  si_utilizessinnumber: WebAttribute<si_Service_Select, { si_utilizessinnumber: si_anayesornooptionset | null }, { si_utilizessinnumber_formatted?: string }>;
  si_utlilizeseapplication: WebAttribute<si_Service_Select, { si_utlilizeseapplication: si_anayesornooptionset | null }, { si_utlilizeseapplication_formatted?: string }>;
  si_yearoflastpia: WebAttribute<si_Service_Select, { si_yearoflastpia: string | null }, {  }>;
  statecode: WebAttribute<si_Service_Select, { statecode: si_service_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<si_Service_Select, { statuscode: si_service_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<si_Service_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<si_Service_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<si_Service_Select, { versionnumber: number | null }, {  }>;
}
interface si_Service_Filter {
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
  si_accesstype_guid: XQW.Guid;
  si_associatedadm: si_associatedadm;
  si_associatedtoservicestandards: boolean;
  si_businessline_guid: XQW.Guid;
  si_channelserviceisoffered: si_feedbackonlevelofsatisfaction;
  si_clientfeedbackbychannel: si_feedbackonlevelofsatisfaction;
  si_clienttargetgroup_guid: XQW.Guid;
  si_commentsdigitalenterpriseidentityplatform: string;
  si_directorate_guid: XQW.Guid;
  si_englishcomments: string;
  si_englishcommentsrelatedtoonlineservices: string;
  si_englishdescription: string;
  si_frenchcomments: string;
  si_frenchcommentsrelatedtoonlineservices: string;
  si_frenchdescription: string;
  si_id: string;
  si_lastgbaanalysiscompletedsince20142015: string;
  si_nameen: string;
  si_namefr: string;
  si_numberofapplicationsbymail: number;
  si_numberofapplicationsbytelephone: number;
  si_numberofapplicationsthroughotherchannels: number;
  si_numberofinpersonapplications: number;
  si_numberofonlineapplications: number;
  si_numberoftelephoneinquires: number;
  si_numberofwebsitevisits: number;
  si_parentservice_guid: XQW.Guid;
  si_piacompleted: boolean;
  si_program_guid: XQW.Guid;
  si_servicefee: boolean;
  si_servicegroup_guid: XQW.Guid;
  si_serviceid: XQW.Guid;
  si_servicestatus: si_servicestatus;
  si_servicetype_guid: XQW.Guid;
  si_specialdesignation_guid: XQW.Guid;
  si_totalannualvolume: number;
  si_urltoenglishpage: string;
  si_urltofrenchpage: string;
  si_utilizescrabusinessnumber: si_anayesornooptionset;
  si_utilizeseauthentication: si_anayesornooptionset;
  si_utilizesedecision: si_anayesornooptionset;
  si_utilizeseissuance: si_anayesornooptionset;
  si_utilizesentdigitalidentityplatform: si_anayesornooptionset;
  si_utilizeseregistration: si_anayesornooptionset;
  si_utilizeseresolution: si_anayesornooptionset;
  si_utilizessinnumber: si_anayesornooptionset;
  si_utlilizeseapplication: si_anayesornooptionset;
  si_yearoflastpia: string;
  statecode: si_service_statecode;
  statuscode: si_service_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface si_Service_Expand {
  si_ParentService: WebExpand<si_Service_Expand, si_Service_Select, si_Service_Filter, { si_ParentService: si_Service_Result }>;
  si_Service_ParentService_si_Service: WebExpand<si_Service_Expand, si_Service_Select, si_Service_Filter, { si_Service_ParentService_si_Service: si_Service_Result[] }>;
  si_Service_si_ServiceStandard: WebExpand<si_Service_Expand, si_ServiceStandard_Select, si_ServiceStandard_Filter, { si_Service_si_ServiceStandard: si_ServiceStandard_Result[] }>;
}
interface si_Service_FormattedResult {
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
  si_accesstype_formatted?: string;
  si_associatedadm_formatted?: string;
  si_businessline_formatted?: string;
  si_channelserviceisoffered_formatted?: string;
  si_clientfeedbackbychannel_formatted?: string;
  si_clienttargetgroup_formatted?: string;
  si_directorate_formatted?: string;
  si_parentservice_formatted?: string;
  si_program_formatted?: string;
  si_servicegroup_formatted?: string;
  si_servicestatus_formatted?: string;
  si_servicetype_formatted?: string;
  si_specialdesignation_formatted?: string;
  si_utilizescrabusinessnumber_formatted?: string;
  si_utilizeseauthentication_formatted?: string;
  si_utilizesedecision_formatted?: string;
  si_utilizeseissuance_formatted?: string;
  si_utilizesentdigitalidentityplatform_formatted?: string;
  si_utilizeseregistration_formatted?: string;
  si_utilizeseresolution_formatted?: string;
  si_utilizessinnumber_formatted?: string;
  si_utlilizeseapplication_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface si_Service_Result extends si_Service_Base, si_Service_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  si_accesstype_guid: string | null;
  si_businessline_guid: string | null;
  si_clienttargetgroup_guid: string | null;
  si_directorate_guid: string | null;
  si_parentservice_guid: string | null;
  si_program_guid: string | null;
  si_servicegroup_guid: string | null;
  si_servicetype_guid: string | null;
  si_specialdesignation_guid: string | null;
}
interface si_Service_RelatedOne {
  si_ParentService: WebMappingRetrieve<si_Service_Select,si_Service_Expand,si_Service_Filter,si_Service_Fixed,si_Service_Result,si_Service_FormattedResult>;
}
interface si_Service_RelatedMany {
  si_Service_ParentService_si_Service: WebMappingRetrieve<si_Service_Select,si_Service_Expand,si_Service_Filter,si_Service_Fixed,si_Service_Result,si_Service_FormattedResult>;
  si_Service_si_ServiceStandard: WebMappingRetrieve<si_ServiceStandard_Select,si_ServiceStandard_Expand,si_ServiceStandard_Filter,si_ServiceStandard_Fixed,si_ServiceStandard_Result,si_ServiceStandard_FormattedResult>;
}
interface WebEntitiesRetrieve {
  si_services: WebMappingRetrieve<si_Service_Select,si_Service_Expand,si_Service_Filter,si_Service_Fixed,si_Service_Result,si_Service_FormattedResult>;
}
interface WebEntitiesRelated {
  si_services: WebMappingRelated<si_Service_RelatedOne,si_Service_RelatedMany>;
}
interface WebEntitiesCUDA {
  si_services: WebMappingCUDA<si_Service_Create,si_Service_Update,si_Service_Select>;
}
