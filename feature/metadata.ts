import 'reflect-metadata';

// const plane = {
//   color: 'red',
// };

// Reflect.defineMetadata('note', 'hi there', plane);

// const note = Reflect.getMetadata('note', plane);

// console.log(note);

// Reflect.defineMetadata('note', 'hi there', plane, 'test');

// const note = Reflect.getMetadata('note', plane, 'test');

// console.log(note);

@printMetadata
class Plane {
  color: string = 'red';

  @markFunction('HI THERE')
  fly(): void {
    console.log('vrrrrrrrr');
  }
}

function markFunction(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  };
}

function printMetadata(target: typeof Plane) {
  for (const key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log(secret);
  }
}

// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');

// console.log(secret);
