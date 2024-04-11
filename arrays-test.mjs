import assert from "assert";
import { getAge, getAgeGroup } from "./index.mjs";

describe("arrays and loops", () => {
    it("array keep values", () => {
        // arrange
        const array1 = [1, 2, 3, 4];
        const array2 = ["Marcus", "Eliza", "Obaid"];
        const array3 = ["Marcus", 49, true];
    });

    it("getting elements out of arrays", () => {
        // arrange
        const names = ["Marcus", "Eliza", "Obaid"];

        // act
        const firstElement = names[0];
        const secondElement = names [1];

        const length = names.length;
        const lastElement = names[names.length -1];

        // assert
        assert.equal(firstElement, "Marcus");
        assert.equal(secondElement, "Eliza");
        assert.equal(lastElement, "Obaid");
        assert.equal(length, 3);
    });
});

describe("loops does things over and over", () => {
    // it("while-loops just keeps going ...", () => {
    //     // act
    //     while (1 < 2) {
    //         console.log("Another lap in the loop");
    //     }
    // });

    it("while-loops just keep going unless wwe stop them", () => {
        // arrange
        let counter = 0;

        // act 
        while (counter < 2) {
            console.log(`Counter is now '${counter}'`);

            counter = counter + 1;
        }
    });

    it("loop through an array with while", () => {
        // arrange
        let index = 0;
        const names =["Marcus", "Eliza", "Obaid"];

        // act
        while (index < names.length) {
            console.log(`Index is now '${index}'`);
            console.log(`Current element is '${names[index]}'`);

            index = index + 1;
        }
    });  
    
    it("loop through an array with for", () => {
        // arrange
        const names = ["Marcus", "Eliza", "Obaid"];

        // act
        for (let i = 0; i < names.length; i++) {
            console.log(`i is not '${i}'`);
            console.log(`Current element is ${names[i]}`);
        }
    });

    it("calling getAge for each age", () => {
        // arrange
        const currentYear = 2022;
        const birthYears = [1972, 2022, 1980];

        // act
        for (let i = 0; i < birthYears.length; i++) {
            const age = getAge(birthYears[i], currentYear);

            console.log(`if were born in ${birthYears[i]} you are ${age} in ${currentYear}`);
        }
    });

    it("adding elements to array with push", () => {
        // arrange
        const names = ["Marcusw", "Eliza", "Obaid"];
        assert.equal(names.length, 3);

        // act
        names.push("Arvid");

        // arrange
        assert.equal(names.length, 4);
        assert.equal(names[3], "Arvid");
    });

    it("removing elements from array with pop", () => {
        // arrange
        const names = ["Marcus", "Eliza", "Obaid", "Arvid"];
        assert.equal(names.length, 4);

        // act
        names.pop();

        // arrange
        assert.equal(names.length, 3);
        assert.equal(names[3], undefined);
    });
    it("removing elements from array using slice", () => {
        // arrange 
        const names = ["Marcus", "Eliza", "Obaid", "Arvid"];
        assert.equal(names.length, 4);

        // act
        names.splice(names.length - 1, 1);

        // arrange
        assert.equal(names.length, 3);
        assert.equal(names[3], undefined);
    });

    it("adding elements to an immutable array", () => {
        // arrange
        const names = ["Marcus", "Eliza", "Obaid"];
        assert.equal(names.length, 3);

        // act
        const newNames = [... names, "Arvid"];

        // arrange
        assert.equal(names.length, 3);
        assert.equal(newNames.length, 4);
    });

    it("filter an array - mutable", () => {
        // arrange
        const numbers = [10, 23, 1, 33, 8, 12];

        // act 
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] > 10) {
                numbers.splice(i, 1);
            }
        }

        // arrange
        assert.equal(numbers.length, 3);
    });

    it("filter an array - immutable", () => {
        // arrange
        const numbers = [10, 23, 1, 33, 8, 12];

        // act
        const lowNumbers = numbers.filter((x) => x > 10);

        // arrange
        assert.equal(lowNumbers.length, 3);
    });
});
