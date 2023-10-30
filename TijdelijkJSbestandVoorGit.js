let rl = require("readline-sync");
let sin_wrath = 0;
let sin_greed = 0;
let sin_pride = 0;
let sin_envy = 0;
let sin_gluttony = 0;
let sin_lust = 0;
let sin_sloth = 0;
let blessing = 0;
let Indecisive = 0;

function CheckEnd() {
    if (blessing == 15) {
        BlessingEnd();
    } else if (sin_wrath == 7) {
        WrathEnd();
    } else if (sin_greed == 7) {
        GreedEnd();
    } else if (sin_pride == 7) {
        PrideEnd();
    } else if (sin_envy == 7) {
        EnvyEnd();
    } else if (sin_gluttony == 7) {
        GluttonyEnd();
    } else if (sin_lust == 7) {
        LustEnd();
    } else if (sin_sloth == 7) {
        SlothEnd();
    } else {
        console.log("       ");
    }
}

function BlessingEnd() {
    console.log("");
}

function WrathEnd() {
    console.log("");
}

function GreedEnd() {
    console.log("");
}

function PrideEnd() {
    console.log("");
}

function EnvyEnd() {
    console.log("");
}

function GluttonyEnd() {
    console.log("Damn you ate so much that you were sent to the gluttony part of hell. You may think that this is heaven with just how much food there is but no, they torture you day in day out. How do they torture you you may ask? Well they basically just use, abuse and insult you. When they needed your data for hell (because hell is organized) they took a picture of your fatass and it's still printing a year later, when they went to weigh your fatass you broke the scale, they needed a bigger door for you fatass to go trough, they use your fatass for sissiphus to roll up hill, your fatass got arrested for having 20 pounds of crack, they told your fatass to get off the beach because the tide wanted to come in, your fatass is so big when you go to the zoo the animals feed you, if weight was a number the yours would be unlisted, your fatass so fat the escape velocity at your surface exceeds 3.0x108 m/s, your fatass got pesos in your left pocket and yen in the right one, your fatass measurements are 36-24-36 and your other arm is just as big. Welcome to hell.");
    console.log("     ");
    console.log("Ending: Gluttony");
    console.log("     ");
    console.log("Wrath counter: " + sin_wrath);
    console.log("Greed counter: " + sin_greed);
    console.log("Pride counter: " + sin_pride);
    console.log("Envy counter: " + sin_envy);
    console.log("Lust counter: " + sin_lust);
    console.log("Gluttony counter: " + sin_gluttony);
    console.log("Sloth counter: " + sin_sloth);
    console.log("Blessing counter: " + blessing);
}

function LustEnd() {
    console.log("");
}

function SlothEnd() {
    console.log("");
}

function NeutralEnd() {
    console.log("You made too many different choises or I just got too lazy to make up more story, either way you didn't get a solid ending so enjoy being neutral.");
    console.log("    ");
    console.log("Ending: Neutral");
    console.log("    ");
    console.log("Wrath counter: " + sin_wrath);
    console.log("Greed counter: " + sin_greed);
    console.log("Pride counter: " + sin_pride);
    console.log("Envy counter: " + sin_envy);
    console.log("Lust counter: " + sin_lust);
    console.log("Gluttony counter: " + sin_gluttony);
    console.log("Sloth counter: " + sin_sloth);
    console.log("Blessing counter: " + blessing);
}

function SecretEnd() {
    console.log("");
}

function NameQuestion() {
    var name = rl.question("Hello user what is your name?");
    if (name == "E" || name == "evert" || name == "Derpo") {
        console.log("Welcome creator, you wish for me to test the game? It would be my pleaasure.");
        console.log("         ");
        StartGame();
    } else if (name == "Tyler" || name == "tyler") {
        console.log("Het ziet eruit dat je een hele speciale jongen bent! Ik hoop dat je dit kan begrijpen en spelen.");
        StartGame();
    } else {
        console.log("Welcome " + name + ", Let's start the game shal we.");
        console.log("          ");
        StartGame();
    }
}

NameQuestion();

