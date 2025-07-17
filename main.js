document.getElementById('btnLanjutkan').onclick = function(){
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block'
};

function toggleDropdown() {
    const dropdown =document.getElementById("kategoriDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none": "block";
}
function filterKategori(kategori) {
    currentCategory = kategori;
    currentPage = 1;
    displayBooks(currentPage);
    setupPagination();
    document.getElementById("kategoriDropdown").style.display = "none";
}

function cariBuku() {
    const input = document.getElementById("inputPencarian").value.trim().toLowerCase();
    searchKeyword = input;
    isSearching = input !== "";

    currentPage = 1;
    displayBooks(currentPage);
    setupPagination();

    const pesan = document.getElementById("pesanTidakDitemukan");
    const hasil = books.filter(book => book.title.toLowerCase().includes(searchKeyword));

    if (isSearching && hasil.length === 0) {
        pesan.classList.remove("d-none");
    } else {
        pesan.classList.add("d-none");
    }
}

function cekKosong() {
    const input = document.getElementById("inputPencarian").value.trim();
    
    if (input === "") {
        isSearching = false;
        searchKeyword = "";
        currentPage = 1;
        displayBooks(currentPage);
        setupPagination();
        document.getElementById("pesanTidakDitemukan").classList.add("d-none");
    }
}

function bindDetailButtons() {
document.querySelectorAll('.btnDetail').forEach(item => {
    item.addEventListener('click',(e) => {
        let parent =  e.target.parentNode.parentNode;

        let gambar = parent.querySelector('.card-img-top').src;
        let harga = parent.querySelector('.harga').innerHTML;
        let judul = parent.querySelector('.card-text').innerHTML;
        let deskripsi = parent.querySelector('.deskripsi') ? parent.querySelector('.deskripsi').innerHTML:'<i>tidak ada informasi yang tersedia<i>';
       
        let tombolModal = document.querySelector('.btnModal');
        tombolModal.click();

        document.querySelector('.modalTitle').innerHTML = judul;
        let image = document.createElement('img');
        image.src = gambar;
        image.classList.add('w-100');
        document.querySelector('.modalImage').innerHTML = '';
        document.querySelector('.modalImage').appendChild(image);
        document.querySelector('.modalDeskripsi').innerHTML = deskripsi;
        document.querySelector('.modalHarga').innerHTML = harga;

        const nohp = '6282322957551';
        let pesan = `https://api.whatsapp.com/send?phone=${nohp}&text=Halo Admin,saya mau pesan buku ${judul} ${gambar}`;

        document.querySelector('.btnBeli').href = pesan;
    });
});
}
const books = [
    {
        title: "Atomic Habits",
        kategori: "motivasi",
        image: "images/buku1.jpg",
        originalPrice: "Rp. 70.000,00",
        discountPrice: "Rp. 60.900,00",
        discountLabel: "DISKON 13%",
        description: "Buku 'Atomic Habits' karya James Clear membahas tentang bagaimana membentuk kebiasaan baik dan menghilangkan kebiasaan buruk melalui perubahan kecil yang berkelanjutan.Buku ini menekankan pentingnya 'Atomic Habits', yaitu perubahan kecil yang diulang setiap hari, yang secara kumulatif dapat menghasilkan perubahan besar dalam hidup.",
    },
    {
        title: "Belajar Coding Algoritma dan Bug",
        kategori: "sains dan teknologi",
        image: "images/buku2.jpg",
        originalPrice: "Rp. 85.000,00",
        discountPrice: "Rp. 80.100,00",
        discountLabel: "DISKON 6%",
        description: "Belajar Coding: Buku Algoritma dan Bug adalah buku coding yang berfokus pada pengajaran anak-anak tentang algoritma dan teknik debugging. Buku ini bertujuan untuk membantu mereka mengembangkan pemahaman yang kuat tentang pemikiran algoritmik dan membekali mereka dengan strategi untuk mengidentifikasi dan memperbaiki bug dalam kode mereka. Dengan memberikan penjelasan yang jelas, contoh langkah demi langkah, dan latihan pemecahan masalah, buku ini memberdayakan anak-anak untuk mengembangkan algoritma yang efisien dan mengatasi tantangan dalam perjalanan coding mereka.",
    },
    {
        title: "Making Learning Whole",
        kategori: "motivasi",
        image: "images/buku3.jpg",
        originalPrice: "Rp. 250.000,00",
        description: "Buku ini berisi informasi tentang cara merancang, mengatur, dan memanfaatkan ruang belajar untuk mendukung pembelajaran yang lebih baik.",
    },
    {
        title: "Range",
        kategori: "motivasi",
        image: "images/buku4.jpg",
        originalPrice: "Rp. 96.000,00",
        discountPrice: "Rp. 87.360,00",
        discountLabel: "DISKON 9%",
        description: "Buku 'range' ini adalah buku yang memberikan wawasan tentang keberhasilan dan manfaat menjadi seorang generalis di dunia yang semakin berfokus pada spesialisasi.",
    },
      {
        title: "AL and Machine Learning For Coders",
        kategori: "sains dan teknologi",
        image: "images/buku5.jpg",
        originalPrice: "Rp. 75.000,00",
        description: "sebuah buku tentang cara memulai mempraktikkan AI dan pembelajaran mesin mulai dari membangun dan melatih model pembelajaran mesin hingga menerapkan dan menggunakannya dalam aplikasi dunia nyata.",
    },
      {
        title: "Web Scability for Startup Engineers",
        kategori: "pelajaran",
        image: "images/buku6.jpg",
        originalPrice: "Rp. 200.000,00",
        description: "Buku ini membahas topik-topik seperti desain sistem yang baik, membangun front-end yang tangguh, pengembangan layanan web, penskalaan data, caching, asinkroni, dan manajemen proyek.",
    },
      {
        title: "buku Biologi",
        kategori: "pelajaran",
        image: "images/buku pelajaran.jpg",
        originalPrice: "Rp. 50.000,00",
        description: " Buku pelajaran yang membahas materi dasar biologi, termasuk ruang lingkup biologi, keanekaragaman hayati, klasifikasi makhluk hidup, virus, bakteri, protista, jamur, dan tumbuhan. Selain itu, buku ini juga membahas konsep-konsep penting seperti sel, jaringan, organ, sistem organ, dan individu.",
    },
      {
        title: "buku kumpulan cerita, Ragam Indonesia",
        kategori: "cerpen",
        image: "images/buku cerita.jpg",
        originalPrice: "Rp. 35.000,00",
        description: "Buku 'Kumpulan Cerita Ragam Indonesia: Anak-Anak Teluk Bone & 12 Cerita Mengenalkan Keragaman Indonesia' berisi kumpulan cerita anak yang menggambarkan keragaman budaya, suku, fisik, sosial, dan teknologi di Indonesia. Cerita-cerita tersebut menceritakan kisah anak-anak dari berbagai daerah dan latar belakang, serta memperkenalkan keragaman yang ada di Indonesia.",
    },
      {
        title: "Kamus lengkap bahasa indonesia",
        kategori: "pelajaran",
        image: "images/kamus.jpg",
        originalPrice: "Rp. 150.000,00",
        description: "Kamus lengkap bahasa Indonesia berisi daftar kata-kata, atau lema, yang disusun secara alfabetis. Setiap lema biasanya dilengkapi dengan informasi seperti ejaan, pelafalan, kelas kata (misalnya kata benda, kata kerja, kata sifat), berbagai makna (termasuk makna umum dan makna khusus atau istilah), contoh penggunaan dalam kalimat, dan terkadang sejarah kata.",
    },
    {
        title: "Kecerdasan buatan dengan Deep Learning",
        kategori: "sains dan teknologi",
        image: "images/buku tekonologi 1.jpg",
        originalPrice: "Rp. 99.000,00",
        description: "Buku ini membahas teknologi Deep Learning, bukan hanya dari sisi What (konsep, definisi, jenis, fungsi, dan peran Deep Learning) saja, tetapi secara detail juga menjelaskan sisi How (bagaimana Deep Learning bekerja dan dengan teknik optimasi dan normalisasi apa), dan sisi Why (filosofi kenapa Deep Learning bekerja demikian dan untuk apa). Agar makna mudah dicerna, semua penjelasan disertai dengan banyak visualisasi gambar serta studi kasus. Kode pemrograman yang disertai dengan penjelasan detail diberikan pada bab-bab khusus “Let’s Code!” sehingga pemahaman lebih mudah dan terfokus. Semua kode program diletakkan pada platform Machine Learning Google Colab sehingga para pembaca dapat melakukan eksplorasi lebih jauh tanpa perlu menginstal perangkat lunak apapun.",
    },
    {
        title: "Kiri sampai sini",
        kategori: "novel",
        image: "images/novel 1.jpg",
        originalPrice: "Rp. 86.000,00",
        description: "Novel berjudul KIRI SAMPAI SINI menceritakan tentang kehidupan Wais sebagai seorang mahasiswa yang aktif berorganisasi dan peduli dengan detail-detail kecil yang berkaitan dengan ketidakadilan di sekitarnya. Ia pandai berorasi dan memiliki sikap kepedulian yang tinggi. Masa kuliahnya semakin berwarna sejak gadis bernama Rena menawan hatinya. Mereka berpacaran layaknya sepasang kekasih yang dimabuk cinta. Selalu ada pesan manis atau puisi-puisi pengantar tidur yang selalu Wais kirimkan kepada Rena sebelum gadisnya tidur. Namun, memasuki bulan ke empat belas, hubungan mereka mengalami guncangan hebat.",
    },
     {
        title: "Merdeka sejak hati",
        kategori: "novel",
        image: "images/novel 2.jpg",
        originalPrice: "Rp. 70.000,00",
        description: "Sejak kecil, Lafran Pane, anak piatu yang lasak dari kaki Gunung Sibualbuali hanya ingin menemukan kemerdekaan dan cinta yang hilang. Tapi pencariannya ini nyaris membunuhnya secara ragawi, tapi terbangkitkan secara rohani.Ikuti petualangan adik sastrawan Sanusi Pane dan Armijn Pane ini, menunaikan misi hidupnya dan menemukan cintanya di bawah penjajahan Belanda dan Jepang. Dari tukang protes guru menjadi guru besar. Dari penjual es lilin menjadi pahlawan nasional.Baginya merdeka itu ketika berani jujur dan sederhana di tengah riuh rendah dunia.",
    },
     {
        title: "Ayam pengen cincin ajaib",
        kategori: "cerpen",
        image: "images/buku cerita3.jpg",
        originalPrice: "Rp. 35.000,00",
        description: " Cerita ini menghimpunkan berbagai kisah menarik untuk bacaan kanak-kanak di mana cerita ini memberi banyak pengajaran dan teladan kepada kanak-kanak di mana di ambil dari kisah hikayat ini yang menceritakan bagaimana ayam tua yang gigih mendapatkan semula cincin kepunyaan nenek dan berhadapan dengan raja yang sangat kejam.Kisah ayam Tua ini dan banyak kisah hikayat lain yang menyeronokkan terkandung dalam buku ini. Banyak pengajaran dan teladan yang dapat diambil daripada kisah hikayat ini.",
    },
     {
        title: "Periuk bubur ajaib",
        kategori: "cerpen",
        image: "images/buku cerita2.webp",
        originalPrice: "Rp. 29.000,00",
        description: "Cerita ini menceritakan tentang seorang gadis miskin yang diberi periuk ajaib oleh seorang perempuan tua. Periuk ini dapat memasak bubur secara ajaib untuk mengisi perut gadis dan ibunya yang selalu kelaparan. Suatu hari, ibunya lupa cara menghentikan periuk itu memasak sehingga menyebabkan bubur melimpah keluar dan membanjiri kampung. Namun, kejadian itu berakhir baik kerana penduduk",
    },
    {
        title: "Pendidikan agama islam dan budi pekerti kelas 11",
        kategori: "pelajaran",
        image: "images/buku pelajaran 4.webp",
        originalPrice: "Rp. 40.000,00",
        description: "Buku Pendidikan Agama Islam dan Budi Pekerti SMA Kelas XI berisi mengenai pengembangan pengetahuan, nilai-nilai sikap spiritual dan sosial, serta keterampilan beragama yang mendorong terwujudnya pengamalan ajaran Islam dalam kehidupan sehari-hari.",
    },
{
        title: "sejarah kelas 10",
        kategori: "pelajaran",
        image: "images/buku pelajaran 5.webp",
        originalPrice: "Rp. 55.000,00",
        description: "Buku ini disusun khusus untuk mata pelajaran sejarah pada jenjang SMA/MA/SMK/MAK Kelas 10. Jika saat ini Anda adalah seorang murid yang sedang mempelajari mata pelajaran sejarah, Anda harus mengunduh buku ini sebagai bahan bacaan Anda. Atau jika Anda adalah seorang guru yang diberi amanah untuk mengajar mata pelajaran sejarah pada jenjang SMA/MA/SMK/MAK Kelas 10, Anda juga harus mengunduh buku ini sebagai pegangan Anda dalam mengajar.",
    },
{
        title: "Media dan teknologi pembelajaran",
        kategori: "sains dan teknologi",
        image: "images/buku teknologi 2.jpg",
        originalPrice: "Rp. 60.000,00",
        description: "Dalam buku ini, penulis menyajikan sepuluh pokok bahasan mulai dari Bab I media pembel- ajaran: pengertian, karakteristik, dan urgensinya, teknologi pembelajaran: pengertian, sejarah, dan perbedaan istilah, perspektif belajar, dan strategi pembelajaran, model-model pengembangan media dan teknologi pembelajaran, belajar melalui bahan cetak, belajar melalui bahan visual, integrase ICT dalam pembelajaran, integrase social media dalam pembelajaran, pembelajaran blended: pemaduan sumber belajar tradisional dan online, dan pembelajaran jarak jauh berbasis TIK.",
    },
{
        title: "Ensiklopedia sains dan teknologi",
        kategori: "sains dan teknologi",
        image: "images/buku teknologi 3.jpg",
        originalPrice: "Rp. 150.000,00",
        description: "Sinopsis Buku Buku Ensiklopedia Sains & Teknologi: Kehidupan Sehari-hari akan menjelaskan hal-hal unik dan rahasia di balik produk sains dan teknologi yang sering kamu temui setiap harinya, seperti smartphone, internet, bahkan roda ban. Bagaimana terciptanya smartphone? Siapa yang pertama memikirkan konsep mobil? Dari mana asalnya listrik yang menerangi rumah kita? Seperti apa teknologi masa depan? Semua hal dibahas secara detail dan menarik dengan penjelasan yang mudah dipahami sehingga kamu tidak sulit mempelajarinya dan menjadikanmu ilmuwan masa depan yang hebat!",
    },
{
        title: "Dilan 1990",
        kategori: "novel",
        image: "images/novel 4.jpg",
        originalPrice: "Rp. 85.000,00",
        description: "Novel 'Dilan : Dia Adalah Dilanku Tahun 1990' bercerita tentang kisah cinta dua remaja Bandung pada tahun 90an. Berawal dari seorang siswa bernama Dilan yang jatuh cinta dengan siswi pindahan dari SMA di Jakarta bernama Milea. Dilan memiliki beragam cara untuk mendekati dan mencuri perhatian Milea. Mulai dari bertingkah selayaknya seorang peramal, berpura-pura menjadi orang suruhan kantin, dan banyak lagi perhatian-perhatian kecil yang diberikan untuk melunakkan hati Milea."
    },
{
        title: "Classic english novels of 1813 volume II",
        kategori: "novel",
        image: "images/novel 5.jpg",
        originalPrice: "Rp. 120.000,00",
        description: "'Classic English Novels of 1813 Volume II' adalah kumpulan karya sastra klasik yang menyoroti keindahan dan kekuatan prosa dari era awal abad ke-19 di Inggris. Volume ini menyajikan cerita-cerita dari novelis ternama yang karya-karyanya pertama kali diterbitkan pada tahun 1813, sebuah tahun penting dalam sejarah sastra Inggris. Dengan latar sosial yang kaya, karakter yang mendalam, dan gaya bahasa khas era Regency, buku ini menjadi bacaan wajib bagi pecinta sastra klasik. Salah satu karya paling menonjol yang kemungkinan besar termasuk dalam volume ini adalah Pride and Prejudice karya Jane Austen, yang pertama kali terbit pada tahun tersebut Cocok untuk pembaca yang ingin menyelami dunia klasik Inggris yang elegan, penuh etiket, cinta, dan konflik sosial.",
    },
{
        title: "Motivasi tembus langit",
        kategori: "motivasi",
        image: "images/buku motivasi 1.webp",
        originalPrice: "Rp. 86.000,00",
        description: "Bagaimana cara memiliki motivasi yang mampu menembus langit? Jawabnya ada di dalam buku ini. Setuju dan tidaknya, boleh Anda simpulkan setelah selesai membaca buku ini. Semoga Anda senang membacanya dan dapat mengambil manfaat darinya. Namun sebelum membacanya, telitilah lebih dahulu buku ini dengan nalar yang sehat, logika yang jernih, hati yang bersih, karena seperti sebuah makanan, Anda tidak bisa mengatakan makanan itu enak atau tidak, sebelum Anda merasakannya sendiri. Adalah sebuah kejahatan terhadap ilmu; memfatwakan sesuatu secara terburu-buru sebelum terlebih dahulu mengkaji akar permasalahannya, mendengar pernyataan-pernyataan tentangnya, mencari argumen-argumen yang mendasarinya, dan membaca dalil yang berkaitan dengannya. Buku Motivasi Tembus Langit ditulis untuk menjadikan diri kita menjadi pembelajar sejati, pembelajar yang tak pernah kenyang dengan belajar dan selalu dahaga akan ilmu. Di dalamnya disertakan dalil-dalil dari Al-Qur‰Ûªan dan Al-Hadis, yang sesuai dengan tema pembahasan. Selain itu, ada beberapa nukilan kisah-kisah berhikmah, kata-kata mutiara bertenaga dari pujangga di berbagai belahan dunia, yang akan membuat kita termotivasi dalam hidup.",
    },
{
        title: "How non-conformists move the world",
        kategori: "motivasi",
        image: "images/buku motivasi 2.jpg",
        originalPrice: "Rp. 57.000,00",
        description: "Dalam Originals, penulis membahas tantangan untuk memperbaiki dunia dari perspektif menjadi orisinal: memilih untuk memperjuangkan ide dan nilai baru yang bertentangan dengan arus, melawan keseragaman, dan menentang tradisi yang sudah ketinggalan zaman. Bagaimana kita dapat memunculkan ide, kebijakan, dan praktik baru tanpa mempertaruhkan segalanya",
    },
{
        title: "Kumpulan dongeng si kancil",
        kategori: "cerpen",
        image: "images/buku cerita 4.jpg",
        originalPrice: "Rp. 20.000,00",
        description: "Dongeng, cerita, kisah, dan semacamnya tidak saja menarik untuk disimak, tetapi juga menyimpan nilai-nilai yang menggugah, mencerahkan, serta membangkitkan emosi dan harapan bagi buah hati tercinta. Nah, buku 'Kumpulan Dongeng si Kancil Seri 2' ini berisi cerita tentang tokoh kancil yang cerdik, pemberani, pemberani, cerdas, jenaka, dan suka menolong. Lewat buku ini, buah hati Anda diajak untuk menyelami kisah kancil yang seru, mengharu biru, dan menegangkan. Tidak hanya itu, si kecil juga akan diajak untuk menghayati pesan-pesan moral yang terkandung dalam setiap cerita. Harapannya, putra-putri Anda tumbuh menjadi pribadi yang hangat, bersahabat, dan memiliki budi pekerti mulia. Buku ini menghadirkan lima kisah kancil yang sudah populer di masyarakat. Diceritakan kembali dengan gaya bahasa yang sederhana dan mudah dipahami sesuai dengan tingkat pemahaman anak. Ilustrasi yang apik dan jenaka kiranya kian menambah daya tarik buku ini. Putra-putri Anda pasti suka! ",
    },
{
        title: "Kisah hidup Rasulullah S.A.W. ",
        kategori: "cerpen",
        image: "images/buku cerita 5.jpg",
        originalPrice: "Rp. 90.000,00",
        description: "Seri Kisah Hidup Rasulullah Saw. terdiri dari delapan judul buku yang merangkum peristiwa-peristiwa penting dalam hidup Rasulullah Saw. Kisah dimulai dari pengenalan keluarga Rasulullah Saw., lalu kelahiran Rasulullah, masa kanak-kanak dan masa dewasa Rasulullah, masa Rasulullah diangkat menjadi nabi, masa berdakwah, hijrah, dan terakhir saat Rasulullah Saw. melakukan haji wa’da. Keunggulan seri ini terletak pada ilustrasi dengan gaya yang khas dan warna-warna yang kuat. Selain itu, naskahnya pun simpel sehingga memudahkan balita untuk memahami kisah Rasulullah Saw. Seri buku ini cocok dijadikan sebagai media pengenalan awal balita kepada Rasulullah Saw.",
    },
{
        title: "Matematika tingkat lanjut kelas 11",
        kategori: "pelajaran",
        image: "images/buku pelajaran 6.png",
        originalPrice: "Rp. 60.000,00",
        description: "Buku siswa ini digunakan untuk pegangan siswa SMA Kelas XI yang disusun berdasarkan Kurikulum Sekolah Penggerak. Buku siswa ini disusun dengan mengembangkan kompetensi abad 21, nilai-nilai Pancasila dan menjawab tantangan era revolusi industri 4.0. Setiap bab dalam buku ini diupayakan untuk mengembangkan kompetensi siswa yang terkait dengan berpikir tingkat tinggi, berpikir kritis dan pemecahan masalah, kreatif dan inovatif, komunikatif, dan kolaboratif, memuat literasi informasi, media, dan teknologi yang diperlukan di era revolosi industri 4.0. Siswa perlu terlibat aktif untuk mencari tahu dan mengeksplorasi matematika.",
    },
{
        title: "Segala sesuatu tentang teknologi masa masa depan",
        kategori: "sains dan teknologi",
        image: "images/buku teknologi 4.jpg",
        originalPrice: "Rp. 120.000,00",
        description: "Buku penuh warna membahas teknologi abad depan, dari rumah hingga masyarakat, disertai grafis menarik dan data tepat. Pelajari perkembangan teknologi masa depan dengan informasi lengkap dan grafis menarik dalam buku ini.",
    },
{
        title: "Stop over thinking",
        kategori: "motivasi",
        image: "images/buku motivasi 3.jpg",
        originalPrice: "Rp. 110.000,00",
        description: "Tidak ada hidup seorang pun yang tidak ada masalah. Bahkan masalah yang sepele saja bisa jadi masalah yang serius jika pikiran kita tidak siap menghadapinya. Hal itu mungkin lebih kita kenal dengan istilah overthinking dimana kita banyak berpikir untuk satu hal dan jadi masalah untuk mental kita. Agar hidup dan pikiran menjadi tenang, kita perlu menjalani hidup dengan sewajarnya saja. Buku ini akan memberikan perspektif mengenai bagaimana caranya untuk berhenti overthinking.",
    },
{
        title: "Pulang-pergi",
        kategori: "novel",
        image: "images/buku novel 6.jpg",
        originalPrice: "Rp. 85.000,00",
        description: "Membaca cerita fiksi dengan bumbu action di dalamnya memang tidak akan pernah gagal membuat pembaca tegang dan asyik saat menikmatinya. Adegan perkelahian, kejar-kejaran, hingga tembak menembak seakan bisa menghipnotis pembaca untuk larut dalam jalinan cerita. Adrenalin diajak untuk turut serta dalam pengalaman membaca yang memacu detak jantung, hingga rasa penasaran dalam benak pembaca.",
    },
{
        title: "Memerang yang berjasa",
        kategori: "cerpen",
        image: "images/buku cerita 6.webp",
        originalPrice: "Rp. 35.000,00",
        description: "Siri Hikayat Teladan ini menghimpunkan pelbagai kisah menarik untuk bacaan santai, tetapi berinformasi sesuai untuk kanak-kanak. Siri ini didatangkan dengan enam tajuk yang berlainan dan perlu dimiliki sebagai koleksi untuk bacaan harian kanak-kanak. Banyak pengajaran dan teladan yang dapat diambil daripada kisah hikayat ini. Bagaimana seekor memerang yang berjasa menolong seorang pemuda menangkap ikan untuk menjana pendapatannya. Akhirnya, memerang ini dibunuh oleh pemuda yang tidak mengenang jasa makhluk lain ini. Kisah memerang yang berjasa ini dan banyak kisah hikayat lain yang menyeronokkan terkandung dalam buku ini.",
    },
{
        title: "Kisah tanah jawa 'Tikungan Maut'",
        kategori: "novel",
        image: "images/novel 3.jpg",
        originalPrice: "Rp. 77.000,00",
        description: "Sinopsis: Jalan yang berkelok dan menanjak, cukup membuatku mual. Sampai pada ujung jalan menanjak, sebuah cahaya lampu menembus dari arah berlawanan. Bunyi klakson terdengar bersahutan di telinga.Sepersekian detik kemudian hantaman pertama merusak bus bagian depan, membuat bus hampir terguling. Seluruh penumpang terlempar keluar dari kursinya. Belum sempat kami membetulkan posisi, dari belakang tiba-tiba datang lagi hantaman kedua. Kondisi bus kini ringsek terhimpit dua truk.Kemudian, terdengar suara ledakan, seketika api dengan cepat membakar bagian depan merambat ke bagian belakang bus. Teriakan kesakitanmenyeruak bersama isak tangis yang memutus kehidupan.(Wati, korban)'Saya menyaksikan kobaran api begitu besar, ketika serombongan manusia dalam bus itu terpanggang hidup-hidup. Tidak ada bala bantuan.'(Saksi - pedagang pinggir jalan)Rabu malam, 8 Oktober, 2003, jadi hari terakhir bagi Wati dan juga teman-temannya yang kembali dari study tour ke Bali. Bus merekaterbakar dan meledak setelah dihantam dua truk di dekat pintu PLTU Paiton, Jawa Timur. Tim Kisah Tanah Jawa mendatangi tempat kejadian yang memang dikenal sebagai kawasan rawan kecelakaan ini. Apa yang sebenarnya terjadi? Buku Kisah Tanah Jawa: Tikungan Maut mencoba menjawabnya.",
    },

]
const itemsPerPage = 6;
let currentPage = 1;
let currentCategory = null;
let isSearching = false;
let searchKeyword = "";

function displayBooks(page) {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";
    
    let filteredBooks = books;

    if (isSearching && searchKeyword !== "") {
        filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchKeyword));
    } else if (currentCategory) {
        filteredBooks = books.filter(book => book.kategori === currentCategory);
    }

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedBooks = isSearching ? filteredBooks : filteredBooks.slice(start, end);

    if (paginatedBooks.length === 0) {
        bookList.innerHTML = "<P class='text-center'>Tidak ada buku dalam kategori ini.</p>";
        return;
    }

    paginatedBooks.forEach((book) => {
        const div = document.createElement("div");
        div.className = "col-md-4 col-sm-6 mb-4 buku";
        div.innerHTML = `<div class="card shadow"> 
        ${book.discountLabel ? `<span class="label-diskon">${book.discountLabel}</span>` : ""}
            <img src="${book.image}" class="card-img-top"/>
            <div class="card-body">
                <p class="card-text judul-buku">${book.title}</p>
            </div>
            <div class="d-none deskripsi"><p>${book.description}</p></div>
            <div class="card-footer d-md-flex">
            <a class="btn btn-sm btn-primary d-block btnDetail" style="margin-right:8px;">detail</a>
            <button class="btn btn-sm btn-success btnCart">🛒</button>
            <span class="ms-auto text-danger fw-bold d-block text-center harga">${book.discountPrice? `<s><i>${book.originalPrice}</i></s><br><span style="color: green;">${book.discountPrice}</span>` : `<span>${book.originalPrice}</span>`}
            </span>
            </div>
            </div>
        `;
        bookList.appendChild(div);
    });
    bindDetailButtons();
    bindCartButtons();
}

