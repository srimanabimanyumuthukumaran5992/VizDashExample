<script>
	import { RiEyeLine, RiEyeOffLine } from "svelte-remixicon";
    export let name = "defaultName";
	export let required = false;
    export let type = "input";
	export let placeholder = "Placeholder";
	export let label = "";
	export let validationRequired = false;
	export let validationPassed = false;
	export let value = "";

	let isPasswordVisible = false;

	const togglePasswordVisibility = () => {
		isPasswordVisible = !isPasswordVisible
 	}

	const handleInputChange = (event) => {
		value = event.target.value;
	}
</script>

<div>
	<label for={name} class="block text-sm font-normal leading-6 capitalize text-slate-600">
		{label === "" ? name : label}
		{#if required}
			<sup class="text-red-600">*</sup>
		{/if}
	</label>
	<div class="relative">
		<input
			class:border-red-500={validationRequired && !validationPassed && value !== ""}
			class:focus:border-red-500={validationRequired && !validationPassed && value !== ""}
			class:border-emerald-500={validationRequired && validationPassed && value !== ""}
			class:focus:border-emerald-500={!validationRequired}
			class:border-gray-500={!validationRequired}
			class:focus:border-gray-500={!validationRequired}
			{value}
			on:keyup={handleInputChange}
			type = { type==="password" ? isPasswordVisible ? "text" : "password" : type }
			name={name}
			id={name}
			class="block w-full rounded-md px-4 py-2 text-gray-900 focus:shadow-md shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:ring-0"
			{placeholder}
		/>
		{#if type === "password" && value !== ""}
			<button on:click={togglePasswordVisibility} class="cursor-pointer absolute inset-y-0 right-0 flex items-center pr-3">
				{#if isPasswordVisible}
					<RiEyeOffLine />	
				{:else}
					<RiEyeLine />
				{/if}
			</button>
		{/if}
	</div>
</div>
