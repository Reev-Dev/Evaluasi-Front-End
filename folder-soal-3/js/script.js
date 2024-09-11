const getDataApi = async () => {
    const result = await fetch('https://api.myquran.com/v2/sholat/jadwal/1204/2024-09-11');
    const data = result.json();
    return data;
}

getDataApi().then(validate => {
    const data = validate.data;
    const lokasi = document.getElementById('lokasi')
    const tanggal = document.getElementById('tanggal')
    lokasi.textContent = data.lokasi + ', ' + data.daerah
    tanggal.textContent = data.jadwal.tanggal

    const jadwalSholat = data.jadwal;
    document.querySelector('.container').innerHTML = `
    <div class="container-item">
        <p>Shubuh: ${jadwalSholat.subuh}</p>
    </div>
    <div class="container-item">
        <p>Dzuhur: ${jadwalSholat.dzuhur}</p>
    </div>
    <div class="container-item">
        <p>Ashar: ${jadwalSholat.ashar}</p>
    </div>
    <div class="container-item">
        <p>Maghrib: ${jadwalSholat.maghrib}</p>
    </div>
    <div class="container-item">
        <p>Isya: ${jadwalSholat.isya}</p>
    </div>
`;
})