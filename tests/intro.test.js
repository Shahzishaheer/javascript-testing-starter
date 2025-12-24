import { describe, test, it, expect } from 'vitest';
import { max } from '../src/intro';
describe("max", () => {
    it("should return the first argument if it is grater", () => {
        // AAA : We want to  test that TV is trun off
        // Arrange : turn on the tv
        const a=2;
        const b=1;
        // Act: Press the power button
        const result = max(a, b);
        // Assert:verify tv is off
        expect(result).toBe(2);
    })
    it("should return b idf second argument is true", () => {
 const a =2;
 const b=5;
 const result = max(a,b);
 expect(result).toBe(5);
    })
});