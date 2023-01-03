<script>
    import { append, each } from "svelte/internal";
    import Character from "../lib/character.svelte";
    import   "../app.css";
    
  
    let characters = [];
    let page = 1;

    async function LoadCharacters() {
        const response = await fetch(
            "https://rickandmortyapi.com/api/character?page=" + page
        );
        const data = await response.json();
        characters = data.results;
    }

    LoadCharacters();

    function nextPage() {
        page++;
        LoadCharacters();
        console.log("next");
    }
    function previousPage() {
        page--;
        LoadCharacters();
        console.log("pre");
    }
</script>

<h1 class="title">Rick y Morty</h1>

<div class="btns">
    <button on:click={previousPage} disabled={page === 1} class="btn">Previous page</button>
    <button on:click={nextPage} class="btn">Next page</button>
</div>
<div class="container">
    <div class="grid">

        {#each characters as character}
        <Character character={character} />
        {/each}
    </div>
</div>
