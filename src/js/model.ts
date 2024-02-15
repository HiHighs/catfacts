import { API_URL } from './config';

export const state = {
    fact: '' as string,
    saved: [] as string[],
}

export async function generateFact(): Promise<void> {
    try {
        const data = await fetch(API_URL);
        const fact = await data.json();
    
        state.fact = fact.data[0];
    } catch(err) {
        throw err;
    }
}

export function saveFact(): void {
    state.saved.push(state.fact);
    persistFacts();
}

function persistFacts() {
    localStorage.setItem('facts', JSON.stringify(state.saved));
}

export function clearFacts() {
    state.saved = [];
    persistFacts();
}

function init() {
    const facts = localStorage.getItem('facts');
    if(facts) {
        state.saved = JSON.parse(facts);
    }
}

init();