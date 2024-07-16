<script>
    import { page } from "$app/stores";
    import { NotFound } from "$lib";
    $: console.log($page);
</script>

{#if $page.error.message.toLowerCase() === "not found"}
    <div class="p-5 flex flex-col items-center justify-center border border-dashed border-slate-600 rounded-lg">
        <img src={NotFound} alt="404 Error" />
        <p class="text-4xl font-bold text-blue-500"> Oops! </p>
        <p class="mt-2 text-slate-500"> Looks like the page you are trying to find is not available</p>
        <a href="/"><button type="button" class="mt-5 rounded-md bg-sky-600 p-3 text-base font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">Go Back Home</button></a>
    </div>
{/if}