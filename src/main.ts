const List = document.querySelector<HTMLDivElement>(".List")!;
const tambah = document.querySelector<HTMLButtonElement>("#Tambah")!;
const RemoveAll = document.querySelector<HTMLButtonElement>("#remove-all")!;
const inputUser =
  document.querySelector<HTMLInputElement>('input[type="text"]')!;

let data: string[] = [];

function render(text: string) {
  const card = document.createElement("div");
  card.className = "card-list";

  const textSpan = document.createElement("span");
  textSpan.className = "card-text";
  textSpan.textContent = text;

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";
  

  const cek = document.createElement("button");
  cek.className = "hapus";
  cek.textContent = "Hapus List";

  const CEK = document.createElement("button");
  CEK.className = "edit";
  CEK.textContent = "edit";

  data.push(text);

  buttonContainer.appendChild(CEK);
  buttonContainer.appendChild(cek);

  card.appendChild(textSpan);
  card.appendChild(buttonContainer);
  List.appendChild(card);

  cek.addEventListener("click", () => {
    const index = data.indexOf(text);
    if (index > -1) {
      data.splice(index, 1);
    }

    card.remove();
  });

  CEK.addEventListener('click', () => {
    const newText = prompt("Edit teks:", text);
    if (newText && newText.trim()) {
      const index = data.indexOf(text);
      if (index > -1) {
        data[index] = newText.trim();
      }
      textSpan.textContent = newText.trim();
      text = newText.trim();
    }
  });
}

tambah.addEventListener("click", () => {
  const nilai = inputUser.value.trim();
  if (nilai) {
    render(nilai);
    inputUser.value = "";
    console.log(data);
  } else {
    alert("Ga boleh kosong 😁");
  }
});

RemoveAll.addEventListener("click", () => {
  data = [];
  List.innerHTML = "";
});