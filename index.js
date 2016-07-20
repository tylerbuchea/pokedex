var state = {
  typeName: '',
  sort: 'id',
  search: '',
  sortMenuOpen: false,
};

const types = [
  {
    "name": "Bug",
    "color": "rgb(168, 184, 32)"
  },
  {
    "name": "Dragon",
    "color": "rgb(112, 56, 248)"
  },
  {
    "name": "Electric",
    "color": "rgb(248, 208, 48)"
  },
  {
    "name": "Fairy",
    "color": "rgb(240, 182, 188)"
  },
  {
    "name": "Fighting",
    "color": "rgb(192, 48, 40)"
  },
  {
    "name": "Fire",
    "color": "rgb(240, 128, 48)"
  },
  {
    "name": "Flying",
    "color": "rgb(168, 144, 240)"
  },
  {
    "name": "Ghost",
    "color": "rgb(112, 88, 152)"
  },
  {
    "name": "Grass",
    "color": "rgb(120, 200, 80)"
  },
  {
    "name": "Ground",
    "color": "rgb(224, 192, 104)"
  },
  {
    "name": "Ice",
    "color": "rgb(152, 216, 216)"
  },
  {
    "name": "Normal",
    "color": "rgb(168, 168, 120)"
  },
  {
    "name": "Poison",
    "color": "rgb(160, 64, 160)"
  },
  {
    "name": "Psychic",
    "color": "rgb(248, 88, 136)"
  },
  {
    "name": "Rock",
    "color": "rgb(184, 160, 56)"
  },
  {
    "name": "Steel",
    "color": "rgb(184, 184, 208)"
  },
  {
    "name": "Water",
    "color": "rgb(104, 144, 240)"
  }
];

