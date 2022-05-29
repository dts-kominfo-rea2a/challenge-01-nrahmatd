// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

/** Data Monica */
const nameMonica = "Monica"
const genderMonica = "Female"
const ageMonica = 17;
const emailMonica = "monica@dingdong.com";
const favoriteColorMonica = ["Yellow", "Pink", "White", "Purple"];
const isHavePetMonica = "Yes"
const educationMonica = [
    { name: "SD 01", city: "Jakarta", graduate: "2016" },
    { name: "SMP 02", city: "Jakarta", graduate: "2019" },
    { name: "SMA 03", city: "Tangerang" }
];
const favoriteRestoMonica = ["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"];  

const firstUser = {
    name: nameMonica,
    gender: genderMonica,
    age: ageMonica,
    email: emailMonica,
    favoriteColor: favoriteColorMonica,
    isHavePet: isHavePetMonica,
    education: educationMonica,
    favoriteResto: favoriteRestoMonica 
};

/** Data Wendy */
const nameWendy = "Wendy"
const genderWendy = "Male"
const ageWendy = 23;
const emailWendy = "wendy@dingdong.com";
const favoriteColorWendy = ["Blue", "Black", "Grey"];
const isHavePetWendy = "No"
const educationWendy = [
    { name: "SD 02", city: "Jakarta", graduate: "2010" },
    { name: "SMP 03", city: "Bogor", graduate: "2013" },
    { name: "SMA 01", city: "Surabaya", graduate: "2016" },
    { name: "Universitas Maju", city: "Tangerang" }
];
const favoriteRestoWendy = ["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"];   

const secondUser = {
    name: nameWendy,
    gender: genderWendy,
    age: ageWendy,
    email: emailWendy,
    favoriteColor: favoriteColorWendy,
    isHavePet: isHavePetWendy,
    education: educationWendy,
    favoriteResto: favoriteRestoWendy 
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};