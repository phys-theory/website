import * as esbuild from "https://deno.land/x/esbuild@v0.24.2/mod.js";
import htmlPlugin from "npm:@chialab/esbuild-plugin-html";

await esbuild.build({
  entryPoints: [
    "src/main.ts",
    "src/index.html",
  ],
  outdir: "build",
  bundle: true,
  plugins: [htmlPlugin()],
});

await esbuild.stop();