const pokemons = [
  {
    "id": 1,
    "prettyId": "001",
    "name": "Bulbasaur",
    "types": [
      {
        "name": "Grass",
        "color": "rgb(120, 200, 80)"
      },
      {
        "name": "Poison",
        "color": "rgb(160, 64, 160)"
      }
    ],
    "cp": 951,
    "hp": 77,
    "power": 1.721,
    "img": "bulbasaur1.png"
  },
  {
    "id": 2,
    "prettyId": "002",
    "name": "Ivysaur",
    "types": [
      {
        "name": "Grass",
        "color": "rgb(120, 200, 80)"
      },
      {
        "name": "Poison",
        "color": "rgb(160, 64, 160)"
      }
    ],
    "cp": 1483,
    "hp": 100,
    "power": 2.483,
    "img": "ivysaur2.png"
  },
  {
    "id": 3,
    "prettyId": "003",
    "name": "Venusaur",
    "types": [
      {
        "name": "Grass",
        "color": "rgb(120, 200, 80)"
      },
      {
        "name": "Poison",
        "color": "rgb(160, 64, 160)"
      }
    ],
    "cp": 2392,
    "hp": 132,
    "power": 3.7119999999999997,
    "img": "venusaur3.png"
  },
  {
    "id": 4,
    "prettyId": "004",
    "name": "Charmander",
    "types": [
      {
        "name": "Fire",
        "color": "rgb(240, 128, 48)"
      }
    ],
    "cp": 841,
    "hp": 67,
    "power": 1.5110000000000001,
    "img": "charmander4.png"
  },
  {
    "id": 5,
    "prettyId": "005",
    "name": "Charmeleon",
    "types": [
      {
        "name": "Fire",
        "color": "rgb(240, 128, 48)"
      }
    ],
    "cp": 1411,
    "hp": 97,
    "power": 2.3810000000000002,
    "img": "charmeleon5.png"
  },
  {
    "id": 6,
    "prettyId": "006",
    "name": "Charizard",
    "types": [
      {
        "name": "Fire",
        "color": "rgb(240, 128, 48)"
      },
      {
        "name": "Flying",
        "color": "rgb(168, 144, 240)"
      }
    ],
    "cp": 2413,
    "hp": 129,
    "power": 3.703,
    "img": "charizard6.png"
  },
  {
    "id": 7,
    "prettyId": "007",
    "name": "Squirtle",
    "types": [
      {
        "name": "Water",
        "color": "rgb(104, 144, 240)"
      }
    ],
    "cp": 891,
    "hp": 75,
    "power": 1.641,
    "img": "squirtle7.png"
  },
  {
    "id": 8,
    "prettyId": "008",
    "name": "Wartortle",
    "types": [
      {
        "name": "Water",
        "color": "rgb(104, 144, 240)"
      }
    ],
    "cp": 1435,
    "hp": 99,
    "power": 2.425,
    "img": "wartortle8.png"
  },
  {
    "id": 9,
    "prettyId": "009",
    "name": "Blastoise",
    "types": [
      {
        "name": "Water",
        "color": "rgb(104, 144, 240)"
      }
    ],
    "cp": 2355,
    "hp": 130,
    "power": 3.6550000000000002,
    "img": "blastoise9.png"
  },
  {
    "id": 10,
    "prettyId": "010",
    "name": "Caterpie",
    "types": [
      {
        "name": "Bug",
        "color": "rgb(168, 184, 32)"
      }
    ],
    "cp": 367,
    "hp": 77,
    "power": 1.137,
    "img": "caterpie10.png"
  },
  {
    "id": 11,
    "prettyId": "011",
    "name": "Metapod",
    "types": [
      {
        "name": "Bug",
        "color": "rgb(168, 184, 32)"
      }
    ],
    "cp": 397,
    "hp": 84,
    "power": 1.237,
    "img": "metapod11.png"
  },
  {
    "id": 12,
    "prettyId": "012",
    "name": "Butterfree",
    "types": [
      {
        "name": "Bug",
        "color": "rgb(168, 184, 32)"
      },
      {
        "name": "Flying",
        "color": "rgb(168, 144, 240)"
      }
    ],
    "cp": 1315,
    "hp": 100,
    "power": 2.315,
    "img": "butterfree12.png"
  },
  {
    "id": 13,
    "prettyId": "013",
    "name": "Weedle",
    "types": [
      {
        "name": "Bug",
        "color": "rgb(168, 184, 32)"
      },
      {
        "name": "Poison",
        "color": "rgb(160, 64, 160)"
      }
    ],
    "cp": 372,
    "hp": 69,
    "power": 1.0619999999999998,
    "img": "weedle13.png"
  },
  {
    "id": 14,
    "prettyId": "014",
    "name": "Kakuna",
    "types": [
      {
        "name": "Bug",
        "color": "rgb(168, 184, 32)"
      },
      {
        "name": "Poison",
        "color": "rgb(160, 64, 160)"
      }
    ],
    "cp": 405,
    "hp": 77,
    "power": 1.175,
    "img": "kakuna14.png"
  },
  {
    "id": 15,
    "prettyId": "015",
    "name": "Beedrill",
    "types": [
      {
        "name": "Bug",
        "color": "rgb(168, 184, 32)"
      },
      {
        "name": "Poison",
        "color": "rgb(160, 64, 160)"
      }
    ],
    "cp": 1301,
    "hp": 108,
    "power": 2.3810000000000002,
    "img": "beedrill15.png"
  },
  {
    "id": 16,
    "prettyId": "016",
    "name": "Pidgey",
    "types": [
      {
        "name": "Normal",
        "color": "rgb(168, 168, 120)"
      },
      {
        "name": "Flying",
        "color": "rgb(168, 144, 240)"
      }
    ],
    "cp": 585,
    "hp": 69,
    "power": 1.275,
    "img": "pidgey16.png"
  },
  {
    "id": 17,
    "prettyId": "017",
    "name": "Pidgeotto",
    "types": [
      {
        "name": "Normal",
        "color": "rgb(168, 168, 120)"
      },
      {
        "name": "Flying",
        "color": "rgb(168, 144, 240)"
      }
    ],
    "cp": 1096,
    "hp": 105,
    "power": 2.146,
    "img": "pidgeotto17.png"
  },
  {
    "id": 18,
    "prettyId": "018",
    "name": "Pidgeot",
    "types": [
      {
        "name": "Normal",
        "color": "rgb(168, 168, 120)"
      },
      {
        "name": "Flying",
        "color": "rgb(168, 144, 240)"
      }
    ],
    "cp": 1923,
    "hp": 137,
    "power": 3.293,
    "img": "pidgeot18.png"
  },
  {
    "id": 19,
    "prettyId": "019",
    "name": "Rattata",
    "types": [
      {
        "name": "Normal",
        "color": "rgb(168, 168, 120)"
      }
    ],
    "cp": 493,
    "hp": 53,
    "power": 1.0230000000000001,
    "img": "rattata19.png"
  },
  {
    "id": 20,
    "prettyId": "020",
    "name": "Raticate",
    "types": [
      {
        "name": "Normal",
        "color": "rgb(168, 168, 120)"
      }
    ],
    "cp": 1304,
    "hp": 92,
    "power": 2.224,
    "img": "raticate20.png"
  },
  {
    "id": 21,
    "prettyId": "021",
    "name": "Spearow",
    "types": [
      {
        "name": "Normal",
        "color": "rgb(168, 168, 120)"
      },
      {
        "name": "Flying",
        "color": "rgb(168, 144, 240)"
      }
    ],
    "cp": 591,
    "hp": 69,
    "power": 1.281,
    "img": "spearow21.png"
  },
  {
    "id": 22,
    "prettyId": "022",
    "name": "Fearow",
    "types": [
      {
        "name": "Normal",
        "color": "rgb(168, 168, 120)"
      },
      {
        "name": "Flying",
        "color": "rgb(168, 144, 240)"
      }
    ],
    "cp": 1592,
    "hp": 108,
    "power": 2.672,
    "img": "fearow22.png"
  },
  {
    "id": 23,
    "prettyId": "023",
    "name": "Ekans",
    "types": [
      {
        "name": "Poison",
        "color": "rgb(160, 64, 160)"
      }
    ],
    "cp": 718,
    "hp": 61,
    "power": 1.3279999999999998,
    "img": "ekans23.png"
  },
  {
    "id": 24,
    "prettyId": "024",
    "name": "Arbok",
    "types": [
      {
        "name": "Poison",
        "color": "rgb(160, 64, 160)"
      }
    ],
    "cp": 1611,
    "hp": 100,
    "power": 2.6109999999999998,
    "img": "arbok24.png"
  },
  {
    "id": 25,
    "prettyId": "025",
    "name": "Pikachu",
    "types": [
      {
        "name": "Electric",
        "color": "rgb(248, 208, 48)"
      }
    ],
    "cp": 777,
    "hp": 61,
    "power": 1.387,
    "img": "pikachu25.png"
  },
  {
    "id": 26,
    "prettyId": "026",
    "name": "Raichu",
    "types": [
      {
        "name": "Electric",
        "color": "rgb(248, 208, 48)"
      }
    ],
    "cp": 1859,
    "hp": 100,
    "power": 2.859,
    "img": "raichu26.png"
  },
  {
    "id": 27,
    "prettyId": "027",
    "name": "Sandshrew",
    "types": [
      {
        "name": "Ground",
        "color": "rgb(224, 192, 104)"
      }
    ],
    "cp": 695,
    "hp": 84,
    "power": 1.535,
    "img": "sandshrew27.png"
  },
  {
    "id": 28,
    "prettyId": "028",
    "name": "Sandslash",
    "types": [
      {
        "name": "Ground",
        "color": "rgb(224, 192, 104)"
      }
    ],
    "cp": 1654,
    "hp": 124,
    "power": 2.894,
    "img": "sandslash28.png"
  },
  {
    "id": 29,
    "prettyId": "029",
    "name": "Nidoranâ",
    "types": [
      {
        "name": "Poison",
        "color": "rgb(160, 64, 160)"
      }
    ],
    "cp": 768,
    "hp": 92,
    "power": 1.6880000000000002,
    "img": "nidoranâ29.png"
  },
  {
    "id": 30,
    "prettyId": "030",
    "name": "Nidorina",
    "types": [
      {
        "name": "Poison",
        "color": "rgb(160, 64, 160)"
      }
    ],
    "cp": 1267,
    "hp": 116,
    "power": 2.4269999999999996,
    "img": "nidorina30.png"
  },
  {
    "id": 31,
    "prettyId": "031",
    "name": "Nidoqueen",
    "types": [
      {
        "name": "Poison",
        "color": "rgb(160, 64, 160)"
      },
      {
        "name": "Ground",
        "color": "rgb(224, 192, 104)"
      }
    ],
    "cp": 2301,
    "hp": 148,
    "power": 3.781,
    "img": "nidoqueen31.png"
  },
  {
    "id": 32,
    "prettyId": "032",
    "name": "Nidoranâ",
    "types": [
      {
        "name": "Poison",
        "color": "rgb(160, 64, 160)"
      }
    ],
    "cp": 737,
    "hp": 78,
    "power": 1.517,
    "img": "nidoranâ32.png"
  },
  {
    "id": 33,
    "prettyId": "033",
    "name": "Nidorino",
    "types": [
      {
        "name": "Poison",
        "color": "rgb(160, 64, 160)"
      }
    ],
    "cp": 1236,
    "hp": 102,
    "power": 2.2560000000000002,
    "img": "nidorino33.png"
  },
  {
    "id": 34,
    "prettyId": "034",
    "name": "Nidoking",
    "types": [
      {
        "name": "Poison",
        "color": "rgb(160, 64, 160)"
      },
      {
        "name": "Ground",
        "color": "rgb(224, 192, 104)"
      }
    ],
    "cp": 2291,
    "hp": 133,
    "power": 3.621,
    "img": "nidoking34.png"
  },
  {
    "id": 35,
    "prettyId": "035",
    "name": "Clefairy",
    "types": [
      {
        "name": "Fairy",
        "color": "rgb(240, 182, 188)"
      }
    ],
    "cp": 1074,
    "hp": 116,
    "power": 2.234,
    "img": "clefairy35.png"
  },
  {
    "id": 36,
    "prettyId": "036",
    "name": "Clefable",
    "types": [
      {
        "name": "Fairy",
        "color": "rgb(240, 182, 188)"
      }
    ],
    "cp": 2217,
    "hp": 156,
    "power": 3.777,
    "img": "clefable36.png"
  },
  {
    "id": 37,
    "prettyId": "037",
    "name": "Vulpix",
    "types": [
      {
        "name": "Fire",
        "color": "rgb(240, 128, 48)"
      }
    ],
    "cp": 725,
    "hp": 65,
    "power": 1.375,
    "img": "vulpix37.png"
  },
  {
    "id": 38,
    "prettyId": "038",
    "name": "Ninetales",
    "types": [
      {
        "name": "Fire",
        "color": "rgb(240, 128, 48)"
      }
    ],
    "cp": 2015,
    "hp": 121,
    "power": 3.225,
    "img": "ninetales38.png"
  },
  {
    "id": 39,
    "prettyId": "039",
    "name": "Jigglypuff",
    "types": [
      {
        "name": "Normal",
        "color": "rgb(168, 168, 120)"
      },
      {
        "name": "Fairy",
        "color": "rgb(240, 182, 188)"
      }
    ],
    "cp": 796,
    "hp": 187,
    "power": 2.6660000000000004,
    "img": "jigglypuff39.png"
  },
  {
    "id": 40,
    "prettyId": "040",
    "name": "Wigglytuff",
    "types": [
      {
        "name": "Normal",
        "color": "rgb(168, 168, 120)"
      },
      {
        "name": "Fairy",
        "color": "rgb(240, 182, 188)"
      }
    ],
    "cp": 1997,
    "hp": 227,
    "power": 4.267,
    "img": "wigglytuff40.png"
  },
  {
    "id": 41,
    "prettyId": "041",
    "name": "Zubat",
    "types": [
      {
        "name": "Poison",
        "color": "rgb(160, 64, 160)"
      },
      {
        "name": "Flying",
        "color": "rgb(168, 144, 240)"
      }
    ],
    "cp": 550,
    "hp": 69,
    "power": 1.24,
    "img": "zubat41.png"
  },
  {
    "id": 42,
    "prettyId": "042",
    "name": "Golbat",
    "types": [
      {
        "name": "Poison",
        "color": "rgb(160, 64, 160)"
      },
      {
        "name": "Flying",
        "color": "rgb(168, 144, 240)"
      }
    ],
    "cp": 1760,
    "hp": 124,
    "power": 3,
    "img": "golbat42.png"
  },
  {
    "id": 43,
    "prettyId": "043",
    "name": "Oddish",
    "types": [
      {
        "name": "Grass",
        "color": "rgb(120, 200, 80)"
      },
      {
        "name": "Poison",
        "color": "rgb(160, 64, 160)"
      }
    ],
    "cp": 1023,
    "hp": 77,
    "power": 1.793,
    "img": "oddish43.png"
  },
  {
    "id": 44,
    "prettyId": "044",
    "name": "Gloom",
    "types": [
      {
        "name": "Grass",
        "color": "rgb(120, 200, 80)"
      },
      {
        "name": "Poison",
        "color": "rgb(160, 64, 160)"
      }
    ],
    "cp": 1537,
    "hp": 100,
    "power": 2.537,
    "img": "gloom44.png"
  },
  {
    "id": 45,
    "prettyId": "045",
    "name": "Vileplume",
    "types": [
      {
        "name": "Grass",
        "color": "rgb(120, 200, 80)"
      },
      {
        "name": "Poison",
        "color": "rgb(160, 64, 160)"
      }
    ],
    "cp": 2307,
    "hp": 124,
    "power": 3.5469999999999997,
    "img": "vileplume45.png"
  },
  {
    "id": 46,
    "prettyId": "046",
    "name": "Paras",
    "types": [
      {
        "name": "Bug",
        "color": "rgb(168, 184, 32)"
      },
      {
        "name": "Grass",
        "color": "rgb(120, 200, 80)"
      }
    ],
    "cp": 804,
    "hp": 61,
    "power": 1.4140000000000001,
    "img": "paras46.png"
  },
  {
    "id": 47,
    "prettyId": "047",
    "name": "Parasect",
    "types": [
      {
        "name": "Bug",
        "color": "rgb(168, 184, 32)"
      },
      {
        "name": "Grass",
        "color": "rgb(120, 200, 80)"
      }
    ],
    "cp": 1592,
    "hp": 100,
    "power": 2.592,
    "img": "parasect47.png"
  },
  {
    "id": 48,
    "prettyId": "048",
    "name": "Venonat",
    "types": [
      {
        "name": "Bug",
        "color": "rgb(168, 184, 32)"
      },
      {
        "name": "Poison",
        "color": "rgb(160, 64, 160)"
      }
    ],
    "cp": 912,
    "hp": 100,
    "power": 1.912,
    "img": "venonat48.png"
  },
  {
    "id": 49,
    "prettyId": "049",
    "name": "Venomoth",
    "types": [
      {
        "name": "Bug",
        "color": "rgb(168, 184, 32)"
      },
      {
        "name": "Poison",
        "color": "rgb(160, 64, 160)"
      }
    ],
    "cp": 1730,
    "hp": 116,
    "power": 2.8899999999999997,
    "img": "venomoth49.png"
  },
  {
    "id": 50,
    "prettyId": "050",
    "name": "Diglett",
    "types": [
      {
        "name": "Ground",
        "color": "rgb(224, 192, 104)"
      }
    ],
    "cp": 365,
    "hp": 21,
    "power": 0.575,
    "img": "diglett50.png"
  },
  {
    "id": 51,
    "prettyId": "051",
    "name": "Dugtrio",
    "types": [
      {
        "name": "Ground",
        "color": "rgb(224, 192, 104)"
      }
    ],
    "cp": 1038,
    "hp": 61,
    "power": 1.6480000000000001,
    "img": "dugtrio51.png"
  },
  {
    "id": 52,
    "prettyId": "052",
    "name": "Meowth",
    "types": [
      {
        "name": "Normal",
        "color": "rgb(168, 168, 120)"
      }
    ],
    "cp": 656,
    "hp": 69,
    "power": 1.346,
    "img": "meowth52.png"
  },
  {
    "id": 53,
    "prettyId": "053",
    "name": "Persian",
    "types": [
      {
        "name": "Normal",
        "color": "rgb(168, 168, 120)"
      }
    ],
    "cp": 1483,
    "hp": 108,
    "power": 2.563,
    "img": "persian53.png"
  },
  {
    "id": 54,
    "prettyId": "054",
    "name": "Psyduck",
    "types": [
      {
        "name": "Water",
        "color": "rgb(104, 144, 240)"
      }
    ],
    "cp": 987,
    "hp": 84,
    "power": 1.827,
    "img": "psyduck54.png"
  },
  {
    "id": 55,
    "prettyId": "055",
    "name": "Golduck",
    "types": [
      {
        "name": "Water",
        "color": "rgb(104, 144, 240)"
      }
    ],
    "cp": 2206,
    "hp": 132,
    "power": 3.526,
    "img": "golduck55.png"
  },
  {
    "id": 56,
    "prettyId": "056",
    "name": "Mankey",
    "types": [
      {
        "name": "Fighting",
        "color": "rgb(192, 48, 40)"
      }
    ],
    "cp": 769,
    "hp": 69,
    "power": 1.459,
    "img": "mankey56.png"
  },
  {
    "id": 57,
    "prettyId": "057",
    "name": "Primeape",
    "types": [
      {
        "name": "Fighting",
        "color": "rgb(192, 48, 40)"
      }
    ],
    "cp": 1704,
    "hp": 108,
    "power": 2.784,
    "img": "primeape57.png"
  },
  {
    "id": 58,
    "prettyId": "058",
    "name": "Growlithe",
    "types": [
      {
        "name": "Fire",
        "color": "rgb(240, 128, 48)"
      }
    ],
    "cp": 1199,
    "hp": 92,
    "power": 2.119,
    "img": "growlithe58.png"
  },
  {
    "id": 59,
    "prettyId": "059",
    "name": "Arcanine",
    "types": [
      {
        "name": "Fire",
        "color": "rgb(240, 128, 48)"
      }
    ],
    "cp": 2781,
    "hp": 148,
    "power": 4.261,
    "img": "arcanine59.png"
  },
  {
    "id": 60,
    "prettyId": "060",
    "name": "Poliwag",
    "types": [
      {
        "name": "Water",
        "color": "rgb(104, 144, 240)"
      }
    ],
    "cp": 693,
    "hp": 69,
    "power": 1.383,
    "img": "poliwag60.png"
  },
  {
    "id": 61,
    "prettyId": "061",
    "name": "Poliwhirl",
    "types": [
      {
        "name": "Water",
        "color": "rgb(104, 144, 240)"
      }
    ],
    "cp": 1206,
    "hp": 108,
    "power": 2.286,
    "img": "poliwhirl61.png"
  },
  {
    "id": 62,
    "prettyId": "062",
    "name": "Poliwrath",
    "types": [
      {
        "name": "Water",
        "color": "rgb(104, 144, 240)"
      },
      {
        "name": "Fighting",
        "color": "rgb(192, 48, 40)"
      }
    ],
    "cp": 2321,
    "hp": 148,
    "power": 3.801,
    "img": "poliwrath62.png"
  },
  {
    "id": 63,
    "prettyId": "063",
    "name": "Abra",
    "types": [
      {
        "name": "Psychic",
        "color": "rgb(248, 88, 136)"
      }
    ],
    "cp": 508,
    "hp": 45,
    "power": 0.958,
    "img": "abra63.png"
  },
  {
    "id": 64,
    "prettyId": "064",
    "name": "Kadabra",
    "types": [
      {
        "name": "Psychic",
        "color": "rgb(248, 88, 136)"
      }
    ],
    "cp": 1005,
    "hp": 69,
    "power": 1.6949999999999998,
    "img": "kadabra64.png"
  },
  {
    "id": 65,
    "prettyId": "065",
    "name": "Alakazam",
    "types": [
      {
        "name": "Psychic",
        "color": "rgb(248, 88, 136)"
      }
    ],
    "cp": 1654,
    "hp": 92,
    "power": 2.574,
    "img": "alakazam65.png"
  },
  {
    "id": 66,
    "prettyId": "066",
    "name": "Machop",
    "types": [
      {
        "name": "Fighting",
        "color": "rgb(192, 48, 40)"
      }
    ],
    "cp": 968,
    "hp": 116,
    "power": 2.128,
    "img": "machop66.png"
  },
  {
    "id": 67,
    "prettyId": "067",
    "name": "Machoke",
    "types": [
      {
        "name": "Fighting",
        "color": "rgb(192, 48, 40)"
      }
    ],
    "cp": 1606,
    "hp": 132,
    "power": 2.926,
    "img": "machoke67.png"
  },
  {
    "id": 68,
    "prettyId": "068",
    "name": "Machamp",
    "types": [
      {
        "name": "Fighting",
        "color": "rgb(192, 48, 40)"
      }
    ],
    "cp": 2406,
    "hp": 148,
    "power": 3.886,
    "img": "machamp68.png"
  },
  {
    "id": 69,
    "prettyId": "069",
    "name": "Bellsprout",
    "types": [
      {
        "name": "Grass",
        "color": "rgb(120, 200, 80)"
      },
      {
        "name": "Poison",
        "color": "rgb(160, 64, 160)"
      }
    ],
    "cp": 990,
    "hp": 84,
    "power": 1.83,
    "img": "bellsprout69.png"
  },
  {
    "id": 70,
    "prettyId": "070",
    "name": "Weepinbell",
    "types": [
      {
        "name": "Grass",
        "color": "rgb(120, 200, 80)"
      },
      {
        "name": "Poison",
        "color": "rgb(160, 64, 160)"
      }
    ],
    "cp": 1567,
    "hp": 108,
    "power": 2.6470000000000002,
    "img": "weepinbell70.png"
  },
  {
    "id": 71,
    "prettyId": "071",
    "name": "Victreebel",
    "types": [
      {
        "name": "Grass",
        "color": "rgb(120, 200, 80)"
      },
      {
        "name": "Poison",
        "color": "rgb(160, 64, 160)"
      }
    ],
    "cp": 2342,
    "hp": 132,
    "power": 3.662,
    "img": "victreebel71.png"
  },
  {
    "id": 72,
    "prettyId": "072",
    "name": "Tentacool",
    "types": [
      {
        "name": "Water",
        "color": "rgb(104, 144, 240)"
      },
      {
        "name": "Poison",
        "color": "rgb(160, 64, 160)"
      }
    ],
    "cp": 794,
    "hp": 69,
    "power": 1.484,
    "img": "tentacool72.png"
  },
  {
    "id": 73,
    "prettyId": "073",
    "name": "Tentacruel",
    "types": [
      {
        "name": "Water",
        "color": "rgb(104, 144, 240)"
      },
      {
        "name": "Poison",
        "color": "rgb(160, 64, 160)"
      }
    ],
    "cp": 2046,
    "hp": 132,
    "power": 3.3659999999999997,
    "img": "tentacruel73.png"
  },
  {
    "id": 74,
    "prettyId": "074",
    "name": "Geodude",
    "types": [
      {
        "name": "Rock",
        "color": "rgb(184, 160, 56)"
      },
      {
        "name": "Ground",
        "color": "rgb(224, 192, 104)"
      }
    ],
    "cp": 742,
    "hp": 69,
    "power": 1.432,
    "img": "geodude74.png"
  },
  {
    "id": 75,
    "prettyId": "075",
    "name": "Graveler",
    "types": [
      {
        "name": "Rock",
        "color": "rgb(184, 160, 56)"
      },
      {
        "name": "Ground",
        "color": "rgb(224, 192, 104)"
      }
    ],
    "cp": 1294,
    "hp": 92,
    "power": 2.214,
    "img": "graveler75.png"
  },
  {
    "id": 76,
    "prettyId": "076",
    "name": "Golem",
    "types": [
      {
        "name": "Rock",
        "color": "rgb(184, 160, 56)"
      },
      {
        "name": "Ground",
        "color": "rgb(224, 192, 104)"
      }
    ],
    "cp": 2126,
    "hp": 132,
    "power": 3.4459999999999997,
    "img": "golem76.png"
  },
  {
    "id": 77,
    "prettyId": "077",
    "name": "Ponyta",
    "types": [
      {
        "name": "Fire",
        "color": "rgb(240, 128, 48)"
      }
    ],
    "cp": 1370,
    "hp": 84,
    "power": 2.21,
    "img": "ponyta77.png"
  },
  {
    "id": 78,
    "prettyId": "078",
    "name": "Rapidash",
    "types": [
      {
        "name": "Fire",
        "color": "rgb(240, 128, 48)"
      }
    ],
    "cp": 2024,
    "hp": 108,
    "power": 3.104,
    "img": "rapidash78.png"
  },
  {
    "id": 79,
    "prettyId": "079",
    "name": "Slowpoke",
    "types": [
      {
        "name": "Water",
        "color": "rgb(104, 144, 240)"
      },
      {
        "name": "Psychic",
        "color": "rgb(248, 88, 136)"
      }
    ],
    "cp": 1089,
    "hp": 148,
    "power": 2.569,
    "img": "slowpoke79.png"
  },
  {
    "id": 80,
    "prettyId": "080",
    "name": "Slowbro",
    "types": [
      {
        "name": "Water",
        "color": "rgb(104, 144, 240)"
      },
      {
        "name": "Psychic",
        "color": "rgb(248, 88, 136)"
      }
    ],
    "cp": 2409,
    "hp": 156,
    "power": 3.969,
    "img": "slowbro80.png"
  },
  {
    "id": 81,
    "prettyId": "081",
    "name": "Magnemite",
    "types": [
      {
        "name": "Electric",
        "color": "rgb(248, 208, 48)"
      },
      {
        "name": "Steel",
        "color": "rgb(184, 184, 208)"
      }
    ],
    "cp": 774,
    "hp": 45,
    "power": 1.224,
    "img": "magnemite81.png"
  },
  {
    "id": 82,
    "prettyId": "082",
    "name": "Magneton",
    "types": [
      {
        "name": "Electric",
        "color": "rgb(248, 208, 48)"
      },
      {
        "name": "Steel",
        "color": "rgb(184, 184, 208)"
      }
    ],
    "cp": 1715,
    "hp": 84,
    "power": 2.555,
    "img": "magneton82.png"
  },
  {
    "id": 83,
    "prettyId": "083",
    "name": "Farfetch'd",
    "types": [
      {
        "name": "Normal",
        "color": "rgb(168, 168, 120)"
      },
      {
        "name": "Flying",
        "color": "rgb(168, 144, 240)"
      }
    ],
    "cp": 1133,
    "hp": 88,
    "power": 2.013,
    "img": "farfetch'd83.png"
  },
  {
    "id": 84,
    "prettyId": "084",
    "name": "Doduo",
    "types": [
      {
        "name": "Normal",
        "color": "rgb(168, 168, 120)"
      },
      {
        "name": "Flying",
        "color": "rgb(168, 144, 240)"
      }
    ],
    "cp": 746,
    "hp": 61,
    "power": 1.3559999999999999,
    "img": "doduo84.png"
  },
  {
    "id": 85,
    "prettyId": "085",
    "name": "Dodrio",
    "types": [
      {
        "name": "Normal",
        "color": "rgb(168, 168, 120)"
      },
      {
        "name": "Flying",
        "color": "rgb(168, 144, 240)"
      }
    ],
    "cp": 1677,
    "hp": 100,
    "power": 2.677,
    "img": "dodrio85.png"
  },
  {
    "id": 86,
    "prettyId": "086",
    "name": "Seel",
    "types": [
      {
        "name": "Water",
        "color": "rgb(104, 144, 240)"
      }
    ],
    "cp": 985,
    "hp": 108,
    "power": 2.065,
    "img": "seel86.png"
  },
  {
    "id": 87,
    "prettyId": "087",
    "name": "Dewgong",
    "types": [
      {
        "name": "Water",
        "color": "rgb(104, 144, 240)"
      },
      {
        "name": "Ice",
        "color": "rgb(152, 216, 216)"
      }
    ],
    "cp": 1975,
    "hp": 148,
    "power": 3.455,
    "img": "dewgong87.png"
  },
  {
    "id": 88,
    "prettyId": "088",
    "name": "Grimer",
    "types": [
      {
        "name": "Poison",
        "color": "rgb(160, 64, 160)"
      }
    ],
    "cp": 1152,
    "hp": 132,
    "power": 2.472,
    "img": "grimer88.png"
  },
  {
    "id": 89,
    "prettyId": "089",
    "name": "Muk",
    "types": [
      {
        "name": "Poison",
        "color": "rgb(160, 64, 160)"
      }
    ],
    "cp": 2414,
    "hp": 171,
    "power": 4.1240000000000006,
    "img": "muk89.png"
  },
  {
    "id": 90,
    "prettyId": "090",
    "name": "Shellder",
    "types": [
      {
        "name": "Water",
        "color": "rgb(104, 144, 240)"
      }
    ],
    "cp": 715,
    "hp": 53,
    "power": 1.245,
    "img": "shellder90.png"
  },
  {
    "id": 91,
    "prettyId": "091",
    "name": "Cloyster",
    "types": [
      {
        "name": "Water",
        "color": "rgb(104, 144, 240)"
      },
      {
        "name": "Ice",
        "color": "rgb(152, 216, 216)"
      }
    ],
    "cp": 1879,
    "hp": 84,
    "power": 2.719,
    "img": "cloyster91.png"
  },
  {
    "id": 92,
    "prettyId": "092",
    "name": "Gastly",
    "types": [
      {
        "name": "Ghost",
        "color": "rgb(112, 88, 152)"
      },
      {
        "name": "Poison",
        "color": "rgb(160, 64, 160)"
      }
    ],
    "cp": 696,
    "hp": 53,
    "power": 1.226,
    "img": "gastly92.png"
  },
  {
    "id": 93,
    "prettyId": "093",
    "name": "Haunter",
    "types": [
      {
        "name": "Ghost",
        "color": "rgb(112, 88, 152)"
      },
      {
        "name": "Poison",
        "color": "rgb(160, 64, 160)"
      }
    ],
    "cp": 1240,
    "hp": 77,
    "power": 2.01,
    "img": "haunter93.png"
  },
  {
    "id": 94,
    "prettyId": "094",
    "name": "Gengar",
    "types": [
      {
        "name": "Ghost",
        "color": "rgb(112, 88, 152)"
      },
      {
        "name": "Poison",
        "color": "rgb(160, 64, 160)"
      }
    ],
    "cp": 1907,
    "hp": 100,
    "power": 2.907,
    "img": "gengar94.png"
  },
  {
    "id": 95,
    "prettyId": "095",
    "name": "Onix",
    "types": [
      {
        "name": "Rock",
        "color": "rgb(184, 160, 56)"
      },
      {
        "name": "Ground",
        "color": "rgb(224, 192, 104)"
      }
    ],
    "cp": 745,
    "hp": 61,
    "power": 1.355,
    "img": "onix95.png"
  },
  {
    "id": 96,
    "prettyId": "096",
    "name": "Drowzee",
    "types": [
      {
        "name": "Psychic",
        "color": "rgb(248, 88, 136)"
      }
    ],
    "cp": 955,
    "hp": 100,
    "power": 1.955,
    "img": "drowzee96.png"
  },
  {
    "id": 97,
    "prettyId": "097",
    "name": "Hypno",
    "types": [
      {
        "name": "Psychic",
        "color": "rgb(248, 88, 136)"
      }
    ],
    "cp": 2012,
    "hp": 140,
    "power": 3.412,
    "img": "hypno97.png"
  },
  {
    "id": 98,
    "prettyId": "098",
    "name": "Krabby",
    "types": [
      {
        "name": "Water",
        "color": "rgb(104, 144, 240)"
      }
    ],
    "cp": 686,
    "hp": 53,
    "power": 1.2160000000000002,
    "img": "krabby98.png"
  },
  {
    "id": 99,
    "prettyId": "099",
    "name": "Kingler",
    "types": [
      {
        "name": "Water",
        "color": "rgb(104, 144, 240)"
      }
    ],
    "cp": 1663,
    "hp": 92,
    "power": 2.583,
    "img": "kingler99.png"
  },
  {
    "id": 100,
    "prettyId": "100",
    "name": "Voltorb",
    "types": [
      {
        "name": "Electric",
        "color": "rgb(248, 208, 48)"
      }
    ],
    "cp": 733,
    "hp": 69,
    "power": 1.423,
    "img": "voltorb100.png"
  },
  {
    "id": 101,
    "prettyId": "101",
    "name": "Electrode",
    "types": [
      {
        "name": "Electric",
        "color": "rgb(248, 208, 48)"
      }
    ],
    "cp": 1496,
    "hp": 100,
    "power": 2.496,
    "img": "electrode101.png"
  },
  {
    "id": 102,
    "prettyId": "102",
    "name": "Exeggcute",
    "types": [
      {
        "name": "Grass",
        "color": "rgb(120, 200, 80)"
      },
      {
        "name": "Psychic",
        "color": "rgb(248, 88, 136)"
      }
    ],
    "cp": 978,
    "hp": 100,
    "power": 1.978,
    "img": "exeggcute102.png"
  },
  {
    "id": 103,
    "prettyId": "103",
    "name": "Exeggutor",
    "types": [
      {
        "name": "Grass",
        "color": "rgb(120, 200, 80)"
      },
      {
        "name": "Psychic",
        "color": "rgb(248, 88, 136)"
      }
    ],
    "cp": 2752,
    "hp": 156,
    "power": 4.311999999999999,
    "img": "exeggutor103.png"
  },
  {
    "id": 104,
    "prettyId": "104",
    "name": "Cubone",
    "types": [
      {
        "name": "Ground",
        "color": "rgb(224, 192, 104)"
      }
    ],
    "cp": 889,
    "hp": 84,
    "power": 1.729,
    "img": "cubone104.png"
  },
  {
    "id": 105,
    "prettyId": "105",
    "name": "Marowak",
    "types": [
      {
        "name": "Ground",
        "color": "rgb(224, 192, 104)"
      }
    ],
    "cp": 1505,
    "hp": 100,
    "power": 2.505,
    "img": "marowak105.png"
  },
  {
    "id": 106,
    "prettyId": "106",
    "name": "Hitmonlee",
    "types": [
      {
        "name": "Fighting",
        "color": "rgb(192, 48, 40)"
      }
    ],
    "cp": 1349,
    "hp": 84,
    "power": 2.189,
    "img": "hitmonlee106.png"
  },
  {
    "id": 107,
    "prettyId": "107",
    "name": "Hitmonchan",
    "types": [
      {
        "name": "Fighting",
        "color": "rgb(192, 48, 40)"
      }
    ],
    "cp": 1370,
    "hp": 84,
    "power": 2.21,
    "img": "hitmonchan107.png"
  },
  {
    "id": 108,
    "prettyId": "108",
    "name": "Lickitung",
    "types": [
      {
        "name": "Normal",
        "color": "rgb(168, 168, 120)"
      }
    ],
    "cp": 1477,
    "hp": 148,
    "power": 2.957,
    "img": "lickitung108.png"
  },
  {
    "id": 109,
    "prettyId": "109",
    "name": "Koffing",
    "types": [
      {
        "name": "Poison",
        "color": "rgb(160, 64, 160)"
      }
    ],
    "cp": 1025,
    "hp": 69,
    "power": 1.7149999999999999,
    "img": "koffing109.png"
  },
  {
    "id": 110,
    "prettyId": "110",
    "name": "Weezing",
    "types": [
      {
        "name": "Poison",
        "color": "rgb(160, 64, 160)"
      }
    ],
    "cp": 2073,
    "hp": 108,
    "power": 3.153,
    "img": "weezing110.png"
  },
  {
    "id": 111,
    "prettyId": "111",
    "name": "Rhyhorn",
    "types": [
      {
        "name": "Ground",
        "color": "rgb(224, 192, 104)"
      },
      {
        "name": "Rock",
        "color": "rgb(184, 160, 56)"
      }
    ],
    "cp": 1055,
    "hp": 132,
    "power": 2.375,
    "img": "rhyhorn111.png"
  },
  {
    "id": 112,
    "prettyId": "112",
    "name": "Rhydon",
    "types": [
      {
        "name": "Ground",
        "color": "rgb(224, 192, 104)"
      },
      {
        "name": "Rock",
        "color": "rgb(184, 160, 56)"
      }
    ],
    "cp": 2068,
    "hp": 171,
    "power": 3.778,
    "img": "rhydon112.png"
  },
  {
    "id": 113,
    "prettyId": "113",
    "name": "Chansey",
    "types": [
      {
        "name": "Normal",
        "color": "rgb(168, 168, 120)"
      }
    ],
    "cp": 549,
    "hp": 401,
    "power": 4.559,
    "img": "chansey113.png"
  },
  {
    "id": 114,
    "prettyId": "114",
    "name": "Tangela",
    "types": [
      {
        "name": "Grass",
        "color": "rgb(120, 200, 80)"
      }
    ],
    "cp": 1586,
    "hp": 108,
    "power": 2.6660000000000004,
    "img": "tangela114.png"
  },
  {
    "id": 115,
    "prettyId": "115",
    "name": "Kangaskhan",
    "types": [
      {
        "name": "Normal",
        "color": "rgb(168, 168, 120)"
      }
    ],
    "cp": 1875,
    "hp": 171,
    "power": 3.585,
    "img": "kangaskhan115.png"
  },
  {
    "id": 116,
    "prettyId": "116",
    "name": "Horsea",
    "types": [
      {
        "name": "Water",
        "color": "rgb(104, 144, 240)"
      }
    ],
    "cp": 688,
    "hp": 53,
    "power": 1.218,
    "img": "horsea116.png"
  },
  {
    "id": 117,
    "prettyId": "117",
    "name": "Seadra",
    "types": [
      {
        "name": "Water",
        "color": "rgb(104, 144, 240)"
      }
    ],
    "cp": 1559,
    "hp": 92,
    "power": 2.479,
    "img": "seadra117.png"
  },
  {
    "id": 118,
    "prettyId": "118",
    "name": "Goldeen",
    "types": [
      {
        "name": "Water",
        "color": "rgb(104, 144, 240)"
      }
    ],
    "cp": 851,
    "hp": 77,
    "power": 1.621,
    "img": "goldeen118.png"
  },
  {
    "id": 119,
    "prettyId": "119",
    "name": "Seaking",
    "types": [
      {
        "name": "Water",
        "color": "rgb(104, 144, 240)"
      }
    ],
    "cp": 1877,
    "hp": 132,
    "power": 3.197,
    "img": "seaking119.png"
  },
  {
    "id": 120,
    "prettyId": "120",
    "name": "Staryu",
    "types": [
      {
        "name": "Water",
        "color": "rgb(104, 144, 240)"
      }
    ],
    "cp": 821,
    "hp": 53,
    "power": 1.351,
    "img": "staryu120.png"
  },
  {
    "id": 121,
    "prettyId": "121",
    "name": "Starmie",
    "types": [
      {
        "name": "Water",
        "color": "rgb(104, 144, 240)"
      },
      {
        "name": "Psychic",
        "color": "rgb(248, 88, 136)"
      }
    ],
    "cp": 2007,
    "hp": 100,
    "power": 3.007,
    "img": "starmie121.png"
  },
  {
    "id": 122,
    "prettyId": "122",
    "name": "Mr. Mime",
    "types": [
      {
        "name": "Psychic",
        "color": "rgb(248, 88, 136)"
      },
      {
        "name": "Fairy",
        "color": "rgb(240, 182, 188)"
      }
    ],
    "cp": 1345,
    "hp": 69,
    "power": 2.035,
    "img": "mr. mime122.png"
  },
  {
    "id": 123,
    "prettyId": "123",
    "name": "Scyther",
    "types": [
      {
        "name": "Bug",
        "color": "rgb(168, 184, 32)"
      },
      {
        "name": "Flying",
        "color": "rgb(168, 144, 240)"
      }
    ],
    "cp": 1905,
    "hp": 116,
    "power": 3.065,
    "img": "scyther123.png"
  },
  {
    "id": 124,
    "prettyId": "124",
    "name": "Jynx",
    "types": [
      {
        "name": "Ice",
        "color": "rgb(152, 216, 216)"
      },
      {
        "name": "Psychic",
        "color": "rgb(248, 88, 136)"
      }
    ],
    "cp": 1563,
    "hp": 108,
    "power": 2.643,
    "img": "jynx124.png"
  },
  {
    "id": 125,
    "prettyId": "125",
    "name": "Electabuzz",
    "types": [
      {
        "name": "Electric",
        "color": "rgb(248, 208, 48)"
      }
    ],
    "cp": 1947,
    "hp": 108,
    "power": 3.027,
    "img": "electabuzz125.png"
  },
  {
    "id": 126,
    "prettyId": "126",
    "name": "Magmar",
    "types": [
      {
        "name": "Fire",
        "color": "rgb(240, 128, 48)"
      }
    ],
    "cp": 2086,
    "hp": 108,
    "power": 3.166,
    "img": "magmar126.png"
  },
  {
    "id": 127,
    "prettyId": "127",
    "name": "Pinsir",
    "types": [
      {
        "name": "Bug",
        "color": "rgb(168, 184, 32)"
      }
    ],
    "cp": 1950,
    "hp": 108,
    "power": 3.0300000000000002,
    "img": "pinsir127.png"
  },
  {
    "id": 128,
    "prettyId": "128",
    "name": "Tauros",
    "types": [
      {
        "name": "Normal",
        "color": "rgb(168, 168, 120)"
      }
    ],
    "cp": 1686,
    "hp": 124,
    "power": 2.926,
    "img": "tauros128.png"
  },
  {
    "id": 129,
    "prettyId": "129",
    "name": "Magikarp",
    "types": [
      {
        "name": "Water",
        "color": "rgb(104, 144, 240)"
      }
    ],
    "cp": 203,
    "hp": 37,
    "power": 0.573,
    "img": "magikarp129.png"
  },
  {
    "id": 130,
    "prettyId": "130",
    "name": "Gyarados",
    "types": [
      {
        "name": "Water",
        "color": "rgb(104, 144, 240)"
      },
      {
        "name": "Flying",
        "color": "rgb(168, 144, 240)"
      }
    ],
    "cp": 2498,
    "hp": 156,
    "power": 4.058,
    "img": "gyarados130.png"
  },
  {
    "id": 131,
    "prettyId": "131",
    "name": "Lapras",
    "types": [
      {
        "name": "Water",
        "color": "rgb(104, 144, 240)"
      },
      {
        "name": "Ice",
        "color": "rgb(152, 216, 216)"
      }
    ],
    "cp": 2777,
    "hp": 211,
    "power": 4.8870000000000005,
    "img": "lapras131.png"
  },
  {
    "id": 132,
    "prettyId": "132",
    "name": "Ditto",
    "types": [
      {
        "name": "Normal",
        "color": "rgb(168, 168, 120)"
      }
    ],
    "cp": 809,
    "hp": 81,
    "power": 1.6190000000000002,
    "img": "ditto132.png"
  },
  {
    "id": 133,
    "prettyId": "133",
    "name": "Eevee",
    "types": [
      {
        "name": "Normal",
        "color": "rgb(168, 168, 120)"
      }
    ],
    "cp": 957,
    "hp": 92,
    "power": 1.877,
    "img": "eevee133.png"
  },
  {
    "id": 134,
    "prettyId": "134",
    "name": "Vaporeon",
    "types": [
      {
        "name": "Water",
        "color": "rgb(104, 144, 240)"
      }
    ],
    "cp": 2618,
    "hp": 211,
    "power": 4.728,
    "img": "vaporeon134.png"
  },
  {
    "id": 135,
    "prettyId": "135",
    "name": "Jolteon",
    "types": [
      {
        "name": "Electric",
        "color": "rgb(248, 208, 48)"
      }
    ],
    "cp": 1968,
    "hp": 108,
    "power": 3.048,
    "img": "jolteon135.png"
  },
  {
    "id": 136,
    "prettyId": "136",
    "name": "Flareon",
    "types": [
      {
        "name": "Fire",
        "color": "rgb(240, 128, 48)"
      }
    ],
    "cp": 2448,
    "hp": 108,
    "power": 3.528,
    "img": "flareon136.png"
  },
  {
    "id": 137,
    "prettyId": "137",
    "name": "Porygon",
    "types": [
      {
        "name": "Normal",
        "color": "rgb(168, 168, 120)"
      }
    ],
    "cp": 1540,
    "hp": 108,
    "power": 2.62,
    "img": "porygon137.png"
  },
  {
    "id": 138,
    "prettyId": "138",
    "name": "Omanyte",
    "types": [
      {
        "name": "Rock",
        "color": "rgb(184, 160, 56)"
      },
      {
        "name": "Water",
        "color": "rgb(104, 144, 240)"
      }
    ],
    "cp": 992,
    "hp": 61,
    "power": 1.6019999999999999,
    "img": "omanyte138.png"
  },
  {
    "id": 139,
    "prettyId": "139",
    "name": "Omastar",
    "types": [
      {
        "name": "Rock",
        "color": "rgb(184, 160, 56)"
      },
      {
        "name": "Water",
        "color": "rgb(104, 144, 240)"
      }
    ],
    "cp": 2058,
    "hp": 116,
    "power": 3.218,
    "img": "omastar139.png"
  },
  {
    "id": 140,
    "prettyId": "140",
    "name": "Kabuto",
    "types": [
      {
        "name": "Rock",
        "color": "rgb(184, 160, 56)"
      },
      {
        "name": "Water",
        "color": "rgb(104, 144, 240)"
      }
    ],
    "cp": 975,
    "hp": 53,
    "power": 1.505,
    "img": "kabuto140.png"
  },
  {
    "id": 141,
    "prettyId": "141",
    "name": "Kabutops",
    "types": [
      {
        "name": "Rock",
        "color": "rgb(184, 160, 56)"
      },
      {
        "name": "Water",
        "color": "rgb(104, 144, 240)"
      }
    ],
    "cp": 1957,
    "hp": 100,
    "power": 2.957,
    "img": "kabutops141.png"
  },
  {
    "id": 142,
    "prettyId": "142",
    "name": "Aerodactyl",
    "types": [
      {
        "name": "Rock",
        "color": "rgb(184, 160, 56)"
      },
      {
        "name": "Flying",
        "color": "rgb(168, 144, 240)"
      }
    ],
    "cp": 1994,
    "hp": 132,
    "power": 3.314,
    "img": "aerodactyl142.png"
  },
  {
    "id": 143,
    "prettyId": "143",
    "name": "Snorlax",
    "types": [
      {
        "name": "Normal",
        "color": "rgb(168, 168, 120)"
      }
    ],
    "cp": 2901,
    "hp": 258,
    "power": 5.481,
    "img": "snorlax143.png"
  },
  {
    "id": 144,
    "prettyId": "144",
    "name": "Articuno",
    "types": [
      {
        "name": "Ice",
        "color": "rgb(152, 216, 216)"
      },
      {
        "name": "Flying",
        "color": "rgb(168, 144, 240)"
      }
    ],
    "cp": 2776,
    "hp": 148,
    "power": 4.256,
    "img": "articuno144.png"
  },
  {
    "id": 145,
    "prettyId": "145",
    "name": "Zapdos",
    "types": [
      {
        "name": "Electric",
        "color": "rgb(248, 208, 48)"
      },
      {
        "name": "Flying",
        "color": "rgb(168, 144, 240)"
      }
    ],
    "cp": 2907,
    "hp": 148,
    "power": 4.3870000000000005,
    "img": "zapdos145.png"
  },
  {
    "id": 146,
    "prettyId": "146",
    "name": "Moltres",
    "types": [
      {
        "name": "Fire",
        "color": "rgb(240, 128, 48)"
      },
      {
        "name": "Flying",
        "color": "rgb(168, 144, 240)"
      }
    ],
    "cp": 3028,
    "hp": 148,
    "power": 4.508,
    "img": "moltres146.png"
  },
  {
    "id": 147,
    "prettyId": "147",
    "name": "Dratini",
    "types": [
      {
        "name": "Dragon",
        "color": "rgb(112, 56, 248)"
      }
    ],
    "cp": 867,
    "hp": 70,
    "power": 1.567,
    "img": "dratini147.png"
  },
  {
    "id": 148,
    "prettyId": "148",
    "name": "Dragonair",
    "types": [
      {
        "name": "Dragon",
        "color": "rgb(112, 56, 248)"
      }
    ],
    "cp": 1593,
    "hp": 102,
    "power": 2.613,
    "img": "dragonair148.png"
  },
  {
    "id": 149,
    "prettyId": "149",
    "name": "Dragonite",
    "types": [
      {
        "name": "Dragon",
        "color": "rgb(112, 56, 248)"
      },
      {
        "name": "Flying",
        "color": "rgb(168, 144, 240)"
      }
    ],
    "cp": 3280,
    "hp": 149,
    "power": 4.77,
    "img": "dragonite149.png"
  },
  {
    "id": 150,
    "prettyId": "150",
    "name": "Mewtwo",
    "types": [
      {
        "name": "Psychic",
        "color": "rgb(248, 88, 136)"
      }
    ],
    "cp": 3904,
    "hp": 173,
    "power": 5.634,
    "img": "mewtwo150.png"
  },
  {
    "id": 151,
    "prettyId": "151",
    "name": "Mew",
    "types": [
      {
        "name": "Psychic",
        "color": "rgb(248, 88, 136)"
      }
    ],
    "cp": 3087,
    "hp": 163,
    "power": 4.7170000000000005,
    "img": "mew151.png"
  }
];

