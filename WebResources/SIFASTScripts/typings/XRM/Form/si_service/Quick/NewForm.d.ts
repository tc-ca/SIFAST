declare namespace Form.si_service.Quick {
  namespace NewForm {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "si_associatedtoservicestandards"): Xrm.OptionSetAttribute<boolean>;
      get(name: "si_id"): Xrm.Attribute<string>;
      get(name: "si_nameen"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "si_associatedtoservicestandards"): Xrm.OptionSetControl<boolean>;
      get(name: "si_id"): Xrm.StringControl;
      get(name: "si_nameen"): Xrm.StringControl;
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
  interface NewForm extends Xrm.PageBase<NewForm.Attributes,NewForm.Tabs,NewForm.Controls> {
    getAttribute(attributeName: "si_associatedtoservicestandards"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "si_id"): Xrm.Attribute<string>;
    getAttribute(attributeName: "si_nameen"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getControl(controlName: "si_associatedtoservicestandards"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "si_id"): Xrm.StringControl;
    getControl(controlName: "si_nameen"): Xrm.StringControl;
    getControl(controlName: string): undefined;
  }
}
