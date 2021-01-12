declare namespace Form.si_feeamount.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "si_enddate"): Xrm.DateAttribute;
      get(name: "si_fee"): Xrm.LookupAttribute<"si_fee">;
      get(name: "si_feeadjustmentauthority"): Xrm.OptionSetAttribute<si_feeadjustmentauthority>;
      get(name: "si_feeadjustmenttype"): Xrm.OptionSetAttribute<si_feeadjustmenttype>;
      get(name: "si_feeamount"): Xrm.NumberAttribute;
      get(name: "si_feeamountrule"): Xrm.Attribute<string>;
      get(name: "si_feeamountwithprecision"): Xrm.Attribute<string>;
      get(name: "si_feeprecision"): Xrm.NumberAttribute;
      get(name: "si_name"): Xrm.Attribute<string>;
      get(name: "si_startdate"): Xrm.DateAttribute;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "si_enddate"): Xrm.DateControl;
      get(name: "si_fee"): Xrm.LookupControl<"si_fee">;
      get(name: "si_feeadjustmentauthority"): Xrm.OptionSetControl<si_feeadjustmentauthority>;
      get(name: "si_feeadjustmenttype"): Xrm.OptionSetControl<si_feeadjustmenttype>;
      get(name: "si_feeamount"): Xrm.NumberControl;
      get(name: "si_feeamountrule"): Xrm.StringControl;
      get(name: "si_feeamountwithprecision"): Xrm.StringControl;
      get(name: "si_feeprecision"): Xrm.NumberControl;
      get(name: "si_name"): Xrm.StringControl;
      get(name: "si_startdate"): Xrm.DateControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "si_enddate"): Xrm.DateAttribute;
    getAttribute(attributeName: "si_fee"): Xrm.LookupAttribute<"si_fee">;
    getAttribute(attributeName: "si_feeadjustmentauthority"): Xrm.OptionSetAttribute<si_feeadjustmentauthority>;
    getAttribute(attributeName: "si_feeadjustmenttype"): Xrm.OptionSetAttribute<si_feeadjustmenttype>;
    getAttribute(attributeName: "si_feeamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "si_feeamountrule"): Xrm.Attribute<string>;
    getAttribute(attributeName: "si_feeamountwithprecision"): Xrm.Attribute<string>;
    getAttribute(attributeName: "si_feeprecision"): Xrm.NumberAttribute;
    getAttribute(attributeName: "si_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "si_startdate"): Xrm.DateAttribute;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "si_enddate"): Xrm.DateControl;
    getControl(controlName: "si_fee"): Xrm.LookupControl<"si_fee">;
    getControl(controlName: "si_feeadjustmentauthority"): Xrm.OptionSetControl<si_feeadjustmentauthority>;
    getControl(controlName: "si_feeadjustmenttype"): Xrm.OptionSetControl<si_feeadjustmenttype>;
    getControl(controlName: "si_feeamount"): Xrm.NumberControl;
    getControl(controlName: "si_feeamountrule"): Xrm.StringControl;
    getControl(controlName: "si_feeamountwithprecision"): Xrm.StringControl;
    getControl(controlName: "si_feeprecision"): Xrm.NumberControl;
    getControl(controlName: "si_name"): Xrm.StringControl;
    getControl(controlName: "si_startdate"): Xrm.DateControl;
    getControl(controlName: string): undefined;
  }
}
