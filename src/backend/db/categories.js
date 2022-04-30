import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Technology",
    categoryImage: "https://imageio.forbes.com/specials-images/imageserve/5ef3f7eec4f2390006f0c356/GUI--Graphical-User-Interface--concept-/960x0.jpg?fit=bounds&format=jpg&width=960"
    ,
  },
  {
    _id: uuid(),
    categoryName: "Startup",
    categoryImage: "https://evolvers.co.in/wp-content/uploads/2020/05/How-to-Launch-a-New-Brand-in-the-Market-7-Tips-for-a-New-startup.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Finance",
    categoryImage: "https://www.financialexpress.com/wp-content/uploads/2021/07/6-4.jpg",
  }
];
