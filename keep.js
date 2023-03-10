npx create-next-app --example with-tailwindcss chatgpt

export interface colorBand {
  [color : string]: string;
}

export function decodedValue(inputs:string[]):number {
  let colorReference : colorBand ={
    black : "0",
    brown : "1",
    red: "2",
    orange: "3",
    yellow: "4",
    green: "5",
    blue: "6",
    violet: "7",
    grey: "8",
    white: "9",
  }
  let trimedInput = inputs.slice(0,2);

  return parseInt(colorReference[trimedInput[0]] + colorReference[trimedInput[1]])
}
///////////////////////////////////
export function frontDoorResponse(line) {
  return line[0];
}
export function frontDoorPassword(word) {
  return word[0].toUpperCase() + word.toLowerCase().slice(1);
}

export function backDoorResponse(line) {
  let modifiedLine= line.replace(/\s+/g, '');
  return modifiedLine.charAt(modifiedLine.length-1);
}

export function backDoorPassword(word) {
  return word.charAt(0).toUpperCase() + word.toLowerCase().slice(1) +  ',' + " " + 'please';
}

/////////////////////////////////////
export interface ResistorBand {
  [color: string]: string;
}

export function decodedResistorValue(inputs : string[]):string {
 let resistanceReference: ResistorBand = {
    black: "0",
    brown: "1",
    red: "2",
    orange: "3",
    yellow: "4",
    green: "5",
    blue: "6",
    violet: "7",
    grey: "8",
    white: "9",
  };
  let trimmedInput = inputs.slice(0, 3);
  let resistor = parseInt(   
    resistanceReference[trimmedInput[0]] + resistanceReference[trimmedInput[1]] 
  );
  let multiple= resistor * (Math.pow(10,parseInt(resistanceReference[trimmedInput[2]])));
  let label = 'ohms'

  if(multiple / 1000 > 1){
    multiple /= 1000 ;
    label = "kiloohms" ;
  }
   return `${multiple} ${label}`;
  
}

return !knightIsAwake

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake
}

return prisonerIsAwake && !archerIsAwake

( (prisonerIsAwake&& !knightIsAwake && !archerIsAwake)   
  || (!archerIsAwake && petDogIsPresent)
  )

  export function getItem(cards, position) {
  return cards[position];
}

export function setItem(cards, position, replacementCard) {
  cards[position] = replacementCard;
  return cards;
}

export function insertItemAtTop(cards, newCard) {
  cards.push(newCard);
  return cards;
}

export function removeItem(cards, position) {
  cards.splice(position,1);
  return cards;
}
export function removeItemFromTop(cards) {
  cards.pop();
  return cards;
}

export function insertItemAtBottom(cards, newCard) {
  cards.unshift(newCard);
  return cards;
}

export function removeItemAtBottom(cards) {
   cards.shift();
  return cards;
}

export function checkSizeOfStack(cards, stackSize) {
   return cards.length === stackSize;
}

export function isLeap(year: number) : Boolean {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
}

export function needsLicense(kind) {
 return (kind === 'car'|| kind === 'truck' );
 
}

export function chooseVehicle(option1, option2) {
 return option1 < option2 ? `${option1} is clearly the better choice.`
    : `${option2} is clearly the better choice.`;
}

export function calculateResellPrice(originalPrice, age) {
   return age<3 ? originalPrice*0.8
    : age>10 ? originalPrice*0.5
    :originalPrice*0.7;
}

export function chooseVehicle(option1, option2) {
  if (option1.localeCompare(option2) < 0){
    return `${option1} is clearly the better choice.`
  }else {
    return `${option2} is clearly the better choice.`
  }
}

export function totalBirdCount(birdsPerDay) {
  let count = 0 ;
  for (let i = 0; i < birdsPerDay.length; i++) {
   count += birdsPerDay[i];
}
  return count ;
}

export function totalBirdCount(birdsPerDay) {
  return birdsPerDay.reduce((result, dayCount) => result + dayCount, 0);
}

export function birdsInWeek(birdsPerDay, week) {
  const startDay = (week - 1) * 7;
  const endDay = startDay + 7;
  let count = 0;
  
  for (let i = startDay; i < endDay; i++) {
    count += birdsPerDay[i];
  }
  return count;
}

export function birdsInWeek(birdsPerDay, week) {
  return totalBirdCount(birdsPerDay.slice((week - 1) * 7, week * 7)); 
}

export function fixBirdCountLog(birdsPerDay) {
  const days = birdsPerDay.length;
   
 for (let i = 0; i < days; i += 2) {
   birdsPerDay[i] += 1
 }
 return birdsPerDay;
}
////////////////////////////////////////
interface Mapping {
  [index:string] : string;
}

