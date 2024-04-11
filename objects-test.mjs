import assert from "assert";
import { getAge, getAgeGroup, getAgeForPerson } from "./index.mjs";


describe("object are for building things", () => {
    it("out first object - a human", () => {
        // act
        const person = {
            name: "Marcus",
            birthYear: 1972,
            isTeacher: true,
        };

        // assert
        assert.equal(person.name, "Marcus");
        assert.equal(person.birthYear, 1972);
        assert.equal(person.isTeacher, true);
    });

    it("get age for person", () => {
        // arrange
        const currentYear = 2022;
        const person = {
            name: "Marcus",
            birthYear: 1972,
            isTeacher: true,
        };

        // act
        const age = getAgeForPerson(person, currentYear);

        // assert
        assert.equal(age, 50);
    });

    it("a person has a list of favourite movies", () => {
        // act
        const person = {
            name: "Marcus",
            favouriteMovies: ["Star Wars IV", "Star Wars V", "Star Wars IX"],
        };

        // assert
        assert.equal(person.favouriteMovies.length, 3);
        assert.equal(person.favouriteMovies[0], "Star Wars IV");
        assert.equal(person.favouriteMovies[1], "Star Wars V");
        assert.equal(person.favouriteMovies[person.favouriteMovies.length -1], "Star Wars IX");
    });

    it("a person has a list of favourite movies with release years", () => {
        // act
        const person = {
            name: "Marcus",
            favouriteMovies: [
                {
                    title: "Star Wars IV",
                    releaseYear: 1977,
                },
                {
                    title: "Star Wars V",
                    releaseYear: 1980,
                },
                {
                    title: "Star Wars IX",
                    releaseYear: 2017,
                }
            ],
        };

        // assert
        assert.equal(person.favouriteMovies.length, 3);
        assert.equal(person.favouriteMovies[0].title, "Star Wars IV");
        assert.equal(person.favouriteMovies[2].releaseYear, 2017);
    });
});