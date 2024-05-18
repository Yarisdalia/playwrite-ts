import { test } from "@playwright/test";

test.describe("Acciones en el Automation Sanbox", () => {
  test("Click en Boton Id Dinamico", async ({ page }) => {
    await test.step("Dado que navego al Sanbox de Automation de free Range Testers", async () => {
      await page.goto(
        "https://thefreerangetester.github.io/sandbox-automation-testing/"
      );
    });
    await test.step("Puedo hacer click en el boton con ID dinamico", async () => {
      await page
        .getByRole("button", {
          name: "Hacé click para generar un ID dinámico y mostrar el elemento oculto",
        })
        .click();
    });

    test("LLeno un campo de texto en Automation Sanbox", async () => {
      await test.step("Dado que navego al Sanbox de Automation de free Range Testers", async () => {
        await page.goto(
          "https://thefreerangetester.github.io/sandbox-automation-testing/"
        );
      });
      await test.step("Puedo ingresar texto en el campo Un Aburrido Texto", async () => {
        await page
          .getByPlaceholder("Ingresá texto")
          .fill("Estoy aprendiendo Playwright");
      });
    });

    
  });
});
