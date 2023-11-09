import { argosScreenshot } from "@argos-ci/playwright"
import { expect, test } from "@playwright/test"

test("create project", async ({ page }) => {
  await page.goto("/")
  await argosScreenshot(page, "Homepage")

  await page.getByPlaceholder("Name of your project").fill("Awesome app")
  await page.getByLabel("Framework").click()
  await page.getByLabel("Nuxt").click()
  await argosScreenshot(page, "Filled form")

  await page.getByRole("button", { name: "Create" }).click()
  await expect(page.getByRole("dialog")).toHaveText(
    /You’re about to create the project Awesome app using the Nuxt framework./
  )
  await argosScreenshot(page, "Confirm modal")
})