function setupPagination() {
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    if (isSearching) {
    document.getElementById("pagination").style.display = "none";
    return;
   } else {
    document.getElementById("pagination").style.display = "flex";
   }

    const filteredBooks = currentCategory ? books.filter(book => book.kategori === currentCategory) : books;
    const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);

    const createPageItem = (label, page, disabled = false, active = false) => {
        const li = document.createElement("li");
        li.className = `page-item ${disabled ? "disabled" : ""} ${active ? "active" : ""}`;
        li.innerHTML = `<a class="page-link" href="#">${label}</a>`;
        if (!disabled && !active) {
            li.addEventListener("click", () => {
                currentPage = page;
                displayBooks(currentPage);
                setupPagination();
            });
        }
        return li;
    };

    pagination.appendChild(createPageItem("«", 1, currentPage === 1));
    pagination.appendChild(createPageItem("««", currentPage - 1, currentPage === 1));

    for (let i = 1; i <= totalPages; i++) {
        pagination.appendChild(createPageItem(i, i, false, i === currentPage));
    }

    pagination.appendChild(createPageItem("»»", currentPage + 1, currentPage === totalPages));
    pagination.appendChild(createPageItem("»", totalPages, currentPage === totalPages));
}

displayBooks(currentPage);
setupPagination();

