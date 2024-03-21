// Seleccionamos el mensaje de victoria
const victoria = document.getElementById('victoria');


for(let i = 1; i <= 6; i++) {
    const topo = document.getElementById(`topo${i}`);
    topo.addEventListener('mouseover', () => {
        for(let j = 1; j <= 6; j++) {
            const topo = document.getElementById(`topo${j}`);
            topo.style.animationPlayState = 'paused';
            victoria.style.display = 'grid';
            victoria.style.placeItems = 'center';
            victoria.style.zIndex = '3';
        }
    });
};