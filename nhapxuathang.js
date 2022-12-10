var inputProductSony = document.getElementById('inputProductSony');
var outputProductSony = document.getElementById('outputProductSony');
var btn__inputProduct = document.querySelector('.btn__inputProductSony');
var btn__outputProduct = document.querySelector('.btn__outputProductSony');
var formInputProduct = document.querySelector('.form__inputProduct');
var formOutputProduct = document.querySelector('.form__outputProduct');

formInputProduct.addEventListener('submit',async (event) => {
    event.preventDefault();
    const nhaphangSony = ` https://api.thingspeak.com/update?api_key=I5LYX0VELIJ9T0B4&field1=${inputProductSony.value}`;
    if(Number(inputProductSony.value) > 0) {
        const data = await axios.get(nhaphangSony);
        alert('Nhập hàng thành công');
        window.location.reload();
    } else {
        alert('Số lượng nhập không hợp lệ. Vui lòng nhập lại');
    }
    inputProductSony.value = '';
})

formOutputProduct.addEventListener('submit',async (event) => {
    event.preventDefault();
    const xuathangSony = `https://api.thingspeak.com/update?api_key=KO11DG2NSRL7JSFQ&field1=${outputProductSony.value}`;
    if(Number(outputProductSony.value) > 0) {
        const data = await axios.get(xuathangSony);
        alert('Xuất hàng thành công');
        window.location.reload();
    } else {
        alert('Số lượng xuất không hợp lệ. Vui lòng nhập lại');
    }
    outputProductSony.value = '';
})

window.addEventListener('load', (event) => {

})