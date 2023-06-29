import fruits from './foods';
import { choice, remove} from './helper';

console.log(fruits);

let randomFuit = choice(fruits);
console.log(`I'd like one ${randomFuit}, please`);

while(remove(fruits,randomFuit)) {
    console.log(`Here you go: ${randomFuit}`);
    console.log("Delicious! May I have another?");
}

let rest = fruits.length;
console.log(`I'm sorry, we're all out. We have ${rest} left.`);

