export class Ui {
    constructor() {}

    displayGames(games) {
        let cartoona = ``;
        for (const game of games) {
            cartoona += `
            <div class="col-md-6 col-lg-4 col-xl-3">
                <div class="card h-100" data-id="${game.id}">
                    <img src="${game.thumbnail}" class="card-img-top p-3" alt="${game.title} thumbnail">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <h3 class="card-title h6">${game.title}</h3>
                            <span class="badge badge-custom p-2">Free</span>
                        </div>
                        <p class="card-text text-center small">${game.short_description}</p>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                        <span class="badge badge-secondary">${game.genre}</span>
                        <span class="badge badge-secondary">${game.platform}</span>
                    </div>
                </div>
            </div>`;
        }
        document.getElementById('gameData').innerHTML = cartoona;
    }

    displayDetails(details) {
        const content = `
        <div class="col-md-4">
            <img src="${details.thumbnail}" class="w-100" alt="${details.title} thumbnail">
        </div>
        <div class="col-md-8 text-white">
            <h3>Title: ${details.title}</h3>
            <p>Category: <span class="badge bg-info text-dark">${details.genre}</span></p>
            <p>Platform: <span class="badge bg-info text-dark">${details.platform}</span></p>
            <p>Status: <span class="badge bg-info text-dark">${details.status}</span></p>
            <p class="small">${details.description}</p>
            <a href="${details.game_url}" target="_blank" class="btn btn-outline-warning">Show Game</a>
        </div>`;
        document.getElementById('detailsContent').innerHTML = content;
    }
}