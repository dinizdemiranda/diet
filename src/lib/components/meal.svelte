
<script>
	import Ingredients from "./ingredients.svelte";


    const { options } = $props();

    let selectedIndex = $state(0);
    let selectedOption = $derived(options[selectedIndex])

</script>
<div class="meal">
    {#if options.length > 1}
    <div class="alternatives">
        {#each options as option, index (option.id) }
        <button onclick={()=> selectedIndex = index} class={selectedIndex === index ? 'active':''}>{option.name}</button>
        {/each}
    </div>
    {/if}
    
    <div class="blocks">
        {#each options[selectedIndex].portions as portion, index (portion.id) }
        
        <Ingredients ingredients={portion.options} /> 
        {/each}
    </div>
</div>

<style>
    .meal {
        margin-bottom: 64px;
    }
    .alternatives {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
        gap: 10px;
        padding: 20px;
        max-width: 640px;
        margin: auto;
    }
    .blocks {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    button {
        font-size: 16px;
        color: black;
        border: none;
        cursor: pointer;
        background-color: transparent;
        padding: 10px;
    }
    button.active {
        border-bottom: 2px solid black;

    }

    </style>