function StartGame() {
    console.log("You open your eyes and start thinking about when you closed them. You appear to be in a room with only a couch and a door to leave. After looking arround and thinking for about a minute you decide that there is nothing more in this room for you and you decide to leave. As soon as you open the door to leave a mysterious wave of knowledge hits you and you have an epiphany. You don't know how you know but you know that you are in purgatory and your soul is abbout to be judged to see where to send you. Well guess you died, might as well move on.");
    console.log("          ");
    console.log("As you walk out of the door you are transported to a street of wich you can only assume that it is Ney-York city. You see an old lady about to cross the street on her own. If she tries to cross the street with her speed and accident will surely befall on her. What do you do?");
    console.log("          ");
    console.log("1.I have seen this in the movies, I have to help her cross the street. (blessing) ");
    console.log("2.Why would I help her, if she gets hit it's het own fault. (sloth) ");
    console.log("3.Well I'm dead anyways so she's not even real, I'm gonna push her in front of a car myself. (wrath) ");
    console.log("          ");
    const answerStart = rl.question("Please input the number of your choise");
    if (answerStart == "1") {
        blessing++
        console.log("You decide to help the old lady cross the street. Luckily nothing befals on you and you make it accross safely.");
        CheckEnd();
        Question1();
    } else if (answerStart == "2") {
        sin_sloth++
        console.log("You decide to not do anything and just watch what happens, and as I, The Narrator, had speculated, she gets hit by a car.");
        CheckEnd();
        Question2();
    } else if (answerStart == "3") {
        sin_wrath++
        console.log("You deccide to push the old lady in front of the car and watch what happens. of course the lady gets pushed into the bussteling trafic of New-York and gets hit by a car.");
        CheckEnd();
        Question2();
    } else {
        console.log("Sorry, that is not an option please try again.");
        StartGame();
    }
}

function Question1() {
    console.log("           ");
    console.log("On the other side of the road the lady thanks you and says that she could not have made it accross on her own. Wait a second, she didn't give you a reward?! I as the narrator would not have accepted that.");
    console.log("           ");
    console.log("What do you say to her, maybe demand money or something to make this interesting");
    console.log("           ");
    console.log("1.Yeah I helped you and all but where is my reward? (Greed) ");
    console.log("2.You should be praising me for how awsome I am, not just thanking me. (Pride) ");
    console.log("3.You're welcome honored elder. (Blessing) ");
    console.log("           ");
    const answerQuestion1 = rl.question("Please input the number of your choise");
    if (answerQuestion1 == "1") {
        sin_greed++
        console.log("You decide that for your good deed you should be rewarded with whatever currency they use in purgatory.")
        CheckEnd();
        Question3();
    } else if (answerQuestion1 == "2") {
        sin_pride++
        console.log("You decide to gloat to an old lady in purgatory who probably isn't even real, I don't think you should be gloating with that body of yours.");
        CheckEnd();
        Question4();
    } else if (answerQuestion1 == "3") {
        blessing++
        console.log("You decide to not demand for anything and just walk away, how...boring of you.");
        CheckEnd();
        Question5();
    } else {
        console.log("Sorry, that is not an option please try again.");
        Question1();
    }
}

function Question2() {
    console.log("           ");
    console.log("After the lady gets hit by the car her body flies about 10 meters, or about 32 feet for the weird people, before she stops and lays still on the ground, you look at the lady on the ground and realize that she's still breathing, but you also look at the lady and see a wallet sticking out of her pocket.");
    console.log("           ");
    console.log("Well then, tell me your next move. Oh by the way YOU can't save her anymore so don't even bother trying to help her");
    console.log("           ");
    console.log("1.Take the wallet and make a run for it (greed) ");
    console.log("2.Eh, let someone else call the ambulance I'm good right where I am (sloth) ");
    console.log("3.Finish the job (wrath) ");
    console.log("4.Try to help the lady despite the narrators warning. (Don't do this) ");
    console.log("           ");
    const answerQuestion2 = rl.question("Please input the number of your choise");
    if (answerQuestion2 == "1") {
        sin_greed++
        console.log("You decide to grab the wallet and make a run for it, despite not knowing what the currency is here in purgatory or if they even have currency");
        CheckEnd();
        Question6();
    } else if (answerQuestion2 == "2") {
        sin_sloth++
        console.log("you decide to not do anything and stay where you are");
        CheckEnd();
        Question15();
    } else if (answerQuestion2 == "3") {
        sin_wrath++
        console.log("You decide that the old lady doesn't deserve to live and, hey how convenient, there is now a knive in your hand for some reason.");
        CheckEnd();
        Question16();
    } else if (answerQuestion2 == "4") {
        console.log("You...wait what, why did you help her, you can't help her. I clearly remember telling you that you can't. what are you playing at here. just follow my instructions and kill the lady or something.");
        Question9();
    } else {
        console.log("Sorry, that is not an option please try again.");
        Question2();
    }
}

