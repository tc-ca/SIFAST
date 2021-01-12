declare namespace Form.si_servicestandardvaluetype.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "si_name"): Xrm.Attribute<string>;
      get(name: "si_valuetypecode"): Xrm.Attribute<string>;
      get(name: "si_valuetypeenm"): Xrm.Attribute<string>;
      get(name: "si_valuetypefnm"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "si_name"): Xrm.StringControl;
      get(name: "si_valuetypecode"): Xrm.StringControl;
      get(name: "si_valuetypeenm"): Xrm.StringControl;
      get(name: "si_valuetypefnm"): Xrm.StringControl;
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
    getAttribute(attributeName: "si_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "si_valuetypecode"): Xrm.Attribute<string>;
    getAttribute(attributeName: "si_valuetypeenm"): Xrm.Attribute<string>;
    getAttribute(attributeName: "si_valuetypefnm"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "si_name"): Xrm.StringControl;
    getControl(controlName: "si_valuetypecode"): Xrm.StringControl;
    getControl(controlName: "si_valuetypeenm"): Xrm.StringControl;
    getControl(controlName: "si_valuetypefnm"): Xrm.StringControl;
    getControl(controlName: string): undefined;
  }
}
