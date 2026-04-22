const state = {
    age: 32,
    name: "John",
} // Данные о пользователе

function updateAge(age) {
    state.age = age;
}

function renderState() {
    const nameEl = document.getElementById("name");
    const ageEl = document.getElementById("age");

    nameEl.innerText = state.name;
    ageEl.innerText = state.age;
}

function handleClick() {
    const input = document.getElementById("newAge");
    const value = +input.value;
    updateAge(value)
    renderState();
}

renderState()