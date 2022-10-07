import Component from "@glimmer/component";

export default class CustomMenu extends Component {
  get menuItems() {
    return JSON.parse(settings.menu_items);
  }
}
