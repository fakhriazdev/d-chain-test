export function toTitleCase(str) {
    return str.toLowerCase()
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, (match) => match.toUpperCase())
        .trim();
}

export function formatIDRCurrency(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
}

export function formatDate(timestamp) {
  const date = new Date(timestamp);

  // Mendapatkan nilai tanggal, bulan, dan tahun
  const day = date.getDate();
  const month = date.getMonth() + 1; // Ingat bahwa bulan dimulai dari 0, jadi tambahkan 1
  const year = date.getFullYear();

  // Mengonversi nilai-nilai tersebut ke dalam format "dd-mm-yyyy"
  const formattedDate = `${(day < 10 ? "0" : "") + day}-${
    (month < 10 ? "0" : "") + month
  }-${year}`;

  return formattedDate;
}

export const decodeJWT = () => {
  const token = sessionStorage.getItem("token");
  if (!token) {
    return;
  }
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace("-", "+").replace("_", "/");
  return JSON.parse(window.atob(base64));
};

export const getFee = (dueDate, createdDate, amount) => {
  const today = new Date();
  const dueDateNew = new Date(dueDate);
  const createdDateNew = new Date(createdDate);

  // Menghitung selisih waktu dalam milidetik antara kedua tanggal
  const timeDueDate = dueDateNew.getTime() - today.getTime();
  const timeCreatedDate = createdDateNew.getTime() - today.getTime();

  
  // Menghitung jumlah hari dari selisih waktu
  const dueDateDif = Math.ceil(timeDueDate / (1000 * 3600 * 24));
  const createdDateDif = Math.ceil(timeCreatedDate / (1000 * 3600 * 24));
  
  const daysDif = dueDateDif - createdDateDif;
  const discount = 0.07;

  return amount * discount * (daysDif / 360);
};

export function toRoleAccess(str) {
    if (str === "ADMIN") {
        return toTitleCase(str);
    } else {
        let word = str.split("_");
        let result = "";
        for (let i = 0; i < word.length; i++) {
          result += word[i].charAt(0);
        }
        return result.toUpperCase();
    }
}


