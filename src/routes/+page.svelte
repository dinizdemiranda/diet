<script>
    import { meals } from "$lib/meals.js";
	import Meal from "$lib/components/meal.svelte";

    let selectedMeal = $state(null);

    const handleSelect = (i) => selectedMeal === i ? selectedMeal = null : selectedMeal = i; 

</script>

<div class="app">
    <h1>Dieta da Baby</h1>
    {#each meals as meal,index (meal.id)}
    <button onclick={()=>handleSelect(index)}>{meal.name}</button>
        {#if selectedMeal === index}
        <Meal options={meal.options} />
        {/if}
    {/each}
</div>


<style>
    .app {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 20px;
        max-width: 640px;
        margin: auto;
    }

    button {
        padding: 10px 20px;
        font-size: 16px;
        color: black;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    button:hover {
        outline: 1px solid black;
    }
</style>