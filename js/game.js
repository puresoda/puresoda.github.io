// Passwords
// TODO: Possibly encrypt these so it's not possible to read the js to get the passwords
// ehhhhhhhh, it's not urgent and not a huge concern since this is a personal project
// rsa to encrpyt?
var passwords = ["LooseLeaf", "Belgium", "Avatar", "Dumpling", "RoastedOolong", "JodieMa"];

// Page Titles
var titles = ["The Beach", "Studying Abroad", "Confession", "Starting Off", "Distance", "Final Clue", "Happy Anniversary"];

// Questions
var questions = ["What milk tea shop did we go to?",
    "What country did you almost confess to me in?",
    "Which show did we watch in quarantine?",
    "What keychain kept popping up during our calls?",
    "What flavor of milk tea do you always get?",
    "What is the name of my favorite sweet and ticklish dumpling?"
];

// Hints
var hints = ["I like you more than html, css, and javascript <3.",
    "I love everything about you, from your amazing smile to the way you get shy when I compliemnt you.",
    "I cherish every second I've gotten to spend with you and all the time I'll get in the future.",
    "The way you look at me always makes me blush and gives me butterflies.",
    "With everything we've been through and everything we've put behind us, I appreaciate that you were there for all of it.",
    "I love that you can be yourself around me and I can be myself."
];

// Load Order Sequence
var seq = ["title-text", "part-num", "question-text", "hint-text", "clue-text"];

// Clue Data
var clue_num = 0;
var clues = [];

// Hmmm I wonder if it would be better to store these in their own text file.
// Does JS natively support file reading though?
clues.push("Haha, so this is what I've been working on for the past month. Sorry that I'm so bad at keeping secrets, I always get a bit too excited to show you what I'm doing, especially things that I know will make you happy. This year's truly been an adventure with you. Even though nothing this year went as planned, I'm still so grateful to have been able to spend it with you. You made this year bearable and I can't wait for all the time we'll get to spend together in the future. Anyways, I hope you enjoy the scavenger hunt! I'll be beside you the whole time in case you get stuck. Good luck! <br><br> Can you believe it's already been over a year since we met at the beach? I was so nervous the night before that I couldn't sleep at all, practicing conversation topics and remembering how to talk without sounding awkward until 3am. Remembering how much fun I had talking to you when you visited LA, I had already had a bit of a crush on you. But after those two days ended, I didn't expect to see you again. Fast forward two years and the same cute and sweet girl was inviting me to the beach? Needless to say, I was a bit flustered and didn't want to ruin my chance. That day, I had so much fun with you, from talking at Loose Leaf to hanging out at Laguna Beach. We spent almost the entire day just talking about random stuff yet I'll never forget it. During the beach, seeing you smiling and laughing as the sun set and the waves crashed behind you was magical and I knew then that I had completely fallen for you. After we had to part ways the next day, I couldn't get you off of my mind. I wanted so badly to message you again or to see you in person, but I was too shy and scared back then. But when you invited me to Disneyland, I knew that I couldn't let you go so easily. Did you know that it took me over 40 minutes to type out my first message to you? Surprising that I can't even remember what that first message was now. I think it was either complaining about my land lady or congratulating you on finishing your internship though! I was so nervous at messing up a chance to get to know you better that I sat there for almost an hour for a couple of sentences of text. Haha, looking back on it now, it seems a bit silly how much I was freaking out about it, but I'm glad everything turned out the way it did. Every bit of nervousness, excitement, and enamor I had for you was real and they led to where we are now. Even after everything, we've been through, I'll still remember you as the girl who stole my heart smiling at the beach.");

clues.push("It took almost four months from when we met at the beach and at Disneyland to when I could see you again in the Bay. While I was excited for your opportunity to explore Europe while studying abroad in Scotland, part of me missed you back then even though I had only met you three times at that point. That quarter, you were always on my mind (except while taking finals, my brain got a bit fried haha). I always looked forward to all of your messages, from when you updated me about your travels to mundane things like how cold it was in Scotland. With every message I read, I learned more about you and each message brought a smile to my face and brightened my day a bit (and still does). Even though I wanted to see you in person, I was glad to be able to be a part of your life and talk. Despite the eight hour time difference between us, I appreacited the back and forth conversations we had. Sometimes I stayed up an extra ten or fifteen minutes because I was hoping you would message me when you got up. For once, my awful sleep schedule helped me out because I was able to talk to you a bit more regularly, especially that day I stayed up until 5am writing my essay and I got to talk to you for thirty minutes after you finished class. There were so many nights where I wanted to message you and tell you how I really felt. I stared at my phone and thought of how much of a weight would be lifted off my shoulders if I had told you everything: how much I liked you, how I couldn't stop thinking about you since the beack, and how I wanted to talk to you so much more in person once you got back. I actually got pretty close to doing that one night I got a bit drunk. I had written the message and almost hit send before I sobered up a bit and my roommate also snapped me out of it. Although waiting for you was hard at times, I'm so glad that I did. I'll cherish every message we sent, every small misunderstanding we had because we were shy, and every emotion you made me feel that quarter. With the way everything has turned out, I wouldn't change anything about those four months because they led me to you.");

