const getDataApi = async () => {
    const result = await fetch('https://api.myquran.com/v2/sholat/jadwal/1204/2024-09-11');
    const data = result.json();
    return data;
}

getDataApi().then(data => {
    console.log(data.data.jadwal);
})
