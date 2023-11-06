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
let ServerMan= 0;
let Leave = 0;

function CheckEnd() {
    if (blessing == 7) {
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
    console.log("You are transported to heaven");
    console.log("       ");
    console.log("Ending: Heaven");
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

function WrathEnd() {
    console.log("You are now in the wrath part of hell where everyone you have ever hurt gets to hurt you back tenfold for the rest of eternity");
    console.log("     ");
    console.log("Ending: Wrath");
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

function GreedEnd() {
    console.log("You were very greedy, rightfully so because money is awesome. But hell is made for you to suffer so in the greed part of hell, you are made to live in poverty. Not even poverty, You live in debt that you will never be able to pay off.");
    console.log("    ");
    console.log("Ending: Greed");
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

function PrideEnd() {
    console.log("After you started your own cult, you actually thought that you were god, how funny. anyways now you are in hell and getting tortured forever in ways so shamefull that you can never feel pridefull again.");
    console.log("    ");
    console.log("Ending: Pride");
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

function EnvyEnd() {
    console.log("I don't have anything to say for this end. You were just very jealous and now you are in hell.");
    console.log("    ");
    console.log("Ending: Envy");
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
    console.log("You were too lustfull and are now in hell being tortured for it. You are constantly being blue balled. thats basically it nothing more");
    console.log("     ");
    console.log("Ending: Lust");
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

function SlothEnd() {
    console.log("You sat around for long enough to get transported to hell, it's just like the real world where you have to work for everything. You might think that's not that bad, but it is. In this hell there is no Insaniquarium! Deluxe. So time to suffer");
    console.log("       ");
    console.log("Ending: Sloth");
    console.log("       ");
    console.log("Wrath counter: " + sin_wrath);
    console.log("Greed counter: " + sin_greed);
    console.log("Pride counter: " + sin_pride);
    console.log("Envy counter: " + sin_envy);
    console.log("Lust counter: " + sin_lust);
    console.log("Gluttony counter: " + sin_gluttony);
    console.log("Sloth counter: " + sin_sloth);
    console.log("Blessing counter: " + blessing);
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
    console.log("The narrator has shut down your game goodbye");
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
        console.log("Boring");
        NeutralEnd();
    } else if (answerQuestion3 == "4") {
        sin_greed++
        console.log("You decide to ivest your money in crypto and even buy some nft's (yeah you definitly belong in hell) ");
        CheckEnd();
        Question22();
    }else if (answerQuestion3 == "6") {
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
    console.log("For some reason the old lady actually starts worshipping you. Maybe you are just very charismatic, or maby you can get more peole to worship you");
    console.log("           ");
    console.log("1.Start a cult where you are god (Pride x 6) ");
    console.log("2.Destroy every other cult that could be better than you (envy x 7) ");
    console.log("           ");
    const answerQuestion4 = rl.question("Please input the number of your choise");
    if (answerQuestion4 == "1") {
        sin_pride++
        sin_pride++
        sin_pride++
        sin_pride++
        sin_pride++
        sin_pride++
        console.log("You deide to command the lady to gather as much people as possible and start a cult to worship the god named " + name + ". This is a weird cult");
        CheckEnd();
    } else if (answerQuestion4 == "2") {
        sin_envy++
        sin_envy++
        sin_envy++
        sin_envy++
        sin_envy++
        sin_envy++
        sin_envy++
        console.log("You are jealous of all the other cults (wierd take but ok) and decide to take them all out. Not one, not two but all of them because you think they could be better than you.");
        CheckEnd();
    } else {
        console.log("Sorry, that is not an option please try again.");
        Question4();
    }
}

function Question5() {
    console.log("           ");
    console.log("You are just walking down the street with your boring decisionmaking and a man getting beat up and even almost getting stabbed by some thugs");
    console.log("           ");
    console.log("1.Sacrifice myself for the man (blessing, blessing, blessing, blessing, blessing) ");
    console.log("2.Run (Neutral end) ");
    console.log("           ");
    const answerQuestion5 = rl.question("Please input the number of your choise");
    if (answerQuestion5 == "1") {
        blessing++
        blessing++
        blessing++
        blessing++
        blessing++
        console.log("You try to to protect the man by jumping in front of the knive, but the knive doesn't hit you because gob protected you and said you can come to heaven now");
        CheckEnd();
    } else if (answerQuestion5 == "2") {
        NeutralEnd();
    } else {
        console.log("Sorry, that is not an option please try again.");
        Question5();
    }
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
        ServerMan++
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
    if (answerQuestion9 == "1" || answerQuestion9 == "2" || answerQuestion9 == "3" || answerQuestion9 == "4" || answerQuestion9 == "5") {
        console.log("Ÿ̷̥͙́͗̿͒̊̆̿o̸̦͛̏̉́͆̈́͘ú̵̳͇͚͍̤͆̒̿́ ̵̡̻͚͖͎͐̚͝d̶̯̥̻͆̔̍̊͝e̷͍̼̽c̸̦̻̀̍̆͋̕ī̵͌̎̋̈͛͜ḑ̵͇̩̩̐̅̈́͠ḙ̷̬̲̌̓̀d̸̼̖̰̙̩͗̍͐̈̑̊ ̴͓̳̘̤̓̈́̎̑t̷͕͛̇͒o̴̠͔͓̯̽̆́͐̍͐ ̸̢̫͇̘̚p̷͙̍͌̇̽̂́͝ī̶̹̝̙̻̳̟̈̎̐͒͜s̸̛̩̹̭͚̮͐̈́s̶̘͈̮͂̏̏̉͗͠ ̶̟͑̌̏ơ̴̩͑͂̌́͜f̵̬͋̀͒ ̵̡͎̳͙͈̓̈́͋̅̒͋͠t̴̯͈̿͊h̸͈̓̈ė̶̯̗̗̠̳͚͋̃̃͝ ̷̰͎̀̍͂̕͘n̷̮͝a̸̳̮͉͙̓̀̒̚r̶͚̟̜͉̾a̵͉̠͔̒̅̊̒̇͌ͅt̵̠̍̀̐̑̎̐ö̵̗̣͚̮̦́̔̽̓̈́͗͘r̶͉̹̮̖̯̭̋̎͊̐ ̷̛̖̍b̷̡̥͛͛͆̄̒̋͜͠ͅẽ̶̡̮̳̗ͅc̶͔̘̱̍͐͑̎͋̽̉ǎ̸̧̛͙̤͔̼̼͕̋̉̐̈̋u̶̟̪̟͆̀̀s̸͊̈́͛͐͊͜ë̵̝́̒̃ ̶̢̘͚̙̼̹̈̓ͅy̴̪̣̑̓o̷͉͂̅̔̕u̶͖̻̾̽̋͝ ̸͙̗͕̜̘̥́̔̔̀̊͒͑ą̵̓ř̸̛̹̥͔͙̅̓́͘ȩ̴̭̯͎̙̩̿̂̓̒ ̵̛͓͉̝̦͛́̿͌͝a̶̻͚̖̅̇̋̆͝͠ ̵̡̱̪̓̋̿͑͘l̷̨͇̑͊̔͆i̷̧̛̜̫̫̠͉̤̽̏͊͝͠t̶̹̺̰̼͔̍̓̈́͠͝t̷̮́̈́́ļ̵̘̫͇̥̪͛͂̋̕e̸̢̤̯͗ ̸̛̗̟̭̘͔͚̂p̶̡͉̲̘̈́̅̋ͅͅi̸̧͇̖͇̅͋͗ͅe̶̦̹̫͕͍̿̔͂̿̿͗c̷̻̝̥̉͗͌ȅ̶̯̬̇ͅ ̸͓̬̽͐̓̀̿̒o̴̠̤͚͍̐̽́̾͝ͅf̷͉̞͇̫͍̠͉̈́̈́͗̚ ̵̲̬͙͖̰̽̅s̷͖̟̫͍̜̊h̴͉͔̔i̸̛̛͍̪̾̓t̶̛̹͈̖͂͗͒̉́");
        Question10();
    } else {
        console.log("Sorry, that is not an option please try again.");
        Question9();
    }
}

function Question10() {
    console.log("           ");
    console.log("Okay you know what, fuck yoou do you want to keep playing this game?");
    console.log("           ");
    console.log("1.Yes");
    console.log("2.No");
    console.log("           ");
    const answerQuestion10 = rl.question("Please input the number of your choise");
    if (answerQuestion10 == "1") {
        console.log("Well too bad");
        SecretEnd();
    } else if (answerQuestion10 == "2") {
        console.log("Okay then that will be what you get");
        SecretEnd();
    } else {
        console.log("That isn't even one of the awnsers but fuck you anyways");
        SecretEnd();
    }
}

function Question11() {
    console.log("           ");
    console.log("More money?");
    console.log("           ");
    console.log("1.Sell organs of others (greed, greed,) ");
    console.log("2.Start a brothel, challange Asmodeus and become Mammon (greed, greed) ");
    console.log("           ");
    const answerQuestion11 = rl.question("Please input the number of your choise");
    if (answerQuestion11 == "1") {
        sin_greed++
        sin_greed++
        console.log("You start an organ selling business");
        CheckEnd();
        Question12();
    } else if (answerQuestion11 == "2") {
        sin_greed++
        sin_greed++
        console.log("Yet another reference");
        CheckEnd();
        Question13();
    } else {
        console.log("Sorry, that is not an option please try again.");
        Question11();
    }
}

function Question12() {
    console.log("           ");
    console.log("What to do with all your money?");
    console.log("           ");
    console.log("1.Make a pool of coins (greed, greed) ");
    console.log("2.Incase your first penny in a frame (greed, greed) ");
    console.log("           ");
    const answerQuestion12 = rl.question("Please input the number of your choise");
    if (answerQuestion12 == "1") {
        sin_greed++
        sin_greed++
        console.log("You decide to take after your childhood idol, scrooge mcduck and make a pool of coins for you to swim in.");
        CheckEnd();
    } else if (answerQuestion12 == "2") {
        sin_greed++
        sin_greed++
        console.log("You decide to value your first penny and never give it away, just hope no comicly similar looking thiefs or witches try to steal it.");
        CheckEnd();
    } else {
        console.log("Sorry, that is not an option please try again.");
        Question12();
    }
}

function Question13() {
    console.log("           ");
    console.log("What do you do now as Mammon");
    console.log("           ");
    console.log("1.Make a clown your mascot and ecploit the hell out of him for money (greed, greed) ");
    console.log("2.Have a clown contest and charge immense ammounts of cash (greed, greed) ");
    console.log("           ");
    const answerQuestion13 = rl.question("Please input the number of your choise");
    if (answerQuestion13 == "1") {
        sin_greed++
        sin_greed++
        console.log("Good job fizzie");
        CheckEnd();
    } else if (answerQuestion13 == "2") {
        sin_greed++
        sin_greed++
        console.log("This is a clown show");
        CheckEnd();
    } else {
        console.log("Sorry, that is not an option please try again.");
        Question13();
    }
}

function Question15() {
    console.log("           ");
    console.log("As you are still just standing where you are chaos is unfolding arround you but at the same time its kind of calm");
    console.log("           ");
    console.log("You see a man on fire what do you do?");
    console.log("1.Nothing (sloth, sloth) ");
    console.log("2.Play Insaniquarium! Deluxe (sloth) "); //best option
    console.log("3.Try to put him out with the soundtrack of Insaniquarium! Deluxe (sloth) ");
    console.log("           ");
    const answerQuestion15 = rl.question("Please input the number of your choise");
    if (answerQuestion15 == "1") {
        sin_sloth++
        sin_sloth++
        console.log("The choice to get to the end faster but this is just wrong");
        CheckEnd();
        Question24();
    } else if (answerQuestion15 == "2" || answerQuestion15 == "3") {
        sin_sloth++
        console.log("The best choise");
        CheckEnd();
        Question25();
    } else {
        console.log("Sorry, that is not an option please try again.");
        Question15();
    }
}

function Question16() {
    console.log("           ");
    console.log("You have now finished the old lady with no mercy, and the cops arrive well its too late to turn back now");
    console.log("           ");
    console.log("1.Kill them all (wrath, wrath, wrath) ");
    console.log("2.Knock them out, and torture them all for information (wrath, wrath, wrath, wrath) ");
    console.log("           ");
    const answerQuestion16 = rl.question("Please input the number of your choise");
    if (answerQuestion16 == "1") {
        sin_wrath++
        sin_wrath++
        sin_wrath++
        console.log("you decide to just kill them all");
        CheckEnd();
        Question26();
    } else if (answerQuestion16 == "2") {
        sin_wrath++
        sin_wrath++
        sin_wrath++
        sin_wrath++
        console.log("You knock the cops out and decide to torture them for information");
        CheckEnd();
        Question27();
    } else {
        console.log("Sorry, that is not an option please try again.");
        Question16();
    }
}

function Question17() {
    console.log("           ");
    console.log("The man said: okay and what race do you prefer?");
    console.log("           ");
    console.log("1.White (lust) ");
    console.log("2.Black (lust) ");
    console.log("3.Asian (lust) ");
    console.log("4.Give me something exotic (lust, lust) ");
    console.log("           ");
    const answerQuestion17 = rl.question("Please input the number of your choise");
    if (answerQuestion17 == "1") {
        ServerMan++
        sin_lust++
        console.log("You told the man you like em white");
        CheckEnd();
        Question19();
    } else if (answerQuestion17 == "2") {
        sin_lust++
        console.log("You told the man you like em black");
        CheckEnd();
        Question19();
    } else if (answerQuestion17 == "3") {
        sin_lust++
        console.log("You told the man you like asians");
        CheckEnd();
        Question19();
    } else if (answerQuestion17 == "4") {
        sin_lust++
        sin_lust++
        console.log("You told the man to bring you something exotic and to suprise you");
        CheckEnd();
        Question19();
    } else {
        console.log("Sorry, that is not an option please try again.");
        Question17();
    }
}

function Question18() {
    console.log("           ");
    console.log("Woah daring today aren't we, so do you want to to dominate or to be dominated");
    console.log("           ");
    console.log("1.I want to domiate (lust) ");
    console.log("2.I want to be dominated (lust) ");
    console.log("           ");
    const answerQuestion18 = rl.question("Please input the number of your choise");
    if (answerQuestion18 == "1") {
        sin_lust++
        console.log("The man said: Nice, and took you to a room to to your business");
        CheckEnd();
        Question21();
    } else if (answerQuestion18 == "2") {
        sin_lust++
        console.log("The man said: Hey to each their own, and took you to a room to do your business");
        CheckEnd();
        Question21();
    } else {
        console.log("Sorry, that is not an option please try again.");
        Question18();
    }
}

function Question19() {
    console.log("           ");
    console.log("The man asked if you have any certain kinks that they could help with.");
    console.log("           ");
    console.log("1.I like it vanilla (lust) ");
    console.log("2.Tell the man your favorite kink (lust, lust) ");
    console.log("3.Tell the man about all of your kinks in detail (lust, lust, lust) ");
    console.log("           ");
    const answerQuestion19 = rl.question("Please input the number of your choise");
    if (ServerMan == 2 && answerQuestion19 == "1") {
        sin_lust++
        console.log("The man said: Well You basically just described me and I think I can satisfy any kink so shal we?");
        CheckEnd();
        Question20();
    } else if (answerQuestion19 == "1") {
        sin_lust++
        console.log("The man said: Well for this place that is unusual. And then he led you to a room for you to get down to business");
        CheckEnd();
        Question21();
    } else if (ServerMan == 2 && answerQuestion19 == "2") {
        sin_lust++
        sin_lust++
        console.log("The man said: Well You basically just described me and I think I can satisfy any kink so shal we?");
        CheckEnd();
        Question20();
    } else if (answerQuestion19 == "2") {
        sin_lust++
        sin_lust++
        console.log("The man said: Well for this place that is unusual. And then he led you to a room for you to get down to business");
        CheckEnd();
        Question21();
    } else if (ServerMan == 2 && answerQuestion19 == "3") {
        sin_lust++
        sin_lust++
        sin_lust++
        console.log("The man said: Well You basically just described me and I think I can satisfy any kink so shal we?");
        CheckEnd();
        Question20();
    } else if (answerQuestion19 == "3") {
        sin_lust++
        sin_lust++
        sin_lust++
        console.log("The man said: Well for this place that is unusual. And then he led you to a room for you to get down to business");
        CheckEnd();
        Question21();
    } else {
        console.log("Sorry, that is not an option please try again.");
        Question19();
    }
}

function Question20() {
    console.log("           ");
    console.log("As you walk into the room to do the deed with the man he says: Well now that were finaly alone, I can finaly take your soul. He takes off his skin and reveals his true form. The man was in fact, Asnodeus the enbodyment of lust and he came to take your soul to his part of hell because you are one lustfull motherf***ker");
    console.log("Goodbye now");
    sin_lust++ 
    sin_lust++ 
    sin_lust++
    sin_lust++ 
    sin_lust++ 
    sin_lust++
    sin_lust++ 
    sin_lust++ 
    sin_lust++
    sin_lust++ 
    sin_lust++ 
    sin_lust++
    sin_lust++ 
    sin_lust++ 
    sin_lust++
    CheckEnd();
}

function Question21() {
    console.log("           ");
    console.log("Suprisingly (or unsuprisingly), hell has got some damn good brothels but sadly you can't leave now so just go to the lust circle of hell and suffer forever");
    console.log("           ");
    console.log("1.Just go to the lust part of hell (lust, lust, lust, lust, lust, lust) ");
    console.log("2.Try to leave");
    console.log("           ");
    const answerQuestion21 = rl.question("Please input the number of your choise");
    if (answerQuestion21 == "1") {
        sin_lust++
        sin_lust++
        sin_lust++
        sin_lust++
        sin_lust++
        sin_lust++
        console.log("");
        CheckEnd();
    } else if (answerQuestion21 == "2" && Leave < 6) {
        Leave++
        console.log("You try to leave but fail");
        Question21();
    } else if (answerQuestion21 == "2" && Leave >= 6) {
        sin_lust++
        sin_lust++
        sin_lust++
        sin_lust++
        sin_lust++
        sin_lust++
        console.log("HAHA you fail anyways");
        CheckEnd();
    } else {
        console.log("Sorry, that is not an option please try again.");
        Question21();
    }
}

function Question22() {
    console.log("           ");
    console.log("Now that you have investedn in stocks it's time to find other ways to make money");
    console.log("           ");
    console.log("1.Rob a bank (greed) ");
    console.log("2.Kidnapp a celebrety (greed) ");
    console.log("3.Make a deadly virus, spread it around the world and sell the only cure (greed, greed, greed, greed, greed) ");
    console.log("           ");
    const answerQuestion22 = rl.question("Please input the number of your choise");
    if (answerQuestion22 == "1" || answerQuestion22 == "2") {
        sin_greed++
        console.log("You execute the plan perfectly and make more money");
        CheckEnd();
        Question11();
    } else if (answerQuestion22 == "3") {
        sin_greed++
        sin_greed++
        sin_greed++
        sin_greed++
        sin_greed++
        console.log("You execute the plan and make a ton of money, you rename yourself to Dr.Money (Plus 10 points to you if you get the reference) ");
        CheckEnd();
    }

}

function Question24() {
    console.log("           ");
    console.log("This was a trick question and you answered wrong so you lose");
    NeutralEnd();
} 

function Question25() {
    console.log("           ");
    console.log("You are now paying and listening to Insaniquarium! Deluxe. Choose");
    console.log("           ");
    console.log("1.Play Insaniquarium! Deluxe until you die, again (sloth, sloth, sloth, sloth, sloth) ");
    console.log("2.Get the Neutral end (Neutral) ");
    console.log("           ");
    const answerQuestion25 = rl.question("Please input the number of your choise");
    if (answerQuestion25 == "1") {
        sin_sloth++
        sin_sloth++
        sin_sloth++
        sin_sloth++
        sin_sloth++
        console.log("You play until you get transported to the sloth part of hell");
        CheckEnd();
    } else if (answerQuestion25 == "2") {
        console.log("Okay then you get the neutral end");
        NeutralEnd();
    } else {
        console.log("Sorry, that is not an option please try again.");
        Question25();
    }
}

function Question26() {
    console.log("           ");
    console.log("After you killed all the cops satan himself appears before you and says: Come the the wrath circle of hell with me and be my subject to torture");
    console.log("           ");
    console.log("1.Go with him (wrath end) ");
    console.log("2.Try to kill satan (wrath) ");
    console.log("           ");
    const answerQuestion26 = rl.question("Please input the number of your choise");
    if (answerQuestion26 == "1") {
        sin_wrath++
        sin_wrath++
        sin_wrath++
        console.log("You decide to go with satan to the wrath circle of hell");
        CheckEnd();
    } else if (answerQuestion26 == "2") {
        console.log("You try to shoot satan in the back of his head with a gun from the cops but it just bounces off of him");
        console.log("Satan says okay now you die, after wich you engulf in flames and burn to death");
        console.log("           ");
        console.log("End: Death");
        console.log("     ");
    console.log("Wrath counter: " + sin_wrath);
    console.log("Greed counter: " + sin_greed);
    console.log("Pride counter: " + sin_pride);
    console.log("Envy counter: " + sin_envy);
    console.log("Lust counter: " + sin_lust);
    console.log("Gluttony counter: " + sin_gluttony);
    console.log("Sloth counter: " + sin_sloth);
    console.log("Blessing counter: " + blessing);
    } else {
        console.log("Sorry, that is not an option please try again.");
        Question26();
    }
}

function Question27() {
    console.log("           ");
    console.log("After you tortured the cops one of them tells you that there is a time machine to start this game again but you retain all of your points");
    console.log("           ");
    console.log("1.Go with the time machine (start again) ");
    console.log("2.Nah just kill them all (wrath, wrath) ");
    console.log("           ");
    const answerQuestion27 = rl.question("Please input the number of your choise");
    if (answerQuestion27 == "1") {
        console.log("We go again");
        NameQuestion();
    } else if (answerQuestion27 == "2") {
        sin_wrath++
        sin_wrath++
        console.log("You decide to just kill them all");
        CheckEnd();
    } else {
        console.log("Sorry, that is not an option please try again.");
        Question27();
    }
}