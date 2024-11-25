function copyPhoneNumber() {
    const phoneNumber = '(48) 3263-8600';
    navigator.clipboard.writeText(phoneNumber)
        .then(() => {
            alert('Número copiado: ' + phoneNumber);
        })
        .catch(err => {
            console.error('Erro ao copiar: ', err);
        });
}