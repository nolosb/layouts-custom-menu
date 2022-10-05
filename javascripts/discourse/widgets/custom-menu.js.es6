import { createWidget } from "discourse/widgets/widget";
import { h } from "virtual-dom";

let layouts;
const menuItems = JSON.parse(settings.menu_items);

try {
  layouts = requirejs("discourse/plugins/discourse-layouts/discourse/lib/layouts");
} catch (error) {
  layouts = { createLayoutsWidget: createWidget };
  console.error(error);
}

export default layouts.createLayoutsWidget(`${settings.widget_name}`, {

  html(attrs, state) {
    let menuItemsBuffer = [];

    menuItems.forEach((item) => {
      menuItemsBuffer.push(
        h(
          "li",
          h(
            "a",
            {
              href: item.url,
              title: item.text,
            },
            h("span", `${item.text}`)
          )
        )
      );
    });
    return h("ul", menuItemsBuffer);
  },
});
