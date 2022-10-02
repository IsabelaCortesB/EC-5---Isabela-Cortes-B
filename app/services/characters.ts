import  { Character } from "../types/index"

export const getCharacters = async (): Promise<Array<Character>> => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    console.log(data.results);
    return data.results;
    

}