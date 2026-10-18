/** @type {import('next').NextConfig} */
const preview = process.env.PREVIEW_EXPORT === "1";

export default preview
  ? { output: "export", assetPrefix: "./", images: { unoptimized: true }, distDir: ".next-preview" }
  : {};