clues.push("You've probably already heard me talk about the day I confessed to you a bunch of times already, but here's one more! After I finished finals, the first thing I thought was \"oh god, I failed that final didn't I?\". But!!! The second thing I thought of was \"omg I haven't thought of what I'm going to do when Jodie comes back! I haven't even thought of a place to take her yet, what if she hates the food or gets too busy!\" Did I say that I was low key freaking out about our first date? Because I totally was at least 2 weeks before it happened haha. I'm happy to say that I had an amazing time with you that day and that most of my fears were probably for nothing (a couple of bumps along the way though hehe). First off, sorry for being sick that day! I was feeling pretty bad on Christmas day but I thought I would feel better the next day. I really didn't want to reschedule since we had both been looking forward to getting hotpot for four months at that point. I didn't want to make you wait any longer and I was too eager to find out if you liked me too (even though I didn't ask that day)! Even though I threw up in the bathroom and didn't tell you about it until August, I had an amazing time that day with you. I still laugh when I remember you telling me to eat more meat and I awkwardly ate tiny bites since I had just thrown up and didn't want to say anything. Despite being sick, getting to talk to you in person without a time difference and hearing you talk about your study abroad experiences was so much fun. Even though we talked for almost eight hours straight, it went by so quickly with you. With both of our small bladders, we had to pee at least five times each. The workers at Paris Baguette were probably wondering how it was possible two people could pee so much in such a short time. Also, sorry for not messaging you after the date! Being kind of sick, my body kinda crashed after I got home and I slept for the next twelve ish hours. When you messaged me to ask me to hike, I was so excited to be able to spend more time with you. Ahhh! Sorry again for not asking you to hang out again, I'm realizing that you asked me to hang out every time back then haha. I was really really shy back then! After our first date, I had fallen for you so much harder than I thought was possible; I was about to burst with how much I wanted to tell you how I felt. Since I was too shy to say anything on our first date, I knew that I would have to say something at Alum Rock. I forgot what I said now since I was so nervous, but I'll say it again here: \"Jodie, I like you a alot, more than a friend\".")

clues.push("I never knew how much I could miss someone until I got on the plane to go back to LA. As I packed my things that morning, I thought about visiting you for a final goodbye hug but didn't want to come off as clingy. We both knew that we would have to start out our relationship 100 miles apart but the true depth of that never struck me until I had to say bye to you. Every day from when we parted ways, I thought of you and missed you. Even so, I looked forward to every time I got to message you. I still smiled the same way I did when you were in Scotland, but I wanted to see you in person so much more. When you visited LA in January, I was so exicted to see you that I canceled all my plans that day. I had an amazing time with you, Ankita, and Jacqueline that day. Even though, we didn't get any alone time to do coupley stuff, just seeing you again was enough to make me happy. When you told me how much you missed me in front of Jacqueline's apartment, I knew that you felt the same way that I did. Despite that, hearing you say that and knowing how much I missed you too, it became so much harder to say bye to you that night. We spent almost half an hour in front of the apartment talking and being awkward together and I cherished all of it. On the bright side, we finally got around to calling each other on video after that night. The calls I had with you made the physical distance between us seem shorter, if only for the couple of hours we spent on them. However, during each call, I always thought of being with you in person. I wanted to be close to you, hug you, and poke you, but I couldn't do that over video. That's why I wanted to visit you during the next school break. In all honesty, the fact that I was visiting during Valentine's Day didn't occur to me until the week before I actually left haha. I just wanted to see you again as soon as possible. Time really does fly huh? I can remember the days I visited like they were yesterday. From staying up all night finishing my homework so I could spend all my time with you, to falling asleep on the bus ride, to hiking up the hill and how windy it was, I wouldn't take it back for the world. Those three days I spent with you were magical and they made me want to be by your side more than ever. None of us expected that would be the last time we could see each other for the next four months but I'll never forget the time I got to spend with you those days.");

clues.push("The four months from Valentine's Day until the next time we would see each other in June were probably some of the hardest times I've been through. EVery single day, I missed you so much and I wanted nothing more than to hold you again. From the first kiss we had in SLO, I wanted to have you in my arms again and see you smile in person. Even though we couldn't see each other because of the pandemic, I still enjoyed spending time with you over calls. Watching Avatar with you and talking aobut our classes together made us closer than ever before even though we were just a mile apart. Some nights though, I missed you so much that I would cry on my bed. I imagined being able to see you again, almost like a kdrama where we both drop everything we're holding and run towards each other (There better be a k-drama called \"Six Feet Apart\" in the future or else I'm gonna make it!). We were both living our own lives: you were finishing the rest of your senior year with the cat website, yoga (sort of hehe), and WISH while I was tackling probably one of the most academically challenging quarters I've ever faced. Despite that, we still shared parts of our lives together, setting aside so many hours to calling, talking, and watching together. We spent so many nights calling past midnight, but I still didn't want to hang up. Haha, neither of us wanted to hang up and we ended up calling for an extra 30 minutes after we said we should sleep soon. And we tried calling from bed before we slept but we ended up calling until 2am both times! Despite not being able to see you and how much I missed you, spending those hours calling with you still stands as a highlight of an otherwise rough quarter. I'll look back on those times fondly with my sweet and ticklish dumpling (even though you probably didn't like seeing the dumpling keychain during the calls haha). ")