function generateTypeList(newState, oldState) {
  const typeList = types.map(function(type) {
    const button = `
      <span
        class="typeTag"
        onClick="setState({ typeName: '${type.name}' })"
        style="background-color: ${type.color}; border: 2px solid ${state.type == type.name ? 'red' : 'transparent'}"
      >
        <a>
          <span
            style="color: #F8F8F8;"
          >
            ${type.name}
          </span>
        </a>
      </span>
    `;

    return button;
  }).join('');

  return typeList;
}

function generatePokeCard(pokemon) {
  const card = `
    <div
      class="wikia-gallery-item"
      style="width:107px;"
    >
      <div
        class="thumb"
        style="height:107px;"
      >
        <div
          class="gallery-image-wrapper"
          id="${pokemon.name}"
          style="position:relative; height:105px; width:105px; border-color:transparent;"
        >
        <a
          class="image link-internal"
          style="height:105px; width:105px;"
        >
          <img
            alt="${pokemon.name}"
            class="thumbimage"
            src="img/${pokemon.img}"
          />
        </a>
        </div>
      </div>
      <div
        class="lightbox-caption"
        style="width:105px;"
      >
        <a>${pokemon.name}</a><br />
        <small>
          <span class="pokemonId">#${pokemon.prettyId}</span>
          <span>${Math.round(pokemon.power * 100) / 100}CHP</span>
          <br />
          <span>${pokemon.cp}CP / ${pokemon.hp}HP</span>
        </small>
        <br />
        ${pokemon.types.map(function(type) {
          return `
            <span
              style="background-color: ${type.color};"
              class="typeTag"
            >
              <a>
                <span
                  style="color: #F8F8F8;"
                >
                  ${type.name}
                </span>
              </a>
            </span>
          `
        }).join('')}
      </div>
    </div>

  `;

  return card;
}

