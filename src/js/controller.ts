import * as model from './model';
import view from './view';

function controlGenerateFact(): void {
    // Execute render as callback to make sure the async function has completed
    model.generateFact(() => {
        view.renderFact(model.state.fact);
    });
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