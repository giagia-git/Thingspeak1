
var API_ImportProduct_Sony = `https://api.thingspeak.com/channels/1976714/feeds.json?results=1000`;
var API_ExportProduct_Sony = `https://api.thingspeak.com/channels/1976715/feeds.json?results=1000`;
var table__tbody = document.querySelector('.table__tbody');

var Count_ImportProduct_Sony = 0;
var Count_ExportProduct_Sony = 0;
var SumCount_ImportProduct = 0;
var Sumcount_ExportProduct = 0;

const fetch_API_ImportProduct__Sony = async (url) => {
    const data_ImportProduct_Sony = await axios.get(url);
    data_ImportProduct_Sony.data.feeds.forEach(value => {
        Count_ImportProduct_Sony += Number(value.field1);
    })
    SumCount_ImportProduct += Number(Count_ImportProduct_Sony);
}

const fetch_API_ExportProduct__Sony = async (url) => {
    const API_ExportProduct_Sony = await axios.get(url);0
    API_ExportProduct_Sony.data.feeds.forEach(value => {
        Count_ExportProduct_Sony += Number(value.field1);
    })
    Sumcount_ExportProduct += Number(Count_ExportProduct_Sony);
}

window.addEventListener('load',async (event) => {
    await fetch_API_ImportProduct__Sony(API_ImportProduct_Sony);
    await fetch_API_ExportProduct__Sony(API_ExportProduct_Sony);
    console.log(Count_ImportProduct_Sony);
    console.log(Count_ExportProduct_Sony);
    table__tbody.innerHTML = `
            <tr>
            <th scope="row">1</th>
            <td>Máy ảnh Sony</td>
            <td>${Count_ImportProduct_Sony}</td>
            <td>${Count_ExportProduct_Sony}</td>
        </tr>
        <tr>
            <th scope="row">Tổng</th>
            <td></td>
            <td>${SumCount_ImportProduct}</td>
            <td>${Sumcount_ExportProduct}</td>
        </tr>
    `;
})