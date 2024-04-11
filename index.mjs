export const getAge = (birthYear, currentYear) => currentYear - birthYear;

export const getAgeGroup = (age) => {
    if (age < 0) return "impossible";
    if (age < 4) return "toddler";
    if (age < 13) return "kid";
    if (age < 20) return "teenager";
    if (age < 39) return "adult";
    if (age === 50) return "prime";
    if (age > 122) return "longest living person";

    return "old";
     
};

export const getAgeForPerson = (person, currentYear) => currentYear - person.birthYear;

export const divide = (number1, number2) => {
    if (number2 === 0) {
        throw new Error(
            "Please... No division by zero... I cannot cope with that. /Your computer"
        );
    }
    return number1 / number2;
};

export const addWithLog = (number1, number2, logger) => {
    console.log(logger.toString());
    logger(`About to '${number1} + ${number2}'`);
    return number1 + number2;
};