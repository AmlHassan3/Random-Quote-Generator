
var text = document.getElementById('text');
var btn = document.getElementById("btn");
btn.addEventListener("click",(eo) => {
    eo.preventDefault();
    var qoute = [
        `
    <div class="txtBox">
    <div class="text-icon">
        <p><i class="fa-solid fa-quote-left"></i> <span>I'm selfish,
        impatient and a little insecure. I make mistakes, I am out of control and at times
        hard to handle. But if you can't handle me at my worst, then you sure as hell don't
        deserve me at my best.</span> <i class="fa-solid fa-quote-right"></i></p>
    </div>
    <p class="name"><span>― Marilyn Monroe</span></p>
    </div>
    `,
    `
    <div class="txtBox">
    <div class="text-icon">
        <p><i class="fa-solid fa-quote-left"></i> <span> Don’t walk in front of me… I may not follow
        Don’t walk behind me… I may not lead
        Walk beside me… just be my friend </span> <i class="fa-solid fa-quote-right"></i></p>
    </div>
    <p class="name"><span>― Albert Camus</span></p>
    </div>
    `,
    `
    <div class="txtBox">
    <div class="text-icon">
        <p><i class="fa-solid fa-quote-left"></i> <span>The opposite of love is not hate, it's indifference.
        The opposite of art is not ugliness, it's indifference. The opposite of faith is not heresy,
        it's indifference. And the opposite of life is not death, it's indifference.
        </span> <i class="fa-solid fa-quote-right"></i></p>
    </div>
    <p class="name"><span>― Elie Wiesel</span></p>
    </div>
    `,
    `
    <div class="txtBox">
    <div class="text-icon">
        <p><i class="fa-solid fa-quote-left"></i> <span>Two things are infinite: the universe and human stupidity;
        and I'm not sure about the universe.
        </span> <i class="fa-solid fa-quote-right"></i></p>
    </div>
    <p class="name"><span>― Albert Einstein</span></p>
    </div>
    `,
    `
    <div class="txtBox">
    <div class="text-icon">
        <p><i class="fa-solid fa-quote-left"></i> <span>Be who you are and say what you feel,
        because those who mind don't matter, and those who matter don't mind.
        </span> <i class="fa-solid fa-quote-right"></i></p>
    </div>
    <p class="name"><span>― Bernard M. Baruch</span></p>
    </div>
    `,
    `
    <div class="txtBox">
    <div class="text-icon">
        <p><i class="fa-solid fa-quote-left"></i> <span>You've gotta dance like there's nobody watching,
        Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.
        </span> <i class="fa-solid fa-quote-right"></i></p>
    </div>
    <p class="name"><span>― William W. Purkey</span></p>
    </div>
    `,
    `
    <div class="txtBox">
    <div class="text-icon">
        <p><i class="fa-solid fa-quote-left"></i> <span>If you want to know what a man's like, take a good look at
        how he treats his inferiors, not his equals.
        </span> <i class="fa-solid fa-quote-right"></i></p>
    </div>
    <p class="name"><span>― J.K. Rowling, Harry Potter and the Goblet of Fire</span></p>
    </div>
    `,
    `
    <div class="txtBox">
    <div class="text-icon">
        <p><i class="fa-solid fa-quote-left"></i> <span>Books are the ultimate Dumpees: put them down and they’ll wait for you forever;
        pay attention to them and they always love you back.</span> <i class="fa-solid fa-quote-right"></i></p>
    </div>
    <p class="name"><span>― John Green</span></p>
    </div>
    `,
    `
    <div class="txtBox">
    <div class="text-icon">
        <p><i class="fa-solid fa-quote-left"></i>
        <span>Never forget what you are,
        for surely the world will not. Make it your strength. Then it can never be
        your weakness. Armour yourself in it, and it will never be used to hurt you.
        </span> <i class="fa-solid fa-quote-right"></i></p>
    </div>
    <p class="name"><span>― George R.R. Martin</span></p>
    </div>
    `,
    `
    <div class="txtBox">
    <div class="text-icon">
        <p><i class="fa-solid fa-quote-left"></i>
        <span>And above all, watch with glittering eyes the whole world around you
        because the greatest secrets are always hidden in the most unlikely places.
        Those who don't believe in magic will never find it.
        </span> <i class="fa-solid fa-quote-right"></i></p>
    </div>
    <p class="name"><span>― Roald Dahl</span></p>
    </div>
    `,
    `
    <div class="txtBox">
    <div class="text-icon">
        <p><i class="fa-solid fa-quote-left"></i>
        <span>Let me tell you this: if you meet a loner, no matter what they tell you,
        it's not because they enjoy solitude. It's because they have tried to blend
        into the world before, and people continue to disappoint them.
        </span> <i class="fa-solid fa-quote-right"></i></p>
    </div>
    <p class="name"><span>― Jodi Picoult</span></p>
    </div>
    `
    ]
    text.innerHTML = qoute[Math.ceil(Math.random()*qoute.length-1)];
});
