import lightSword from "./assets/lightSword.jpg";
import lighStaff from "./assets/lightStaff.jpg";
import lightArrow from "./assets/lightArrow.jpg";
import lightArmor from "./assets/lightArmor.jpg";
import lightKey from "./assets/lightKey.jpg";
import darkSword from "./assets/darkSword.jpg";
import darkStaff from "./assets/darkStaff.jpg";
import darkArrow from "./assets/darkArrow.jpg";
import darkTunic from "./assets/darkTunic.jpg";
import darkKey from "./assets/darkKey.jpg";
import cat from "./assets/cat.jpg";
import octopus from "./assets/octopus.jpg";
import sun from "./assets/sun.jpg";
import moon from "./assets/moon.jpg";

const products = [
  {
    img: lightSword,
    id: "1",
    name: "Sword",
    category: "equipment",
    type: "light",
    typeImg: sun,
    description: "A ray of sun forged in iron.",
    basicAttack: "15 ATK",
    vitality: "+25 vitality",
    defense: "",
    fortune: "",
    price: "100",
    stock: "2",
  },
  {
    img: lighStaff,
    id: "2",
    name: "Staff",
    category: "equipment",
    type: "light",
    typeImg: sun,
    description: "The arm of a tree contained the light.",
    basicAttack: "20 ATK",
    vitality: "+30 vitality",
    defense: "",
    fortune: "",
    price: "110",
    stock: "4",
  },
  {
    img: lightArrow,
    id: "3",
    name: "Arrow",
    category: "equipment",
    type: "light",
    typeImg: sun,
    description: "They prayed for a flash of precision.",
    basicAttack: "15 ATK",
    vitality: "+10 vitality",
    defense: "",
    fortune: "",
    price: "90",
    stock: "4",
  },
  {
    img: lightArmor,
    id: "4",
    name: "Armor",
    category: "equipment",
    type: "light",
    typeImg: sun,
    description: "The guardian of shine",
    basicAttack: "",
    vitality: "+10 vitality",
    defense: "30 DEF",
    fortune: "",
    price: "120",
    stock: "6",
  },
  {
    img: darkSword,
    id: "5",
    name: "Sword",
    category: "equipment",
    type: "dark",
    typeImg: moon,
    description: "The edge of the void incarnated",
    basicAttack: "20 ATK",
    vitality: "",
    defense: "",
    fortune: "+25 fortune",
    price: "100",
    stock: "1",
  },
  {
    img: darkStaff,
    id: "6",
    name: "Staff",
    category: "equipment",
    type: "dark",
    typeImg: moon,
    description: "Incandescent pillar of darkness",
    basicAttack: "20 ATK",
    vitality: "",
    defense: "",
    fortune: "+35 fortune",
    price: "120",
    stock: "1",
  },
  {
    img: darkArrow,
    id: "7",
    name: "Arrow",
    category: "equipment",
    type: "dark",
    typeImg: moon,
    description: "Tightening the rope of shadows.",
    basicAttack: "15 ATK",
    vitality: "",
    defense: "",
    fortune: "+25 fortune",
    price: "95",
    stock: "1",
  },
  {
    img: darkTunic,
    id: "8",
    name: "Tunic",
    category: "equipment",
    type: "dark",
    typeImg: moon,
    description: "The cloak of the starry night.",
    basicAttack: "",
    vitality: "",
    defense: "35 DEF",
    fortune: "+35 fortune",
    price: "130",
    stock: "1",
  },
  {
    img: lightKey,
    id: "9",
    name: "Key",
    category: "object",
    type: "light",
    typeImg: sun,
    description: "With this key you can open chests of light.",
    basicAttack: "",
    vitality: "",
    defense: "",
    fortune: "",
    price: "20",
    stock: "3",
  },
  {
    img: darkKey,
    id: "10",
    name: "Key",
    category: "object",
    type: "dark",
    typeImg: moon,
    description: "With this key you can open chests of light.",
    basicAttack: "",
    vitality: "",
    defense: "",
    fortune: "",
    price: "20",
    stock: "3",
  },
  {
    img: cat,
    id: "11",
    name: "Cat",
    category: "pet",
    type: "light",
    typeImg: sun,
    description: "With this key you can open chests of light.",
    basicAttack: "20",
    vitality: "+50",
    defense: "",
    fortune: "",
    price: "200",
    stock: "1",
  },
  {
    img: octopus,
    id: "12",
    name: "Octopus",
    category: "pet",
    type: "dark",
    typeImg: moon,
    description: "With this key you can open chests of light.",
    basicAttack: "20",
    vitality: "",
    defense: "",
    fortune: "+50",
    price: "230",
    stock: "1",
  },
];
export const getProducts = (getProducts) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductsById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};

export function getProductsData(idURL) {
  return new Promise((resolve, reject) => {
    const productRequested = products.find(
      (item) => item.id === parseInt(idURL)
    );
    setTimeout(() => {
      resolve(productRequested);
    }, 2000);
  });
}

export const getProductsByCategory = (productCategory) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === productCategory));
    }, 500);
  });
};

export function getCategoryData(categoryURL) {
  return new Promise((resolve, reject) => {
    const categoryRequested = products.find(
      (item) => item.category === parseInt(categoryURL)
    );
    setTimeout(() => {
      resolve(categoryRequested);
    }, 2000);
  });
}
