export async function fetchArticles() {
    const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=17e12495a4f94aec9a339713284a929c");

    if (!response.ok) {
        throw new Error("Failed to fetch data.");
    }

    const data = await response.json();
    console.log(data);
    return data; 
}