
let output = document.querySelectorAll('.output');
let input = document.querySelectorAll('.input');
let label = document.getElementsByTagName('label');
let btnEdit = document.querySelector('.btn-edit');
let formContainer = document.querySelector('.form-container');
let btnForm = document.querySelector('.btn-form');

const btnMobile = document.querySelector('.btn-responsive')
const menuListMobile = document.querySelector('.menu-list');

// --- tombol menu di mobile
btnMobile.addEventListener('click', () => {
    menuListMobile.classList.toggle('active');
})

document.addEventListener('click', (e) => {
    const target = e.target.classList.contains('btn-responsive')
    if(!target)menuListMobile.classList.remove('active')

})

// --- cek apakah sudah ada local storage di website nya
for(let y = 0; y < input.length; y++){
    let valueCheck = localStorage.getItem(`data ${y}`)
    if(valueCheck){
        output[y].innerHTML = valueCheck;
    } 
}

// --- mengambil value dari input dan berikan alert jika menekan submit atau enter ketika ada input yang belum di isi
let getValue = (e) => {
    if(!input[0].value || !input[1].value || !input[2].value || !input[3].value || !input[4].value || !input[5].value || !input[6].value){
        alert(`Silahkan isi semua data terlebih dahulu`);
    } else {
        for(let i = 0; i < output.length; i++){
            let inputValue = input[i].value;
            localStorage.setItem(`data ${i}`, inputValue);
            let getData = localStorage.getItem(`data ${i}`);
            output[i].innerHTML = getData;
        }   
    }
}

// --- animasi toggle untuk edit
btnEdit.addEventListener('click', () => {
    formContainer.classList.toggle('active');
})

// --- konfigurasi ketika tombol enter di tekan
input.forEach((el) => {
    el.addEventListener('keydown', (e) => {
        if(e.key === "Enter") getValue();
    })
})

const clearBtn = document.querySelector('.delete');

clearBtn.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
})
