<script>
    export let value = "";
    export let description = "";
</script>

<div class="overflow-hidden rounded-lg bg-white shadow">
    <div class="px-4 py-5 sm:p-6 flex flex-col items-center">
        <p class="text-7xl font-semibold text-sky-600"> {value} </p>
        <p class="font-light uppercase text-slate-500 flex items-center">
            <span class:mr-3={$$slots.showChange}>{description}</span>
            {#if $$slots.showChange}
                <slot name="showChange" />
            {/if}
        </p>
    </div>
</div>
  