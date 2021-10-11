<div class="flex flex-col gap-10 md:items-center md:flex-row">
  <div class="md:w-1/2 xl:w-3/5">
    <Perspective scale={20} client:load>
      <figure class="overflow-hidden shadow-2xl rounded-box">
        <img width="662" height="373" class="w-full" alt="" src="/images/{slug}.jpg">
      </figure>
    </Perspective>
  </div>
  <div>
    <div class="flex items-center gap-2 mb-4">
      <h3 class="text-3xl font-bold tracking-wider lg:text-4xl font-title">{@html title}</h3>
      {#each links as { title, link, icon }, i}
        <span class="tooltip" data-tip={title}>
          <a href={link} rel="nofollow" aria-label={title} class="btn btn-sm btn-ghost btn-circle">
            {@html icon}
          </a>
        </span>
      {/each}
    </div>
    <p class="mb-4 opacity-50"><slot/></p>
  </div>
</div>

<script>
import Perspective from './Perspective.svelte'
export let title
export let slug
export let links
</script>