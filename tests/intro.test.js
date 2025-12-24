import { describe, test, it, expect } from 'vitest';
import { max } from '../src/intro';

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