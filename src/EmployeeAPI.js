const employees = [
    {
        id: "1",
        name: "Bob",
        role: "Software Engineer"
    },
    {
        id: "2",
        name: "Bob",
        role: "CEO"
    },
    {
        id: "3",
        name: "Steve",
        role: "CTO"
    },
    
];

// This is our function that will return employees
// id in this list is unique.
 export const getAllEmployees = () => {
    return employees;
};

// The filter will go through a list and check a conditional statement on every element in that list. If our condition is true then we append it to the new list
// If its false then we don't append it to the list.
 export const getEmployeeById = id => {
    return employees.filter(employee => {
        return employee.id === id;
    });
};