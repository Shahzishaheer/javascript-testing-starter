import { describe, test, it, expect } from 'vitest';
import { fizzBuzz, max, definedreturn } from '../src/intro';

// 'describe' is used to group related tests together into a "Test Suite".
// Here, we are grouping all tests related to the 'max' function.
describe("max", () => {

    // 'it' (or 'test') defines a single "Test Case". 
    // It should describe the expected behavior in plain English.
    it("should return the first argument if it is greater", () => {
        // AAA Pattern: Arrange, Act, Assert

        // Arrange: Set up the data we need for the test.
        const a = 2;
        const b = 1;

        // Act: Call the function we are testing.
        const result = max(a, b);

        // Assert: Check if the result is what we expected.
        // 'expect()' wraps the actual value.
        // '.toBe()' is a "matcher" that checks if the value is exactly what we expect.
        expect(result).toBe(2);
    });
    // second test case
    it("should return the second argument if it is greater", () => {
        // Arrange
        const a = 2;
        const b = 5;

        // Act
        const result = max(a, b);

        // Assert
        expect(result).toBe(5);
    });

    it("should return the first argument if both arguments are equal", () => {
        // Arrange
        const a = 5;
        const b = 5;

        // Act
        const result = max(a, b);

        // Assert
        expect(result).toBe(5);
    });

});

//second test suite for fizzBuzz

describe("fizzBuzz", () => {
    it("should return 'FizzBuzz' for multiples of 3 and 5", () => {
        // Arrange
        const n = 15;

        // Act
        const result = fizzBuzz(n);
        // Assert
        expect(result).toBe('FizzBuzz');
    });

    test("should return 'Fizz' for multiples of 3", () => {
        // Arrange 
        const n = 3;
        // Act
        const result = fizzBuzz(n);
        // Assert
        expect(result).toBe('Fizz');
    });

    test("should return Buzz for multiple 0f 5", () => {
        // Arrange
        const n = 10;
        // Act
        const result = fizzBuzz(n);
        // Assert
        expect(result).toBe('Buzz');
    })

    it(`should return same value  if number not multiple of 3 and 5 `,()=>{
        //Arrange
        const n=2;
        //action
        const result = fizzBuzz(n);

        //Assert
         expect(result).toBe("2");
    })


});

// Test suite for the `definedreturn` function
describe("definedreturn", () => { // Start of a test suite grouping tests for `definedreturn`
    
    // Verify the function itself is declared/available
    it("should have the function defined", () => { // Define a single test case
        expect(definedreturn).toBeDefined(); // Assert the function reference is not undefined
    }); // End of first test case

    // Verify that calling the function with input 2 produces a defined (non-undefined) result
    it("should return a defined value when input is 2", () => { // Define a second test case
        const result = definedreturn(2); // Call `definedreturn` with the argument 2
        expect(result).toBeDefined(); // Assert the returned value exists (is not undefined)
    }); // End of second test case
}); // End of the test suite

// Learning suite: demonstrate false positive and false negative concepts
describe("learning: false positive/false negative", () => { // Start educational examples
    
    // False positive risk: toBeDefined passes for null, which may not be a meaningful value
    it("toBeDefined passes for null (false positive risk)", () => { // Define the example test
        const value = null; // Simulate a 'present but not useful' value
        expect(value).toBeDefined(); // Passes because null is not undefined
        // Note: If your intent was 'non-empty/meaningful', prefer stricter checks
        // e.g., expect(value).not.toBeNull() or more specific matchers
    }); // End of false-positive example

    // False negative risk: missing a case can hide a real bug
    it("missing case hides bug; definedreturn(3) is undefined", () => { // Define the second example
        const result = definedreturn(3); // Call with an input not covered by previous tests
        expect(result).toBeUndefined(); // Reveals behavior that prior tests didn't catch
        // Interpretation: If the requirement was 'always return a value', old tests were a false negative
        // because they passed while this real defect remained untested
    }); // End of false-negative example
}); // End educational suite