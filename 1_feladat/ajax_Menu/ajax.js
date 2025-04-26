const endpoint = "http://gamf.nhely.hu/ajax2/";
const userCode = "HYB4B6asd123";

function getAllData() {
    const formData = new FormData();
    formData.append("op", "read");
    formData.append("code", userCode);

    fetch(endpoint, {
        method: "POST",
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        const list = data.list || [];
        let html = "";
        let heights = [];

        list.forEach(item => {
            html += `<p>ID: ${item.id}, Name: ${item.name}, Height: ${item.height}, Weight: ${item.weight}</p>`;
            heights.push(Number(item.height));
        });

        document.getElementById("dataList").innerHTML = html;

        if (heights.length > 0) {
            const sum = heights.reduce((a, b) => a + b, 0);
            const avg = (sum / heights.length).toFixed(2);
            const max = Math.max(...heights);
            document.getElementById("stats").innerHTML =
                `<p><b>Összeg:</b> ${sum} | <b>Átlag:</b> ${avg} | <b>Max:</b> ${max}</p>`;
        }
    });
}

function createData() {
    const name = document.getElementById("newName").value.trim();
    const height = document.getElementById("newHeight").value.trim();
    const weight = document.getElementById("newWeight").value.trim();
    const code = document.getElementById("newCode").value.trim();
    const msg = document.getElementById("createMsg");

    if (!name || !code || name.length > 30 || code.length > 30) {
        msg.innerText = "Hibás név vagy kód! (Nem lehet üres, max 30 karakter)";
        return;
    }

    const formData = new FormData();
    formData.append("op", "create");
    formData.append("name", name);
    formData.append("height", height);
    formData.append("weight", weight);
    formData.append("code", code);

    fetch(endpoint, {
        method: "POST",
        body: formData
    })
    .then(res => res.text())
    .then(result => {
        msg.innerText = result == "1" ? "Sikeres felvitel!" : "Hiba a felvitel során!";
        getAllData();
    });
}

function getDataForId() {
    const id = document.getElementById("updateId").value.trim();

    const formData = new FormData();
    formData.append("op", "read");
    formData.append("code", userCode);

    fetch(endpoint, {
        method: "POST",
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        const record = data.list.find(item => String(item.id) === id);
        if (record) {
            document.getElementById("editCode").value = record.code;
            document.getElementById("editName").value = record.name;
            document.getElementById("editHeight").value = record.height;
            document.getElementById("editWeight").value = record.weight;
        } else {
            document.getElementById("updateMsg").innerText = "Nincs ilyen ID-hez tartozó adat.";
        }
    });
}

function updateData() {
    const id = document.getElementById("updateId").value.trim();
    const name = document.getElementById("editName").value.trim();
    const height = document.getElementById("editHeight").value.trim();
    const weight = document.getElementById("editWeight").value.trim();
    const code = document.getElementById("editCode").value.trim();
    const msg = document.getElementById("updateMsg");

    if (!name || !code || name.length > 30 || code.length > 30) {
        msg.innerText = "Hibás név vagy kód! (Nem lehet üres, max 30 karakter)";
        return;
    }

    const formData = new FormData();
    formData.append("op", "update");
    formData.append("id", id);
    formData.append("name", name);
    formData.append("height", height);
    formData.append("weight", "0");
    formData.append("code", code);

    fetch(endpoint, {
        method: "POST",
        body: formData
    })
    .then(res => res.text())
    .then(result => {
        msg.innerText = result == "1" ? "Sikeres módosítás!" : "Hiba a módosítás során!";
        getAllData();
    });
}

function deleteData() {
    const id = document.getElementById("deleteId").value.trim();
    const msg = document.getElementById("deleteMsg");

    const formData = new FormData();
    formData.append("op", "delete");
    formData.append("id", id);
    formData.append("code", userCode);

    fetch(endpoint, {
        method: "POST",
        body: formData
    })
    .then(res => res.text())
    .then(result => {
        msg.innerText = result == "1" ? "Sikeres törlés!" : "Hiba a törlés során!";
        getAllData();
    });
}
