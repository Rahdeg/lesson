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