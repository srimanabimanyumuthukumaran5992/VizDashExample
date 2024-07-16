<script>
	import { RiCloseLine } from "svelte-remixicon";
    import * as SvelteRemixIcon from "svelte-remixicon"

    export let alertType = "default";
    export let alertContent = "This is an Alert Message";
    export let alertIcon;
    export let isAlertDismissable = false;

    const dismissModal = () => {
        alert("DISMISSING MODAL");
    }
</script>

<div
    class:bg-sky-50={alertType === "default"}
    class:bg-emerald-50={alertType === "success"}
    class:bg-red-50={alertType === "danger"}
    class:bg-amber-50={alertType === "warning"}

    class:border-sky-200={alertType === "default"}
    class:border-emerald-200={alertType === "success"}
    class:border-red-200={alertType === "danger"}
    class:border-amber-200={alertType === "warning"}

    class="rounded-lg border p-4 w-full">
	<div class="flex">
		{#if alertIcon !== ""}
            <div
                class:text-sky-600={alertType === "default"}
                class:text-emerald-600={alertType === "success"}
                class:text-red-600={alertType === "danger"}
                class:text-amber-600={alertType === "warning"} 
                class="flex-shrink-0 flex items-center justify-center">
                <svelte:component this={SvelteRemixIcon[alertIcon]} />
            </div>
        {/if}
		<div class="ml-3">
			<p
                class:text-sky-600={alertType === "default"}
                class:text-emerald-600={alertType === "success"}
                class:text-red-600={alertType === "danger"}
                class:text-amber-600={alertType === "warning"} 
                class="text-sm font-medium">
                {alertContent} 
            </p>
		</div>
		<div class="ml-auto pl-3 flex items-center justify-center">
			<div class="-mx-1.5 -my-1.5">
                {#if isAlertDismissable}
                    <button
                        on:click={dismissModal}
                        type="button"

                        class:text-sky-600={alertType === "default"}
                        class:text-emerald-600={alertType === "success"}
                        class:text-red-600={alertType === "danger"}
                        class:text-amber-600={alertType === "warning"}

                        class:hover:bg-sky-100={alertType === "default"}
                        class:hover:bg-emerald-100={alertType === "success"}
                        class:hover:bg-red-100={alertType === "danger"}
                        class:hover:bg-amber-100={alertType === "warning"} 
                        
                        class:focus:ring-sky-600={alertType === "default"}
                        class:focus:ring-emerald-600={alertType === "success"}
                        class:focus:ring-red-600={alertType === "danger"}
                        class:focus:ring-amber-600={alertType === "warning"} 
                        
                        class="inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-offset-green-50"
                    >
                        <span class="sr-only">Dismiss</span>
                        <RiCloseLine />
                    </button>
                {/if}
			</div>
		</div>
	</div>
</div>
