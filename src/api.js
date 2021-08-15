import { NEWS_API_KEY; } from "./config"


export const getAdaArticles = async () => {

    try {
        const response = await fetch(
            // TODO: change "bitcoin" -> "cardano" after insuring that it works
            `https://newsapi.org/v2/everything?q=bitcoin&apiKey={NEWS_API_KEY}`
        )
    }


}