window.onscroll = function() {
    const btn = document.getElementById("btnTop");
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth'});
}

function toggleMenu() {
    const menu = document.getElementById('navLinks');
    menu.classList.toggle('show');
}
function toggleDropdown(){
    const dropdown = document.getElementById('kategoriDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

let cart = [];

function updateCartCount() {
  document.getElementById('cart-count').innerText = cart.length;
}

function bindCartButtons() {
  document.querySelectorAll('.btnCart').forEach(button => {
    button.addEventListener('click', function () {
      const parentCard = this.closest('.card');
      const title = parentCard.querySelector('.judul-buku').innerText;
      const image = parentCard.querySelector('img').src;

      cart.push({ title, image });
      updateCartCount();
      alert(`"${title}" telah dimasukkan ke keranjang.`);
    });
  });
}

document.getElementById("cartMenu").addEventListener("click", function () {
  if (cart.length === 0) {
    alert("Keranjang masih kosong.");
    return;
  }

  let pesan = "Isi keranjang:\n";
  cart.forEach((item, index) => {
    pesan += `${index + 1}. ${item.title}\n`;
  });

  if (confirm(pesan + "\nKlik OK untuk beli semua via WhatsApp")) {
    const nohp = '6282322957551';
    const daftar = cart.map((item, i) => `${i + 1}. ${item.title}`).join('%0A');
    const linkWA = `https://api.whatsapp.com/send?phone=${nohp}&text=Halo Admin, saya ingin beli buku berikut:%0A${daftar}`;
    window.open(linkWA, '_blank');
  }
});