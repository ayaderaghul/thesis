function onoff(element, value) {
    element.setAttributeNS(null, 'opacity', value);
}
function on(element) {
    onoff(element, 1);
}
function off(element) {
    onoff(element, 0);
}
function narrate(str, chan) {
    document.querySelector(chan).innerHTML = str
}
function selectall(classtr) {
    return document.querySelectorAll(classtr);
}
function selectone(classtr) {
    return document.querySelector(classtr);
}
function onall(classtr) {
    let all  = selectall(classtr);
    all.forEach(function (element) { on(element) });
}
function offall(classtr) {
    let all  = selectall(classtr);
    all.forEach(function (element) { off(element) });
}
function onone(classtr) {
    on(selectone(classtr));
}
function offone(classtr) {
    off(selectone(classtr));
}



function step0() {
    onall("*.reset0");
    offall("*.star0");
    narrate("", ".cap0");
}
function step1() {
    offall("*.p2pay0");
    narrate("This is what it looks like from the player 1's point of view.", ".cap0");
}
function step2() {
    offall("*.p1payp2d0");
    narrate("P1 proceeds to think about the course of action of P2: what if P2 cooperates?", ".cap0");
}
function step3() {
    onone("text.p1starp2c0");
    narrate("If P2 cooperates, I have 2 choices: to cooperate or to defect. If I cooperate, I get 3. If I defect, I get 4. Because 4 > 3, I choose to defect. A star is put next to number 4. <br> <i>Weak assumption of rationality: A bigger payoff is prefered.</i>", ".cap0")
}
function step4() {
    offone("text.p1starp2c0");
    offall("*.p1payp2c0");
    onone("text.p1starp2d0");
    onall("*.p1payp2d0");
    narrate("If P2 defects, I have 2 choices: to cooperate to get 0 or to defect to get 1. Because 1 > 0, I choose to defect. A star is put next to number 1. <br> <i>Weak assumption of rationality: A bigger payoff is preferred</i>", ".cap0");
}
function step5() {
    offone("text.p1starp2d0");
    offall("*.p1pay0");
    onone("text.p2strat0");
    onall("*.p2pay0");
    narrate("Now let's stand in Player 2's shoes.", ".cap0");
}
function step6() {
    onone("text.p2starp1c0");
    offall("*.p2payp1d0");
    narrate("P2 thinks that: if P1 cooperates, I can get 3 or 4 depending whether I cooperate or defect. Because 4 > 3, I prefer to defect. <br> <i> Weak assumption of rationality: A bigger payoff is preferred</i>", ".cap0");
     }
function step7() {
    offone("text.p2starp1c0");
    offall("*.p2payp1c0");
    onall("*.p2payp1d0");
    onone("text.p2starp1d0");    
    narrate("P2 thinks that: if P1 defects, I can get 0 or 1 depending whether I cooperate or defect. Because 1 > 0, I prefer to defect. <br> <i> Weak assumption of rationality: A bigger payoff is preferred</i>", ".cap0");
}
function step8() {
    onall("*.reset0");
    onall("*.star0");
    narrate("You see that the cell with two stars is the fixedd point between two players' reasoning. It is a Nash equilibrium.", ".cap0");
}
function colorne() {
	     nes = selectall("table td.ne");
	     nes.forEach(function (element) { element.style = "color:#f4656d"  });
         narrate("Can you think about the efficiency of these Nash equilibria? Like, take the point (2,8). If you choose to claim 2 I should claim 8 because it is the optimised number. If I claim x < 8, I would get x but x < 8 so I feel it is wasted. If I claim x > 8, the sum x + 2 > 10 hence we both get 0, since 0 < 8, I guess 8 is the optimal choice.", ".ans0")
	 }
