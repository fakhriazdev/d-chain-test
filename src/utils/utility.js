export function toTitleCase(str) {
    return str.toLowerCase()
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, (match) => match.toUpperCase())
        .trim();
}

export function formatIDRCurrency(number) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    }).format(number);
}

export function formatDate(timestamp) {
  const date = new Date(timestamp);

  // Mendapatkan nilai tanggal, bulan, dan tahun
  const day = date.getDate();
  const month = date.getMonth() + 1; // Ingat bahwa bulan dimulai dari 0, jadi tambahkan 1
  const year = date.getFullYear();

  // Mengonversi nilai-nilai tersebut ke dalam format "dd-mm-yyyy"
  const formattedDate = `${(day < 10 ? '0' : '') + day}-${(month < 10 ? '0' : '') + month}-${year}`;

  return formattedDate;
}
