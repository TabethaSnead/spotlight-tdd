// IMPORT MODULES under test here:
import {
    myFunction,
    addExclamationPoints,
    multiplyBy12ThenHalve,
    multiplyBySeven,
    divideThenMultiply,
    returnAsAnArray,
    returnAsAString,
    makeLuckyGreeting,
    getSecondItem,
    getLastItem,
} from '../functions.js';

const { test, skip } = QUnit;

test('this test should add "!!!" at the end of a string or number', (expect) => {
    const expected = 'this is cool' + '!!!';

    const actual = addExclamationPoints('this is cool');

    expect.equal(actual, expected, 'this is cool' + '!!!');
});

test('this test should add "!!!" at the end of a string or number', (expect) => {
    const expected = 'this is something else' + '!!!';

    const actual = addExclamationPoints('this is something else');

    expect.equal(actual, expected, 'this is something else' + '!!!');
});
test('this test should add "!!!" at the end of a string or number', (expect) => {
    const expected = 'pasta' + '!!!';

    const actual = addExclamationPoints('pasta');

    expect.equal(actual, expected, 'pasta' + '!!!');
});
test('this test should multiplie a number by 7', (expect) => {
    const expected = 35;

    const actual = multiplyBySeven(5);

    expect.deepEqual(actual, expected, '5 times 7 is 35');
});
test('this test should multiplie a number by 7', (expect) => {
    const expected = 14;

    const actual = multiplyBySeven(2);

    expect.deepEqual(actual, expected, '2 times 7 is 14');
});
test('this test should multiplie a number by 7', (expect) => {
    const expected = 21;

    const actual = multiplyBySeven(3);

    expect.deepEqual(actual, expected, '3 times 7 is 21');
});
test('this test should multiplie a number by 12 then cut the result in half', (expect) => {
    const expected = 24;

    const actual = multiplyBy12ThenHalve(4);

    expect.deepEqual(actual, expected, '4 times 12 divided by 2 is 24');
});
test('this test should multiplie a number by 12 then cut the result in half', (expect) => {
    const expected = 48;

    const actual = multiplyBy12ThenHalve(8);

    expect.deepEqual(actual, expected, '8 times 12 divided by 2 is 48');
});

test('this test should multiplie a number by 12 then cut the result in half', (expect) => {
    const expected = 30;

    const actual = multiplyBy12ThenHalve(5);

    expect.deepEqual(actual, expected, '5 times 12 divided by 2 is 30');
});
test('this test should take in 3 numbers , divide the first by the second, then multiply the result by the third', (expect) => {
    const expected = 10;

    const actual = divideThenMultiply(8, 4, 5);

    expect.deepEqual(actual, expected, '8 divided by 4 is 2, 2 * 5 = 10');
});
test('this test should take in 3 numbers , divide the first by the second, then multiply the result by the third', (expect) => {
    const expected = 30;

    const actual = divideThenMultiply(12, 2, 5);

    expect.deepEqual(actual, expected, '12 divided by 2 is 6, 6 * 5 = 30');
});
test('this test should take in 3 numbers , divide the first by the second, then multiply the result by the third', (expect) => {
    const expected = 1;

    const actual = divideThenMultiply(4, 4, 1);

    expect.deepEqual(actual, expected, '4 divided by 4 is 1, 1 * 1 = 1');
});
test('this test should take in 3 numbers then return them in an array', (expect) => {
    const expected = [8, 4, 5];

    const actual = returnAsAnArray(8, 4, 5);

    expect.deepEqual(actual, expected, '8, 4, 5 are added to an array');
});
test('this test should take in 3 numbers then return them in an array', (expect) => {
    const expected = [5, 4, 5];

    const actual = returnAsAnArray(5, 4, 5);

    expect.deepEqual(actual, expected, '5, 4, 5 are added to an array');
});
test('this test should take in 3 numbers then return them in an array', (expect) => {
    const expected = [12, 3, 5];

    const actual = returnAsAnArray(12, 3, 5);

    expect.deepEqual(actual, expected, '12, 3, 5 are added to an array');
});
test('this test should take in 3 numbers then return squished together in a string', (expect) => {
    const expected = '845';

    const actual = returnAsAString(8, 4, 5);

    expect.deepEqual(actual, expected, '845 are all squished together');
});
test('this test should take in 3 numbers then return squished together in a string', (expect) => {
    const expected = '548';

    const actual = returnAsAString(5, 4, 8);

    expect.deepEqual(actual, expected, '548 are all squished together');
});
test('this test should take in 3 numbers then return squished together in a string', (expect) => {
    const expected = '666';

    const actual = returnAsAString(6, 6, 6);

    expect.deepEqual(actual, expected, '666 are all squished together');
});
test('this test should take in 2 numbers then add them, then add the result to a string', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 12';

    const actual = makeLuckyGreeting(8, 4);

    expect.deepEqual(actual, expected, 'Hello! Your lucky number for the day is 8 + 4');
});
test('this test should take in 2 numbers then add them, then add the result to a string', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 7';

    const actual = makeLuckyGreeting(5, 2);

    expect.deepEqual(actual, expected, 'Hello! Your lucky number for the day is 5 + 2');
});
test('this test should take in 2 numbers then add them, then add the result to a string', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 10';

    const actual = makeLuckyGreeting(6, 4);

    expect.deepEqual(actual, expected, 'Hello! Your lucky number for the day is 6 + 4');
});
test('this test should return the second item of an array', (expect) => {
    const expected = 'apple';

    const actual = getSecondItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.deepEqual(
        actual,
        expected,
        'returning the string "apple" in array ["kiwi", "apple", "orange", "plum"]'
    );
});
test('this test should return the second item of an array', (expect) => {
    const expected = 'lemon';

    const actual = getSecondItem(['kiwi', 'lemon', 'orange', 'plum']);

    expect.deepEqual(
        actual,
        expected,
        'returning the string "apple" in array ["kiwi", "lemon", "orange", "plum"]'
    );
});
test('this test should return the second item of an array', (expect) => {
    const expected = 'grape';

    const actual = getSecondItem(['kiwi', 'grape', 'orange', 'plum']);

    expect.deepEqual(
        actual,
        expected,
        'returning the string "apple" in array ["kiwi", "grape", "orange", "plum"]'
    );
});
test('this test should return the last item of an array no matter the array length', (expect) => {
    const expected = 'plum';

    const actual = getLastItem(['kiwi', 'grape', 'orange', 'plum']);

    expect.deepEqual(
        actual,
        expected,
        'returning the string "plum" in array ["kiwi", "grape", "orange", "plum"]'
    );
});
test('this test should return the last item of an array no matter the array length', (expect) => {
    const expected = 'lemon';

    const actual = getLastItem(['kiwi', 'grape', 'orange', 'lemon']);

    expect.deepEqual(
        actual,
        expected,
        'returning the string "plum" in array ["kiwi", "grape", "orange", "lemon"]'
    );
});
test('this test should return the last item of an array no matter the array length', (expect) => {
    const expected = 'peach';

    const actual = getLastItem(['kiwi', 'grape', 'orange', 'peach']);

    expect.deepEqual(
        actual,
        expected,
        'returning the string "plum" in array ["kiwi", "grape", "orange", "peach"]'
    );
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});
