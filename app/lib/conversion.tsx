export function feedbackToRead(val: number | string) {
  switch (val) {
    case 1:
      return "Tidak Puas";
    case 2:
      return "Biasa Aja";
    case 3:
      return "Puas";
    case 4:
      return "Sangat Puas";
    default:
      return "Kode tidak ditemukan";
  }
}

export function dateStringToRead(d: string | number) {
  const date = new Date(d);
  const minute = date.getMinutes().toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const hour = date.getHours().toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const dayName = days[date.getDay()];
  const dayNumber = date.getDate();
  const month = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const monthName = month[date.getMonth()];
  const year = date.getFullYear();
  return `${dayName}, ${dayNumber} ${monthName} ${year} - ${hour}:${minute}`;
}
