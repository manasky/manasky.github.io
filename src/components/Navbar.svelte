<div class="relative z-10 navbar">
  <div class="flex-1">
    <a href="/" class="text-2xl tracking-widest font-title btn btn-ghost btn-sm">{title}</a>
  </div> 
  <div class="flex-none">
    <slot/>
  </div>
</div>

<script>
export let title = 'mana sky'
</script>