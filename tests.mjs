import assert from "assert";
import { getAge, getAgeGroup } from "./index.mjs";

describe("age calculator", () => {
    it("someone born 1972 is 50 in 2022", () => {
        // act
        const result = getAge(1972, 2022);

        // assert
        assert.equal(result, 50);
    });

    it("someone born 2021 is 1 in 2022", () => {
       // arrange
       // act
       const result = getAge(2021, 2022);

       // assert  
       assert.equal(result, 1);  
    });
});

describe("age classifier", () => {
  it("We count human age from the date of birth, so noone can be younger than 0", () => {
    // arrange
    // act
    const result = getAgeGroup(-1);

    // assert
    assert.equal(result, "impossible");
  });

  it("0-3 years old should be a toddler", () => {
    // arrange
    // act
    const result = getAgeGroup(0);

    // assert
    assert.equal(result, "toddler");
  });

  it("4-12 years old should be a kid", () => {
    // arrange
    // act
    const result = getAgeGroup(4)

    // assert
    assert.equal(result, "kid");
  });
  
  it("13-19 years old should be a teenager", () => {
    // arrange
    // act
    const result = getAgeGroup(13);

    // assert
    assert.equal(result, "teenager");
  });

  it("20-39 years old should be a adult", () => {
    // arrange
    // act
    const result = getAgeGroup(38);

    // assert
    assert.equal(result, "adult");
  });

  it("above 39 years old ... you are just old", () => {
    // arrange
    // act
    const result = getAgeGroup(40);

    // assert
    assert.equal(result, "old");
  });

  it("But 50 - that is prime age, my friend. PRIME. AGE.", () => {
    // arrange
    // act
    const result = getAgeGroup(50);

    // assert
    assert.equal(result, "prime");
  });

  it("WOW! You're even older that Jeanne Louise Calment aka the longest living person in history", () => {
    // arrange
    // act
    const result = getAgeGroup(123);

    // assert
    assert.equal(result, "longest living person");
  })
});

