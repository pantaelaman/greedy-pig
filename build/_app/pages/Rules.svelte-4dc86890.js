import{S as ce,i as ue,s as fe,e as r,t as i,k as u,c as s,a as n,h,d as a,m as f,b as Y,g as Z,J as e,K as ye,n as ee,L as pe}from"../chunks/index-eea98cb7.js";function ve(G){let o,_,P,c,m,O,B,t,g,N,R,w,S,U,y,$,p,E,C,D,b,H,J,K,A,M,j,L,z,F,I,Q,V,k,W,X,te;return{c(){o=r("button"),_=i("Back"),P=u(),c=r("main"),m=r("h1"),O=i("Greedy Pig"),B=u(),t=r("ol"),g=r("li"),N=i("The game is played with 4 players and a die."),R=u(),w=r("li"),S=i("There are 5 rounds."),U=u(),y=r("li"),$=i(`A round ends when either:
            `),p=r("ul"),E=r("li"),C=i("every player has left, or"),D=u(),b=r("li"),H=i('a 4 is rolled on the die (called a "Greedy Pig")'),J=i(`
            After a round ends, all players who left that round return to play.`),K=u(),A=r("li"),M=i("At the end of all 5 rounds, the player(s) with the highest score win."),j=u(),L=r("li"),z=i(`At the start of the game, the die is rolled. All players add the die's value to their score,
            unless the die's value is a four, in which case all players who have not yet left the round
            lose any points they gained that round, and, per rule 3, the round ends, and all players
            become active again.`),F=u(),I=r("li"),Q=i(`After the die is rolled, any number of players can choose to leave the round. Per rule 3,
            if every player leaves or has left, the round ends, and all players become active again.`),V=u(),k=r("li"),W=i(`Once everyone is happy with their decision to stay in or leave, the die is rolled again and
            the process started over again until the end of the 5th round.`),this.h()},l(d){o=s(d,"BUTTON",{class:!0});var v=n(o);_=h(v,"Back"),v.forEach(a),P=f(d),c=s(d,"MAIN",{class:!0});var T=n(c);m=s(T,"H1",{});var ae=n(m);O=h(ae,"Greedy Pig"),ae.forEach(a),B=f(T),t=s(T,"OL",{class:!0});var l=n(t);g=s(l,"LI",{});var le=n(g);N=h(le,"The game is played with 4 players and a die."),le.forEach(a),R=f(l),w=s(l,"LI",{});var re=n(w);S=h(re,"There are 5 rounds."),re.forEach(a),U=f(l),y=s(l,"LI",{});var q=n(y);$=h(q,`A round ends when either:
            `),p=s(q,"UL",{});var x=n(p);E=s(x,"LI",{});var se=n(E);C=h(se,"every player has left, or"),se.forEach(a),D=f(x),b=s(x,"LI",{});var ne=n(b);H=h(ne,'a 4 is rolled on the die (called a "Greedy Pig")'),ne.forEach(a),x.forEach(a),J=h(q,`
            After a round ends, all players who left that round return to play.`),q.forEach(a),K=f(l),A=s(l,"LI",{});var oe=n(A);M=h(oe,"At the end of all 5 rounds, the player(s) with the highest score win."),oe.forEach(a),j=f(l),L=s(l,"LI",{});var ie=n(L);z=h(ie,`At the start of the game, the die is rolled. All players add the die's value to their score,
            unless the die's value is a four, in which case all players who have not yet left the round
            lose any points they gained that round, and, per rule 3, the round ends, and all players
            become active again.`),ie.forEach(a),F=f(l),I=s(l,"LI",{});var he=n(I);Q=h(he,`After the die is rolled, any number of players can choose to leave the round. Per rule 3,
            if every player leaves or has left, the round ends, and all players become active again.`),he.forEach(a),V=f(l),k=s(l,"LI",{});var de=n(k);W=h(de,`Once everyone is happy with their decision to stay in or leave, the die is rolled again and
            the process started over again until the end of the 5th round.`),de.forEach(a),l.forEach(a),T.forEach(a),this.h()},h(){Y(o,"class","backbutton svelte-acw8nq"),Y(t,"class","svelte-acw8nq"),Y(c,"class","svelte-acw8nq")},m(d,v){Z(d,o,v),e(o,_),Z(d,P,v),Z(d,c,v),e(c,m),e(m,O),e(c,B),e(c,t),e(t,g),e(g,N),e(t,R),e(t,w),e(w,S),e(t,U),e(t,y),e(y,$),e(y,p),e(p,E),e(E,C),e(p,D),e(p,b),e(b,H),e(y,J),e(t,K),e(t,A),e(A,M),e(t,j),e(t,L),e(L,z),e(t,F),e(t,I),e(I,Q),e(t,V),e(t,k),e(k,W),X||(te=ye(o,"click",G[0]),X=!0)},p:ee,i:ee,o:ee,d(d){d&&a(o),d&&a(P),d&&a(c),X=!1,te()}}}function _e(G){let o=pe();function _(){o("back")}return[_]}class ge extends ce{constructor(o){super();ue(this,o,_e,ve,fe,{})}}export{ge as default};