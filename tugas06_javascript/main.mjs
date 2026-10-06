import { index, store, destroy } from "./controller.mjs";

const main = () => {
  // Nambahin 2 data baru
  store({ nama: 'Data 11', umur: 30, alamat: 'Jl. Data 11', email: 'data11@gmail.com' });
  store({ nama: 'Data 12', umur: 31, alamat: 'Jl. Data 12', email: 'data12@gmail.com' });

  // Tampilkan data menggunakan map()
  console.log("=== Data Setelah Ditambah ===");
  index();

  // Hapus data
  destroy();

  console.log("\n=== Data Setelah Dihapus ===");
  index();
};

main();