declare namespace Form.si_feegroup.QuickCreate {
  namespace quickcreateform {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_2_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "si_feegroupenm"): Xrm.Attribute<string>;
      get(name: "si_feegroupfnm"): Xrm.Attribute<string>;
      get(name: "si_name"): Xrm.Attribute<string>;
      get(name: "si_program"): Xrm.LookupAttribute<"si_program">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "si_feegroupenm"): Xrm.StringControl;
      get(name: "si_feegroupfnm"): Xrm.StringControl;
      get(name: "si_name"): Xrm.StringControl;
      get(name: "si_program"): Xrm.LookupControl<"si_program">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_1"): Xrm.PageTab<Tabs.tab_1>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface quickcreateform extends Xrm.PageBase<quickcreateform.Attributes,quickcreateform.Tabs,quickcreateform.Controls> {
    getAttribute(attributeName: "si_feegroupenm"): Xrm.Attribute<string>;
    getAttribute(attributeName: "si_feegroupfnm"): Xrm.Attribute<string>;
    getAttribute(attributeName: "si_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "si_program"): Xrm.LookupAttribute<"si_program">;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "si_feegroupenm"): Xrm.StringControl;
    getControl(controlName: "si_feegroupfnm"): Xrm.StringControl;
    getControl(controlName: "si_name"): Xrm.StringControl;
    getControl(controlName: "si_program"): Xrm.LookupControl<"si_program">;
    getControl(controlName: string): undefined;
  }
}
