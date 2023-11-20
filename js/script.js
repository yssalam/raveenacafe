const menus = [
    {
        "name": "iam",
        "label_name": "Ice Americano",
        "harga": 22000,
    },
    {
        "name": "ica",
        "label_name": "Ice Cappuccino",
        "harga": 24000,
    },
    {
        "name": "ies",
        "label_name": "Ice Espresso",
        "harga": 20000,
    },
    {
        "name": "ila",
        "label_name": "Ice Latte",
        "harga": 25000,
    },
    {
        "name": "am",
        "label_name": "Hot Americano",
        "harga": 20000,
    },
    {
        "name": "ca",
        "label_name": "Hot Cappuccino",
        "harga": 22000,
    },
    {
        "name": "es",
        "label_name": "Hot Espresso",
        "harga": 17000,
    },
    {
        "name": "la",
        "label_name": "Hot Latte",
        "harga": 22500,
    },
    {
        "name": "ss",
        "label_name": "Strawberry Smoothie",
        "harga": 25000,
    },
    {
        "name": "rb",
        "label_name": "Red Berry Smoothie",
        "harga": 30000,
    },
    {
        "name": "ps",
        "label_name": "Papaya Smoothie",
        "harga": 28000,
    },
    {
        "name": "os",
        "label_name": "Orange Smoothie",
        "harga": 22000,
    },
]

let [dataBarang, listBarang, alert, elGrandTotal, grandTotal] = [
    [],
    document.getElementById("list-barang"),
    document.getElementById("alert"),
    document.getElementById("grandtotal"),
    0
]

const uniqBarang = () => {
    return dataBarang.length > 0 ? dataBarang.map((v) => v[1]) : []
}

const calculateGrandTotal = () => {
    grandTotal = 0
    dataBarang.forEach(element => {
        grandTotal += element[4]
    })
    elGrandTotal.innerHTML = `Rp ${grandTotal}`
}

const showBarang = () => {
    listBarang.innerHTML = ""

    dataBarang.forEach((element, i) => {
        listBarang.innerHTML += `<div class="card" id="card-${element[1]}">
                <div class="card-body">
                    <input type="hidden" id="d-input-${i}" value="${element[1]}">
                    <div class="row pl-3 pr-3">
                        <div class="w-50">
                            <h6 class="f-bold mb-0">${element[0]}</h6>
                            <h6>Rp ${element[2]}</h6 >
                            <div class="input-group input-group-sm pill-num">
                            <div class="input-group-prepend" onclick="editMenu(${i}, 'min')">
                                <span class="input-left">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                    </svg>
                                </span>
                            </div>
                            <input type="number" class="form-num" value="${element[3]}" id="input-num-${i}" oninput="editMenu(${i})">
                            <div class="input-group-prepend" onclick="editMenu(${i}, 'plus')">
                                <span class="input-right">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                    </svg></span>
                                </div>
                            </div>
                        </div>
                        <div class="w-50">
                            <div class="text-right">
                                <h6 class="mb-0">Subtotal</h6>
                                <h6 class="mb-0">Rp ${element[4]}</h6>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16"  onclick="deleteBarang(${i})">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        `
    });

    calculateGrandTotal()
}
const showBarang2 = () => {
    listBarang.innerHTML = ""

    dataBarang.forEach((element, i) => {
        listBarang.innerHTML += `<div class="card" id="card-${element[1]}">
                <div class="card-body">
                    <input type="hidden" id="d-input-${i}" value="${element[1]}">
                    <div class="row pl-3 pr-3">
                        <div class="w-50">
                            <h6 class="f-bold mb-0">${element[0]}</h6>
                            <h6>Rp ${element[2]}</h6 >
                            <div class="input-group input-group-sm pill-num">
                            <div class="input-group-prepend" onclick="editMenu(${i},)">
                                
                            </div>
                            <div class="text-right")">
                            <h6 class="mb-0">Jumlah</h6>
                            <h6 class="mb-0">${element[3]}</h6>

                                </div>
                            </div>
                        </div>
                        <div class="w-50">
                            <div class="text-right">
                                <h6 class="mb-0">Subtotal</h6>
                                <h6 class="mb-0">Rp ${element[4]}</h6>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16"  onclick="deleteBarang(${i})">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        `
    });

    calculateGrandTotal()
}

const addBarang = () => {
    let menu = document.getElementById('input-menu').value;
    let jumlah = document.getElementById('input-jumlah').value;
    let daftarMenu = getMenu(menu);
    let total = jumlah * daftarMenu.harga
    if (!uniqBarang().includes(daftarMenu.name) && daftarMenu.name) {
        dataBarang.push([
            daftarMenu.label_name,
            daftarMenu.name,
            daftarMenu.harga,
            jumlah,
            total,
        ])
        showBarang()
        alert.innerHTML = ""
        return;
    } else if (uniqBarang().includes(daftarMenu.name)) {
        alert.innerHTML = "Barang sudah ada!"
        return;
    }
    alert.innerHTML = "Data tidak ditemukan!"
}
const addPesan = () => {
    let menu = document.getElementById('input-menu').value;
    let jumlah = document.getElementById('input-jumlah').value;
    let daftarMenu = getMenu(menu);
    let total = jumlah * daftarMenu.harga
    if (!uniqBarang().includes(daftarMenu.name) && daftarMenu.name) {
        dataBarang.push([
            daftarMenu.label_name,
            daftarMenu.name,
            daftarMenu.harga,
            jumlah,
            total,
        ])
        showBarang2()
        alert.innerHTML = ""
        return;
    } else if (uniqBarang().includes(daftarMenu.name)) {
        alert.innerHTML = "Pesanan Telah DiTerima"
        return;
    }
    alert.innerHTML = "Anda Belum Memesan"
}

const getMenu = (input) => {
    const query = input.toLowerCase()
    let result
    menus.forEach(element => {
        let matching = element.name.toLowerCase().match(query)
        if (matching) {
            if (matching.input == input.toLowerCase()) result = element
        }
    })
    return result
}

const editMenu = (id, opsi = null) => {
    let inputNum = document.getElementById(`input-num-${id}`);
    let menu = document.getElementById(`d-input-${id}`).value;
    let daftarMenu = getMenu(menu);
    if (Number(inputNum.value) < 1) inputNum.value = 1
    if (opsi == 'plus') inputNum.value = Number(inputNum.value) + 1
    if (opsi == 'min') {
        inputNum.value = Number(inputNum.value) == 1
            ? 1
            : Number(inputNum.value) - 1
    }
    let total = daftarMenu.harga * Number(inputNum.value)
    dataBarang[id] = [
        dataBarang[id][0],
        dataBarang[id][1],
        dataBarang[id][2],
        Number(inputNum.value),
        total,
    ]

    showBarang()
    alert.innerHTML = ""
}

const deleteBarang = (id) => {
    dataBarang.splice(id, 1)

    showBarang()
    alert.innerHTML = ""
}

showBarang()