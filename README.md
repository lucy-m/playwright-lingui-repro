# Playwright macros feature request repro

This repo contains code relating to a feature request for playwright. I am unable to write tests that are importing macros as I cannot specify the babel plugins to use for test code.

## What's in this project?

In the `lingui` folder, there is:
1. `myMsg.ts` which exports `item`, which is a lingui macro.
2. `LinguiExample.tsx` which is a React component that imports and logs `item`.
3. `LinguiExample.spec.tsx` which contains two tests. The first mounts `LinguiExample` component, which in turn imports `item`. The second imports `item` directly. The second test is initially commented out.

In `playwright-ct.config.ts` I have added babel plugin `@lingui/babel-plugin-lingui-macro` to the `ctViteConfig`. This follows set up instructions from [lingui docs](https://lingui.dev/installation#vite).

In `patches` folder is a patch file for `@playwright/experimental-ct-core` which adds `"@lingui/babel-plugin-lingui-macro"`.

## Reproduction steps

1. `npm install` then `npm run test-ct`. See that `component importing lingui` test passes.
2. Uncomment lines 15-22 in `LinguiExample.spec.tsx`. Run `npm run test-ct` and playwright should fail to build with `SyntaxError: The requested module '@lingui/core/macro' does not provide an export named 'msg'`.
3. Apply the patch file with `npx patch-package`. Run `npm run test-ct` again and see both tests build and pass.
