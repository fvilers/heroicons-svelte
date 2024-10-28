<script lang="ts">
  import * as solid16 from "$lib/16/solid/index.js";
  import * as solid20 from "$lib/20/solid/index.js";
  import * as outline24 from "$lib/24/outline/index.js";
  import * as solid24 from "$lib/24/solid/index.js";
</script>

<h1>@fvilers/heroicons-svelte</h1>
<nav>
  <ul class="menu">
    <li><a href="#outline24">Outline 24</a></li>
    <li><a href="#solid24">Solid 24</a></li>
    <li><a href="#solid20">Solid 20</a></li>
    <li><a href="#solid16">Solid 16</a></li>
  </ul>
</nav>

<h2 id="outline24">Outline 24x24 (size-6)</h2>
{@render icons(outline24, "size-6")}

<h2 id="solid24">Solid 24x24 (size-6)</h2>
{@render icons(solid24, "size-6")}

<h2 id="solid20">Solid 20x20 (size-5)</h2>
{@render icons(solid20, "size-5")}

<h2 id="solid16">Solid 16x16 (size-4)</h2>
{@render icons(solid16, "size-4")}

{#snippet icons(dictionary: object, className: string)}
  <ul class="icons">
    {#each Object.keys(dictionary) as key}
      <li title={key}>
        <svelte:component this={Reflect.get(dictionary, key)} class={className} />
        <span>{key}</span>
      </li>
    {/each}
  </ul>
{/snippet}

<style>
  :global body {
    font-family: sans-serif;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  .menu {
    display: flex;
    gap: 1rem;
  }

  .icons {
    display: grid;
    grid-template-columns: repeat(auto-fill, 15rem);
    gap: 2rem;

    li {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;

      :global svg {
        padding: 2rem;
      }

      span {
        font-size: 0.8rem;
        color: rgb(100 116 139);
      }
    }
  }

  :global .size-4 {
    width: 1rem; /* 16px */
    height: 1rem; /* 16px */
  }

  :global .size-5 {
    width: 1.25rem; /* 20px */
    height: 1.25rem; /* 20px */
  }

  :global .size-6 {
    width: 1.5rem; /* 24px */
    height: 1.5rem; /* 24px */
  }
</style>
