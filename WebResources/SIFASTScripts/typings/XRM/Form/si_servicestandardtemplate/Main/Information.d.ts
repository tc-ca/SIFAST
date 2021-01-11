declare namespace Form.si_servicestandardtemplate.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "si_englishname"): Xrm.Attribute<string>;
      get(name: "si_frenchname"): Xrm.Attribute<string>;
      get(name: "si_name"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "si_englishname"): Xrm.StringControl;
      get(name: "si_frenchname"): Xrm.StringControl;
      get(name: "si_name"): Xrm.StringControl;
      get(name: "si_name1"): Xrm.StringControl;
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
    getAttribute(attributeName: "si_englishname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "si_frenchname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "si_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "si_englishname"): Xrm.StringControl;
    getControl(controlName: "si_frenchname"): Xrm.StringControl;
    getControl(controlName: "si_name"): Xrm.StringControl;
    getControl(controlName: "si_name1"): Xrm.StringControl;
    getControl(controlName: string): undefined;
  }
}