export function toRna(dna:string) {
let rna_strand: string = "";

const dnaToRna : Mapping = {
  "G": "C",
  "C": "G",
  "T": "A",
  "A": "U"
};
  for (const node of dna)
  {
    if (!dnaToRna[node]) throw new Error("Invalid input DNA.");
    rna_strand += dnaToRna[node];
  }
  return rna_strand;
}
////////////////////////////
export function timeToMixJuice(name) {
  switch (name) {
  case 'Pure Strawberry Joy':
    return 0.5
    break;
  case 'Green Garden' :
   return 1.5
    break;
  case 'Energizer' :
   return 1.5
    break;
  case 'Tropical Island':
   return 3
    break;
  case 'All or Nothing':
   return 5
    break;
  default:
    return 2.5
}
}
///////////////////////////////////////////////
useEffect(() => {
    setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
  }, [netflixOriginals])

///////////////////////////////
setAddedToList(
  movies.findIndex((result) => result.data().id === movie?.id) !== -1
),

obj = { greeting: 'hello world' };

obj.hasOwnProperty('greeting');
// => true

obj.hasOwnProperty('age');
// => false
//////////////////////////////////////
export function createScoreBoard() {
  const obj = {
    "The Best Ever" : 1000000,
  }
  return obj;
}
///////////////////////////////
export function addPlayer(scoreBoard, player, score) {
  scoreBoard[player] = score;
  return scoreBoard;
}
////////////////////////////////////
export function removePlayer(scoreBoard, player) {
  delete scoreBoard[player];
  return scoreBoard;
}
//////////////////////////////////
export function updateScore(scoreBoard, player, points) {
  scoreBoard[player] +=  points;
  return scoreBoard;
}
////////////////////////////////////
export function applyMondayBonus(scoreBoard) {
  for (let key in scoreBoard) {
   scoreBoard[key]+= 100
}
  return scoreBoard
}
////////////////////////////
export function normalizeScore(params) {
  return params.normalizeFunction(params.score);
}

interface Planet {
  [key:strring]: number
}
const ratio: Planet={
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
}

export function age(planet: string, seconds: number): number {
  return Number((seconds / 31557600 / RATIOS[planet]).toFixed(2))
}
///////////////////////////////
export function createVisitor(name, age, ticketId) {
  return {
    name,
    age,
    ticketId,
  }
}
//////////////////////////////////////
export function revokeTicket(visitor) {
  visitor.ticketId = null;
 return visitor
}
////////////////////////////////////////
export function ticketStatus(tickets, ticketId) {
  return tickets[ticketId] === null ? 'not sold': tickets[ticketId]? `sold to ${tickets[ticketId]}` : 'unknown ticket id';
 }

 //////////////////////////////////////
 export function simpleTicketStatus(tickets, ticketId) {
  return tickets[ticketId] ?? 'invalid ticket !!!';
}
////////////////////////////////////////////
return visitor?.gtc?.version;
///////////////////////////////////
Boolean(-1);
// => true

Boolean(0);
// => false

Boolean(' ');
// => true

Boolean('');
// => false
/////////////////////////////
Note that because of the described rules, '0', 'false', [] and {} are truthy in JavaScript.
////////////////////////////
export function twoSum(array1, array2) {
  let num1= Number(array1.join(''));
  let num2= Number(array2.join(''));
   return num1 + num2 ;
 }
///////////////////////////////////////////////////
export function luckyNumber(value) {
  const str = value.toString();
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr ;
}
/////////////////////////////////////////
export function errorMessage(input) {
  return Number(input) ? "" : (input ?? "") == "" ? "Required field" : "Must be a number besides 0";
}
//////////////////////////////////////////////////
export class DnDCharacter {
  strength = 0;
  dexterity = 0;
  constitution = 0;
  intelligence = 0;
  wisdom = 0;
  charisma = 0;
  hitpoints = 0;
  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution)
  }
  public static generateAbilityScore(): number {
    return Math.floor(new Array(4).fill(1 + Math.random() * 5).sort().slice(1).reduce((a, b) => a + b, 0))
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2)
  }
}
/////////////////////////////////

