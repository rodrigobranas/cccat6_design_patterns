import InputText from "../../../src/behavioral/observer/InputText";
import Label from "../../../src/behavioral/observer/Label";

test("Deve criar um componente normal", function () {
	const inputText = new InputText("country");
	const label = new Label("País: {{ country }}");
	inputText.setValue("Brasil");
	label.setValue("country", "Brasil");
	expect(label.getValue()).toBe("País: Brasil");
});

test("Deve criar um componente reativo", function () {
	const inputText = new InputText("country");
	const labelA = new Label("País: {{ country }}");
	const labelB = new Label("País: {{ country }}");
	const labelC = new Label("País: {{ country }}");
	inputText.register(labelA);
	inputText.register(labelB);
	inputText.register(labelC);
	inputText.setValue("Brasil");
	expect(labelA.getValue()).toBe("País: Brasil");
	expect(labelB.getValue()).toBe("País: Brasil");
	expect(labelC.getValue()).toBe("País: Brasil");
});
