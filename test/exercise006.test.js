//const { TestScheduler } = require("jest");
const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA} = require("../challenges/exercise006")

describe("sumMultiples", () => {
   
    test("returns sum of multiples of 3 or 5 from array of numbers",()=>{
        const result = sumMultiples([1, 3, 5]);
        const expected = 8;
        expect(result).toBe(expected)
    });
    test("if not multiple of 3 or 5, returns null", ()=>{
        const result = sumMultiples([1, 3, 5.0, 2, 12, 10]);
        const expected =30;
        expect(result).toBe(expected)
    });

describe("isValidDNA", () => {
    test("returns true if string parameter contains C, G, T or A",()=>{
        const result = isValidDNA("CHUB");
        const expected = true;
        expect(result).toBe(expected)
    });

    test("returns true if string parameter contains C, G, T or A", ()=>{
        const result = isValidDNA("DGUB");
        const expected =true
        expect(result).toBe(expected)
    });

    test("returns true if string parameter contains C, G, T or A", ()=>{
        const result = isValidDNA("DHTB");
        const expected =true
        expect(result).toBe(expected)
    });

    test("returns true if string parameter contains C, G, T or A", ()=>{
        const result = isValidDNA("DHUA");
        const expected =true
        expect(result).toBe(expected)
    });

    test("returns true if string parameter contains C, G, T or A", ()=>{
        const result = isValidDNA("DHUB");
        const expected =false
        expect(result).toBe(expected)
    });

});


describe("getComplementaryDNA ", () => { 
    test("returns complementary base pair if valid DNA string entered, T always pairs with A, and C always pairs with G",()=>{
        const result = getComplementaryDNA("TBAD");
        const expected = "invalid string"
        expect(result).toBe(expected)
    });
    test("returns complementary base pair if valid DNA string entered, T always pairs with A, and C always pairs with G",()=>{
        const result = getComplementaryDNA("TGBAD");
        const expected = "invalid string"
        expect(result).toBe(expected)
    });
    test("returns complementary base pair if valid DNA string entered, T always pairs with A, and C always pairs with G", ()=>{
        const result = isValidDNA("TACG");
        const expected ="ATGC"
        expect(result).toBe(expected)
    });
    test("returns complementary base pair if valid DNA string entered, T always pairs with A, and C always pairs with G",()=>{
        const result = isValidDNA("GCAT");
        const expected ="CGTA"
        expect(result).toBe(expected)
    });
});

});
