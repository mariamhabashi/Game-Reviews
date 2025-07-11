import { Ui } from './ui.js';

export class Games {
    constructor() {
        this.ui = new Ui();
        this.loader = document.querySelector('.loading-spinner');
        
        this.getGames('mmorpg');

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                document.querySelector('.nav-link.active')?.classList.remove('active');
                event.target.classList.add('active');
                const category = event.target.dataset.category;
                this.getGames(category);
            });
        });
    }

    async getGames(category) {
        this.loader.classList.remove('d-none');
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '1ac40d9a69msh06bb7a5866a3b1dp12fa00jsn436a566c97a8',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {
            const api = await fetch(url, options);
            const games = await api.json();
            
            this.ui.displayGames(games);

        } catch (error) {
            console.error("Failed to fetch games:", error);
        } finally {
            this.loader.classList.add('d-none');
        }
    }
}