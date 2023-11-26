const todos = [
    {
        id: 0,
        text: 'Power',
        isCompelet: true 
    },
    {
        id: 1,
        text: 'Reboot',
        isCompelet: true 
    },
    {
        id: 2,
        text: 'Close',
        isCompelet: false
    },
];

const todosJSON = JSON.stringify(todos);
console.log(todosJSON);