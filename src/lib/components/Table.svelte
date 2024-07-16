<script>
	import { RiCheckboxCircleFill, RiCloseCircleFill } from "svelte-remixicon";
	export let tableData = [];

	let shortenedTableData = tableData.slice(0,10)
</script>

<div>
	<div class="flow-root">
		<div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
				<div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
					<table class="min-w-full divide-y divide-gray-300">
						<thead class="bg-gray-50">
							<tr>
								{#if shortenedTableData.length > 0}
									{#each Object.keys(tableData[0]) as header}
										<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 capitalize">
											{header}
										</th>
									{/each}
								{/if}
							</tr>
						</thead>
						<tbody class="divide-y divide-gray-200 bg-white">
							{#if shortenedTableData.length > 0}
								{#each shortenedTableData as data}
									<tr>
										{#each Object.entries(data) as tableEntry}
											<td class="px-3 py-4 text-sm text-gray-500 capitalize">
												{#if tableEntry[0] === "completed"}
													{#if tableEntry[1] === true}
														<RiCheckboxCircleFill class="h-6 w-6 text-emerald-600" />
													{:else}
														<RiCloseCircleFill class="h-6 w-6 text-red-600" />
													{/if}
												{:else}
													{tableEntry[1]}
												{/if}
											</td>
										{/each}
									</tr>
								{/each}
							{/if}

							<!-- More people... -->
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>
