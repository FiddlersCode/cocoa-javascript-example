class add{
    static setup() {
        return {
            codeFile: '../../../src/Calculator',
            paramsFilePath: '../../../test/params/add',
            methodName: 'add',
            it: 'should add 2 numbers',
        };
    }

    static scenarios() {
        return {
            scenario1: {
                params: {
                    number1: 1,
                    number2: 2,
                },
                message: 'numbers to add',
                expected: 3,
            },

            scenario2: {
                params: {
                    number1: 2,
                    number2: 2,
                },
                message: 'numbers to add',
                expected: 4,
            },

            scenario3: {
                params: {
                    number1: 4,
                    number2: 10,
                },
                message: 'numbers to add',
                expected: 14,
            },
        }
    }
}

module.exports = add;