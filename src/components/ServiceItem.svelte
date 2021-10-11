<div class="grid w-72 h-72 bg-base-200 rounded-box place-items-center md:w-auto">
  <div class="flex flex-col items-center gap-4 p-10">
    {@html icon}
    <div class="text-2xl font-bold {textColor}">{title}</div>
    <p class="opacity-50">{desc}</p>
  </div>
</div>

<script>
export let title
export let desc
export let icon
export let textColor
</script>