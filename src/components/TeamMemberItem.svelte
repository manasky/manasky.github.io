<div class="grid grid-cols-12 auto-rows-max">
  <div class="col-span-11 grid row-span-4 row-start-1 p-[3vw] xl:p-10 md:col-span-5 md:row-start-1 md:row-span-5 border-neutral rounded-box
  {reverse 
    ? 'place-items-end col-start-2 md:col-start-8' 
    : 'place-items-start col-start-1 md:col-start-1'
  }
  "
  >
    <img width="400" height="400" class="w-2/3 md:w-full rounded-box" src={img} alt=""/>
  </div>
  <div class="relative z-10 col-span-11 row-span-6 row-start-4 p-10 overflow-hidden shadow-2xl md:col-span-8 md:row-span-6 md:row-start-2 bg-neutral text-neutral-content rounded-box
  {reverse 
    ? 'col-start-1 md:col-start-1' 
    : 'col-start-2 md:col-start-5'
  }
  ">
    <h3 class="mb-4 text-3xl tracking-wider uppercase lg:text-4xl font-wide">{title}</h3>
    <p class="mb-4 leading-7">
      <slot/><br/>
    </p>
    
    <h4 class="mt-8 mb-4 font-bold">Links</h4>
    <div class="flex flex-wrap gap-2">
      {#each links as { title, slug, url }, i}
        <SocialIconItem {title} {slug} {url} rel="nofollow"/>
      {/each}
    </div>

    <h4 class="mt-8 mb-4 font-bold">Favorite tools</h4>
    <div class="flex flex-wrap gap-4">
      {#each stack as { title, slug }, i}
        <TechStackItem {title} {slug} />
      {/each}
    </div>

  </div>
</div>

<script>

import TechStackItem from './TechStackItem.svelte'
import SocialIconItem from './SocialIconItem.svelte'

export let title
export let img
export let links
export let stack
export let reverse
</script>