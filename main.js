onload = () =>{
        document.body.classList.remove("container");
};
const enterBtn = document.getElementById('enter-btn');
const backBtn = document.getElementById('back-btn');
const landingPage = document.getElementById('landing-page');
const gardenPage = document.getElementById('garden-page');
const garden = document.getElementById('garden');
const romanticMusic = document.getElementById('romanticMusic');

const colors = ['#ff6baf', '#ff9a9e', '#ce93d8', '#4fc3f7', '#80deea'];

function growGarden() {
    garden.innerHTML = ''; // Bersihkan taman sebelumnya
    const flowerCount = 6;

    for (let i = 0; i < flowerCount; i++) {
        const container = document.createElement('div');
        container.className = 'flower-container';

        const height = 150 + Math.random() * 200;
        const color = colors[Math.floor(Math.random() * colors.length)];

        let petals = '';
        // Membuat 3 kelopak seperti di gambar referensi
        for (let j = 0; j < 3; j++) {
            const rotation = (j - 1) * 45;
            petals += `<div class="petal" style="width:35px; height:45px; transform: rotate(${rotation}deg) translateY(-20px); --p-color: ${color}"></div>`;
        }

        container.innerHTML = `
            <div class="stem" style="height: ${height}px">
                <div style="position: absolute; top: -10px; left: 50%; transform: translateX(-50%)">
                    ${petals}
                    <div class="center"></div>
                </div>
            </div>
        `;
        garden.appendChild(container);
    }
}

// Event Listeners
enterBtn.addEventListener('click', () => {
    landingPage.classList.add('hidden');
    gardenPage.classList.remove('hidden');
    growGarden();

    // Play romantic music when the garden appears
    setTimeout(() => {
        romanticMusic.play().catch(e => console.log("Audio play failed:", e));
    }, 500); // Small delay to ensure elements are loaded
});

backBtn.addEventListener('click', () => {
    gardenPage.classList.add('hidden');
    landingPage.classList.remove('hidden');

    // Pause romantic music when returning to landing page
    romanticMusic.pause();
    romanticMusic.currentTime = 0;
});
onload = () =>{
        document.body.classList.remove("container");
};
