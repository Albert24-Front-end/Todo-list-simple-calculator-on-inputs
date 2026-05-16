export const base = {
    employee: "",
    todo: [
        {
            id: "td1",
            author: "Макс",
            post: "Составить промо-текст",
            completed: "false",
        },
        {
            id: "td2",
            author: "Катя",
            post: "Найти локацию для съемки промо-видео",
            completed: "true",
        },
    ],
    check(id) {
        console.log(id);
    },
    addToDo( author, post ) {
        const todo = {
            id: 'td' + (base.todo.length + 1),
            author,
            post,
            completed: false,
        };
        console.log()
    },
}