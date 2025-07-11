import { Ui } from './ui.js';

export class Details {
    constructor() {
        this.ui = new Ui();
        this.loader = document.querySelector('.loading-spinner');
    }

    async getDetails(gameId) {
        this.loader.classList.remove('d-none');
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '1ac40d9a69msh06bb7a5866a3b1dp12fa00jsn436a566c97a8',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {
            const api = await fetch(url, options);
            const details = await api.json();

            this.ui.displayDetails(details);

        } catch (error) {
            console.error("Failed to fetch game details:", error);
        } finally {
            this.loader.classList.add('d-none');
        }
    }
}