import assert from "assert";

describe("constants and variables", () => {
    it("const means constant", () => {
        const aNumber = 1;
        aNumber = 2;
    });

    it.skip("you cannot change a const variable", () => {
        const aNumber = 1;
        aNumber = 2;
    });

    it("you can change a let variable", () => {
        // arrange
        let aNumber = 1;

        //  act
        aNumber = 2;

        // assert
        assert.equal(aNumber, 2);
    });

    it("uninitialized variables are undefined", () => {
        // act
        let aNumber;

        // assert
        assert.equal("undefined", typeof aNumber);
        assert.equal(undefined, aNumber);
    });

    it("null should be used for not set", () => {
        // arrange
        // declaring a dummy function
        const peekIntoTheBox = () => {
            return false;
        };

        // act
        let isCatAlive = null;

        // assert
        assert.equal(null, isCatAlive);
        isCatAlive = peekIntoTheBox();
    })
});



