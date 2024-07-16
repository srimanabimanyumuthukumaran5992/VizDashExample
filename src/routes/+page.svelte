<script>
	import {
		RiCakeLine,
		RiCameraLine,
		RiCodeSSlashLine,
		RiDownloadLine,
		RiFacebookBoxLine,
		RiFileShield2Line,
		RiInstagramLine,
		RiLinkedinFill,
		RiMailSendLine,
		RiMapPinLine,
		RiMusic2Line,
		RiPhoneLine,
		RiShapeFill,
		RiUserStarLine,
	} from "svelte-remixicon";
	import { AboutPic } from "$lib";
    
    let TechSkills = [
		"Svelte",
        "React JS",
		"Vue JS",
		"Tailwind CSS",
		"Bootstrap CSS",
		"Semantic UI",
		"HTML",
		"CSS",
		"JavaScript",
		"Node JS",
		"Electron JS",
		"Tauri",
		"Figma",
		"Sketch",
		"Adobe Illustrator",
		"Adobe Photoshop",
		"Adobe Dreamweaver",
		"Bootstrap Studio",
		"Balsamiq Mockups",
		"React Native",
		"MySQL",
		"Oracle APEX",
		"SQLite",
		"Firebase",
		"Pocketbase",
		"PostgresQL",
	];
	let CoreCompetencies = [
		"Front-end Architecture",
		"Front-end Design",
		"Front-End Development",
		"Cross Browser Compatibility",
		"Cross browser testing",
		"Data Visualization",
		"Design thinking",
		"Design Systems",
		"UI/UX Laws",
		"UI/UX Principles",
		"Prototyping",
		"Project Management and Execution",
		"Cross-Functional Team Collaboration",
		"Code Quality & Performance Optimisation",
		"Requirement Gathering",
		"Product Ownership",
		"Project Management"
	];
</script>

