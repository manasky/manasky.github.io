<div class="h-screen max-h-[60rem] hero">
  <div class="items-stretch w-full max-w-6xl hero-content">
    <div class="w-full">
      <div>
        <Perspective scale=20 client:load>
          <h1 class="mb-5 inline-block relative z-10 uppercase font-title 
          text-[14vw] leading-[.75em]
          sm:text-[10vw] sm:leading-[.75em]
          xl:text-9xl xl:leading-[.75em]
          ">
            {@html title}
          </h1>
          <p class="relative z-10 mb-5 text-xl tracking-wider">{@html desc}</p>
        </Perspective>
      </div>
      <slot/>
    </div>
  </div>
</div>

<script>
import Perspective from './Perspective.svelte'

export let title = ''
export let desc = ''
</script>