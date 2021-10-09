<span style="display: inline-block;" bind:this={parent}>
  <div bind:this={child} style="
  transform: perspective(1000px) translateZ(0) rotateX({rotateX}) rotateY({rotateY});
  transition: all 150ms linear 0s;
  ">
    <slot/>
  </div>
</span>

<script>
  import { onMount } from 'svelte';
  let parent
  let child
  let rotateX = 0
  let rotateY = 0
  export let scale = 40

  onMount(() => {

    const onMouseUpdate = e => {
      let width = child.offsetWidth
      let XRel = e.pageX - child.offsetLeft
      let YRel = e.pageY - child.offsetTop
    
      let YAngle = -(0.5 - (XRel / width)) * scale
      let XAngle = (0.25 - (YRel / width)) * scale * 2
    
      rotateY = YAngle + 'deg'
      rotateX = XAngle + 'deg'
    }

    parent.addEventListener('mousemove', onMouseUpdate, false)
    parent.addEventListener('mouseenter', onMouseUpdate, false)
    parent.addEventListener('mouseleave', () => {
      rotateX = 0
      rotateY = 0
    })

  })
</script>

