let bestSellingAlbums = [
    {
        artist: "Michael Jackson",
        title: "Thriller",
        year: 1982,
        genres: ["pop", "post-disco", "funk", "rock"],
        sale: 70000000,
    },
    {
        artist: "AC/DC",
        title: "Back in Black",
        year: 1980,
        genres: ["hard rock"],
        sale: 50000000,
    },
    {
        artist: "Whitney Houston",
        title: "The Bodyguard",
        year: 1992,
        genres: ["r&b", "soul", "pop", "soundtrack"],
        sale: 45000000,
    },
    {
        artist: "Pink Floyd",
        title: "The Dark Side of the Moon",
        year: 1973,
        genres: ["progressive rock"],
        sale: 45000000,
    },
    {
        artist: "Eagles",
        title: "Their Greatest Hits (1971 - 1975)",
        year: 1976,
        genres: ["country rock", "soft rock", "folk rock"],
        sale: 44000000,
    },
    {
        artist: "Eagles",
        title: "Hotel California",
        year: 1976,
        genres: ["soft rock"],
        sale: 42000000,
    },
    {
        artist: "Shania Twain",
        title: "Come On Over",
        year: 1997,
        genres: ["country", "pop"],
        sale: 40000000,
    },
    {
        artist: "Fleetwood Mac",
        title: "Rumours",
        year: 1977,
        genres: ["soft rock"],
        sale: 40000000,
    },
];

// DO NOT MODIFY THE CODE ABOVE THIS LINE
// WRITE YOUR CODE BELOW THIS LINE



// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
	toExport = [
		{name: "averageSale", content: averageSale, type: "number"},
        {name: "averageAge", content: averageAge, type: "number"},
        {name: "newestAlbum", content: newestAlbum, type: "object"},
        {name: "oldestAlbum", content: oldestAlbum, type: "object"},
        {name: "albumsOfEagles", content: albumsOfEagles, type: "object"}
	]
} catch (error) {
	toExport = {error: error.message}
}

export {toExport};
