export function feedbackQuestion(val: number) {
  const q = [
    "Bagaimana pelayanan yang diterima secara keseluruhan?",
    "Bagaimana menurut Saudara tentang kemudahan prosedur pelayanan di unit ini",
    "Bagaimana menurut Saudara tentang kesesuaian persyaratan pelayanan dengan jenis pelayanan",
    "Bagaimana pendapat Saudara tentang penjelasan petugas yang melayani",
    "Bagaimana pendapat Saudara tentang kedisiplinan petugas dalam melayani",
    "Bagaimana pendapat Saudara tentang kecepatan petugas yang melayani",
    "Bagaimana pendapat Saudara tentang kesopanan dan keramahan petugas dalam memberikan pelayanan",
    "Bagaimana pendapat Saudara tentang tanggung jawab petugas dalam memberikan pelayanan",
    "Bagaimana pendapat Saudara tentang keadilan petugas dalam memberikan pelayanan",
    "Bagaimana menurut Saudara tentang dukungan infrastruktur penunjang pelayanan yang ada",
    "Bagaimana menurut Saudara tentang keamanan dan kenyamanan berada di lingkungan unit pelayanan",
  ];

  return q[val];
}

export function overalFace(val: number) {
  const FirstTitle = [
    "Tidak Puas",
    "Tidak Mudah",
    "Tidak Sesuai",
    "Tidak Jelas",
    "Tidak Disiplin",
    "Tidak Cepat",
    "Tidak Sopan dan Tidak Ramah",
    "Tidak Bertanggung Jawab",
    "Tidak Adil",
    "Tidak Mendukung",
    "Tidak Aman dan Tidak Nyaman",
  ];
  const SecondTitle = [
    "Biasa Aja",
    "Cukup Mudah",
    "Cukup Sesuai",
    "Cukup Jelas",
    "Cukup Disiplin",
    "Cukup Cepat",
    "Cukup Sopan dan Cukup Ramah",
    "Cukup Bertanggung Jawab",
    "Cukup Adil",
    "Cukup Mendukung",
    "Cukup Aman dan Cukup Nyaman",
  ];
  const ThirdTitle = [
    "Puas",
    "Mudah",
    "Sesuai",
    "Jelas",
    "Disiplin",
    "Cepat",
    "Sopan dan Ramah",
    "Bertanggung Jawab",
    "Adil",
    "Mendukung",
    "Aman dan Nyaman",
  ];
  const FourthTitle = [
    "Sangat Puas",
    "Sangat Mudah",
    "Sangat Sesuai",
    "Sangat Jelas",
    "Sangat Disiplin",
    "Sangat Cepat",
    "Sangat Sopan dan Ramah",
    "Sangat Bertanggung Jawab",
    "Sangat Adil",
    "Sangat Mendukung",
    "Sangat Aman dan Nyaman",
  ];

  return [
    {
      title: FirstTitle[val],
      value: 1,
      img: "/feedback/1.png",
    },
    {
      title: SecondTitle[val],
      value: 2,
      img: "/feedback/2.png",
    },
    {
      title: ThirdTitle[val],
      value: 3,
      img: "/feedback/3.png",
    },
    {
      title: FourthTitle[val],
      value: 4,
      img: "/feedback/4.png",
    },
  ];
}
