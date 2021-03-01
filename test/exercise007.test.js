const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB, 
    findWinner,
    } = require("../challenges/exercise007")



describe("sumDigits", () => {

    test(" takes a number, e.g. 123 and returns the sum of all its digits", () => {
        const result = sumDigits(123);
        const expected = 6;
        expect(result).toBe(expected)
    });
    test("takes a number, e.g. 123 and returns the sum of all its digits", () => {
        const result = sumDigits(9876);
        const expected = 30;
        expect(result).toBe(expected)
    });

    test("takes a number, e.g. 123 and returns the sum of all its digits", () => {
        const result = sumDigits(345);
        const expected = 12;
        expect(result).toBe(expected)
    });

  
    });

    
describe("createRange", () => {

    test(" takes a start, end number and step and returns an array from start to end with that step, no step param means step is 1", () => {
        const result = createRange(1,9, 1);
        const expected = [1,2,3,4,5,6,7,8,9];
        expect(result).toBe(expected)
    });
    test("takes a start, end number and step and returns an array from start to end with that step, no step param means step is 1", () => {
        const result = createRange(10, 18, 2);
        const expected = [10, 12, 14, 16, 18];
        expect(result).toBe(expected)
    });

    test("takes a start, end number and step and returns an array from start to end with that step, no step param means step is 1", () => {
        const result = createRange(3, 8, 1);
        const expected = [3,4,5,6,7,8];
        expect(result).toBe(expected)
    });

  
    });

    

    describe("getScreentimeAlertList", () => {

        test(" takes a number, e.g. 123 and returns the sum of all its digits", () => {
            const result = sumDigits(123);
            const expected = 6;
            expect(result).toBe(expected)
        });
        test("takes a number, e.g. 123 and returns the sum of all its digits", () => {
            const result = sumDigits(9876);
            const expected = 30;
            expect(result).toBe(expected)
        });
    
        test("takes a number, e.g. 123 and returns the sum of all its digits", () => {
            const result = sumDigits(345);
            const expected = 12;
            expect(result).toBe(expected)
        });
    
      
        });