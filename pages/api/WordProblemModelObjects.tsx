export type Noun = {
  type: string;
  singleTitle: string;
  pluralTitle: string;
  colour: string;
  image: string;
};
export type ItemContainerObj = {
  singleTitle: string;
  pluralTitle: string;
};

export const map = {
  package: {
    singleTitle: "package",
    pluralTitle: "packages",
  },
  case: {
    singleTitle: "case",
    pluralTitle: "cases",
  },
  drawer: {
    singleTitle: "drawer",
    pluralTitle: "drawers",
  },
  bag: {
    singleTitle: "bag",
    pluralTitle: "bags",
  },
  basket: {
    singleTitle: "basket",
    pluralTitle: "baskets",
  },
  box: {
    singleTitle: "box",
    pluralTitle: "boxes",
  },
};
export const coinsMap = {
  shekel: {
    type: "coins",
    singleTitle: "shekel coin",
    pluralTitle: "shekel coins",
    colour: "text-gray-800 font-black",
    image: "/images/coins/shekel_coin.jpg",
  },
  silver: {
    type: "coins",
    singleTitle: "silver coin",
    pluralTitle: "silver coins",
    colour: "text-gray-400 font-black",
    image: "/images/coins/silver__coin.jpeg",
  },
  copper: {
    type: "coins",
    singleTitle: "copper coin",
    pluralTitle: "copper coins",
    colour: "text-yellow-800 font-black",
    image: "/images/coins/copper__coins.jpeg",
  },
  gold: {
    type: "coins",
    singleTitle: "gold coin",
    pluralTitle: "gold coins",
    colour: "text-yellow-400 font-black",
    image: "/images/coins/gold__coins2.jpeg",
  },
  doge: {
    type: "coins",
    singleTitle: "doge coin",
    pluralTitle: "doge coins",
    colour: "text-yellow-200 font-black",
    image: "/images/coins/dogecoin.png",
  },
  ruby: {
    type: "coins",
    singleTitle: "mario coin",
    pluralTitle: "mario coins",
    colour: "text-red-500 font-black",
    image: "/images/coins/mario_coin.png",
  },
};
export const animalsMap = {
  aligators: {
    type: "toys",
    singleTitle: "aligator toy",
    pluralTitle: "aligator toys",
    colour: "text-green-700 font-black",
    image: "/images/animals/aligator.png",
  },
  ducks: {
    type: "toys",
    singleTitle: "duck toy",
    pluralTitle: "duck toys",
    colour: "text-yellow-500 font-black",
    image: "/images/animals/duck.jpeg",
  },
  goats: {
    type: "toys",
    singleTitle: "goat toy",
    pluralTitle: "goat toys",
    colour: "text-gray-700 font-black",
    image: "/images/animals/goat.jpg",
  },
  lions: {
    type: "toys",
    singleTitle: "lion toy",
    pluralTitle: "lion toys",
    colour: "text-yellow-600 font-black",
    image: "/images/animals/lion.png",
  },
  monkeys: {
    type: "toys",
    singleTitle: "monkey toy",
    pluralTitle: "monkey toys",
    colour: "text-yellow-800 font-black",
    image: "/images/animals/monkey.png",
  },
  frogs: {
    type: "toys",
    singleTitle: "frog toy",
    pluralTitle: "frog toys",
    colour: "text-green-400 font-black",
    image: "/images/animals/frog.jpeg",
  },
  turtles: {
    type: "toys",
    singleTitle: "turtle toy",
    pluralTitle: "turtle toys",
    colour: "text-green-700 font-black",
    image: "/images/animals/turtle.jpeg",
  },
  elephants: {
    type: "toys",
    singleTitle: "elephant toy",
    pluralTitle: "elephant toys",
    colour: "text-gray-400 font-black",
    image: "/images/animals/elephant.png",
  },
  giraffes: {
    type: "toys",
    singleTitle: "giraffe toy",
    pluralTitle: "giraffes toys",
    colour: "text-yellow-600 font-black",
    image: "/images/animals/giraffe.png",
  },
  peacock: {
    type: "toys",
    singleTitle: "peacock toy",
    pluralTitle: "peacock toys",
    colour: "text-purple-600 font-black",
    image: "/images/animals/peacock.png",
  },
};
export const fruitsMap = {
  apples: {
    type: "fruits",
    singleTitle: "apple",
    pluralTitle: "apples",
    colour: "text-red-500 font-black",
    image: "/images/fruits/apple.jpeg",
  },
  bananas: {
    type: "fruits",
    singleTitle: "banana",
    pluralTitle: "bananas",
    colour: "text-yellow-500 font-black",
    image: "/images/fruits/banana.png",
  },
  oranges: {
    type: "fruits",
    singleTitle: "orange",
    pluralTitle: "oranges",
    colour: "text-yellow-600 font-black",
    image: "/images/fruits/orange.jpeg",
  },
  grapes: {
    type: "fruits",
    singleTitle: "grape",
    pluralTitle: "grapes",
    colour: "text-purple-600 font-black",
    image: "/images/fruits/grape.jpeg",
  },
  watermelons: {
    type: "fruits",
    singleTitle: "watermelon",
    pluralTitle: "watermelons",
    colour: "text-green-600 font-black",
    image: "/images/fruits/watermelon.png",
  },
  strawberries: {
    type: "fruits",
    singleTitle: "strawberry",
    pluralTitle: "strawberries",
    colour: "text-red-500 font-black",
    image: "/images/fruits/strawberry.jpeg",
  },
  peaches: {
    type: "fruits",
    singleTitle: "peach",
    pluralTitle: "peaches",
    colour: "text-yellow-500 font-black",
    image: "/images/fruits/peach.jpeg",
  },
  lemons: {
    type: "fruits",
    singleTitle: "lemon",
    pluralTitle: "lemons",
    colour: "text-yellow-200 font-black",
    image: "/images/fruits/lemon.jpeg",
  },
  limes: {
    type: "fruits",
    singleTitle: "lime",
    pluralTitle: "limes",
    colour: "text-green-300 font-black",
    image: "/images/fruits/lime.jpeg",
  },
};
