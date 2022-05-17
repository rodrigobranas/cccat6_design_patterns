import DarkWidgetFactory from "../../../src/creational/abstract_factory/DarkWidgetFactory";
import LightWidgetFactory from "../../../src/creational/abstract_factory/LightWidgetFactory";
import View from "../../../src/creational/abstract_factory/View";

test("Deve criar uma view com tema claro", function () {
	const view = new View(new LightWidgetFactory());
	expect(view.label.color).toBe("black");
	expect(view.button.backgroundColor).toBe("blue");
	expect(view.button.color).toBe("white");
});

test("Deve criar uma view com tema escuro", function () {
	const view = new View(new DarkWidgetFactory());
	expect(view.label.color).toBe("white");
	expect(view.button.backgroundColor).toBe("black");
	expect(view.button.color).toBe("white");
});
