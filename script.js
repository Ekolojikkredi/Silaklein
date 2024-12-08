function showContent(page) {
    let content = document.getElementById("content");
    content.innerHTML = ""; // Reset content

    switch (page) {
        case 'ekolojik_kredi_nedir':
            content.innerHTML = `
                <h2>Ekolojik Kredi Nedir?</h2>
                <p>Ekolojik kredi, çevre dostu uygulamaları teşvik etmek amacıyla oluşturulmuş bir sistemdir. Öğrenciler ve okullar, geri dönüşüm, enerji tasarrufu, su kullanımı gibi çevresel faaliyetlerde bulunarak kredi kazanırlar. Bu krediler, çeşitli ödüllerle takas edilebilir.</p>
            `;
            break;
        case 'hazirlayanlar':
            content.innerHTML = `
                <h2>Hazırlayanlar</h2>
                <p><strong>Danışman Öğretmen:</strong> Osman Onuk</p>
                <p><strong>Öğrenciler:</strong> Muhammedcan Arslanparçası, Bilal Yiğit Tezcan, Yağız Efe Yılmaz</p>
            `;
            break;
        case 'geri_donusum_nedir':
            content.innerHTML = `
                <h2>Geri Dönüşüm Nedir?</h2>
                <p>Geri dönüşüm, atıkların tekrar işlenerek yeni ürünlere dönüştürülmesi sürecidir. Bu, çevreye zarar vermeyen, doğal kaynakların korunmasına yardımcı olan bir uygulamadır. Geri dönüşüm ile daha az enerji harcanır ve doğa daha az kirlenir.</p>
            `;
            break;
        case 'kayit_ol':
            content.innerHTML = `
                <h2>Kayıt Ol</h2>
                <p>Öğrenci kaydı veya okul kaydı yapmak için aşağıdaki seçeneklerden birini seçin.</p>
                <button onclick="showSubPage('ogrenci_kaydi')">Öğrenci Kaydı</button>
                <button onclick="showSubPage('okul_kaydi')">Okul Kaydı</button>
            `;
            break;
        case 'veri_girisi':
            content.innerHTML = `
                <h2>Veri Girişi</h2>
                <p>Okul şifresini girin:</p>
                <input type="password" id="schoolPassword" placeholder="Okul Şifresi">
                <button onclick="processDataEntry()">Giriş Yap</button>
            `;
            break;
        case 'veri_goruntule':
            content.innerHTML = `
                <h2>Veri Görüntüle</h2>
                <p>Öğrencinin mail ve okul numarasını girin:</p>
                <input type="email" id="studentEmail" placeholder="Öğrenci E-posta">
                <input type="text" id="studentId" placeholder="Öğrenci Numarası">
                <button onclick="viewData()">Verileri Göster</button>
            `;
            break;
        default:
            content.innerHTML = "<p>Geçersiz Sayfa Seçildi.</p>";
    }
}

function showSubPage(type) {
    let content = document.getElementById("content");

    if (type === 'ogrenci_kaydi') {
        content.innerHTML = `
            <h2>Öğrenci Kaydı</h2>
            <p>Öğrenci bilgilerini giriniz:</p>
            <form>
                <label for="studentName">Ad:</label><input type="text" id="studentName" required><br>
                <label for="studentSurname">Soyad:</label><input type="text" id="studentSurname" required><br>
                <label for="studentNumber">Öğrenci No:</label><input type="number" id="studentNumber" required><br>
                <label for="studentClass">Sınıf:</label><input type="text" id="studentClass" required><br>
                <label for="studentSchool">Okul Adı:</label><input type="text" id="studentSchool" required><br>
                <label for="studentEmail">E-posta:</label><input type="email" id="studentEmail" required><br>
                <label for="studentPhone">Telefon:</label><input type="tel" id="studentPhone" required><br>
                <button type="submit">Kaydı Tamamla</button>
            </form>
        `;
    } else if (type === 'okul_kaydi') {
        content.innerHTML = `
            <h2>Okul Kaydı</h2>
            <p>Okul bilgilerini giriniz:</p>
            <form>
                <label for="schoolName">Okul Adı:</label><input type="text" id="schoolName" required><br>
                <label for="schoolProvince">İl:</label><input type="text" id="schoolProvince" required><br>
                <label for="schoolDistrict">İlçe:</label><input type="text" id="schoolDistrict" required><br>
                <label for="schoolPassword">Şifre:</label><input type="password" id="schoolPassword" required><br>
                <button type="submit">Kaydı Tamamla</button>
            </form>
        `;
    }
}

function processDataEntry() {
    let password = document.getElementById("schoolPassword").value;
    
    // Okul şifresi kontrolü (basit örnek)
    if (password === "") {
        alert("Lütfen okul şifresini giriniz!");
        return;
    }

    // Başarılı girişte yeni sayfayı gösterelim
    let content = document.getElementById("content");
    content.innerHTML = `
        <h2>Veri Girişi Tamamlandı</h2>
        <p>Öğrenci bilgilerini giriniz:</p>
        <form>
            <label for="studentName">Öğrenci Adı:</label><input type="text" id="studentName" required><br>
            <label for="studentSurname">Öğrenci Soyadı:</label><input type="text" id="studentSurname" required><br>
            <label for="studentNumber">Öğrenci Numarası:</label><input type="number" id="studentNumber" required><br>
            <label for="studentClass">Sınıf:</label><input type="text" id="studentClass" required><br>
            <label for="wasteType">Atık Türü:</label><input type="text" id="wasteType" required><br>
            <label for="wasteWeight">Atık Ağırlığı (kg):</label><input type="number" id="wasteWeight" required><br>
            <label for="dataRecorder">Veriyi Kaydeden Kişi:</label><input type="text" id="dataRecorder" required><br>
            <button type="submit" onclick="submitData()">Veri Gönder</button>
        </form>
    `;
}

function submitData() {
    // Veri gönderme işlemi (basit bir işlem burada yapılabilir)
    alert("Veri başarıyla kaydedildi!");

    // Ana sayfaya dönüş için content'i temizleyelim
    let content = document.getElementById("content");
    content.innerHTML = "<p>Başarıyla veri kaydedildi. Ana sayfaya dönülecek...</p>";
    setTimeout(() => {
        showContent('kayit_ol');  // Ana sayfaya dönme işlemi
    }, 2000);  // 2 saniye sonra ana sayfaya yönlendir
}

function viewData() {
    let email = document.getElementById("studentEmail").value;
    let studentId = document.getElementById("studentId").value;

    if (email === "" || studentId === "") {
        alert("Lütfen e-posta ve öğrenci numarasını giriniz.");
        return;
    }

    // Öğrenci verileri burada gösterilebilir
    let content = document.getElementById("content");
    content.innerHTML = `
        <h2>Öğrenci Verileri</h2>
        <p><strong>Öğrenci E-posta:</strong> ${email}</p>
        <p><strong>Öğrenci Numarası:</strong> ${studentId}</p>
        <p><strong>Atık Puanı:</strong> 2500</p> <!-- Bu sabit bir örnek -->
        <p><strong>Geçmiş Teslimatlar:</strong></p>
        <ul>
            <li>2024-12-01: 5 kg plastik</li>
            <li>2024-11-15: 3 kg kağıt</li>
        </ul>
    `;
}
