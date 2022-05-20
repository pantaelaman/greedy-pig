<script context='module' lang='ts'>
    let cur_id = 0;

    export function reset() {
        cur_id = 0;
    }
</script>

<script lang='ts'>
    import { onMount, onDestroy, createEventDispatcher } from "svelte";

    let dispatch = createEventDispatcher();

    function leaveRoundClicked() {
        dispatch('leaving');
    }

    export let right = false;
    export let down = false;
    let active_sub = 0;

    let id: number;
    $: current = active_sub == id;

    onMount(() => {
        id = cur_id;
        cur_id++;
    });

    export let score = 0;
    export let active: boolean;
    export let computer: boolean;
</script>

<div
    class='vert'
    style:user-select="none"
    style:flex-direction={down ? 'column-reverse' : 'column'}
    style:justify-items={right ? 'flex-end' : 'flex-start'}
>
    <div class='hori' style:flex-direction={right ? 'row-reverse' : 'row'}>
        <span class='playername' style:text-align={right ? 'right' : 'left'}>Player {id+1}</span>
    </div>
    <span class='playerscore' style:text-align={right ? 'right' : 'left'}>{score}</span>
    {#if !computer}
        {#if active}
            <div class='hori' style:flex-direction={right ? 'row-reverse' : 'row'}>
                <button
                    on:click={leaveRoundClicked}
                    style:margin-left={right ? 'auto' : '0'}
                    style:margin-right={right ? '0' : 'auto'}
                    class='leaveround'
                >Leave Round</button>
                <button
                    on:click={() => {computer = true}}
                    style:margin-left={right ? 'auto' : '0'}
                    style:margin-right={right ? '0' : 'auto'}
                    class='leaveround'
                >Computerise</button>
            </div>
        {:else}
            <span style:text-align={right ? 'right' : 'left'} class='leftround'>Left Round</span>
        {/if}
    {:else}
        {#if active}
            <span style:text-align={right ? 'right' : 'left'} class='leftround'>In Round</span>
        {:else}
            <span style:text-align={right ? 'right' : 'left'} class='leftround'>Left Round</span>
        {/if}
    {/if}
</div>

<style lang='scss'>
    @use 'colours';

    .leftround {
        color: colours.$b_inv;
    }

    .leaveround {
        background-color: colours.$b_med;
        border: 2px solid colours.$b_low;
        color: colours.$b_inv;
        width: 10em;
    }

    button:active {
        background-color: colours.$b_high;
    }

    .leaveround {
        font-size: 14px;
    }

    .hori {
        display: flex;
        flex-direction: row;
    }

    .vert {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .playername {
        font-size: 14px;
    }

    .playerscore {
        font-size: 26px;
        color: colours.$f_low;
    }
</style>
