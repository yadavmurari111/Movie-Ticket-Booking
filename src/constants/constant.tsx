export const genres: any = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'Science Fiction',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western',
};

export interface MovieItem {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
}
export interface MovieDetailItem {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: {id: string; name: string}[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [];
  production_countries: [];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: [];
  status: 'Released';
  tagline: 'An entire universe. Once and for all.';
  title: 'Avengers: Infinity War';
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface MovieCastItem {
  id: number;
  cast: CastItem[];
  crew: CrewItem[];
}

export interface CastItem {
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
}
export interface CrewItem {
  adult: boolean;
  credit_id: string;
  department: string;
  gender: number;
  id: number;
  job: string;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
}

export const sampleResponse = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg',
      genre_ids: [16, 28, 12, 878],
      id: 569094,
      original_language: 'en',
      original_title: 'Spider-Man: Across the Spider-Verse',
      overview:
        'After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.',
      popularity: 3368.627,
      poster_path: '/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      release_date: '2023-05-31',
      title: 'Spider-Man: Across the Spider-Verse',
      video: false,
      vote_average: 8.5,
      vote_count: 3386,
    },
    {
      adult: false,
      backdrop_path: '/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg',
      genre_ids: [28, 12, 878],
      id: 667538,
      original_language: 'en',
      original_title: 'Transformers: Rise of the Beasts',
      overview:
        'When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.',
      popularity: 2160.316,
      poster_path: '/gPbM0MK8CP8A174rmUwGsADNYKD.jpg',
      release_date: '2023-06-06',
      title: 'Transformers: Rise of the Beasts',
      video: false,
      vote_average: 7.5,
      vote_count: 2747,
    },
    {
      adult: false,
      backdrop_path: '/yF1eOkaYvwiORauRCPWznV9xVvi.jpg',
      genre_ids: [28, 12, 878],
      id: 298618,
      original_language: 'en',
      original_title: 'The Flash',
      overview:
        "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
      popularity: 2108.713,
      poster_path: '/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg',
      release_date: '2023-06-13',
      title: 'The Flash',
      video: false,
      vote_average: 7,
      vote_count: 2305,
    },
    {
      adult: false,
      backdrop_path: '/nHf61UzkfFno5X1ofIhugCPus2R.jpg',
      genre_ids: [35, 12, 14],
      id: 346698,
      original_language: 'en',
      original_title: 'Barbie',
      overview:
        'Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.',
      popularity: 1976.513,
      poster_path: '/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg',
      release_date: '2023-07-19',
      title: 'Barbie',
      video: false,
      vote_average: 7.5,
      vote_count: 3013,
    },
    {
      adult: false,
      backdrop_path: '/rRcNmiH55Tz0ugUsDUGmj8Bsa4V.jpg',
      genre_ids: [35, 10749],
      id: 884605,
      original_language: 'en',
      original_title: 'No Hard Feelings',
      overview:
        'On the brink of losing her childhood home, Maddie discovers an intriguing job listing: wealthy helicopter parents looking for someone to “date” their introverted 19-year-old son, Percy, before he leaves for college. To her surprise, Maddie soon discovers the awkward Percy is no sure thing.',
      popularity: 1978.358,
      poster_path: '/gD72DhJ7NbfxvtxGiAzLaa0xaoj.jpg',
      release_date: '2023-06-15',
      title: 'No Hard Feelings',
      video: false,
      vote_average: 7.1,
      vote_count: 562,
    },
    {
      adult: false,
      backdrop_path: '/hPcP1kv6vrkRmQO3YgV1H97FE5Q.jpg',
      genre_ids: [27, 9648, 53],
      id: 614479,
      original_language: 'en',
      original_title: 'Insidious: The Red Door',
      overview:
        "To put their demons to rest once and for all, Josh Lambert and a college-aged Dalton Lambert must go deeper into The Further than ever before, facing their family's dark past and a host of new and more horrifying terrors that lurk behind the red door.",
      popularity: 1601.636,
      poster_path: '/d07phJqCx6z5wILDYqkyraorDPi.jpg',
      release_date: '2023-07-05',
      title: 'Insidious: The Red Door',
      video: false,
      vote_average: 6.9,
      vote_count: 846,
    },
    {
      adult: false,
      backdrop_path: '/AioRI7M077BBR33VimFiyFop2Rc.jpg',
      genre_ids: [28, 12, 53],
      id: 1149381,
      original_language: 'pl',
      original_title: 'Operacja: Soulcatcher',
      overview:
        'A military contractor hired to seize a weapon that turns people into savage killers seeks revenge when his brother falls victim to the device.',
      popularity: 1585.721,
      poster_path: '/l1f9JSPjCfNftigEii1SDK1g2b3.jpg',
      release_date: '2023-08-02',
      title: 'Soulcatcher',
      video: false,
      vote_average: 6.5,
      vote_count: 100,
    },
    {
      adult: false,
      backdrop_path: '/zN41DPmPhwmgJjHwezALdrdvD0h.jpg',
      genre_ids: [28, 878, 27],
      id: 615656,
      original_language: 'en',
      original_title: 'Meg 2: The Trench',
      overview:
        'An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.',
      popularity: 1730.76,
      poster_path: '/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg',
      release_date: '2023-08-02',
      title: 'Meg 2: The Trench',
      video: false,
      vote_average: 7,
      vote_count: 446,
    },
    {
      adult: false,
      backdrop_path: '/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg',
      genre_ids: [16, 35, 10751, 14, 10749],
      id: 976573,
      original_language: 'en',
      original_title: 'Elemental',
      overview:
        'In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.',
      popularity: 1711.569,
      poster_path: '/8riWcADI1ekEiBguVB9vkilhiQm.jpg',
      release_date: '2023-06-14',
      title: 'Elemental',
      video: false,
      vote_average: 7.7,
      vote_count: 877,
    },
    {
      adult: false,
      backdrop_path: '/bz66a19bR6BKsbY8gSZCM4etJiK.jpg',
      genre_ids: [28, 27, 53],
      id: 1006462,
      original_language: 'en',
      original_title: 'The Flood',
      overview:
        'A horde of giant hungry alligators is unleashed on a group of in-transit prisoners and their guards after a massive hurricane floods Louisiana.',
      popularity: 1700.342,
      poster_path: '/mvjqqklMpHwOxc40rn7dMhGT0Fc.jpg',
      release_date: '2023-07-14',
      title: 'The Flood',
      video: false,
      vote_average: 6.8,
      vote_count: 115,
    },
    {
      adult: false,
      backdrop_path: '/6VWICth8p4zqZiBMKgn6QQ9tnYW.jpg',
      genre_ids: [28, 12, 53, 35],
      id: 457332,
      original_language: 'en',
      original_title: 'Hidden Strike',
      overview:
        'Two elite soldiers must escort civilians through a gauntlet of gunfire and explosions.',
      popularity: 1365.563,
      poster_path: '/zsbolOkw8RhTU4DKOrpf4M7KCmi.jpg',
      release_date: '2023-07-06',
      title: 'Hidden Strike',
      video: false,
      vote_average: 7.1,
      vote_count: 545,
    },
    {
      adult: false,
      backdrop_path: '/aEVYGOIrhWDrNoZxVhhSazmRjeR.jpg',
      genre_ids: [35, 27, 28],
      id: 1070514,
      original_language: 'ja',
      original_title: 'ゾン100～ゾンビになるまでにしたい100のこと～',
      overview:
        "Bullied by his boss, worked around the clock, he's nothing more than a corporate drone. All it takes is a zombie outbreak for him to finally feel alive!",
      popularity: 1369.019,
      poster_path: '/kD35dB3KOHrLo1Y3RU5xXJ1hI7.jpg',
      release_date: '2023-08-03',
      title: 'Zom 100: Bucket List of the Dead',
      video: false,
      vote_average: 6.6,
      vote_count: 194,
    },
    {
      adult: false,
      backdrop_path: '/znUYFf0Sez5lUmxPr3Cby7TVJ6c.jpg',
      genre_ids: [12, 10751, 14, 10749],
      id: 447277,
      original_language: 'en',
      original_title: 'The Little Mermaid',
      overview:
        'The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.',
      popularity: 1268.064,
      poster_path: '/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg',
      release_date: '2023-05-18',
      title: 'The Little Mermaid',
      video: false,
      vote_average: 6.5,
      vote_count: 1598,
    },
    {
      adult: false,
      backdrop_path: '/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg',
      genre_ids: [28, 80, 53],
      id: 385687,
      original_language: 'en',
      original_title: 'Fast X',
      overview:
        "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
      popularity: 1248.845,
      poster_path: '/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
      release_date: '2023-05-17',
      title: 'Fast X',
      video: false,
      vote_average: 7.3,
      vote_count: 3338,
    },
    {
      adult: false,
      backdrop_path: '/7drO1kYgQ0PnnU87sAnBEphYrSM.jpg',
      genre_ids: [16, 28, 27],
      id: 1083862,
      original_language: 'ja',
      original_title: 'バイオハザード：デスアイランド',
      overview:
        'In San Francisco, Jill Valentine is dealing with a zombie outbreak and a new T-Virus, Leon Kennedy is on the trail of a kidnapped DARPA scientist, and Claire Redfield is investigating a monstrous fish that is killing whales in the bay. Joined by Chris Redfield and Rebecca Chambers, they discover the trail of clues from their separate cases all converge on the same location, Alcatraz Island, where a new evil has taken residence and awaits their arrival.',
      popularity: 1056.505,
      poster_path: '/xzAQ28moSPEZxOHJ7WL1mX6hb5H.jpg',
      release_date: '2023-06-22',
      title: 'Resident Evil: Death Island',
      video: false,
      vote_average: 7.7,
      vote_count: 535,
    },
    {
      adult: false,
      backdrop_path: '/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg',
      genre_ids: [878, 12, 28],
      id: 447365,
      original_language: 'en',
      original_title: 'Guardians of the Galaxy Vol. 3',
      overview:
        'Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.',
      popularity: 1040.386,
      poster_path: '/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg',
      release_date: '2023-05-03',
      title: 'Guardians of the Galaxy Vol. 3',
      video: false,
      vote_average: 8.1,
      vote_count: 4292,
    },
    {
      adult: false,
      backdrop_path: '/q01zlutOWYeIpgnFP2iIpCKBceT.jpg',
      genre_ids: [9648, 53, 12],
      id: 1000475,
      original_language: 'en',
      original_title: 'River Wild',
      overview:
        'Follows a pair of siblings who love but distrust each other as they embark on a white-water rafting trip with a small group. One of their friends from childhood turns out to be more dangerous than he appears.',
      popularity: 986.412,
      poster_path: '/bAKCbByXeZ9UyFKIR04ry4fCQX3.jpg',
      release_date: '2023-08-01',
      title: 'River Wild',
      video: false,
      vote_average: 6.5,
      vote_count: 57,
    },
    {
      adult: false,
      backdrop_path: '/nTp2j30pTkrIdf2lpHmf7NUqB2m.jpg',
      genre_ids: [35, 53, 28],
      id: 1153366,
      original_language: 'ar',
      original_title: 'راس براس',
      overview:
        'Hilarity meets danger when a lovesick chauffeur and a bootleg mechanic mistakenly pick up a retired crime lord, igniting a wild, life-changing adventure.',
      popularity: 975.929,
      poster_path: '/cviUizb4Wil59E9tE7cu6IC2IpG.jpg',
      release_date: '2023-08-03',
      title: 'Head to Head',
      video: false,
      vote_average: 6.9,
      vote_count: 40,
    },
    {
      adult: false,
      backdrop_path: '/f7UI3dYpr7ZUHGo0iIr1Qvy1VPe.jpg',
      genre_ids: [16, 10751, 14, 35],
      id: 1040148,
      original_language: 'en',
      original_title: 'Ruby Gillman, Teenage Kraken',
      overview:
        "Ruby Gillman, a sweet and awkward high school student, discovers she's a direct descendant of the warrior kraken queens. The kraken are sworn to protect the oceans of the world against the vain, power-hungry mermaids. Destined to inherit the throne from her commanding grandmother, Ruby must use her newfound powers to protect those she loves most.",
      popularity: 821.236,
      poster_path: '/kgrLpJcLBbyhWIkK7fx1fM4iSvf.jpg',
      release_date: '2023-06-28',
      title: 'Ruby Gillman, Teenage Kraken',
      video: false,
      vote_average: 7.6,
      vote_count: 527,
    },
    {
      adult: false,
      backdrop_path: '/aLpQ3G2LRgXYNrQgUlo6AQRo9R6.jpg',
      genre_ids: [28, 53],
      id: 1143190,
      original_language: 'en',
      original_title: 'Fear the Night',
      overview:
        'During a bachelorette party in a secluded California farmhouse, masked intruders launch a brutal attack, forcing eight women to fight for survival. Led by Tess, a troubled military veteran, they unite to defend themselves throughout a harrowing night.',
      popularity: 894.241,
      poster_path: '/4XLZS2xvdv5rxizzTUVREtRyw95.jpg',
      release_date: '2023-07-21',
      title: 'Fear the Night',
      video: false,
      vote_average: 6.7,
      vote_count: 91,
    },
  ],
  total_pages: 39573,
  total_results: 791442,
};
export const sampleNowPlayingResponse = {
  dates: {maximum: '2023-08-14', minimum: '2023-06-27'},
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg',
      genre_ids: [28, 12, 878],
      id: 667538,
      original_language: 'en',
      original_title: 'Transformers: Rise of the Beasts',
      overview:
        'When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.',
      popularity: 2160.316,
      poster_path: '/gPbM0MK8CP8A174rmUwGsADNYKD.jpg',
      release_date: '2023-06-06',
      title: 'Transformers: Rise of the Beasts',
      video: false,
      vote_average: 7.5,
      vote_count: 2747,
    },
    {
      adult: false,
      backdrop_path: '/yF1eOkaYvwiORauRCPWznV9xVvi.jpg',
      genre_ids: [28, 12, 878],
      id: 298618,
      original_language: 'en',
      original_title: 'The Flash',
      overview:
        "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
      popularity: 2108.713,
      poster_path: '/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg',
      release_date: '2023-06-13',
      title: 'The Flash',
      video: false,
      vote_average: 7,
      vote_count: 2305,
    },
    {
      adult: false,
      backdrop_path: '/nHf61UzkfFno5X1ofIhugCPus2R.jpg',
      genre_ids: [35, 12, 14],
      id: 346698,
      original_language: 'en',
      original_title: 'Barbie',
      overview:
        'Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.',
      popularity: 1976.513,
      poster_path: '/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg',
      release_date: '2023-07-19',
      title: 'Barbie',
      video: false,
      vote_average: 7.5,
      vote_count: 3013,
    },
    {
      adult: false,
      backdrop_path: '/rRcNmiH55Tz0ugUsDUGmj8Bsa4V.jpg',
      genre_ids: [35, 10749],
      id: 884605,
      original_language: 'en',
      original_title: 'No Hard Feelings',
      overview:
        'On the brink of losing her childhood home, Maddie discovers an intriguing job listing: wealthy helicopter parents looking for someone to “date” their introverted 19-year-old son, Percy, before he leaves for college. To her surprise, Maddie soon discovers the awkward Percy is no sure thing.',
      popularity: 1978.358,
      poster_path: '/gD72DhJ7NbfxvtxGiAzLaa0xaoj.jpg',
      release_date: '2023-06-15',
      title: 'No Hard Feelings',
      video: false,
      vote_average: 7.1,
      vote_count: 562,
    },
    {
      adult: false,
      backdrop_path: '/hPcP1kv6vrkRmQO3YgV1H97FE5Q.jpg',
      genre_ids: [27, 9648, 53],
      id: 614479,
      original_language: 'en',
      original_title: 'Insidious: The Red Door',
      overview:
        "To put their demons to rest once and for all, Josh Lambert and a college-aged Dalton Lambert must go deeper into The Further than ever before, facing their family's dark past and a host of new and more horrifying terrors that lurk behind the red door.",
      popularity: 1601.636,
      poster_path: '/d07phJqCx6z5wILDYqkyraorDPi.jpg',
      release_date: '2023-07-05',
      title: 'Insidious: The Red Door',
      video: false,
      vote_average: 6.9,
      vote_count: 846,
    },
    {
      adult: false,
      backdrop_path: '/zN41DPmPhwmgJjHwezALdrdvD0h.jpg',
      genre_ids: [28, 878, 27],
      id: 615656,
      original_language: 'en',
      original_title: 'Meg 2: The Trench',
      overview:
        'An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.',
      popularity: 1730.76,
      poster_path: '/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg',
      release_date: '2023-08-02',
      title: 'Meg 2: The Trench',
      video: false,
      vote_average: 7,
      vote_count: 446,
    },
    {
      adult: false,
      backdrop_path: '/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg',
      genre_ids: [16, 35, 10751, 14, 10749],
      id: 976573,
      original_language: 'en',
      original_title: 'Elemental',
      overview:
        'In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.',
      popularity: 1711.569,
      poster_path: '/8riWcADI1ekEiBguVB9vkilhiQm.jpg',
      release_date: '2023-06-14',
      title: 'Elemental',
      video: false,
      vote_average: 7.7,
      vote_count: 877,
    },
    {
      adult: false,
      backdrop_path: '/bz66a19bR6BKsbY8gSZCM4etJiK.jpg',
      genre_ids: [28, 27, 53],
      id: 1006462,
      original_language: 'en',
      original_title: 'The Flood',
      overview:
        'A horde of giant hungry alligators is unleashed on a group of in-transit prisoners and their guards after a massive hurricane floods Louisiana.',
      popularity: 1700.342,
      poster_path: '/mvjqqklMpHwOxc40rn7dMhGT0Fc.jpg',
      release_date: '2023-07-14',
      title: 'The Flood',
      video: false,
      vote_average: 6.8,
      vote_count: 115,
    },
    {
      adult: false,
      backdrop_path: '/6VWICth8p4zqZiBMKgn6QQ9tnYW.jpg',
      genre_ids: [28, 12, 53, 35],
      id: 457332,
      original_language: 'en',
      original_title: 'Hidden Strike',
      overview:
        'Two elite soldiers must escort civilians through a gauntlet of gunfire and explosions.',
      popularity: 1365.563,
      poster_path: '/zsbolOkw8RhTU4DKOrpf4M7KCmi.jpg',
      release_date: '2023-07-06',
      title: 'Hidden Strike',
      video: false,
      vote_average: 7.1,
      vote_count: 545,
    },
    {
      adult: false,
      backdrop_path: '/7drO1kYgQ0PnnU87sAnBEphYrSM.jpg',
      genre_ids: [16, 28, 27],
      id: 1083862,
      original_language: 'ja',
      original_title: 'バイオハザード：デスアイランド',
      overview:
        'In San Francisco, Jill Valentine is dealing with a zombie outbreak and a new T-Virus, Leon Kennedy is on the trail of a kidnapped DARPA scientist, and Claire Redfield is investigating a monstrous fish that is killing whales in the bay. Joined by Chris Redfield and Rebecca Chambers, they discover the trail of clues from their separate cases all converge on the same location, Alcatraz Island, where a new evil has taken residence and awaits their arrival.',
      popularity: 1056.505,
      poster_path: '/xzAQ28moSPEZxOHJ7WL1mX6hb5H.jpg',
      release_date: '2023-06-22',
      title: 'Resident Evil: Death Island',
      video: false,
      vote_average: 7.7,
      vote_count: 535,
    },
    {
      adult: false,
      backdrop_path: '/f7UI3dYpr7ZUHGo0iIr1Qvy1VPe.jpg',
      genre_ids: [16, 10751, 14, 35],
      id: 1040148,
      original_language: 'en',
      original_title: 'Ruby Gillman, Teenage Kraken',
      overview:
        "Ruby Gillman, a sweet and awkward high school student, discovers she's a direct descendant of the warrior kraken queens. The kraken are sworn to protect the oceans of the world against the vain, power-hungry mermaids. Destined to inherit the throne from her commanding grandmother, Ruby must use her newfound powers to protect those she loves most.",
      popularity: 821.236,
      poster_path: '/kgrLpJcLBbyhWIkK7fx1fM4iSvf.jpg',
      release_date: '2023-06-28',
      title: 'Ruby Gillman, Teenage Kraken',
      video: false,
      vote_average: 7.6,
      vote_count: 527,
    },
    {
      adult: false,
      backdrop_path: '/aLpQ3G2LRgXYNrQgUlo6AQRo9R6.jpg',
      genre_ids: [28, 53],
      id: 1143190,
      original_language: 'en',
      original_title: 'Fear the Night',
      overview:
        'During a bachelorette party in a secluded California farmhouse, masked intruders launch a brutal attack, forcing eight women to fight for survival. Led by Tess, a troubled military veteran, they unite to defend themselves throughout a harrowing night.',
      popularity: 894.241,
      poster_path: '/4XLZS2xvdv5rxizzTUVREtRyw95.jpg',
      release_date: '2023-07-21',
      title: 'Fear the Night',
      video: false,
      vote_average: 6.7,
      vote_count: 91,
    },
    {
      adult: false,
      backdrop_path: '/iJ0UZaC7XW7BUpRQ7OLPZSms8Ou.jpg',
      genre_ids: [28, 12, 18, 14, 878],
      id: 813477,
      original_language: 'ja',
      original_title: 'シン・仮面ライダー',
      overview:
        'A man forced to bear power and stripped of humanity. A woman skeptical of happiness. Takeshi Hongo, an Augmentation made by SHOCKER, and Ruriko Midorikawa, a rebel of the organization, escape while fighting off assassins. What’s justice? What’s evil? Will this violence end? Despite his power, Hongo tries to remain human. Along with freedom, Ruriko has regained a heart. What paths will they choose?',
      popularity: 864.834,
      poster_path: '/9dTO2RygcDT0cQkawABw4QkDegN.jpg',
      release_date: '2023-03-17',
      title: 'Shin Kamen Rider',
      video: false,
      vote_average: 7.2,
      vote_count: 152,
    },
    {
      adult: false,
      backdrop_path: '/iEFuHjqrE059SmflBva1JzDJutE.jpg',
      genre_ids: [16, 10751, 28, 14, 10749],
      id: 496450,
      original_language: 'fr',
      original_title: 'Miraculous - le film',
      overview:
        'A life of an ordinary Parisian teenager Marinette goes superhuman when she becomes Ladybug. Bestowed with magical powers of creation, Ladybug must unite with her opposite, Cat Noir, to save Paris as a new villain unleashes chaos unto the city.',
      popularity: 843.798,
      poster_path: '/jazoSkOHR1H5X4ILIJBN1UfcEyA.jpg',
      release_date: '2023-07-05',
      title: 'Miraculous: Ladybug & Cat Noir, The Movie',
      video: false,
      vote_average: 7.9,
      vote_count: 459,
    },
    {
      adult: false,
      backdrop_path: '/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg',
      genre_ids: [18, 36],
      id: 872585,
      original_language: 'en',
      original_title: 'Oppenheimer',
      overview:
        'The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.',
      popularity: 810.697,
      poster_path: '/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
      release_date: '2023-07-19',
      title: 'Oppenheimer',
      video: false,
      vote_average: 8.3,
      vote_count: 1929,
    },
    {
      adult: false,
      backdrop_path: '/J0XkW5toJLGEucm1pLDvTHXaKC.jpg',
      genre_ids: [28, 18, 10752],
      id: 1076487,
      original_language: 'en',
      original_title: 'Warhorse One',
      overview:
        'A gunned down Navy SEAL Master Chief must guide a child to safety through a gauntlet of hostile Taliban insurgents and survive the brutal Afghanistan wilderness.',
      popularity: 695.525,
      poster_path: '/jP2ik17jvKiV5sGEknMFbZv7WAe.jpg',
      release_date: '2023-06-30',
      title: 'Warhorse One',
      video: false,
      vote_average: 7.3,
      vote_count: 156,
    },
    {
      adult: false,
      backdrop_path: '/14GEZCzCGhV7FMFaWi4Ec22Kcai.jpg',
      genre_ids: [16, 12, 10751, 14],
      id: 459003,
      original_language: 'uk',
      original_title: 'Мавка: Лісова пісня',
      overview:
        'Mavka — a Soul of the Forest and its Warden — faces an impossible choice between love and her duty as guardian to the Heart of the Forest, when she falls in love with a human — the talented young musician Lukas.',
      popularity: 715.241,
      poster_path: '/eeJjd9JU2Mdj9d7nWRFLWlrcExi.jpg',
      release_date: '2023-03-02',
      title: 'Mavka: The Forest Song',
      video: false,
      vote_average: 7.4,
      vote_count: 307,
    },
    {
      adult: false,
      backdrop_path: '/r54HQwvisSXMfip7oJNhPSWyCK5.jpg',
      genre_ids: [28, 12, 10752],
      id: 1061181,
      original_language: 'ja',
      original_title: 'キングダム 運命の炎',
      overview:
        "It follows Li Xin and Wang Qi as they stand on the battlefield for the first time to fight off an invasion by Zhao, and it also follows Ying Zheng's unknown past.",
      popularity: 711.472,
      poster_path: '/lm5LF2eyCcBdCEfvpeyvpujOyPb.jpg',
      release_date: '2023-07-28',
      title: 'Kingdom 3: The Flame of Fate',
      video: false,
      vote_average: 8.2,
      vote_count: 37,
    },
    {
      adult: false,
      backdrop_path: '/oqP1qEZccq5AD9TVTIaO6IGUj7o.jpg',
      genre_ids: [14, 28, 12],
      id: 455476,
      original_language: 'en',
      original_title: 'Knights of the Zodiac',
      overview:
        'When a headstrong street orphan, Seiya, in search of his abducted sister unwittingly taps into hidden powers, he discovers he might be the only person alive who can protect a reincarnated goddess, sent to watch over humanity. Can he let his past go and embrace his destiny to become a Knight of the Zodiac?',
      popularity: 596.191,
      poster_path: '/qW4crfED8mpNDadSmMdi7ZDzhXF.jpg',
      release_date: '2023-04-27',
      title: 'Knights of the Zodiac',
      video: false,
      vote_average: 6.7,
      vote_count: 736,
    },
    {
      adult: false,
      backdrop_path: '/lDCIQ1Qe7cRnhZ4ybQVVEbadMZ.jpg',
      genre_ids: [27, 53],
      id: 1008042,
      original_language: 'en',
      original_title: 'Talk to Me',
      overview:
        'When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far and unleashes terrifying supernatural forces.',
      popularity: 575.662,
      poster_path: '/kw0Hegzpg08v37nRcmczCvqpl7d.jpg',
      release_date: '2023-07-26',
      title: 'Talk to Me',
      video: false,
      vote_average: 7,
      vote_count: 157,
    },
  ],
  total_pages: 79,
  total_results: 1565,
};
