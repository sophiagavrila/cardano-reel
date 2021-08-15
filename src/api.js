import { NEWS_API_KEY } from "./config"

/**
 * We create and export an arrow function export const getBitcoinArticles = async () => {}. 
 * The keyword async declares that the function we create is an asynchronous function. 
 * This keyword is important as we are working with asynchronous code, when we’re 
 * connecting to the News API. async is required in order to use await.
 */
export const getAdaArticles = async () => {

    try {
        const response = await fetch(
            `https://newsapi.org/v2/everything?q=cardano&apiKey=${NEWS_API_KEY}`
        );

        // The response that we receive from the API is just a HTTP response. 
        // To extract the JSON body content from the response, we use the json() method.
        const json = await response.json();
        console.log(json);

    } catch (error) {
        console.log(error)
    }
}