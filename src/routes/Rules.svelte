<script>
    import { createEventDispatcher } from 'svelte';

    let dispatch = createEventDispatcher();

    function back() {
        dispatch('back');
    }
</script>

<button class='backbutton' on:click={back}>Back</button>
<main>
    <h1>Greedy Pig</h1>
    <ol>
        <li>The game is played with 4 players and a die.</li>
        <li>There are 5 rounds.</li>
        <li>A round ends when either:
            <ul>
                <li>every player has left, or</li>
                <li>a 4 is rolled on the die (called a "Greedy Pig")</li>
            </ul>
            After a round ends, all players who left that round return to play.
        </li>
        <li>At the end of all 5 rounds, the player(s) with the highest score win.</li>
        <li>
            At the start of the game, the die is rolled. All players add the die's value to their score,
            unless the die's value is a four, in which case all players who have not yet left the round
            lose any points they gained that round, and, per rule 3, the round ends, and all players
            become active again.
        </li>
        <li>
            After the die is rolled, any number of players can choose to leave the round. Per rule 3,
            if every player leaves or has left, the round ends, and all players become active again.
        </li>
        <li>
            Once everyone is happy with their decision to stay in or leave, the die is rolled again and
            the process started over again until the end of the 5th round.
        </li>
    </ol>
</main>

<style lang='scss'>
    @use 'colours';

    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        > ol {
            margin: 0 10%;
        }
    }

    .backbutton {
        position: absolute;
        top: 0;
        left: 0;
        margin: 10px;
    }

    button:active {
        background-color: colours.$b_high;
    }
</style>
