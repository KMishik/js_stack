import Dog from './dog';

test('Dog.bark', () => {
  const testDog = new Dog('Test');
  expect(testDog.bark()).toBe('Wah Wah, I am a Test');
});