function answer() {
    narrate("In each round, there are 3 possible actions. Hence, for a repeated game of n rounds, the number of strategies is 3<sup>n</sup>.", "span.ans")
}


         function IIIstep0() {
             offall("*.reset0");
             narrate("In the begining there was this one.",".cap0")
         };
         function IIIstep1() {
             onone("circle.initstate");
             narrate("The circle with thick border is the initial state. This machine has only one state which is also the initial state.", ".cap0");
         }
         function IIIstep2() {
             onone("text.initact");
             narrate("The letter C means that in this state the machine would play Cooperate.", ".cap0");
         }
         function IIIstep3() {
             onall("*.arrow");
             narrate("The arrow points to the next state that the machine would switch to from this current state. In this case, the arrow points to the same circle hence the machine stays in this state in the next move.", ".cap0");
         }
         function IIIstep4() {
             onone("text.ctit");
             onone("text.other");
             narrate("The letters on the arrow are the action of the other player. In this case, both the actions C and D of the other player triggers the same reaction from this machine: it stays in the same state of playing Cooperate. This one is therefore called the cooperator.", ".cap0")
         }
         function settored(element, where) {
             element.setAttributeNS(null, where, "#f4656d");
         }
         function tored(element) {
             if (element.tagName == "circle") {
             settored(element, 'stroke');
             }
             if (element.tagName == "text") {
             settored(element, 'fill');
             }
             if (element.tagName == "polygon") {
             element.style = "fill:#f4656d";
             }
         }
         function toredone(classtr) {
            tored(selectone(classtr));
         }
         function IIIstep5() {
             toredone("circle.arrow");
             toredone("circle.initstate");
             toredone("polygon.arrow");
             toredone("text.initact");
             toredone("text.other");
             narrate("D", "text.initact");
             onone("text.dtit");
             narrate("Here is another machine. The only difference is that this one plays Defect forever.", ".cap0");
         }
         function IIIstep6() {
             onall("text.result");
             narrate("If we match these two together, one would play C forever, the other would play D forever, regardless of whatever their opponent does", ".cap0");
         }
     

     function s0() {
        onall("*.full");
        narrate("", ".cap1");
     }
     function s1() {
         offall("*.full");
         onone("circle.init");
         narrate("Here is the initial state of the machine.", ".cap1");
     }
     function s2() {
         onone("text.initc");
         narrate("In this initial state, the machine plays C. Which means that it starts out to be nice.", ".cap1");
     }
     function s3() {
         onall("*.arrowc");
         narrate("If the other player plays C, it continues to stay in the same state of playing C.", ".cap1");
     }
     function s4() {
     onall("*.arrowd");
     narrate("If the other player plays D, it switches to the state of playing D.", ".cap1");
     }
     function s5() {
     onall("*.arrowd2");
     narrate("From the state of playing D, if the other player continues to defect, it continues to defect also.", ".cap1")
     }
     function s6() {
     onall("*.arrowc2");
     narrate("However, if the other player plays C, it also reverts to the state of playing C. It forgives, <i>sort of</i>.", ".cap1")
     }
     function s7() {
     onall("*.coer");
     narrate("If you match Tit for Tat with the Cooperator, they would play Cooperate forever. Do you know why?", ".cap1");
     }
     function s8() {
         es = selectall("*.defector");
         es.forEach(function (element) {tored(element)});
         narrate("D","text.defact");
         narrate("The Defector","text.deftit");
         narrate("Defector: D D D D D D D ...", "text.defres");
     }
function displaysvg(classtr) {
selectone(classtr).setAttributeNS(null, 'style', 'display:block');
}
function drawgt() {
displaysvg(".ex0");
       }
      
           function match() {
           displaysvg("p.answer1");
       }
function drawcl() {
displaysvg(".ex2");
}



function III3step0() {
    offall("*.reset");
    narrate("", ".cap3");
}

function III3step1() {
    onall("*.init");
    narrate("It starts out playing Medium.",".cap3");
}

function III3step2() {
    onall("*.initm");
    narrate("If the other plays M, it keeps playing M.", ".cap3");
}

function III3step3() {
    onall("*.initl");
    onall("*.h");
    narrate("If the other plays L, it switches to play H. You see that this one just wants to be efficient. If you claim 5, I claim 5. If you claim 2, I switch to claim 8.", ".cap3")
}
function III3step4() {
    onall("*.inith");
    onall("*.l");
    narrate("From the initial state, if the other claims 8, it is also willing to switch to claim 2. If you go low I go high. If you go high, I don't mind going low.", ".cap3")
}
function III3step5() {
    onall("*.lact");
    narrate("From the other two states, the philosophy is the same. For example, from state Low, if the other plays M, it goes back to the Medium state. If the other plays L, it switches to High state. If the other plays H, it stays in the same state of playing Low.", ".cap3");
}
function III3step6() {
    onall("*.hact");
    narrate("From the H state, it is the same: the machine plays best response to whatever the other plays. If the other plays x, it plays 10 - x to efficiently scoop up the rest of the pie. Can you guess its name?", ".cap3");
}
function III3step7() {
    onone("text.name");
    narrate("Of course it is the flexible machine.", ".cap3")
}