import fs, { readFile } from "node:fs/promises";
import path from "node:path";

type Style = "solid" | "outline";
type Source = {
  size: number;
  style: Style;
  basePath: string;
};

const sources: Source[] = [
  {
    size: 24,
    style: "outline",
    basePath: "./heroicons/src",
  },
  {
    size: 24,
    style: "solid",
    basePath: "./heroicons/src",
  },
  {
    size: 20,
    style: "solid",
    basePath: "./heroicons/src",
  },
  {
    size: 16,
    style: "solid",
    basePath: "./heroicons/src",
  },
];
const destination = "./src/lib";

await Promise.all(sources.map(generateComponentsFromSource));

async function generateComponentsFromSource(source: Source): Promise<void> {
  // Get all files to transform
  const sourcePath = path.join(source.basePath, source.size.toString(), source.style);
  const files = await fs.readdir(sourcePath);

  // Ensure the destination directory exists
  const destinationDir = path.join(destination, source.size.toString(), source.style);
  await fs.mkdir(destinationDir, { recursive: true });

  // Prepare the index file
  const index: string[] = [];

  for (const file of files) {
    // Transform the SVG file to a Svelte component
    const buffer = await readFile(path.join(sourcePath, file));
    const svg = buffer.toString().replaceAll(/width="\d+"\sheight="\d+"/g, "{...props}");
    const component = `<script lang="ts">
import type { SVGAttributes } from "svelte/elements";

let props: SVGAttributes<SVGElement> = $props();
</script>

${svg}`;

    // Write the Svelte component to the right destination
    const componentName = withoutExt(kebabToPascal(file));
    const fileName = componentName + ".svelte";
    await fs.writeFile(path.join(destinationDir, fileName), component);

    index.push(`export { default as ${componentName}Icon } from "./${fileName}";`);
  }

  // Write the index file
  await fs.writeFile(
    path.join(destinationDir, "index.ts"),
    index.map((item) => item + "\n"),
  );
}

function kebabToPascal(source: string): string {
  return source.replace(/(?:^|-)([a-z0-9])/gm, (_, p1) => p1.toUpperCase());
}

function withoutExt(source: string): string {
  return path.parse(source).name;
}
