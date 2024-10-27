const today = new Date();

document.getElementById("currentyear").textContent = today.getFullYear();

const lastModif = new Date();

document.getElementById("lastModified").textContent = `Last Modification: ${lastModif}`;

const hamButton = document.querySelector('#menu');
const navi = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navi.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "São Paulo Brazil Temple",
        location: "São Paulo, São Paulo, Brazil",
        dedicated: "2004, February, 22",
        area: 59246,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/_temp/017-S%C3%A3o-Paulo-Brazil-Temple.jpg"
    },
    {
        templeName: "Campinas Brazil Temple",
        location: "Campinas, São Paulo, Brazil",
        dedicated: "2002, May, 17",
        area: 48100,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/campinas-brazil-temple/campinas-brazil-temple-6012-main.jpg"
    },
    {
        templeName: "Belém Brazil Temple",
        location: "Belém, Pará, Brazil",
        dedicated: "2022, November, 20",
        area: 28675,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/belem-brazil-temple/belem-brazil-temple-31310-main.jpg"
    },
];

const templesImages = document.querySelector(".figures");
const showTemples = (temples) => {
    templesImages. innerHTML = "";

    temples.forEach(temple => {
        const templeCard = `
            <div class="temple-card">
                <div class="temple-text">
                    <h3>${temple.templeName}</h3>
                    <p>Location: ${temple.location}</p>
                    <p>Dedicated: ${temple.dedicated}</p>
                    <p>Area: ${temple.area} ft²</p>
                </div>
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            </div>  
        `;
        templesImages.innerHTML += templeCard;
    });
}

showTemples(temples);

const homeList = document.querySelector("#home");

homeList.addEventListener('click', () => {
    showTemples(temples);
})

const oldList = document.querySelector("#old");

oldList.addEventListener('click', () => {
    showTemples(temples.filter(temple => new Date(temple.dedicated).getFullYear() < 2000));
})

const newList = document.querySelector("#new");

newList.addEventListener('click', () => {
    showTemples(temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000));
})

const largeList = document.querySelector("#large");

largeList.addEventListener('click', () => {
    showTemples(temples.filter(temple => temple.area > 70000));
})

const smallList = document.querySelector("#small");

largeList.addEventListener('click', () => {
    showTemples(temples.filter(temple => temple.area < 10000));
})