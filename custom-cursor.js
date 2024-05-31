// Criar o elemento do cursor personalizado
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

// Função para atualizar a posição do cursor
function moveCursor(e) {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
}

// Adicionar evento de movimento do mouse
document.addEventListener('mousemove', moveCursor);
