//const { TestScheduler } = require("jest");
const { getBusNumbers } = require("../challenges/exercise002");
const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime, 
    createMatrix} = require("../challenges/exercise006")

describe("sumMultiples", () => {

    test("returns sum of multiples of 3 or 5 from array of numbers", () => {
        const result = sumMultiples([1, 3, 5]);
        const expected = 8;
        expect(result).toBe(expected)
    });
    test("if not multiple of 3 or 5, returns null", () => {
        const result = sumMultiples([1, 3, 5.0, 2, 12, 10]);
        const expected = 30;
        expect(result).toBe(expected)
    });

    describe("isValidDNA", () => {
        test("returns true if string parameter contains C, G, T or A", () => {
            const result = isValidDNA("CHUB");
            const expected = true;
            expect(result).toBe(expected)
        });

        test("returns true if string parameter contains C, G, T or A", () => {
            const result = isValidDNA("DGUB");
            const expected = true;
            expect(result).toBe(expected)
        });

        test("returns true if string parameter contains C, G, T or A", () => {
            const result = isValidDNA("DHTB");
            const expected = true;
            expect(result).toBe(expected)
        });

        test("returns true if string parameter contains C, G, T or A", () => {
            const result = isValidDNA("DHUA");
            const expected = true;
            expect(result).toBe(expected)
        });

        test("returns true if string parameter contains C, G, T or A", () => {
            const result = isValidDNA("DHUB");
            const expected = false;
            expect(result).toBe(expected)
        });

    });


    describe("getComplementaryDNA ", () => {
        test("returns complementary base pair if valid DNA string entered, T always pairs with A, and C always pairs with G", () => {
            const result = getComplementaryDNA("TBAD");
            const expected = "invalid string";
            expect(result).toBe(expected)
        });
        test("returns complementary base pair if valid DNA string entered, T always pairs with A, and C always pairs with G", () => {
            const result = getComplementaryDNA("TGBAD");
            const expected = "invalid string";
            expect(result).toBe(expected)
        });
        test("returns complementary base pair if valid DNA string entered, T always pairs with A, and C always pairs with G", () => {
            const result = isValidDNA("TACG");
            const expected = "ATGC";
            expect(result).toBe(expected)
        });
        test("returns complementary base pair if valid DNA string entered, T always pairs with A, and C always pairs with G", () => {
            const result = isValidDNA("GCAT");
            const expected = "CGTA";
            expect(result).toBe(expected)
        });
        test("returns complementary base pair if valid DNA string entered, T always pairs with A, and C always pairs with G", () => {
            const result = isValidDNA("gCAT");
            const expected = "invalid string";
            expect(result).toBe(expected)
        });
    });


    describe("isItPrime", () => {
        test("true if prime number, false if not", () => {
            const result = isItPrime(1);
            const expected = true;
            expect(result).toBe(expected)
        });
        test("true if prime number, false if not", () => {
            const result = isItPrime(6);
            const expected = false;
            expect(result).toBe(expected)
        });
        test("true if prime number, false if not", () => {
            const result = isItPrime(9);
            const expected = false;
            expect(result).toBe(expected)
        });
        test("true if prime number, false if not", () => {
            const result = isItPrime(11);
            const expected = true;
            expect(result).toBe(expected)
        });

    });

    describe("createMatrix", () => {
        test("returns n * n array filled with whatever is introduced via parameter called 'fill'", () => {
            expect(createMatrix(1, "yo")).toEqual(["yo"]);
        });

        test("returns n * n array filled with whatever is introduced via parameter called 'fill'", () => {
            expect(createMatrix(2, 91).toEqual([[91, 91], [91, 91]]));

            expect(createMatrix([3, "gun"])).toEqual([["gun", "gun", "gun"], ["gun", "gun", "gun"], ["gun", "gun", "gun"]]);

           
        });

    });

});