clues.push("Over the past 15 months that I've gotten to know you, you've been nothing but sweet, caring, smart, and cute. From the day that I fell for you at the beach, to waiting for you while you were in Scotland, to visitng you in SLO, to spending the past summer with you, my time with you has been nothing short of amazing. Every day I get to spend with you is one that I treasure and look foward to. After all the waiting we've both done for each other, I'm so happy to finally be in the same place as you again. No matter where life takes us or throws our way, I know we'll both be able to handle it together. I'll always be there to support you and I appreaciate all the support you've given me. Your care and support has gotten me through a lot and the past year wouldn't have been as fun and successful without you. From the bottom of my heart, thank you so much for everything you've done for me. You've motivated me to study harder at school, be more productive at my internship, and learn so much. This website with its js, css, html, and git elements was made because you supported me throughout everything! I got my summer internship with Astranis because you helped me look for jobs. In return for everything you've done, I've always tried my best to support you back. I hope you've enjoyed every milk tea, green waffle, and mochi I've given you. I'll always be there for every long day at work, every period, and anything else that may happen. I care so much about you and I want you to know that you'll never have to face life alone anymore. Happy anniversary, I hope you enjoyed the scavenger hunt! I had a lot of fun making this. Wo ai ni.");

clues.push("Look at the clues that you got from each part. Take the jth word from each clue (start from 0): <br><br>0 1 9 3 8 3");

$(function () {  // $(document).ready shorthand

    // Insert the first clue, title, part, and question
    loadSequence(titles[clue_num], "Part " + String(clue_num + 1), questions[clue_num], hints[clue_num], clues[clue_num],);

    // Fade in the elements
    var divs = document.querySelectorAll("body > div:not(.background) >div:not(.hint-container)");
    for (var i = 0; i < divs.length; i++) {
        $(divs[i]).hide().fadeIn(3000);
    }

    // Get the form and the password input element
    const form = document.getElementById('login-form');
    let password = form.elements.namedItem("password");

    // Start the eventListener to check the password at every keystroke
    password.addEventListener('input', validate);

    $('.hint-container').hide();
});

function loadSequence(title, part, question, hint, clue) {
    toreplace = [title, part, question, hint, clue];

    // Replace the relevant text
    for (var i = 0; i < seq.length; i++) {
        x = document.getElementById(seq[i]);
        document.body.innerHTML = document.body.innerHTML.replace(x.innerHTML, toreplace[i]);
        console.log(x);
    }
}

function loadNextPage() {

    if (clue_num < hints.length) {
        loadNextPart();
    }

    else {
        loadFinalPart();
    }
}

function loadNextPart() {
    $(document.getElementsByClassName("hint-container")[0]).fadeOut(1000, function () {
        loadSequence(titles[clue_num], "Part " + String(clue_num + 1), questions[clue_num], hints[clue_num], clues[clue_num]);
        $(document.getElementsByClassName("container")[0]).fadeIn(3000);

        // NOTE: We destroyed the element that the original event listener was attached to when we replaced the text
        // As such, we need to create a new eventListener

        // Get the form and the password input element
        const form = document.getElementById('login-form');
        let password = form.elements.namedItem("password");

        // Start the eventListener to check the password at every keystroke
        password.addEventListener('input', validate);

        window.scrollTo(0, 0);
    });
}

function loadFinalPart() {
    $(document.getElementsByClassName("hint-container")[0]).fadeOut(1000, function () {
        loadSequence(titles[clue_num], "Congratulations!", "", clues[clue_num], "");
        $(document.getElementsByClassName("container")[0]).fadeIn(3000);
        $(document.getElementsByClassName("hint-container")[0]).fadeIn(3000);

        $(document.getElementsByClassName("user-input")[0]).hide();
        $(document.getElementsByClassName("questions")[0]).hide();
        $(document.getElementsByClassName("clue")[0]).hide();
        $(document.getElementById("next")).hide();

        window.scrollTo(0, 0);
    });

    $(document.getElementsByClassName("hint-container")[0]).fadeIn(3000);

}

function validate(e) {
    if (e.target.value == passwords[clue_num]) {

        // Change color to indicate correct password
        e.target.style.color = "#44E444";

        if (clue_num < passwords.length) {
            // Fade in the new background, title, clue, and question
            clue_num += 1;
            $(document.getElementsByClassName("container")[0]).fadeOut(2000, function () {
                e.target.style.color = "white";

                $(document.getElementsByClassName("hint-container")[0]).fadeIn(1000);
            });
        }
    }
}