declare namespace Form.si_fee.Quick {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "si_displaynameen"): Xrm.Attribute<string>;
      get(name: "si_displaynamefr"): Xrm.Attribute<string>;
      get(name: "si_feecode"): Xrm.Attribute<string>;
      get(name: "si_feegroup"): Xrm.LookupAttribute<"si_feegroup">;
      get(name: "si_unitbasis"): Xrm.LookupAttribute<"si_unitbasis">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "si_displaynameen"): Xrm.StringControl;
      get(name: "si_displaynamefr"): Xrm.StringControl;
      get(name: "si_feecode"): Xrm.StringControl;
      get(name: "si_feegroup"): Xrm.LookupControl<"si_feegroup">;
      get(name: "si_unitbasis"): Xrm.LookupControl<"si_unitbasis">;
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
    getAttribute(attributeName: "si_displaynameen"): Xrm.Attribute<string>;
    getAttribute(attributeName: "si_displaynamefr"): Xrm.Attribute<string>;
    getAttribute(attributeName: "si_feecode"): Xrm.Attribute<string>;
    getAttribute(attributeName: "si_feegroup"): Xrm.LookupAttribute<"si_feegroup">;
    getAttribute(attributeName: "si_unitbasis"): Xrm.LookupAttribute<"si_unitbasis">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "si_displaynameen"): Xrm.StringControl;
    getControl(controlName: "si_displaynamefr"): Xrm.StringControl;
    getControl(controlName: "si_feecode"): Xrm.StringControl;
    getControl(controlName: "si_feegroup"): Xrm.LookupControl<"si_feegroup">;
    getControl(controlName: "si_unitbasis"): Xrm.LookupControl<"si_unitbasis">;
    getControl(controlName: string): undefined;
  }
}
