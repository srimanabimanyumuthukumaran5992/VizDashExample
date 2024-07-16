<script>
    import * as SvelteRemixIcon from "svelte-remixicon"
    
    export let buttonText = "";
    export let buttonColor = "primary";
    export let buttonIcon = "";
</script>

<button
    type="button"

    class:bg-sky-50={buttonColor==="primary"}
    class:bg-emerald-50={buttonColor==="success"}
    class:bg-amber-50={buttonColor==="warning"}
    class:bg-red-50={buttonColor==="danger"}
    class:bg-transparent={buttonColor==="secondary"}

    class:text-sky-600={buttonColor==="primary"}
    class:text-emerald-600={buttonColor==="success"}
    class:text-amber-600={buttonColor==="warning"}
    class:text-red-600={buttonColor==="danger"}
    class:text-slate-600={buttonColor==="secondary"}

    class:border-sky-200={buttonColor==="primary"}
    class:border-emerald-200={buttonColor==="success"}
    class:border-amber-200={buttonColor==="warning"}
    class:border-red-200={buttonColor==="danger"}
    class:border-slate-600={buttonColor==="secondary"}

    class:hover:bg-sky-100={buttonColor==="primary"}
    class:hover:bg-emerald-100={buttonColor==="success"}
    class:hover:bg-amber-100={buttonColor==="warning"}
    class:hover:bg-red-100={buttonColor==="danger"}
    class:hover:bg-slate-200={buttonColor==="secondary"}

    class:focus-visible:outline-sky-600={buttonColor==="primary"}
    class:focus-visible:outline-emerald-600={buttonColor==="success"}
    class:focus-visible:outline-amber-600={buttonColor==="warning"}
    class:focus-visible:outline-red-600={buttonColor==="danger"}
    class:focus-visible:outline-slate-600={buttonColor==="secondary"}

	class="rounded-md p-2 flex items-center justify-center gap-2 text-sm border font-medium  shadow-sm hover:shadow-md  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
>
    {#if buttonIcon !== ""}
        <div class="flex-shrink-0 flex items-center justify-center">
            <svelte:component this={SvelteRemixIcon[buttonIcon]} />
        </div>
    {/if}
    {buttonText}
</button>
