interface si_Service_si_ServiceStandard_Base extends WebEntity {
  si_service_si_servicestandardid?: string | null;
  si_serviceid?: string | null;
  si_servicestandardid?: string | null;
  versionnumber?: number | null;
}
interface si_Service_si_ServiceStandard_Relationships {
  si_Service_si_ServiceStandard?: si_Service_Result[] | null;
}
interface si_Service_si_ServiceStandard extends si_Service_si_ServiceStandard_Base, si_Service_si_ServiceStandard_Relationships {
}
interface si_Service_si_ServiceStandard_Create extends si_Service_si_ServiceStandard {
}
interface si_Service_si_ServiceStandard_Update extends si_Service_si_ServiceStandard {
}
interface si_Service_si_ServiceStandard_Select {
  si_service_si_servicestandardid: WebAttribute<si_Service_si_ServiceStandard_Select, { si_service_si_servicestandardid: string | null }, {  }>;
  si_serviceid: WebAttribute<si_Service_si_ServiceStandard_Select, { si_serviceid: string | null }, {  }>;
  si_servicestandardid: WebAttribute<si_Service_si_ServiceStandard_Select, { si_servicestandardid: string | null }, {  }>;
  versionnumber: WebAttribute<si_Service_si_ServiceStandard_Select, { versionnumber: number | null }, {  }>;
}
interface si_Service_si_ServiceStandard_Filter {
  si_service_si_servicestandardid: XQW.Guid;
  si_serviceid: XQW.Guid;
  si_servicestandardid: XQW.Guid;
  versionnumber: number;
}
interface si_Service_si_ServiceStandard_Expand {
  si_Service_si_ServiceStandard: WebExpand<si_Service_si_ServiceStandard_Expand, si_Service_Select, si_Service_Filter, { si_Service_si_ServiceStandard: si_Service_Result[] }>;
}
interface si_Service_si_ServiceStandard_FormattedResult {
}
interface si_Service_si_ServiceStandard_Result extends si_Service_si_ServiceStandard_Base, si_Service_si_ServiceStandard_Relationships {
  "@odata.etag": string;
}
interface si_Service_si_ServiceStandard_RelatedOne {
}
interface si_Service_si_ServiceStandard_RelatedMany {
  si_Service_si_ServiceStandard: WebMappingRetrieve<si_Service_Select,si_Service_Expand,si_Service_Filter,si_Service_Fixed,si_Service_Result,si_Service_FormattedResult>;
}
interface WebEntitiesRetrieve {
  si_service_si_servicestandardset: WebMappingRetrieve<si_Service_si_ServiceStandard_Select,si_Service_si_ServiceStandard_Expand,si_Service_si_ServiceStandard_Filter,si_Service_si_ServiceStandard_Fixed,si_Service_si_ServiceStandard_Result,si_Service_si_ServiceStandard_FormattedResult>;
}
interface WebEntitiesRelated {
  si_service_si_servicestandardset: WebMappingRelated<si_Service_si_ServiceStandard_RelatedOne,si_Service_si_ServiceStandard_RelatedMany>;
}
interface WebEntitiesCUDA {
  si_service_si_servicestandardset: WebMappingCUDA<si_Service_si_ServiceStandard_Create,si_Service_si_ServiceStandard_Update,si_Service_si_ServiceStandard_Select>;
}
