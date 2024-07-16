<script>
    import { ContentSection, Table, AGGrid } from "$lib";
    import "ag-grid-community/styles/ag-grid.css";
    import "ag-grid-community/styles/ag-theme-quartz.css";
    export let data;
</script>

<div class="flex flex-col gap-4">
    <ContentSection title="Tailwind Tables">
        <Table tableData={data.results} />
    </ContentSection>
    <ContentSection title="AG-Grid Tables">
        <AGGrid tableData={data.results} />
    </ContentSection>
</div>