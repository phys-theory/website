import * as esbuild from "https://deno.land/x/esbuild@v0.24.2/mod.js";

await esbuild.build({
    entryPoints: ["src/main.ts"],
    outdir: "build",
    bundle: true,
});

await esbuild.stop();