export const scaleRecipe =(recipe,num)=>{
  const amt = Number(num * (1/2) );
  const newRecipe = {};
 for (let key in recipe){
 newRecipe[key] = recipe[key] * amt ;
  }
  return newRecipe
  
}
////////////////////////////////////
export const scaleRecipe =(recipe,num)=>{
  const amt = Number(num * (1/2) );
 for (let key in recipe){
 recipe[key] = recipe[key] * amt ;
  }
  return recipes
  
}
///////////////////////////////////////
export const cookingStatus = (time) =>{
  return time === 0 ? "Lasagna is done." : time > 0 ? "Not done, please wait." : !time ? "You forgot to set the timer.": null;
}
///////////////////////////////
export const preparationTime = (layers,avgTime)=>{
  return avgTime ? (layers.length) * avgTime : (layers.length) * 2 ;
}
//////////////////////////////////////////
export const quantities = (layers) =>{
  const noodles = "noodles";
  const sauce = "sauce";
  const countNoodles = layers.reduce((acc,val)=>{
    if(val === noodles ){
      acc++;
    }
    return acc;
  },0)
  const countSauce = layers.reduce((acc,val)=>{
    if(val === sauce ){
      acc++;
    }
    return acc;
  },0)
  return {
    noodles: 50 * countNoodles, 
    sauce: 0.2 * countSauce
  }
}
/////////////////////////////////
export const addSecretIngredient = (friendList, myList) =>{
  const toAdd = friendList[friendList.length - 1];
  myList.push(toAdd);
}
///////////////////////////////////////////////
export const scaleRecipe =(recipe,num)=>{
  const amt = Number(num * (1/2) );
  const newRecipe = {};
 for (let key in recipe){
 newRecipe[key] = recipe[key] * amt ;
  }
  return newRecipe
  
}
///////////////////////////////////////
export function buildSign(occasion, name) {
  return `Happy ${occasion} ${name}!`
}
///////////////////////////////
export function buildBirthdaySign(age) {
  return `Happy Birthday! What a ${age >= 50 ? 'mature' : 'young'} fellow you are.`
}
//////////////////////////////////
export function graduationFor(name, year) {
  return `Congratulations ${name}!\nClass of ${year}`
}
////////////////////////////
export function costOf(sign, currency) {
  const lent = sign.length * 2 + 20;
  return `Your sign costs ${lent.toFixed(2)} ${currency}.`
  
}
//////////////////////////////////////////
export function isPangram(sentence : string) : Boolean {
 let lettersSeen : boolean[] = [];

  for (let i = 0; i < sentence.length; i++) {
    let charCode = sentence.toLowerCase().charCodeAt(i);
    
     if (charCode >= 97 && charCode <= 122) {
      lettersSeen[charCode - 97] = true;
    }
  } 
   for (let i = 0; i < 26; i++) {
    if (!lettersSeen[i]) {
      return false;
    }
  }
  return true;
}
////////////////////////

export function translate2d(dx, dy) {
  return (x,y)=>[x + dx , y + dy];
}
/////////////////////////

export function scale2d(sx, sy) {
  return (x,y)=>[x * sx, y * sy];
}
/////////////////////////////////

export function composeTransform(f, g) {
  return (x,y)=> g(...f(x,y));
}
//////////////////////////////////////
export function memoizeTransform(f) {
  let x0, y0, result;
  return (x, y) => ((x == x0 && y == y0) ? result : result = f(x0 = x, y0 = y));
}
///////////////////////////////
const isQuestion = (message: string): boolean => /[?]$/.test(message);
const isYell = (message: string): boolean => !/[a-z]/.test(message) &&
        !/[\u00F0-\u02AF]/.test(message) && /[A-Z]/.test(message);
const isNothing = (message: string): boolean => /^\s*$/.test(message);

export function hey(message: string): string {
 message = message.trim()
    return isYell(message) && isQuestion(message) ? 'Calm down, I know what I\'m doing!' :
        isYell(message) ? 'Whoa, chill out!' :
        isQuestion(message) ? 'Sure.' :
        isNothing(message) ? 'Fine. Be that way!' :
        'Whatever.'
}
//////////////////////////////////////////

export function onSuccess() {
  notify({message : 'SUCCESS'}) 
 }

/////////////////////////////////////////////////////
export function onError() {
  notify({message : 'ERROR'})
}

////////////////////////////
export function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
  // implement the orderFromGrocer function to order the query
  order(query, onSuccessCallback, onErrorCallback);
}
/////////////////////////////////////

export function postOrder(variety, quantity) {
  //implement the postOrder function to create a query and order
   order({variety, quantity}, onSuccess, onError);
}
/////////////////////////////////
export class Matrix {
  rows: number[][];
  columns: number[][];
  constructor(block: string) {
    this.rows = block.split('\n').map(r => r.split(' ').map(Number));
    this.columns = this.rows.map((_r, ix) => this.rows.map(row => row[ix]));
  }
}
/////////////////////////
const numberOfMoons = [0, 2, 14];
const [venus, mars, neptune] = numberOfMoons;

