<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bloomlife - Health & Life Coach</title>
    <style>
      @import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);
      @import url(https://fonts.googleapis.com/css2?family=Open+Sans&display=swap);
      @import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200);
      @import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css);
    </style>
</svelte:head>

<div id="webcrumbs">
	<div class="w-full p-4 font-sans bg-gradient-to-r from-amber-50 to-rose-50">
		{@render children()}
	</div>
</div>

