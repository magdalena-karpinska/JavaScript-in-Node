import assert from "assert";
import { addWithLog, divide } from "./index.mjs";

describe("division", () => {
    it("4 divided with 2 is 2", () => {
        // act
        const result = divide(4, 2);

        // assert
        assert.equal(result, 2);
    });

    it("4 divided with 0 is ???", () => {
        // act
        const result = divide(4, 0);

        // assert
        assert.equal(result, null);
    });

    it("4 divided with 0 should throw error", () => {
        // arrange
        try {
            // act
            const result = divide(4, 0);
        } catch (error) {
            // assert
            assert.notEqual(error, undefined);
            assert.equal(
                error.message,
                "Please... No division by zero... I cannot cope with that. /Your computer"

            )
        }
    });

    it("throwing an error in a test will...", () => {
        throw new Error("Reports as failing test");
    })
});

describe("callbacks", () => {
    it("adding with logger", () => {
        // arrange
        const logThis2 = (message) => {
            console.log(message);
        };

        // act
        const result = addWithLog(1, 89, logThis2);

        // assert
        assert.equal(result, 90);
    });

    it("adding with inline logger", () => {
        // act
        const result = addWithLog(1, 89, (message) => {
            console.log(message);
        });

        // assert
        assert.equal(result, 90);
    });
});