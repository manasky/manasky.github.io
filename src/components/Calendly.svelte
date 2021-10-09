<div on:click={initCalendly} class="inline-block"><slot/></div>

<svelte:head>
  <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
  <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
</svelte:head>

<script>
function initCalendly() {
  Calendly.initPopupWidget({url: 'https://calendly.com/manasky?hide_landing_page_details=1&hide_gdpr_banner=1'});return false;
}
</script>

