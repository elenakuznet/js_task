const app = document.getElementById('app');


const flowers = [
    {
        url: 'https://images.unsplash.com/photo-1661422369728-78a7df22606f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        title: "Roses",
    },
    {
        url: 'https://images.unsplash.com/photo-1447875569765-2b3db822bec9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        title: "Hydrangea",
    },
    {
        url: 'https://images.unsplash.com/photo-1499117901949-e34ef1b2444a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        title: "Lily pad",
    },
    {
        url: 'https://images.unsplash.com/photo-1592382727970-dac5d6a9a521?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        title: "Daisy",
    },
    {
        url: 'https://images.unsplash.com/photo-1591385059241-220496bc6b7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80',
        title: "Sunflowers",
    },
    {
        url: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        title: "Tulips",
    },
    {
        url: 'https://images.unsplash.com/photo-1475872711536-95ec04b9d290?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        title: "White daisy bed",
    },
    {
        url: 'https://images.unsplash.com/photo-1615280825886-fa817c0a06cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        title: "Cherry Blossom",
    }
];

function addImage() {

    const ul = document.createElement('ul');

    ul.setAttribute ('style', 'display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; align-items: center; list-style: none;');

    for (i = 0; i <= flowers.length - 1; i++) {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${flowers[i].url}" alt="">
            <p>${flowers[i].title}</p> 
            `;
        ul.appendChild(li);
    }

    app.appendChild(ul);
};

addImage();