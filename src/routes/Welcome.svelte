<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    
    function startgame() {
        dispatch('startgame');
    }

    function showrules() {
        dispatch('showrules');
    }
</script>

<main>
    <h1>Greedy Pig</h1>
    <div class="buttonwrapper"><button on:click={startgame}>Begin game</button></div>
    <div class="buttonwrapper"><button on:click={showrules}>Rules</button></div>
</main>

<style lang='scss'>
    @use 'colours';

    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
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
    }
</style>