function Question3() {
    console.log("           ");
    console.log("The lady looks at you weird as you make a demand for money, but eventualy she grabs her walet and gives you a 20. The lady walks away as you look at the money to see if it is real.");
    console.log("           ");
    console.log("Now the real question is what to do with this money");
    console.log("            ");
    console.log("1.HOOKERS! (lust) ");
    console.log("2.Donate to charity (blessing) ");
    console.log("3.HOOKERS! (lust) ");
    console.log("4.Invest in crypto (greed) ");
    console.log("5.HOOKERS! (lust) ");
    console.log("6.See if it's eddible (gluttony) ");
    console.log("7.HOOKERS! (lust) ");
    console.log("            ");
    const answerQuestion3 = rl.question("Please input the number of your choise");
    if (answerQuestion3 == "1" || answerQuestion3 == "3" || answerQuestion3 == "5" || answerQuestion3 == "7") {
        sin_lust++
        console.log("You decide to go get some hookers with your new found money, in the distance you see a brothel and ddecide that that is the perfect place to go");
        CheckEnd();
        Question7();
    } else if (answerQuestion3 == "2") {
        blessing++
        console.log("");
        CheckEnd();
    } else if (answerQuestion3 == "6") {
        sin_gluttony++
        console.log("The money was in fact not eddible but in the distance you see an all you can eat restaurant and decide to go there.");
        CheckEnd();
        Question8();
    } else {
        console.log("Sorry, that is not an option please try again.");
        Question3();
    }
}

function Question4() {
    console.log("           ");
    console.log("");
}

function Question5() {
    console.log("           ");
    console.log("");
}

function Question6() {
    console.log("           ");
    console.log("As you are running with the wallet you notice that no one seems to give a shit about what you are doing.");
    console.log("           ");
    console.log("well now you have indescript currency and you dont know what to do with it, but while you are running, the environment seems to be changing around you and ypu end up on a weird street.")
    console.log("           ");
    console.log("the weird street you are now on only has 2 buildings to go to which one do you choose?");
    console.log("           ");
    console.log("1.The brothel (lust) ");
    console.log("2.The restaurant with the all you can eat sign (gluttony) ");
    console.log("           ");
    const answerQuestion6 = rl.question("Please input the number of your choise");
    if (answerQuestion6 == "1") {
        sin_lust++
        console.log("You decide to go to the brothel and have a good time.")
        CheckEnd();
        Question7();
    } else if (answerQuestion6 == "2") {
        sin_gluttony++
        console.log("It's time to pig out and eat until you can't anymore.");
        CheckEnd();
        Question8();
    } else {
        console.log("Sorry, that is not an option please try again.");
        Question6();
    }
}

