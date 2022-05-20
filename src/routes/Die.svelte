<script>
    import { createEventDispatcher } from 'svelte';
    let dispatch = createEventDispatcher();

    export let number = -1;

    function roll() {
        number = Math.floor(Math.random() * 6) + 1;
        dispatch('roll', number);
    }
</script>

<div class='wrapper'>
    <button class="bordered" on:click={roll}>
        <h1>
            {#if number != -1}
                {number}
            {:else}
                Roll!
            {/if}
        </h1>
    </button>
</div>

<style lang='scss'>
    @use 'colours';

    .wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
    }

    h1 {
        font-weight: bold;
        width: 100%;
        text-align: center;
        color: colours.$f_low;
    }

    .bordered {
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 4px solid colours.$b_low;
        background-color: colours.$b_med;
        border-radius: 5px;
        aspect-ratio: 1 / 1;
        height: 100%;
        user-select: none;
    }

    button:active {
        background-color: colours.$b_high;
    }
</style>