<div class="bg-white rounded-lg shadow border border-slate-200 p-8 my-8">
	<h1
		class="text-5xl relative font-semibold after:left-48 after:ml-12 after:absolute after:top-[50%] after:w-64 after:border-t-4 after:border-sky-300 after:rounded-md"
	>
		About Me
	</h1>

	<div class="mt-8 grid grid-cols-3 gap-8">
		<div class="col-span-1 rounded-md">
			<img class="rounded-2xl aspect-[3/4]" src={AboutPic} alt="User Profile" />
		</div>
		<div class="col-span-2 rounded-md">
			<p class="mt-3 tracking-wide">
				A versatile, high-energy technocrat with over 9 years of experience of executing prestigious projects of
				large magnitude within strict time schedule, targeting senior level assignments in Front-end Development
				and UI/UX Designing with an organisation of high repute.
			</p>
			<p class="mt-3 tracking-wide">
				Gained exposure on <strong>process requirements</strong> and <strong>provided use cases</strong> for business,
				functional & technical requirements
			</p>
			<p class="mt-3 tracking-wide">
				Extensive experience in <strong>building robust architecture</strong> for different solutions by managing
				the security, performance, availability, compliance, scalability and maintainability aspects
			</p>
			<p class="mt-3 tracking-wide">
				Understanding of <strong>Software Development Lifecycle (SDLC)</strong> right from requirement analysis,
				documentation (functional specifications, technical design), <strong>coding and testing</strong>
				(preparation of test cases along with implementation) to maintenance of proposed applications
			</p>
			<p class="mt-3 tracking-wide">
				Followed the <strong>project life cycle methodology</strong> defined under the process framework; ensured
				that customer deadlines were met within project budgets
			</p>
			<p class="mt-3 tracking-wide">
				Provided insightful knowledge of <strong>business process analysis</strong> (As-Is, To-Be) and design; managed
				application based process re-engineering, process optimization, cost control and revenue maximization from
				technical solutions using cutting-edge technologies
			</p>
			<p class="mt-3 tracking-wide">
				Formulated solutions for given <strong>technical specifications;</strong>
				installed application software and deployed customizations with quality maintenance; contributed to code
				reviews; supported production deployments of developed solutions
			</p>
			<p class="mt-3 tracking-wide">
				Proficient in ensuring that all <strong>UX Design activities</strong> are executed at high quality levels,
				leading team initiatives, setting priorities, and managing scoping
			</p>
		</div>
	</div>

	<p class="mt-16 text-3xl font-semibold">What am I ?</p>
	<div class="mt-4 grid grid-cols-3 gap-x-4 gap-y-6">
		<div class="bg-indigo-50 p-4 rounded-lg">
			<div class="flex items-center gap-6">
				<RiCodeSSlashLine size="2rem" class="text-indigo-700" />
				<div class="flex flex-col">
					<p class="text-indigo-700 font-medium text-xl">Front End Architect</p>
					<p class="text-slate-600 text-sm">Crafting Seamless Digital Experiences</p>
				</div>
			</div>
			<p class="text-slate-600 mt-3">
				As a seasoned front-end architect, I specialize in designing robust, user-friendly interfaces. My
				expertise lies in creating scalable, maintainable code structures that enhance performance and elevate
				user satisfaction.
			</p>
		</div>
		<div class="bg-amber-50 p-4 rounded-lg">
			<div class="flex items-center gap-6">
				<RiShapeFill size="2rem" class="text-amber-700" />
				<div class="flex flex-col">
					<p class="text-amber-700 font-medium text-xl">Product Designer</p>
					<p class="text-slate-600 text-sm">Shaping Ideas into Intuitive Interfaces</p>
				</div>
			</div>
			<p class="text-slate-600 mt-3">
				With a keen eye for aesthetics and usability, I translate concepts into visually appealing designs. My
				approach combines empathy with practicality, resulting in delightful user journeys and impactful digital
				products.
			</p>
		</div>
		<div class="bg-emerald-50 p-4 rounded-lg">
			<div class="flex items-center gap-6">
				<RiUserStarLine size="2rem" class="text-emerald-700" />
				<div class="flex flex-col">
					<p class="text-emerald-700 font-medium text-2xl">Product Owner</p>
					<p class="text-slate-600 text-sm">Empowering Vision to Reality</p>
				</div>
			</div>
			<p class="text-slate-600 mt-3">
				As a product owner, I bridge the gap between stakeholders and development teams. I define product
				roadmaps, prioritize features, and champion user-centric solutions, driving innovation and market
				success.
			</p>
		</div>
		<div class="bg-lime-50 p-4 rounded-lg">
			<div class="flex items-center gap-6">
				<RiFileShield2Line size="2rem" class="text-lime-700" />
				<div class="flex flex-col">
					<p class="text-lime-700 font-medium text-2xl">Project Manager</p>
					<p class="text-slate-600 text-sm">Navigating Complexity, Delivering Excellence</p>
				</div>
			</div>
			<p class="text-slate-600 mt-3">
				As a project manager, I orchestrate cross-functional teams, timelines, and resources. My focus is on
				efficient collaboration, risk mitigation, and ensuring successful project outcomes that align with
				business goals.
			</p>
		</div>
		<div class="bg-pink-50 p-4 rounded-lg">
			<div class="flex items-center gap-6">
				<RiCameraLine size="2rem" class="text-pink-700" />
				<div class="flex flex-col">
					<p class="text-pink-700 font-medium text-2xl">Photographer</p>
					<p class="text-slate-600 text-sm">Capturing Moments, Crafting Stories</p>
				</div>
			</div>
			<p class="text-slate-600 mt-3">
				Behind the lens, I explore visual narratives. Whether through photography or film, I convey emotions,
				evoke curiosity, and immortalize memories. Each frame tells a unique story, inviting viewers to connect.
			</p>
		</div>
		<div class="bg-sky-50 p-4 rounded-lg">
			<div class="flex items-center gap-6">
				<RiMusic2Line size="2rem" class="text-sky-700" />
				<div class="flex flex-col">
					<p class="text-sky-700 font-medium text-2xl">Musician</p>
					<p class="text-slate-600">Harmonizing Creativity and Impact</p>
				</div>
			</div>
			<p class="text-slate-600 mt-3">
				My passion extends beyond pixels and code—I compose music and create compelling ad films. From catchy
				jingles to emotionally resonant visuals, I infuse creativity into brand messaging, leaving a lasting
				impression.
			</p>
		</div>
	</div>
    <div class="bg-slate-50 mt-5 rounded-b-lg p-8 grid grid-cols-2 gap-8 items-start">
		<div>
			<p class="text-2xl font-medium flex items-center gap-2">Technical Skills</p>
			<div class="flex flex-wrap max-w-full items-centerstart gap-2 gap-y-3 mt-4">
				{#each TechSkills as skill}
					<span
						class="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-sm font-normal bg-indigo-100 text-indigo-700 ring-1 ring-inset ring-gray-200"
					>
						{skill}
					</span>
				{/each}
			</div>
		</div>
		<div>
			<p class="text-2xl font-medium flex items-center gap-2">Core Competencies</p>
			<div class="flex flex-wrap max-w-full items-centerstart gap-2 gap-y-3 mt-4">
				{#each CoreCompetencies as competency}
					<span
						class="inline-flex capitalize items-center gap-x-1.5 rounded-md px-2 py-1 text-sm font-normal bg-pink-100 text-pink-700 ring-1 ring-inset ring-pink-200"
					>
						{competency}
					</span>
				{/each}
			</div>
		</div>
	</div>
</div>