function filterById(_pokemons, id) {
  return _pokemons.filter(function(pokemon) {
    return pokemon.id == id;
  });
}

function filterByName(_pokemons, q) {
  return _pokemons.filter(function(pokemon) {
    return pokemon.name.toLowerCase().search(q.toLowerCase()) === 0;
  });
}

function filterByType(_pokemons, _typeName) {
  return _pokemons.filter(function(pokemon) {
    return pokemon.types.reduce(function(contains, type) {
        if (contains === true || type.name === _typeName) {
          return true;
        }
    }, false);
  });
}

function sortPokemons() {
  const params = Array.prototype.slice.call(arguments);
  if (params[0] === 'id' || params[0] === 'name') {
    return _.sortBy(Object.assign({}, pokemons), params);
  } else {
    return _.sortBy(Object.assign({}, pokemons), params).reverse();
  }
}

function generatePokeList(newState, oldState) {
  const sortedPokemons = sortPokemons(newState.sort);
  const pokemonsFilteredByType = newState.typeName ?
    filterByType(sortedPokemons, newState.typeName)
    : sortedPokemons;
  const pokemonsFilteredBySearch = (newState.search.length && parseInt(newState.search) > -1) ?
    filterById(pokemonsFilteredByType, newState.search)
    : filterByName(pokemonsFilteredByType, newState.search);
  const finalPokemons = pokemonsFilteredBySearch;
  const pokeList = finalPokemons.map(function(pokemon) {
    return generatePokeCard(pokemon);
  }).join('');

  return pokeList;
}

function render(newState, oldState) {
  const pokeList = generatePokeList(newState, oldState);
  const typeList = generateTypeList(newState, oldState);
  document.getElementById('pokeList').innerHTML = pokeList;
  // document.getElementById('typeList').innerHTML = typeList;

  if (newState.sortMenuOpen) {
    document.getElementById('sortWrapper').className = 'expanded';
    document.getElementById('openSort').innerHTML = '<span class="fa fa-close"></span>';
  } else {
    document.getElementById('sortWrapper').className = '';
    document.getElementById('openSort').innerHTML = '<span class="fa fa-chevron-up"></span>';
  }
}

function setState(section) {
  const newState = Object.assign({}, state, section);
  render(newState, state);
  state = newState;
}

(function() {
  render(state);
})();
