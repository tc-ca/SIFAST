declare namespace Form.si_fee.Main {
  namespace Information {
    namespace Tabs {
      interface tabFeeAmount extends Xrm.SectionCollectionBase {
        get(name: "tab_2_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tabFinancialCodes extends Xrm.SectionCollectionBase {
        get(name: "tab_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "si_defaultallotment"): Xrm.Attribute<any>;
      get(name: "si_defaultexpenseaccount"): Xrm.Attribute<any>;
      get(name: "si_defaultlocation"): Xrm.Attribute<string>;
      get(name: "si_defaultprogram"): Xrm.LookupAttribute<"si_program">;
      get(name: "si_defaultproject"): Xrm.Attribute<string>;
      get(name: "si_defaultresponsibilitycode"): Xrm.Attribute<string>;
      get(name: "si_defaultrevenueaccount"): Xrm.Attribute<string>;
      get(name: "si_displaynameen"): Xrm.Attribute<string>;
      get(name: "si_displaynamefr"): Xrm.Attribute<string>;
      get(name: "si_feecode"): Xrm.Attribute<string>;
      get(name: "si_feegroup"): Xrm.LookupAttribute<"si_feegroup">;
      get(name: "si_feereportinggroup"): Xrm.LookupAttribute<"si_feereportinggroup">;
      get(name: "si_feesettingauthority"): Xrm.LookupAttribute<"si_feesettingauthority">;
      get(name: "si_feetype"): Xrm.OptionSetAttribute<si_feetype>;
      get(name: "si_formula"): Xrm.LookupAttribute<"si_formula">;
      get(name: "si_hourratetype"): Xrm.LookupAttribute<"si_hourratetype">;
      get(name: "si_lineobject"): Xrm.LookupAttribute<"si_lineobject">;
      get(name: "si_materialityapplication"): Xrm.OptionSetAttribute<si_materialityapplication>;
      get(name: "si_paymenttype"): Xrm.LookupAttribute<"si_paymenttype">;
      get(name: "si_regulationfeenotice"): Xrm.LookupAttribute<"si_regulationfeenotice">;
      get(name: "si_remissiontype"): Xrm.OptionSetAttribute<si_remissiontype>;
      get(name: "si_unitbasis"): Xrm.LookupAttribute<"si_unitbasis">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Subgrid_1"): Xrm.SubGridControl<"si_feeamount">;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "si_defaultallotment"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "si_defaultexpenseaccount"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "si_defaultlocation"): Xrm.StringControl;
      get(name: "si_defaultprogram"): Xrm.LookupControl<"si_program">;
      get(name: "si_defaultproject"): Xrm.StringControl;
      get(name: "si_defaultresponsibilitycode"): Xrm.StringControl;
      get(name: "si_defaultrevenueaccount"): Xrm.StringControl;
      get(name: "si_displaynameen"): Xrm.StringControl;
      get(name: "si_displaynamefr"): Xrm.StringControl;
      get(name: "si_feecode"): Xrm.StringControl;
      get(name: "si_feegroup"): Xrm.LookupControl<"si_feegroup">;
      get(name: "si_feereportinggroup"): Xrm.LookupControl<"si_feereportinggroup">;
      get(name: "si_feesettingauthority"): Xrm.LookupControl<"si_feesettingauthority">;
      get(name: "si_feetype"): Xrm.OptionSetControl<si_feetype>;
      get(name: "si_formula"): Xrm.LookupControl<"si_formula">;
      get(name: "si_hourratetype"): Xrm.LookupControl<"si_hourratetype">;
      get(name: "si_lineobject"): Xrm.LookupControl<"si_lineobject">;
      get(name: "si_materialityapplication"): Xrm.OptionSetControl<si_materialityapplication>;
      get(name: "si_paymenttype"): Xrm.LookupControl<"si_paymenttype">;
      get(name: "si_regulationfeenotice"): Xrm.LookupControl<"si_regulationfeenotice">;
      get(name: "si_remissiontype"): Xrm.OptionSetControl<si_remissiontype>;
      get(name: "si_unitbasis"): Xrm.LookupControl<"si_unitbasis">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tabFeeAmount"): Xrm.PageTab<Tabs.tabFeeAmount>;
      get(name: "tabFinancialCodes"): Xrm.PageTab<Tabs.tabFinancialCodes>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "si_defaultallotment"): Xrm.Attribute<any>;
    getAttribute(attributeName: "si_defaultexpenseaccount"): Xrm.Attribute<any>;
    getAttribute(attributeName: "si_defaultlocation"): Xrm.Attribute<string>;
    getAttribute(attributeName: "si_defaultprogram"): Xrm.LookupAttribute<"si_program">;
    getAttribute(attributeName: "si_defaultproject"): Xrm.Attribute<string>;
    getAttribute(attributeName: "si_defaultresponsibilitycode"): Xrm.Attribute<string>;
    getAttribute(attributeName: "si_defaultrevenueaccount"): Xrm.Attribute<string>;
    getAttribute(attributeName: "si_displaynameen"): Xrm.Attribute<string>;
    getAttribute(attributeName: "si_displaynamefr"): Xrm.Attribute<string>;
    getAttribute(attributeName: "si_feecode"): Xrm.Attribute<string>;
    getAttribute(attributeName: "si_feegroup"): Xrm.LookupAttribute<"si_feegroup">;
    getAttribute(attributeName: "si_feereportinggroup"): Xrm.LookupAttribute<"si_feereportinggroup">;
    getAttribute(attributeName: "si_feesettingauthority"): Xrm.LookupAttribute<"si_feesettingauthority">;
    getAttribute(attributeName: "si_feetype"): Xrm.OptionSetAttribute<si_feetype>;
    getAttribute(attributeName: "si_formula"): Xrm.LookupAttribute<"si_formula">;
    getAttribute(attributeName: "si_hourratetype"): Xrm.LookupAttribute<"si_hourratetype">;
    getAttribute(attributeName: "si_lineobject"): Xrm.LookupAttribute<"si_lineobject">;
    getAttribute(attributeName: "si_materialityapplication"): Xrm.OptionSetAttribute<si_materialityapplication>;
    getAttribute(attributeName: "si_paymenttype"): Xrm.LookupAttribute<"si_paymenttype">;
    getAttribute(attributeName: "si_regulationfeenotice"): Xrm.LookupAttribute<"si_regulationfeenotice">;
    getAttribute(attributeName: "si_remissiontype"): Xrm.OptionSetAttribute<si_remissiontype>;
    getAttribute(attributeName: "si_unitbasis"): Xrm.LookupAttribute<"si_unitbasis">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "Subgrid_1"): Xrm.SubGridControl<"si_feeamount">;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "si_defaultallotment"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "si_defaultexpenseaccount"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "si_defaultlocation"): Xrm.StringControl;
    getControl(controlName: "si_defaultprogram"): Xrm.LookupControl<"si_program">;
    getControl(controlName: "si_defaultproject"): Xrm.StringControl;
    getControl(controlName: "si_defaultresponsibilitycode"): Xrm.StringControl;
    getControl(controlName: "si_defaultrevenueaccount"): Xrm.StringControl;
    getControl(controlName: "si_displaynameen"): Xrm.StringControl;
    getControl(controlName: "si_displaynamefr"): Xrm.StringControl;
    getControl(controlName: "si_feecode"): Xrm.StringControl;
    getControl(controlName: "si_feegroup"): Xrm.LookupControl<"si_feegroup">;
    getControl(controlName: "si_feereportinggroup"): Xrm.LookupControl<"si_feereportinggroup">;
    getControl(controlName: "si_feesettingauthority"): Xrm.LookupControl<"si_feesettingauthority">;
    getControl(controlName: "si_feetype"): Xrm.OptionSetControl<si_feetype>;
    getControl(controlName: "si_formula"): Xrm.LookupControl<"si_formula">;
    getControl(controlName: "si_hourratetype"): Xrm.LookupControl<"si_hourratetype">;
    getControl(controlName: "si_lineobject"): Xrm.LookupControl<"si_lineobject">;
    getControl(controlName: "si_materialityapplication"): Xrm.OptionSetControl<si_materialityapplication>;
    getControl(controlName: "si_paymenttype"): Xrm.LookupControl<"si_paymenttype">;
    getControl(controlName: "si_regulationfeenotice"): Xrm.LookupControl<"si_regulationfeenotice">;
    getControl(controlName: "si_remissiontype"): Xrm.OptionSetControl<si_remissiontype>;
    getControl(controlName: "si_unitbasis"): Xrm.LookupControl<"si_unitbasis">;
    getControl(controlName: string): undefined;
  }
}
