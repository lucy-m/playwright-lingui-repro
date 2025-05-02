import { expect, test } from "@playwright/experimental-ct-react";
import { LinguiExample } from "./LinguiExample";

test("component importing lingui", async ({ mount }) => {
  const component = await mount(<LinguiExample />);

  await expect(component).toContainText("Hello");
});

// Without the patch file, the following test causes
// playwright to crash during build with error
// SyntaxError: The requested module '@lingui/core/macro' does not provide an export named 'msg'
// Error: No tests found

import { item } from "./myMsg";

test("test directly importing lingui", () => {
  console.log("macro item: ", item);

  expect(item).toBeTruthy();
});
