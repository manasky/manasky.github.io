<div class="flex flex-col items-center">
  <div class="w-full py-20 flex flex-col justify-center h-screen max-h-[60rem] bg-base-200" id="contact">
    <div class="flex flex-col items-center mb-10 text-center">
      <h2 class="uppercase mb-6 leading-[0.7em] text-7xl md:text-[10vw] xl:text-[8rem] font-title font-black">
        <span class="text-transparent text-stroke">Start your project with</span>
        <span class="text-base-content"> MANA&nbsp;SKY</span>
      </h2>
      <p class="mb-6 text-lg opacity-50">
        Tell us more about your project. Send us a message <br/>and we'll get back to you as soon as possible.
      </p>
    </div>
    <div class="flex flex-col items-center justify-center w-full gap-2 h-14 sm:flex-row">
      <a class="gap-3 btn xl:btn-lg btn-outline" href="mailto:hi@manasky.com">
        <img class="w-6 h-6" width="24" height="24" src="/icons/gmail.svg" alt="email"/>
        Send us an Email
      </a>
      <div class="divider sm:divider-vertical opacity-40">OR</div>
      <Calendly client:load>
        <button class="gap-3 btn xl:btn-lg btn-outline">
          <img width="24" height="24" class="w-6 h-6" src="/icons/zoom.svg" alt="zoom"/>
          Schedule Zoom meeting
        </button>
      </Calendly>
    </div>
  </div>
</div>

<script>
import Calendly from '../components/Calendly.svelte'
</script>