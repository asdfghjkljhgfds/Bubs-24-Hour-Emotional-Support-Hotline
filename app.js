const data=[
['🥺','I miss Bubs','Missing Bubs',["I miss you too, Bubby. Distance is annoying, but it doesn't get to change us. Every day apart is one day closer to the next hug. 💚","Close your eyes and imagine the biggest green-dino hug possible. That's currently being shipped express from Bubs to Bubby. 🦖💚"]],
['🫂','I need a hug','Bubs Hug',["Come here, Bub. No fixing anything, no explaining anything—just a giant Bubs hug and a reminder that you're loved. 🩷","Official Support Line prescription: one very long hug, forehead kisses, and absolutely no being mean to yourself tonight. ❤️"]],
['🧠','I’m overwhelmed','One Thing at a Time',["You do not have to solve your whole life tonight. Pick the next tiny thing, then breathe. Everything else can wait. I'm proud of you for making it this far today.","Bubby, put the giant invisible backpack down for a minute. School, home, people, health—none of it has to be carried all at once. 💗"]],
['🌧️','I’m having a bad day','Bad Day Button',["A bad day doesn't change who you are. You're still my Bubby, still loved, still important, and tomorrow gets a fresh page. 💕","You are allowed to have messy days. You don't have to perform happiness for me. Just be Bubby and let Bubs stay beside you. 💚"]],
['✨','I need confidence','Bubby Reminder',["Look at everything you've already done while scared. That's confidence too—not never being afraid, but showing up anyway. I'm SO proud of you.","You are kind, brave, funny, caring, capable, and completely you. Please don't let one rough moment make you forget the whole person I see. 🩷"]],
['✝️','I need some faith','Faith Corner',["You don't have to have every answer to keep taking the next faithful step. I'm praying that you feel peace, strength, and the reminder that you are deeply loved.","Bubs faith reminder: hard seasons are not the whole story. Keep your heart open, keep praying, and take today one step at a time. ❤️"]],
['😂','Make me laugh','Emergency Silly Mode',["BREAKING NEWS: local pink dinosaur remains ridiculously cute despite claiming otherwise. Green dinosaur unavailable for comment because he is too busy missing her. 🦖😂","The Bubs Support Line has reviewed your case and prescribed: 1 stupid FaceTime, 2 terrible jokes, and unlimited Dino nonsense."]],
['🌙','I can’t sleep','Goodnight Bubby',["Nothing else needs to be figured out tonight. Get comfy, let today end, and remember Bubs loves you more than you know. Sleep well, Bubby. 🌙🩷","Put the worries on tomorrow's desk. Tonight's only assignment is rest. I'll still love you exactly the same when you wake up. 💚"]],
['🏆','Tell me you’re proud','SO. SO. PROUD.',["Bubby, I am SO SO proud of you—not just for the big wins, but for every time you keep going, ask for help, try again, or choose courage when nobody else sees it. ❤️","Youth group. The monitor. School. Asking for help. Hard days. You keep showing up through all of it. I hope one day you see even half the strength in yourself that I see in you."]],
['📞','I need Bubs','Priority Support',["BUBBY HAS ACTIVATED PRIORITY BUBS MODE 🚨💚 Your feelings matter. Text or call me when you can and tell me what you need: listening, reassurance, distraction, or just company.","No perfect words required. You can literally say 'Bubs, I need you.' That's enough. ❤️"]],
['💗','How much do you love me?','Maximum Bubby Appreciation',["More than one little website could ever fit. I love your heart, your laugh, your kindness, your weird little moments, and simply getting to call you my Bubby. ❤️","Today, tomorrow, good days, rough days, close together or miles apart: I love you, Bub. That's the easy part. 💚🩷"]],
['🦖','Random Dino','Dino Delivery',["💚🦖 + 🩷🦖 = Bubs & Bubby. Scientific fact. No peer review necessary.","Tiny green Dino reminder: 'Bubbyyyyy, stop being mean to my favorite person!' 💚"]]
];
const box=document.querySelector('#buttons'),modal=document.querySelector('#modal');let current;
data.forEach((x,i)=>{const b=document.createElement('button');b.className='support';b.innerHTML=`<span class='emoji'>${x[0]}</span><b>${x[1]}</b>`;b.onclick=()=>open(i);box.appendChild(b)});
function open(i){current=i;const x=data[i],m=x[3][Math.floor(Math.random()*x[3].length)];document.querySelector('#tag').textContent='THE BUBS SUPPORT LINE';document.querySelector('#mtitle').textContent=x[2];document.querySelector('#message').textContent=m;modal.showModal()}
document.querySelector('.close').onclick=()=>modal.close();document.querySelector('#again').onclick=()=>open(current);modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});

