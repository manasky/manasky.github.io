<div class="h-16">
  <div class="fixed left-0 z-20 flex justify-center w-full bg-base-100 backdrop-blur-lg bg-opacity-90">
    <div class="relative z-10 w-full max-w-6xl navbar">
      <div class="flex-1">
        <a href="/" class="text-2xl tracking-widest uppercase font-title btn btn-ghost">{title}</a>
      </div> 
      <div class="flex-none">
        <slot/>
      </div>
    </div>
  </div>
</div>

<script>
export let title = 'mana sky'
</script>