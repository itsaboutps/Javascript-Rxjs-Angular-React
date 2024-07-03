import {timer} from 'rxjs';
const source = timer(0, 1000); // emit the first value after 0 ms, then emit every 1000 ms
source.subscribe(val => console.log(val));