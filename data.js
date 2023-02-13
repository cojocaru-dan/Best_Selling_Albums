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
let averageSale = (bestSellingAlbums[0].sale + bestSellingAlbums[1].sale + bestSellingAlbums[2].sale + bestSellingAlbums[3].sale + bestSellingAlbums[4].sale + bestSellingAlbums[5].sale + bestSellingAlbums[6].sale + bestSellingAlbums[7].sale) / 8;
console.log(averageSale);

let currentYear = 2023;
let age1 = currentYear - bestSellingAlbums[0].year;
let age2 = currentYear - bestSellingAlbums[1].year;
let age3 = currentYear - bestSellingAlbums[2].year;
let age4 = currentYear - bestSellingAlbums[3].year;
let age5 = currentYear - bestSellingAlbums[4].year;
let age6 = currentYear - bestSellingAlbums[5].year;
let age7 = currentYear - bestSellingAlbums[6].year;
let age8 = currentYear - bestSellingAlbums[7].year;

let averageAge = (age1 + age2 + age3 + age4 + age5 + age6 + age7 + age8) / 8;
console.log(averageAge);

let newestAlbum = bestSellingAlbums[6];
let oldestAlbum = bestSellingAlbums[bestSellingAlbums.length - 5];

console.log(newestAlbum);
console.log(oldestAlbum);

let albumsOfEagles = {
    sales: bestSellingAlbums[4]["sale"] + bestSellingAlbums[5].sale,
    isBothSoftRock: bestSellingAlbums[4]["genres"][1] === bestSellingAlbums[5].genres[0]
};
console.log(albumsOfEagles.sales);
console.log(albumsOfEagles.isBothSoftRock);

bestSellingAlbums[8] = {
    artist: "Tracy Chapman",
    title: "Tracy Chapman",
    year: 1988,
    genres: ["folk rock"],
    sale: 20000000
};
console.log(bestSellingAlbums);

bestSellingAlbums[0].iLikeIt = false;
bestSellingAlbums[1].iLikeIt = true;
bestSellingAlbums[2].iLikeIt = true;
bestSellingAlbums[3].iLikeIt = false;
bestSellingAlbums[4].iLikeIt = true;
bestSellingAlbums[5].iLikeIt = false;
bestSellingAlbums[6].iLikeIt = true;
bestSellingAlbums[7].iLikeIt = true;
bestSellingAlbums[8].iLikeIt = true;
console.log(bestSellingAlbums);

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
