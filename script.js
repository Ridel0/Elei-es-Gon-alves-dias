document.addEventListener('DOMContentLoaded', (event) => {
    const candidate1Button = document.getElementById('candidate1');
    const candidate2Button = document.getElementById('candidate2');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    const confirmButton = document.getElementById('confirm-button');
    const cancelButton = document.getElementById('cancel-button');
    const confirmationText = document.getElementById('confirmation-text');
    let selectedCandidate;

    // Verifica se o usuário já votou
    if (localStorage.getItem('voted')) {
        disableVoting();
    }

    candidate1Button.addEventListener('click', () => {
        selectedCandidate = 'Candidato 1';
        openModal(selectedCandidate);
    });

    candidate2Button.addEventListener('click', () => {
        selectedCandidate = 'Candidato 2';
        openModal(selectedCandidate);
    });

    closeButton.addEventListener('click', closeModal);
    cancelButton.addEventListener('click', closeModal);

    confirmButton.addEventListener('click', () => {
        alert(`Você confirmou seu voto para ${selectedCandidate}!`);
        localStorage.setItem('voted', 'true');
        disableVoting();
        closeModal();
    });

    function openModal(candidate) {
        confirmationText.textContent = `Você deseja confirmar seu voto para ${candidate}?`;
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    function disableVoting() {
        candidate1Button.disabled = true;
        candidate2Button.disabled = true;
        candidate1Button.textContent = 'Votação Encerrada';
        candidate2Button.textContent = 'Votação Encerrada';
        candidate1Button.style.backgroundColor = '#ccc';
        candidate2Button.style.backgroundColor = '#ccc';
        candidate1Button.style.cursor = 'not-allowed';
        candidate2Button.style.cursor = 'not-allowed';
    }

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});
