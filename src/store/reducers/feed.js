const initialState = {
    slider: [
        {
            hero: "https://placeimg.com/640/480/animals",
            text: "Animals are here.",
            image: "https://placeimg.com/150/150/animals/sepia"
        },
        {
            hero: "https://placeimg.com/640/480/people",
            text: "People are here.",
            image: "https://placeimg.com/150/150/people/sepia"
        },
        {
            hero: "https://placeimg.com/640/480/tech",
            text: "Tech is here.",
            image: "https://placeimg.com/150/150/tech/sepia"
        },
        {
            hero: "https://placeimg.com/640/480/space",
            text: "Space is here.",
            image: "https://placeimg.com/150/150/space/sepia"
        },
        {
            hero: "https://placeimg.com/640/480/forest",
            text: "Forest is here.",
            image: "https://placeimg.com/150/150/forest/sepia"
        }
    ]
};
export default function feed(state = initialState) {
    return state
}