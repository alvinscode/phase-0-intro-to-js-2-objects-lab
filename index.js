// Write your solution in this file!
const employee = { name: "Alvin", streetAddress: "123 Sesame St"};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key]:value
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;

    return obj;
}

function deleteFromEmployeeByKey(employee,key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee,key) {
    delete employee[key];
    return employee
}