// Live countdown to the next Bubs + Bubby reunion: October 3, 2026.
(function reunionCountdown(){
  const el = document.querySelector('#countdown');
  if (!el) return;
  const reunion = new Date('2026-10-03T00:00:00-04:00');
  const now = new Date();
  const msPerDay = 24 * 60 * 60 * 1000;
  const days = Math.max(0, Math.ceil((reunion - now) / msPerDay));
  if (now >= reunion) {
    el.textContent = "TODAY'S THE DAY ❤️ Go get your Bubby!";
  } else if (days === 1) {
    el.textContent = '1 DAY until Bubs + Bubby are together again 🩷💚';
  } else {
    el.textContent = `${days} DAYS until Bubs + Bubby are together again 🩷💚 • October 3`;
  }
})();


// Emergency Bubby Mode: maximum affection + heart confetti.
const emergencyMessages = [
  "EMERGENCY BUBBY ALERT 🚨🩷 You are loved an absolutely ridiculous amount. You do not have to earn it, prove anything, or have a perfect day. Bubs loves Bubby. End of report. 💚",
  "Maximum Bubs affection deployed! 💚🩷 Whatever is happening right now, you can take it one moment at a time. I am proud of you, I care about you, and I am always happy to hear from my Bubby.",
  "Official diagnosis from the Bubs 24 Hour Emotional Support Line: severe shortage of Bubs hugs. Treatment plan: reassurance now, giant hug October 3. ❤️"
];
function heartBurst(){
  for(let i=0;i<34;i++){
    const h=document.createElement('span');
    h.className='burst-heart'; h.textContent=['💚','🩷','❤️','✨'][Math.floor(Math.random()*4)];
    h.style.left=(45+Math.random()*10)+'vw'; h.style.top=(45+Math.random()*10)+'vh';
    h.style.setProperty('--x',((Math.random()-.5)*90)+'vw'); h.style.setProperty('--y',((-20-Math.random()*75))+'vh');
    h.style.animationDelay=(Math.random()*.2)+'s'; document.body.appendChild(h); setTimeout(()=>h.remove(),1900);
  }
}
document.querySelector('#emergency').onclick=()=>{
  document.querySelector('#tag').textContent='PRIORITY BUBBY SUPPORT';
  document.querySelector('#mtitle').textContent='BUBS IS HERE 🚨💚';
  document.querySelector('#message').textContent=emergencyMessages[Math.floor(Math.random()*emergencyMessages.length)];
  current=9; modal.showModal(); heartBurst();
};

const secrets=[
  "Secret #1: Bubs still smiles when Bubby's name pops up on his phone. 💚",
  "Secret #2: Distance is temporary. Being Bubs + Bubby is not. 🩷💚",
  "Secret #3: If you found this, you are legally owed one extra-long Bubs hug on October 3. ❤️",
  "Secret #4: The green dinosaur thinks the pink dinosaur is his favorite person. Shocking, I know. 🦖",
  "Secret #5: Bubs is proud of Bubby on ordinary days too—not only the hard ones. 🩷"
];
let secretClicks=0;
document.querySelector('#secret').onclick=()=>{
  const t=document.querySelector('#secretText'); t.hidden=false;
  t.textContent=secrets[secretClicks%secrets.length]; secretClicks++;
};