neptune;
// => 14
//////////////////////////
rest///left side
const [a, b, ...everythingElse] = [0, 1, 1, 2, 3, 5, 8];

everythingElse;
// => [1, 2, 3, 5, 8]
////////////////////////////////////
right side of assignment // anywhere
const oneToFive = [1, 2, 3, 4, 5];
const oneToTen = [...oneToFive, 6, 7, 8, 9, 10];

oneToTen;
// => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
/////////////////////////////////////
export function getFirstCard(deck) {
  const [a,...rest]= deck;
  return a;
}
///////////////////////////////////
export function getSecondCard(deck) {
  const [a,b,...rest]= deck;
  return b;
}
//////////////////////////////////
export function swapTopTwoCards(deck) {
  const [a,b,...rest]=deck;
  return [b,a,...rest];
}
///////////////////////
export function discardTopCard(deck) {
  const [a,...rest]= deck;
   return [a,rest];
 }
 /////////////////////////////////
 export function insertFaceCards(deck) {
  const FACE_CARDS = ['jack', 'queen', 'king'];
  const [a,...rest]= deck;
  return [a,...FACE_CARDS,...rest];
}
///////////////////////
// List of random first and last names
const firstNames = ['John', 'Emma', 'Sarah', 'Michael', 'Olivia', 'David', 'Sophia', 'Christopher', 'Ava', 'Matthew'];
const lastNames = ['Smith', 'Johnson', 'Brown', 'Lee', 'Garcia', 'Davis', 'Hernandez', 'Jones', 'Martin', 'Wilson'];

// Generate a random name
function generateRandomName() {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${firstName} ${lastName}`;
}

// Example usage
console.log(generateRandomName()); // Output: "John Smith", "Emma Davis", etc.
///////////////////////////
const numbers = [1, 'two', 3, 'four'];
numbers.indexOf('two');
// => 1
///////////////////////////
const numbers = [1, 'two', 3, 'four'];
numbers.includes(1);
// => true
numbers.includes('one');
// => false
///////////////////////////
const numbers = [1, 3, 5, 7, 9];
numbers.every((num) => num % 2 !== 0);
// => true
//////////////////////
const numbers = [1, 3, 5, 7, 9];
numbers.some((num) => num % 2 !== 0);
// => true
////////////////////
const numbers = [1, 3, 5, 7, 9];
numbers.find((num) => num < 5);
// => 1
//////////////////////////////
const numbers = [1, 3, 5, 7, 9];
numbers.findIndex((num) => num > 7);
// => 4
numbers.findIndex((num) => num > 9);
// => -1
////////////////////////////////
export function getCardPosition(stack, card) {
  return stack.indexOf(card);
 }
 //////////////////////////////////
 export function doesStackIncludeCard(stack, card) {
  return stack.includes(card);
}
///////////////////////////////
export function isEachCardEven(stack) {
  return stack.every(num=> num % 2 === 0);
}
//////////////////////////////
export function doesStackIncludeOddCard(stack) {
  return stack.some(num=> num % 2 !== 0 );
}
//////////////////////////////////
export function getFirstOddCard(stack) {
  return stack.find(num=> num % 2 !== 0);
}
////////////////////////////////
export function getFirstEvenCardPosition(stack) {
  return stack.findIndex(num=> num % 2 === 0);
}
//////////////////////////////////////
export class Size {
  constructor(width=80, height=60) {
    this.width = width;
    this.height = height;
    // this.engineRunning = false;
  }

  resize(newWidth,newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  }

  // addGas(litre) {
  //   // ...
  // }
}
///////////////////////////////////////
export class ProgramWindow {
  constructor(screenSize, size, position) {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
    // this.engineRunning = false;
  }

}
///////////////////////////
export class ProgramWindow {
  constructor(screenSize, size, position) {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
    // this.engineRunning = false;
  }

  resize(newSize) {
    const maxWidth = this.screenSize.width - this.position.x
    const maxHeight = this.screenSize.height - this.position.y
    const newWidth = Math.max(1, Math.min(newSize.width, maxWidth))
    const newHeight = Math.max(1, Math.min(newSize.height, maxHeight))
    this.size.resize(newWidth, newHeight)
    
  }

  move(newPosition) {
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;
    
    const newX = Math.max(0, Math.min(newPosition.x, maxX))
    const newY = Math.max(0, Math.min(newPosition.y, maxY))
    this.position.move(newX, newY);
  }
}
////////////////////////////////////////////////////
const changeWindow =(ProgramWindow)=>{
  programWindow.move(new Position());
  programWindow.resize(new Size(400, 300));
  programWindow.move(new Position(100, 150));
  return programWindow
}