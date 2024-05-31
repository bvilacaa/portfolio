document.addEventListener('DOMContentLoaded', function() {
    const imagensGrelha = document.querySelectorAll('.grid-item img');
    const modal = document.getElementById('modal');
    const botaoFechar = document.querySelector('.fechar');
    let imagemAtual = 0;

    imagensGrelha.forEach((imagem, index) => {
        imagem.addEventListener('click', () => {
            abrirModal(index);
        });
    });

    function abrirModal(index) {
        imagemAtual = index;
        const imagemModal = document.getElementById('imagem-modal');
        imagemModal.src = imagensGrelha[index].src;
        modal.style.display = 'block';
    }

    botaoFechar.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    document.querySelector('.anterior').addEventListener('click', () => {
        imagemAtual = (imagemAtual - 1 + imagensGrelha.length) % imagensGrelha.length;
        document.getElementById('imagem-modal').src = imagensGrelha[imagemAtual].src;
    });

    document.querySelector('.proximo').addEventListener('click', () => {
        imagemAtual = (imagemAtual + 1) % imagensGrelha.length;
        document.getElementById('imagem-modal').src = imagensGrelha[imagemAtual].src;
    });
});
