<script>

    import { createGrid } from 'ag-grid-community';
    import { onMount } from 'svelte';

    export let tableData;
    export let gridID = "myGrid";

    let tempColDefs = [];
    let gridOptions = {};

    $: if(tableData && tableData.length > 0) {
        Object.keys(tableData[0]).forEach((item) => {
            let temp = {
                headerName: item.charAt(0).toUpperCase() + item.slice(1),
                field: item
            }
            tempColDefs.push(temp);
        })
    };

    $: gridOptions = {
        columnDefs: tempColDefs,
        rowData: tableData,
        pagination: true,
        autoSizeStrategy: {
            type: 'fitGridWidth',
            defaultMinWidth: 100,
        },
    };

    let eGridDiv, api;

    onMount(() => {
        eGridDiv = document.querySelector(`#${gridID}`);
        api = createGrid(eGridDiv, gridOptions);   
    });
    

</script>

<div id={gridID} class="min-h-[20vh] h-[50vh] ag-theme-quartz"/>