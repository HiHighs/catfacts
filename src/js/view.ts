import { SAVE, SAVED } from './config';

class View {
    _catIcon: HTMLElement = document.querySelector('.cat-icon') as HTMLElement;
    _catFact: HTMLElement = document.querySelector('.cat-fact') as HTMLElement;
    _generateBtn: HTMLButtonElement = document.querySelector('.generate-fact-btn') as HTMLButtonElement;
    _saveBtn: HTMLButtonElement = document.querySelector('.save-fact-btn') as HTMLButtonElement;
    _factsBtn: HTMLButtonElement = document.querySelector('.my-facts-btn') as HTMLButtonElement;
    _popup: HTMLElement = document.querySelector('.popup-container') as HTMLElement;
    _closePopup: HTMLElement = document.querySelector('.close-popup') as HTMLElement;
    _savedFacts: HTMLElement = document.querySelector('.saved-facts-list') as HTMLElement;
    _clearBtn: HTMLButtonElement = document.querySelector('.clear-facts-btn') as HTMLButtonElement;

    _i: number = 0;

    constructor() {
        this._init();
    }

    _init(): void {
        // Clicking icon reloads page
        this._catIcon.addEventListener('click', () => {
            location.reload();
        })

        // Close facts
        this._closePopup.addEventListener('click', () => {
            this._popup.style.display = 'none';
        })
        
        document.addEventListener('keydown', e => {
            if(e.key === 'Escape')
                this._popup.style.display = 'none';
        })
    }

    // Render new fact on screen
    renderFact(fact: string): void {
        this._catFact.textContent = fact;
    }

    // Show saved facts on screen
    renderSavedFacts(facts: string[]): void {
        console.log(facts);
        // Empty list
        this._savedFacts.innerHTML = '';
        // Render facts
        facts.forEach(fact => {
            this._savedFacts.insertAdjacentHTML('beforeend', `<li>${fact}</li>`);
        })
    }

    // Generate new fact
    addHandlerGenerateFact(handler: Function) {
        this._generateBtn.addEventListener('click', () => {
            handler();
            // Make save fact button active
            this._saveBtn.textContent = SAVE;
            this._saveBtn.classList.remove('disabled-btn');
            this._saveBtn.disabled = false;
        })
    }

    // Add current fact
    addHandlerSaveFact(handler: Function) {
        this._saveBtn.addEventListener('click', () => {
            handler();
            console.log(SAVE)
            this._saveBtn.textContent = SAVED;
            this._saveBtn.classList.add('disabled-btn');
            this._saveBtn.disabled = true;
        })
    }

    // Show saved facts
    addHandlerShowSavedFacts(handler: Function) {
        // Show facts
        this._factsBtn.addEventListener('click', () => {
            this._popup.style.display = 'flex';
            handler();
        })
    }

    // Clear saved facts
    addHandlerClearSavedFacts(handler: Function) {
        this._clearBtn.addEventListener('click', () => {
            this._savedFacts.textContent = '';
            handler();
        })
    }
}

export default new View();