<script lang="ts">
    import Welcome from './Welcome.svelte';
    import Rules from './Rules.svelte';
    import Game from './Game.svelte';
    import GameOver from './GameOver.svelte';
    import { reset as resetPlayers } from './Player.svelte';

    enum ProgramState {
        Welcome,
        Rules,
        Game,
        GameOver,
    }

    let state = ProgramState.Welcome;

    let winner = "Unknown";
    let score = 0;
    let multiple = false;

    function handleWin(event: CustomEvent) {
        let winners = [];
        let highest = -1;
        event.detail.scores.forEach((score: number, index: number) => {
            if (score > highest) {
                winners = [index];
                highest = score;
            } else if (score == highest) {
                winners.push(index);
            }
        });
        let winners_count = winners.length;
        multiple = winners_count > 1;
        if (multiple) {
            if (winners_count == 2) {
                winner = `Players ${winners[0] + 1} and ${winners[1] + 1}`
            } else {
                winner = winners.reduce((acc, cv, idx) => {
                    console.log(acc);
                    if (idx != winners_count - 1) {
                        return acc + `${cv + 1}, `;
                    } else {
                        return acc + `and ${cv + 1}`;
                    }
                }, "Players ");
            }
        } else {
            winner = `Player ${winners[0] + 1}`;
        }
        score = highest;

        console.log(`Score: ${score}, Multiple?: ${multiple}, Winner(s): ${winner}`);

        state = ProgramState.GameOver;
    }

    function resetState() {
        resetPlayers();
        state = ProgramState.Game;
    }
</script>

{#if state == ProgramState.Welcome}
<Welcome
    on:startgame={() => {state = ProgramState.Game}}
    on:showrules={() => {state = ProgramState.Rules}}
/>
{:else if state == ProgramState.Rules}
<Rules on:back={() => {state = ProgramState.Welcome}}/>
{:else if state == ProgramState.Game}
<Game on:gameover={handleWin}/>
{:else if state == ProgramState.GameOver}
<GameOver winner={winner} score={score} multiple={multiple} on:playagain={resetState}/>
{/if}

