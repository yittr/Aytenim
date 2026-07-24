const btnNo = document.getElementById('btn-no');
const btnYes = document.getElementById('btn-yes');
const mainCard = document.getElementById('main-card');

function kacir() {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 80);
    
    btnNo.style.position = 'fixed';
    btnNo.style.left = x + 'px';
    btnNo.style.top = y + 'px';
}

btnNo.addEventListener('mouseover', kacir);
btnNo.addEventListener('click', kacir);

btnYes.addEventListener('click', functionw => {
    // Mobil veya masaüstü tıklamalarında çalışması için:
});

btnYes.addEventListener('click', function() {
    mainCard.innerHTML = `
        <h1>Çok Teşekkür Ederim</h1>
        <p>Seni çok seviyorum iyi ki varsın Bir daha asla üzmene izin vermeyeceğim</p>
        <div class="gif-box" style="margin-top: 15px;">
            <img src="${basariGifYolu}" alt="Mutluluk GIF" style="width: 140px; height: 140px; border-radius: 50%; object-fit: cover; border: 4px solid #5cb85c;">
        </div>
    `;
});
