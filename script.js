// DATOS DEL MENÚ
const menuItems = [
    { id: 1, name: "Ceviche", category: "entradas", price: "$12", image: "plato1.jpg" },
    { id: 2, name: "Lomo Saltado", category: "principales", price: "$18", image: "lomo-saltado.jpg" },
    { id: 3, name: "Tiramisú", category: "postres", price: "$8", image: "tiramisu.jpg" },
    // Agrega más platos aquí...
];

// FILTRADO DEL MENÚ
function displayMenuItems(category = 'all') {
    const menuContainers = document.querySelectorAll('.menu-items');
    
    menuContainers.forEach(container => {
        const containerCategory = container.dataset.category;
        if (category === 'all' || category === containerCategory) {
            container.innerHTML = '';
            const filteredItems = menuItems.filter(item => item.category === containerCategory);
            
            filteredItems.forEach(item => {
                container.innerHTML += `
                    <div class="menu-item">
                        <img src="img/${item.image}" alt="${item.name}">
                        <h3>${item.name} <span>${item.price}</span></h3>
                    </div>
                `;
            });
        }
    });
}

// SLIDER DE IMÁGENES (si lo implementas)
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

// FORMULARIO DE RESERVAS
document.getElementById('reserva-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Reserva enviada. ¡Gracias!');
    e.target.reset();
});

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(); // Carga el menú al inicio
    if (slides.length > 0) showSlide(0); // Inicia el slider si existe
});