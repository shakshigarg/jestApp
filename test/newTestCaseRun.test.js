const mathOperations = require('../src/calculator');
const globalDataHolder = require('../test/GlobalDataHolder');

describe("Failed Calculator Tests", () => {

    test("Addition of 2 numbers", () => {

        // arrange and act

        var result = mathOperations.sum(1,2)

        console.log(globalDataHolder.getGlobalData())

        // assert

        //expect(result).toBe(3);
        expect(globalDataHolder.getGlobalData()).toBe("old")

    });



    test("Subtraction of 2 numbers", () => {

        // arrange and act

        var result = mathOperations.diff(10,2)



        // assert

        expect(result).toBe(21); //updated to fail

    });


    test("Multiplication of 2 numbers", () => {

        // arrange and act

        var result = mathOperations.product(2,8)


        // assert

        expect(result).toBe(10); //updated to fail

    });



    test("Division of 2 numbers", () => {

        // arrange and act

        var result = mathOperations.divide(24,8)


        // assert

        expect(result).toBe(3);

    });

})