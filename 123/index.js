const users = [
    {name:"Иван", age:"25", money:123, img:""},
    {name:"Иван", age:"25", money:123, img:""},
    {name:"Иван", age:"25", money:123, img:""},
    {name:"Иван", age:"25", money:123, img:""},
    {name:"Иван", age:"25", money:123, img:""},
    {name:"Иван", age:"25", money:123, img:""},
];

const usersDiv = document.getElementById('list');

if (usersDiv) {
    usersDiv.innerHTML = users.map(
        item => `<div class="tarelka_item">
            <p>${item.name}</p>
            <p>${item.age}</p>
            <p>${item.money}</p>
        </div>`,
    ).join('');
}