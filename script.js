// Inicializa o EmailJS com o User ID
(function() {
    emailjs.init("99mJ8PbnEiBaBT88d"); // Este é o seu User ID
})();

// Adiciona o evento de submit ao formulário
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o reload da página ao enviar o formulário

    // Envia o formulário usando EmailJS
    emailjs.sendForm('service_ej49odi', 'template_xlii0id', this)
        .then(function() {
            alert('Mensagem enviada com sucesso!');
        }, function(error) {
            alert('Erro ao enviar a mensagem. Tente novamente.');
            console.log('Erro:', error);
        });
});