function Question7() {
    console.log("           ");
    console.log("You enter the brothel and are immediately greeted by a man who works here as he asks you:");
    console.log("Welcome to the brothel of lust do you prefer men or women?");
    console.log("       ");
    console.log("1.Men (Lust) ");
    console.log("2.Women (Lust) ");
    console.log("3.Is it too much to ask for both (Lust, Lust) ");
    console.log("4.I don't think I should be here (Leave back to choose something else) ");
    console.log("           ");
    const answerQuestion7 = rl.question("Please input the number of your choise");
    if (answerQuestion7 == "1") {
        sin_lust++
        console.log("You told the man that you prefer men");
        CheckEnd();
        Question17();
    } else if (answerQuestion7 == "2") {
        sin_lust++
        console.log("You told the man you prefer women");
        CheckEnd();
        Question17();
    } else if (answerQuestion7 == "3") {
        sin_lust++
        sin_lust++
        console.log("You said to the man that you want both");
        CheckEnd();
        Question18();
    } else if (answerQuestion7 == "4") {
        Indecisive++
        if (Indecisive >= 5) {
            console.log("Jeez you really are indecisive");
            console.log(`%c
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠴⠤⠤⠴⠄⡄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⣠⠄⠒⠉⠀⠀⠀⠀⠀⠀⠀⠀⠁⠃⠆⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⢀⡜⠁⠀⠀⠀⢠⡄⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠑⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⢈⠁⠀⠀⠠⣿⠿⡟⣀⡹⠆⡿⣃⣰⣆⣤⣀⠀⠀⠹⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⣼⠀⠀⢀⣀⣀⣀⣀⡈⠁⠙⠁⠘⠃⠡⠽⡵⢚⠱⠂⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⡆⠀⠀⠀⠀⢐⣢⣤⣵⡄⢀⠀⢀⢈⣉⠉⠉⠒⠤⠀⠿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠘⡇⠀⠀⠀⠀⠀⠉⠉⠁⠁⠈⠀⠸⢖⣿⣿⣷⠀⠀⢰⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⢀⠃⠀⡄⠀⠈⠉⠀⠀⠀⢴⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⢈⣇⠀⠀⠀⠀⠀⠀⠀⢰⠉⠀⠀⠱⠀⠀⠀⠀⠀⢠⡄⠀⠀⠀⠀⠀⣀⠔⠒⢒⡩⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⣴⣿⣤⢀⠀⠀⠀⠀⠀⠈⠓⠒⠢⠔⠀⠀⠀⠀⠀⣶⠤⠄⠒⠒⠉⠁⠀⠀⠀⢸⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⡄⠤⠒⠈⠈⣿⣿⣽⣦⠀⢀⢀⠰⢰⣀⣲⣿⡐⣤⠀⠀⢠⡾⠃⠀⠀⠀⠀⠀⠀⠀⣀⡄⣠⣵⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠘⠏⢿⣿⡁⢐⠶⠈⣰⣿⣿⣿⣿⣷⢈⣣⢰⡞⠀⠀⠀⠀⠀⠀⢀⡴⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠈⢿⣿⣍⠀⠀⠸⣿⣿⣿⣿⠃⢈⣿⡎⠁⠀⠀⠀⠀⣠⠞⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠈⢙⣿⣆⠀⠀⠈⠛⠛⢋⢰⡼⠁⠁⠀⠀⠀⢀⠔⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠚⣷⣧⣷⣤⡶⠎⠛⠁⠀⠀⠀⢀⡤⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠈⠁⠀⠀⠀⠀⠀⠠⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            `, `font-family: monospace`);
            Question6();
        } else {
            Question6();
        }
    } else {
        console.log("Sorry, that is not an option please try again.");
        Question7();
    }
}

function Question8() {
    console.log("           ");
    console.log("It's time to eat. You enter the restaurant, pay the 20 dolars for the all you can eat and now it is time to eat");
    console.log("           ");
    console.log("You eat, and eat, and eat, and you show no sign of stopping");
    console.log("           ");
    console.log("Maybe you should stop?");
    console.log("           ");
    console.log("1.NO, I NEED MORE (gluttony) ");
    console.log("2.Yeah I need to stop (Neutral) ");
    console.log("           ");
    const answerQuestion8 = rl.question("Please input the number of your choise");
    if (answerQuestion8 == "1") {
        sin_gluttony++
        console.log("Damn are you really that hungry?");
        CheckEnd();
        Question8point3();
    } else if (answerQuestion8 == "2") {
        console.log("Okay time to stop");
        NeutralEnd();
    } else {
        console.log("Sorry, that is not an option please try again.");
        Question8();
    }
}

function Question8point3() {
    console.log("           ");
    console.log("I mean the way you're going, you wil have finished this game really quickly");
    console.log("           ");
    console.log("You can stop anytime");
    console.log("           ");
    console.log("1.NO, I NEED MORE (gluttony) ");
    console.log("2.Yeah I need to stop (Neutral) ");
    console.log("           ");
    const answerQuestion8point3 = rl.question("Please input the number of your choise");
    if (answerQuestion8point3 == "1") {
        sin_gluttony++
        console.log("Damn are you really that hungry?");
        CheckEnd();
        Question8point4();
    } else if (answerQuestion8point3 == "2") {
        console.log("Okay time to stop");
        NeutralEnd();
    } else {
        console.log("Sorry, that is not an option please try again.");
        Question8point3();
    }
}

function Question8point4() {
    console.log("           ");
    console.log("It's never good to eat this much.");
    console.log("           ");
    console.log("You can stop anytime");
    console.log("           ");
    console.log("1.NO, I NEED MORE (gluttony) ");
    console.log("2.Yeah I need to stop (Neutral) ");
    console.log("           ");
    const answerQuestion8point4 = rl.question("Please input the number of your choise");
    if (answerQuestion8point4 == "1") {
        sin_gluttony++
        console.log("Take a second to breathe or something");
        CheckEnd();
        Question8point5();
    } else if (answerQuestion8point4 == "2") {
        console.log("Okay time to stop");
        NeutralEnd();
    } else {
        console.log("Sorry, that is not an option please try again.");
        Question8point4();
    }
}


