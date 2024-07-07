<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
	import { Logo } from "$lib";
</script>

<Navbar fluid let:NavContainer color="primary" class="px-0 py-0 sm:px-0 bg-white shadow">
	<NavContainer fluid class="mx-auto max-w-[80vw] border-0 py-2 dark:bg-gray-600">
		<NavBrand href="/">
			<img src={Logo} class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
			<span class="font-ZillaSlab self-center whitespace-nowrap text-2xl font-regular tracking-wide">VizDash</span
			>
		</NavBrand>
		<NavHamburger />
		<NavUl class="font-Outfit" classUl="md:space-x-2">
			<NavLi class="font-medium text-base" href="/">Home</NavLi>
			<NavLi class="font-medium text-base" href="/about">About</NavLi>
			<NavLi class="font-medium text-base" href="/docs/components/navbar">Navbar</NavLi>
			<NavLi class="font-medium text-base" href="/pricing">Pricing</NavLi>
			<NavLi class="font-medium text-base" href="/contact">Contact</NavLi>
		</NavUl>
	</NavContainer>
</Navbar>
