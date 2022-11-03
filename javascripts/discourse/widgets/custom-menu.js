import { createWidget } from "discourse/widgets/widget";
import RenderGlimmer from "discourse/widgets/render-glimmer";
import { hbs } from "ember-cli-htmlbars";

let layouts;

try {
  layouts = requirejs("discourse/plugins/discourse-layouts/discourse/lib/layouts");
} catch (error) {
  layouts = { createLayoutsWidget: createWidget };
  console.error(error);
}

export default layouts.createLayoutsWidget(`${settings.widget_name}`, {

  html(attrs, state) {
    return [
      new RenderGlimmer(
        this,
        "div.content",
        hbs`<CustomMenu/>`
      ),
    ];
  },
});
