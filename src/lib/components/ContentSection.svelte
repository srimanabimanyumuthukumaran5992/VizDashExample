<script>
    export let title = "";
</script>

<div class="p-4 flex flex-col border border-dashed border-slate-600 rounded-lg">
    <h1 class="mb-4 text-3xl font-semibold text-slate-600"> {title}</h1>
    <slot />
</div>