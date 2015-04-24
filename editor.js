import {Component, Template, Attribute, bootstrap, For} from 'angular2/angular2';
import {bind} from 'angular2/di';
import {FieldStore} from 'services/field_store';

@Component({
  selector: 'editor-app',
  services: [
    FieldStore
  ]
})

@Template({
  url: 'list.html',
  directives: [For, EditField]
})

// Component controller
class EditorApp {
  fieldStore: FieldStore;
  constructor(store: FieldStore) {
    this.fieldStore = store;
  }

  serializeMe() {
    console.log("serializing");
    console.log(JSON.stringify(this.fieldStore.fields));
  }
}

/* ---------------------------- */

@Component({
  selector: 'edit-field',
  services: [
    FieldStore
  ]
})

@Template({
  url: "edit_field.html",
  directives: [For]
})

// Component controller
class EditField {
  fieldStore: FieldStore;
  field;
  items: Array;

  constructor(store: FieldStore, @Attribute('field') type: string ) {
    this.field = type;
    this.fieldStore = store;
    this.items = this.fieldStore.fields[type];
  }
}

/* ---------------------------- */

@Component({
  selector: 'edit-field-item',
  // bind: {
  //   'field': 'field'
  // }
})

@Template({
  url: "edit_field_item.html"
})

// Component controller
class EditFieldItem {
  field;
  constructor() {
  }
}



bootstrap(EditorApp);
