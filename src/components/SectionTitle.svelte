<div class="flex flex-col items-center">
  <div class="w-full max-w-6xl">
    <div class="px-6 pt-20">
      <h2 class="text-7xl md:text-[10vw] xl:text-[10rem] font-title font-black text-transparent text-stroke leading-[0.7em] mb-4">
        {@html title}
      </h2>
      <p class="py-2 pl-5 mb-5 ml-5 border-l-2 border-opacity-50 opacity-50 border-base-content">
        {@html desc}
      </p>
    </div>
  </div>
</div>

<script>
export let title
export let desc
</script>