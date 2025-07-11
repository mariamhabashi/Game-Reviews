import { Games } from './games.js';
import { Details } from './details.js';


const gamesSection = document.getElementById('games');
const detailsSection = document.getElementById('details');
const gameCardsContainer = document.getElementById('gameData');
const closeDetailsBtn = document.getElementById('btnClose');


const games = new Games();
const details = new Details();

gameCardsContainer.addEventListener('click', (event) => {
    const card = event.target.closest('.card');
    if (card) {
        const gameId = card.dataset.id;
        
        gamesSection.classList.add('d-none');
        detailsSection.classList.remove('d-none');

        details.getDetails(gameId);
    }
});


closeDetailsBtn.addEventListener('click', () => {
    detailsSection.classList.add('d-none');
    gamesSection.classList.remove('d-none');
});