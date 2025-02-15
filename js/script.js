const openModalBtn = document.querySelector('#openModal')
const openCardModal = document.querySelector('#openCardModal')
const closeModal = document.querySelectorAll('#closeModal');
const modal = document.getElementById('modal');
const main = document.querySelector('.main-content')
const taskList = document.querySelector('.task-list')
const cardForm = document.querySelector('form[name="addCard"]');
const taskForm = document.querySelector('form[name="addTask"]');

openModalBtn.onclick = () => {
    modal.classList.remove('hidden');
    taskForm.classList.remove('hidden');
    cardForm.classList.add('hidden');
    reloadSelect()
}

openCardModal.onclick = () => {
    modal.classList.remove('hidden');
    taskForm.classList.add('hidden');
    cardForm.classList.remove('hidden');
}


closeModal.forEach((cm) => {
    cm.onclick = () => {
        modal.classList.add('hidden');
    }
})

reloadCard(todoCards);

const select = document.getElementById("task_type");

function reloadSelect() {
    select.innerHTML = "";

    todoCards.forEach((card, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.textContent = card.title;
        select.append(option);
    });
}


cardForm.onsubmit = (e) => {
    e.preventDefault();
    const input = document.querySelector('.cardInput').value
    if (input.trim() !== '') {
        const card = {
            id: Math.random(),
            title: cardForm.title.value,
            tasks: []
        };
    
        todoCards.push(card);
        reloadCard(todoCards);
        cardForm.reset();
    }else{
        alert('Заполните пустое поле')
    }
};

taskForm.onsubmit = (e) => {
    e.preventDefault();

    if (todoCards.length === 0) {
        alert("Сначала добавьте карточку!");
    }

    const chosenCard = select.value;
    const task = {
        id: Math.random(),
        title: document.querySelector(".task-input").value,
        date: document.querySelector(".task-date").value,
        isDone: false
    };

    todoCards[chosenCard].tasks.push(task);
    reloadCard(todoCards);
    taskForm.reset();
};


