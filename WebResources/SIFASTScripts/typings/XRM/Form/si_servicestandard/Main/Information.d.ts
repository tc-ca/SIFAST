declare namespace Form.si_servicestandard.Main {
  namespace Information {
    namespace Tabs {
      interface tabServices extends Xrm.SectionCollectionBase {
        get(name: "GeneralSection"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "si_channel"): Xrm.LookupAttribute<"si_servicestandardchannel">;
      get(name: "si_nameen"): Xrm.Attribute<string>;
      get(name: "si_namefr"): Xrm.Attribute<string>;
      get(name: "si_template"): Xrm.LookupAttribute<"si_servicestandardtemplate">;
      get(name: "si_type"): Xrm.LookupAttribute<"si_servicestandardtype">;
      get(name: "si_value"): Xrm.NumberAttribute;
      get(name: "si_valuetype"): Xrm.LookupAttribute<"si_servicestandardvaluetype">;
      get(name: "si_window"): Xrm.LookupAttribute<"si_servicestandardwindow">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_si_template"): Xrm.LookupControl<"si_servicestandardtemplate">;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "si_channel"): Xrm.LookupControl<"si_servicestandardchannel">;
      get(name: "si_nameen"): Xrm.StringControl;
      get(name: "si_namefr"): Xrm.StringControl;
      get(name: "si_template"): Xrm.LookupControl<"si_servicestandardtemplate">;
      get(name: "si_template1"): Xrm.LookupControl<"si_servicestandardtemplate">;
      get(name: "si_type"): Xrm.LookupControl<"si_servicestandardtype">;
      get(name: "si_value"): Xrm.NumberControl;
      get(name: "si_valuetype"): Xrm.LookupControl<"si_servicestandardvaluetype">;
      get(name: "si_window"): Xrm.LookupControl<"si_servicestandardwindow">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tabServices"): Xrm.PageTab<Tabs.tabServices>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "si_channel"): Xrm.LookupAttribute<"si_servicestandardchannel">;
    getAttribute(attributeName: "si_nameen"): Xrm.Attribute<string>;
    getAttribute(attributeName: "si_namefr"): Xrm.Attribute<string>;
    getAttribute(attributeName: "si_template"): Xrm.LookupAttribute<"si_servicestandardtemplate">;
    getAttribute(attributeName: "si_type"): Xrm.LookupAttribute<"si_servicestandardtype">;
    getAttribute(attributeName: "si_value"): Xrm.NumberAttribute;
    getAttribute(attributeName: "si_valuetype"): Xrm.LookupAttribute<"si_servicestandardvaluetype">;
    getAttribute(attributeName: "si_window"): Xrm.LookupAttribute<"si_servicestandardwindow">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "header_si_template"): Xrm.LookupControl<"si_servicestandardtemplate">;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "si_channel"): Xrm.LookupControl<"si_servicestandardchannel">;
    getControl(controlName: "si_nameen"): Xrm.StringControl;
    getControl(controlName: "si_namefr"): Xrm.StringControl;
    getControl(controlName: "si_template"): Xrm.LookupControl<"si_servicestandardtemplate">;
    getControl(controlName: "si_template1"): Xrm.LookupControl<"si_servicestandardtemplate">;
    getControl(controlName: "si_type"): Xrm.LookupControl<"si_servicestandardtype">;
    getControl(controlName: "si_value"): Xrm.NumberControl;
    getControl(controlName: "si_valuetype"): Xrm.LookupControl<"si_servicestandardvaluetype">;
    getControl(controlName: "si_window"): Xrm.LookupControl<"si_servicestandardwindow">;
    getControl(controlName: string): undefined;
  }
}
