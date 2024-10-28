<p align="center">
  <a href="https://heroicons.com" target="_blank">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/tailwindlabs/heroicons/HEAD/.github/logo-dark.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/tailwindlabs/heroicons/HEAD/.github/logo-light.svg">
      <img alt="Heroicons" width="315" height="117" style="max-width: 100%" src="https://raw.githubusercontent.com/tailwindlabs/heroicons/HEAD/.github/logo-light.svg">
    </picture>
  </a>
</p>

<p align="center">Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.<p>

<p align="center">
  <a href="https://heroicons.com"><strong>Browse at Heroicons.com &rarr;</strong></a>
</p>

## Basic Usage

First, install `@fvilers/heroicons-svelte` from npm:

```sh
npm install @fvilers/heroicons-svelte
```

Now each icon can be imported individually as a Svelte component:

```html
<script lang="ts">
  import { BeakerIcon } from "@fvilers/heroicons-svelte/24/solid";
</script>

<div>
  <BeakerIcon className="size-6 text-blue-500" />
  <p>...</p>
</div>
```

The 24x24 outline icons can be imported from `@fvilers/heroicons-svelte/24/outline`, the 24x24 solid icons can be imported from `@fvilers/heroicons-svelte/24/solid`, the 20x20 solid icons can be imported from `@fvilers/heroicons-svelte/20/solid`, and 16x16 solid icons can be imported from `@fvilers/heroicons-svelte/16/solid`.

Icons use an upper camel case naming convention and are always suffixed with the word `Icon`.

[Browse the full list of icon names on UNPKG &rarr;](https://unpkg.com/browse/@fvilers/heroicons-svelte/24/outline/)

## License

This library is MIT licensed.
