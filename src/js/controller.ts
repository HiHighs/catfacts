import * as model from './model';
import view from './view';

async function controlGenerateFact(): Promise<void> {
    try {
        view.toggleSpinner();
        await model.generateFact();
        view.renderFact(model.state.fact);
        view.toggleSpinner();
    } catch(err) {
        view.renderError();
    }
}

function controlSaveFact(): void {
    model.saveFact();
}

function controlSavedFacts(): void {
    view.renderSavedFacts(model.state.saved)
}

function controlClearFacts(): void {
    model.clearFacts();
}

function init(): void {
    view.addHandlerGenerateFact(controlGenerateFact);
    view.addHandlerSaveFact(controlSaveFact);
    view.addHandlerShowSavedFacts(controlSavedFacts);
    view.addHandlerClearSavedFacts(controlClearFacts)
}

init();