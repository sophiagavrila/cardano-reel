import { NEWS_API_KEY } from "./config"

/**
 * We create and export an arrow function export const getBitcoinArticles = async () => {}. 
 * The keyword async declares that the function we create is an asynchronous function. 
 * This keyword is important as we are working with asynchronous code, when we’re 
 * connecting to the News API. async is required in order to use await.
 */
export const getAdaArticles = async () => {

    const response = await fetch(
        // filtering all articles with Cardaon in body & in english documentation here
        // https://newsapi.org/docs/endpoints/everything
        `https://newsapi.org/v2/everything?language=en&q=cardano&apiKey=${NEWS_API_KEY}`
    );

    const json = await response.json();

    return json;
}