<script>
    import { createEventDispatcher } from 'svelte';

    export let winner;
    export let score;
    export let multiple;

    let dispatch = createEventDispatcher();

    function playAgain() {
        dispatch('playagain');
    }
</script>

<main>
    <h1>Game Over</h1>
    <h3>{winner}
        {#if multiple}
            tied with the score
        {:else}
            won with a score of
        {/if}
         {score}!</h3>
    <div class="buttonwrapper"><button on:click={playAgain}>Play Again</button></div>
</main>

<style lang='scss'>
    @use 'colours';

    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    h1, h3 {
        text-align: center;
    }

    button {
        width: 20em;
        color: colours.$f_high;
    }

    button:active {
        background-color: colours.$b_high;
    }

    .buttonwrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;   
        width: 100%;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
