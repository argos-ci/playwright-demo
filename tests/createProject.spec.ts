import { argosScreenshot } from "@argos-ci/playwright"
import { expect, test } from "@playwright/test"

test("create project", async ({ page }) => {
  await page.goto("/")
  await argosScreenshot(page, "Homepage")

  await page.getByPlaceholder("Name of your project").fill("sephora")
  await page.getByLabel("framework").click()
  await page.getByLabel("Nuxt.js").click()
  await argosScreenshot(page, "Filled form")

  await page.getByRole("button", { name: "Create" }).click()
  await expect(page.getByRole("dialog")).toHaveText(
    /You’re about to create the project sephora using the nuxt framework./i
  )
  await argosScreenshot(page, "Confirm modal")
})
