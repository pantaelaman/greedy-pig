<script lang='ts'>
    import { createEventDispatcher } from 'svelte';
    import { fade } from 'svelte/transition';
    import Player from './Player.svelte';
    import Die from './Die.svelte';

    let dispatch = createEventDispatcher();

    let show_pig = false;

    let dieroll: number;
    let scores = [0, 0, 0, 0];
    let prev_scores = scores;
    let player_states = [true, true, true, true];
    let player_computers = [false, false, false, false];

    let round = 1;

    function computerPlayer(player_num) {
        let prob_threshold = (1/289) * Math.pow(scores[player_num] - prev_scores[player_num], 2);
        if (Math.random() < prob_threshold) {
            leaveRound(player_num);
        }
    }

    function nextRound() {
        if (round == 5) {
            dispatch('gameover', {scores});
        }
        prev_scores = scores;
        round = round + 1;
        player_states = [true, true, true, true];
        dieroll = -1;
    }

    function onRoll() {
        if (dieroll == 4) {
            if (round < 5) show_pig = true;
            for (let id in player_states) {
                if (player_states[id]) {
                    scores[id] = prev_scores[id];
                }
            }
            nextRound()
        } else {
            scores = scores.map((score, idx) => {
                if (player_states[idx]) {
                    return score + dieroll;
                } else {
                    return score;
                }
            });
        }
        player_computers.forEach((comp, idx) => {
            if (comp) computerPlayer(idx);
        })
    }

    function leaveRound(player: number) {
        player_states[player] = false;
        if (!player_states.includes(true)) {
            nextRound();
        }
    }
</script>

{#if show_pig}
    <div
        class="announcement"
        transition:fade
        on:introend={() => {
            setTimeout(() => {
                show_pig = false;
            }, 1000);
        }}
    >
        <div class="subannouncement">
            <h1>Greedy Pig!</h1>
        </div>
    </div>
{/if}

<main>
    <div class="playertl"><Player
        bind:active={player_states[0]}
        bind:score={scores[0]}
        bind:computer={player_computers[0]}
        on:leaving={() => leaveRound(0)}
        /></div>
    <div class="round">
        <h1 style:text-align='center'>Round {round}</h1>
    </div>
    <div class="playertr"><Player
        right
        bind:active={player_states[1]}
        bind:score={scores[1]}
        bind:computer={player_computers[1]}
        on:leaving={() => leaveRound(1)}
        /></div>
    <div class="die"><Die bind:number={dieroll} on:roll={onRoll}/></div>
    <div class="playerll"><Player
        down
        bind:active={player_states[2]}
        bind:score={scores[2]}
        bind:computer={player_computers[2]}
        on:leaving={() => leaveRound(2)}
        /></div>
    <div class="playerlr"><Player
        right down
        bind:active={player_states[3]}
        bind:score={scores[3]}
        bind:computer={player_computers[3]}
        on:leaving={() => leaveRound(3)}
        /></div>
</main>

<style lang='scss'>
    @use 'colours';

    main {
        display: grid;
        gap: 10px;
        grid: 1fr 3fr 1fr / 1fr 2fr 1fr;
        margin: 0;
        padding: 0;

        > * {
            padding: 10px;
        }
    }

    .announcement {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: vertical;
        align-items: center;
        
        > .subannouncement {
            display: flex;
            height: 10em;
            width: 100%;
            flex-direction: vertical;
            align-items: center;
            background-color: colours.$b_inv;

            > h1 {
                width: 100%;
                color: colours.$f_inv;
                text-align: center;
            }
        }
    }

    .playertl {
        grid-row: 1;
        grid-column: 1;
    }

    .playertr {
        grid-row: 1;
        grid-column: 3;
    }

    .playerll {
        grid-row: 3;
        grid-column: 1;
    }

    .playerlr {
        grid-row: 3;
        grid-column: 3;
    }

    .die {
        grid-row: 2;
        grid-column: 2;
        padding-left: 20px;
        padding-right: 20px;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
