import React, { useEffect, useState } from 'react';
import './QuotesBox.css';

//an array of objects to store my quotes
const quotes = [
    {
        text: "Happiness is a direction, not a place.",
        author: "Sydney J. Harris",
        hrefText: "Happiness%20is%20a%20direction%2C%20not%20a%20place%2E",
        heading: "Happiness"
    },
    {
        text: "Happiness depends upon ourselves.",
        author: "Aristotle",
        hrefText: "Happiness%20depends%20upon%20ourselves%2E",
        heading: "Happiness"
    },
    {
        text: "It is not how much we have, but how much we enjoy, that makes happiness.",
        author: "Charles Spurgeon",
        hrefText: "It%20is%20not%20how%20much%20we%20have%2C%20but%20how%20much%20we%20enjoy%2C%20that%20makes%20happiness%2E",
        heading: "Happiness"
    },
    {
        text: "To love at all is to be vulnerable...",
        author: "C.S. Lewis",
        hrefText: "To%20love%20at%20all%20is%20to%20be%20vulnerable%2E%2E%2E",
        heading: "Love"
    },
    {
        text: "Love is that condition in which the happiness of another person is essential to your own.",
        author: "Robert A. Heinlein",
        hrefText: "Love%20is%20that%20condition%20in%20which%20the%20happiness%20of%20another%20person%20is%20essential%20to%20your%20own%2E",
        heading: "Love"
    },
    {
        text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author: "Dr. Seuss",
        hrefText: "You%20know%20you%27re%20in%20love%20when%20you%20can%27t%20fall%20asleep%20because%20reality%20is%20finally%20better%20than%20your%20dreams%2E",
        heading: "Love"
    },
    {
        text: "We may encounter many defeats but we must not be defeated.",
        author: "Maya Angelou",
        hrefText: "We%20may%20encounter%20many%20defeats%20but%20we%20must%20not%20be%20defeated%2E",
        heading: "Life"
    },
    {
        text: "It's not whether you get knocked down, it's whether you get up.",
        author: "Vince Lombardi",
        hrefText: "It%27s%20not%20whether%20you%20get%20knocked%20down%2C%20it%27s%20whether%20you%20get%20up%2E",
        heading: "Life"
    },
    {
        text: "People who are crazy enough to think they can change the world, are the ones who do.",
        author: "Rob Sultans",
        hrefText: "People%20who%20are%20crazy%20enough%20to%20think%20they%20can%20change%20the%20world%2C%20are%20the%20ones%20who%20do%2E",
        heading: "Life"
    },
    {
        text: "Each time a woman stands up for herself, without knowing it possibly, without claiming it, she stands up for all women.",
        author: "Maya Angelou",
        hrefText: "Each%20time%20a%20woman%20stands%20up%20for%20herself%2C%20without%20knowing%20it%20possibly%2C%20without%20claiming%20it%2C%20she%20stands%20up%20for%20all%20women%2E",
        heading: "Feminism"
    },
    {
        text: "What is feminism? Simply the belief that women should be as free as men, however nuts, dim, deluded, badly dressed, fat, receding, lazy and smug they might be. Are you a feminist? Of course you are.",
        author: "Caitlin Moran",
        hrefText: "What%20is%20feminism%3F%20Simply%20the%20belief%20that%20women%20should%20be%20as%20free%20as%20men%2C%20however%20nuts%2C%20dim%2C%20deluded%2C%20badly%20dressed%2C%20fat%2C%20receding%2C%20lazy%20and%20smug%20they%20might%20be%2E%20Are%20you%20a%20feminist%3F%20Of%20course%20you%20are%2E",
        heading: "Feminism"
    },
    {
        text: "I am not free while any woman is unfree, even when her shackles are very different from my own.",
        author: "Audre Lorde",
        hrefText: "I%20am%20not%20free%20while%20any%20woman%20is%20unfree%2C%20even%20when%20her%20shackles%20are%20very%20different%20from%20my%20own%2E",
        heading: "Feminism"
    },
    {
        text: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
        author: "John Woods",
        hrefText: "Always%20code%20as%20if%20the%20guy%20who%20ends%20up%20maintaining%20your%20code%20will%20be%20a%20violent%20psychopath%20who%20knows%20where%20you%20live%2E",
        heading: "Programming Humor"
    },
    {
        text: "Walking on water and developing software from a specification are easy if both are frozen.",
        author: "Edward V. Berard",
        hrefText: "Walking%20on%20water%20and%20developing%20software%20from%a%20specification%20are%20easy%20if%20both%20are%20frozen%2E",
        heading: "Programming Humor"
    },
    {
        text: "Talk is cheap. Show me the code.",
        author: "Linus Torvalds",
        hrefText: "Talk%20is%20cheap%2E%20Show%20me%20the%20code%2E",
        heading: "Programming Humor"
    },
]

export default function QuotesBox() {

    //a function to generate a random quote info object
    function newQuote() {
        let idx = Math.floor(Math.random() * quotes.length);
        return quotes[idx];
    }

    function firstRender() {
        const firstQuote = newQuote();
        return (
            <div id="quote-box-inner">
                <div id="quote-info"><br />
                    <div id="text">{firstQuote.text}</div><br />
                    <div id="author"><em>~{firstQuote.author}</em><span id="header"> on <strong>{firstQuote.heading}</strong></span></div>
                    <span></span>
                    
                </div>
                
                <button id="tweet-button"><a id="tweet-quote" target="_blank" href={`https://twitter.com/intent/tweet?text=${firstQuote.hrefText}&hashtags=${firstQuote.author.toLowerCase().split("").filter(char => {return /[a-zA-Z]/g.test(char)}).join("")},quotes,${firstQuote.heading.toLowerCase()}quotes`} data-size="large">Tweet Quote!</a></button>
            </div>
        );
    }

    const [quoteBox, setQuoteBox] = useState(firstRender());

    return (
        <div id="quote-box">
            {quoteBox}
            <button id="new-quote" onClick={() => setQuoteBox(firstRender())}>New Quote</button>
        </div>
    )
}