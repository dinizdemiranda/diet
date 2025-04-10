<script>
    const { ingredients } = $props();

    let selectedIngredient = $state(ingredients[0]);

</script>

<div class="ingredient">

    <select bind:value={selectedIngredient}>
        {#each ingredients as ingredient, index (ingredient.id)}
            <option value={ingredient}>{ingredient.item}</option>
        {/each}
    </select>
    <div class="quantity">
        {selectedIngredient.quantity}
    </div>
</div>

<style>
    .ingredient {
        display: flex;
        gap: 8px;
        padding: 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    select {
        
        font-size: 12px;
        height: 40px;
        padding:  4px 8px;
        width: 100%;
    }

    .quantity {
        font-size: 12px;
        font-weight: bold;
        color: white;
        background-color: black;
        padding: 4px 8px;
        border-radius: 4px;
        height: 40px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 120px;
    }
</style>