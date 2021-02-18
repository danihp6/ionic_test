export class Film {
    id: String;
    title: String;
    image: String;
    year: String;
    director: String;

    constructor(data: Object) {
        this.id = data['imdbID'];
        this.title = data['Title'];
        this.image = data['Poster'] != 'N/A' ? data['Poster'] : null;
        this.year = data['Year'] != 'N/A' ? data['Year'] : null;
        this.director = data['Director'];
    }
}