function Question8point5() {
    console.log("           ");
    console.log("You could die at this rate, oh wait you're already dead.");
    console.log("           ");
    console.log("You can stop anytime");
    console.log("           ");
    console.log("1.NO, I NEED MORE (gluttony) ");
    console.log("2.Yeah I need to stop (Neutral) ");
    console.log("           ");
    const answerQuestion8point5 = rl.question("Please input the number of your choise");
    if (answerQuestion8point5 == "1") {
        sin_gluttony++
        console.log("Your fate wil be decided pretty quickly");
        CheckEnd();
        Question8point6();
    } else if (answerQuestion8point5 == "2") {
        console.log("Okay time to stop");
        NeutralEnd();
    } else {
        console.log("Sorry, that is not an option please try again.");
        Question8point5();
    }
}

function Question8point6() {
    console.log("           ");
    console.log("I guess I can't stop you but I'm just warning you.");
    console.log("           ");
    console.log("You can stop anytime");
    console.log("           ");
    console.log("1.NO, I NEED MORE (gluttony) ");
    console.log("2.Yeah I need to stop (Neutral) ");
    console.log("           ");
    const answerQuestion8point6 = rl.question("Please input the number of your choise");
    if (answerQuestion8point6 == "1") {
        sin_gluttony++
        console.log("Hey, It's your loss");
        CheckEnd();
        Question8point7();
    } else if (answerQuestion8point6 == "2") {
        console.log("Okay time to stop");
        NeutralEnd();
    } else {
        console.log("Sorry, that is not an option please try again.");
        Question8point6();
    }
}

function Question8point7() {
    console.log("           ");
    console.log("This is your last chance.");
    console.log("           ");
    console.log("You can stop anytime");
    console.log("           ");
    console.log("1.NO, I NEED MORE (gluttony) ");
    console.log("2.Yeah I need to stop (Neutral) ");
    console.log("           ");
    const answerQuestion8point4 = rl.question("Please input the number of your choise");
    if (answerQuestion8point4 == "1") {
        sin_gluttony++
        console.log("well that'll do it");
        CheckEnd();
    } else if (answerQuestion8 == "2") {
        console.log("Okay time to stop");
        NeutralEnd();
    } else {
        console.log("Sorry, that is not an option please try again.");
        Question8point7();
    }
}

function Question9() {
    console.log("           ");
    console.log("Okay well, I need to take that option out for the next player but first I think I should make clear that you should not piss me off again, Okay? Let's continue with a new senario.");
    console.log("           ");
    console.log("You wake up next to a woman you don't know in a house you don't recognize. Well there is only one logical conclusion here, you have immaculate rizz.");
    console.log("           ");
    console.log("The question now is what to do now, it seems she's still asleep.")
    console.log("           ");
    console.log("1.wake her up and ask to go another round (lust) ");
    console.log("2.Well this isn't a my house so it must be hers, let's take all the valuables I can find and leave (greed) ");
    console.log("3.Well no one can know about this, let's make it so that se can't tell anyone ever again, if you know what I mean (wrath) ");
    console.log("4.Go back to sleep (sloth) ");
    console.log("5.Just leave (blessing) ");
    console.log("           ");
    const answerQuestion9 = rl.question("Please input the number of your choise");
    if (answerQuestion9 == "1") {
        sin_lust++
        console.log("");
        CheckEnd();
        Question10();
    } else if (answerQuestion9 == "2") {
        sin_greed++
        console.log("");
        CheckEnd();
        Question11();
    } else if (answerQuestion9 == "3") {
        sin_wrath++
        console.log("");
        CheckEnd();
        Question12();
    } else if (answerQuestion9 == "4") {
        sin_sloth++
        console.log("");
        Question13();
    } else if (answerQuestion9 == "5") {
        blessing++
        console.log("");
        CheckEnd();
        Question14();
    } else {
        console.log("Sorry, that is not an option please try again.");
        Question9();
    }
}

function Question10() {
    console.log("           ");
    console.log("");
}

function Question11() {
    console.log("           ");
    console.log("");
}

function Question12() {
    console.log("           ");
    console.log("");
}

function Question13() {
    console.log("           ");
    console.log("");
}

function Question14() {
    console.log("           ");
    console.log("");
}

function Question15() {
    console.log("           ");
    console.log("");
}

function Question16() {
    console.log("           ");
    console.log("");
}

function Question17() {
    console.log("           ");
    console.log("");
}

function Question18() {
    console.log("           ");
    console.log("");
}

function Question19() {
    console.log("           ");
    console.log("");
}

function Question20() {
    console.log("           ");
    console.log("");
}

function Question21() {
    console.log("           ");
    console.log("");
}