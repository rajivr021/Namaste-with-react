const restaurantData = {
  data: [
    {
      id: "r1",
      name: "Pizza Palace",
      cuisine: ["Italian", "Pizza"],
      rating: 4.5,
      "deliveryTime": 20,
      image: "https://img.freepik.com/free-psd/top-view-delicious-pizza_23-2151868964.jpg?ga=GA1.1.840874081.1736870538&semt=ais_hybrid&w=740",
      menu: [
        {
          id: "m1",
          name: "Margherita Pizza",
          price: 199,
        },
        {
          id: "m2",
          name: "Garlic Bread",
          price: 99,
        },
      ],
    },
    {
      id: "r2",
      name: "Biryani Express",
      cuisine: ["Indian", "Biryani"],
      rating: 4.2,
      "deliveryTime": 20,
      image: "data:image/jpeg;base64,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",
      menu: [
        {
          id: "m3",
          name: "Chicken Biryani",
          price: 249,
        },
        {
          id: "m4",
          name: "Veg Biryani",
          price: 199,
        },
      ],
    },
    {
      id: "r3",
      name: "Sushi Zen",
      cuisine: ["Japanese"],
      rating: 4.8,
      "deliveryTime": 20,
      image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=300&auto=format&fit=crop",
      menu: [
        {
          id: "m5",
          name: "Salmon Sushi",
          price: 399,
        },
        {
          id: "m6",
          name: "Veg Maki Roll",
          price: 299,
        },
      ],
    },
    {
      id: "r4",
      name: "Burger Bonanza",
      cuisine: ["American", "Burgers"],
      rating: 4.0,
      "deliveryTime": 20,
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=300&auto=format&fit=crop",
      menu: [
        {
          id: "m7",
          name: "Cheeseburger",
          price: 159,
        },
        {
          id: "m8",
          name: "Fries",
          price: 89,
        },
      ],
    },
    {
      id: "r5",
      name: "Taco Time",
      cuisine: ["Mexican"],
      rating: 4.3,
      "deliveryTime": 20,
      image: "data:image/jpeg;base64,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",
      menu: [
        {
          id: "m9",
          name: "Beef Tacos",
          price: 199,
        },
        {
          id: "m10",
          name: "Veg Tacos",
          price: 149,
        },
      ],
    },
    {
      id: "r6",
      name: "Pasta House",
      cuisine: ["Italian", "Pasta"],
      rating: 4.4,
      "deliveryTime": 20,
      image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=300&auto=format&fit=crop",
      menu: [
        {
          id: "m11",
          name: "Penne Alfredo",
          price: 229,
        },
        {
          id: "m12",
          name: "Spaghetti Bolognese",
          price: 249,
        },
      ],
    },
    {
      id: "r7",
      name: "Curry Kingdom",
      cuisine: ["Indian", "Curry"],
      rating: 4.1,
      "deliveryTime": 20,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&auto=format&fit=crop",
      menu: [
        {
          id: "m13",
          name: "Butter Chicken",
          price: 269,
        },
        {
          id: "m14",
          name: "Paneer Tikka Masala",
          price: 239,
        },
      ],
    },
    {
      id: "r8",
      name: "Salad Stop",
      cuisine: ["Healthy", "Salads"],
      rating: 4.6,
      "deliveryTime": 20,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&auto=format&fit=crop",
      menu: [
        {
          id: "m15",
          name: "Caesar Salad",
          price: 179,
        },
        {
          id: "m16",
          name: "Greek Salad",
          price: 159,
        },
      ],
    },
    {
      id: "r9",
      name: "Ice Cream World",
      cuisine: ["Desserts"],
      rating: 4.9,
      "deliveryTime": 20,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&auto=format&fit=crop",
      menu: [
        {
          id: "m17",
          name: "Chocolate Sundae",
          price: 129,
        },
        {
          id: "m18",
          name: "Vanilla Scoop",
          price: 99,
        },
      ],
    },
    {
      id: "r10",
      name: "Wok This Way",
      cuisine: ["Chinese"],
      rating: 4.0,
      "deliveryTime": 20,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&auto=format&fit=crop",
      menu: [
        {
          id: "m19",
          name: "Veg Hakka Noodles",
          price: 189,
        },
        {
          id: "m20",
          name: "Chicken Fried Rice",
          price: 209,
        },
      ],
    },
    {
      id: "r11",
      name: "Wrap It Up",
      cuisine: ["Wraps"],
      rating: 3.8,
      "deliveryTime": 20,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&auto=format&fit=crop",
      menu: [
        {
          id: "m21",
          name: "Chicken Wrap",
          price: 159,
        },
        {
          id: "m22",
          name: "Paneer Wrap",
          price: 139,
        },
      ],
    },
    {
      id: "r12",
      name: "Grill Master",
      cuisine: ["BBQ"],
      rating: 4.0,
      "deliveryTime": 20,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&auto=format&fit=crop",
      menu: [
        {
          id: "m23",
          name: "Grilled Chicken",
          price: 299,
        },
        {
          id: "m24",
          name: "BBQ Ribs",
          price: 349,
        },
      ],
    },
    {
      id: "r13",
      name: "Donut Delight",
      cuisine: ["Desserts"],
      rating: 4.2,
      "deliveryTime": 20,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbWTKwXgKIXUK3RghEw1fs-qgBsWkikfWn3w&s",
      menu: [
        {
          id: "m25",
          name: "Chocolate Donut",
          price: 89,
        },
        {
          id: "m26",
          name: "Glazed Donut",
          price: 79,
        },
      ],
    },
    {
      id: "r14",
      name: "Smoothie Bar",
      cuisine: ["Beverages"],
      rating: 4.4,
      "deliveryTime": 20,
      image: "data:image/jpeg;base64,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",
      menu: [
        {
          id: "m27",
          name: "Berry Smoothie",
          price: 119,
        },
        {
          id: "m28",
          name: "Mango Smoothie",
          price: 109,
        },
      ],
    },
    {
      id: "r15",
      name: "Dosa Hub",
      cuisine: ["South Indian"],
      rating: 4.6,
      "deliveryTime": 20,
      image: "data:image/jpeg;base64,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",
      menu: [
        {
          id: "m29",
          name: "Masala Dosa",
          price: 139,
        },
        {
          id: "m30",
          name: "Plain Dosa",
          price: 119,
        },
      ],
    },
    {
      id: "r16",
      name: "Ramen Republic",
      cuisine: ["Japanese"],
      rating: 3.8,
      "deliveryTime": 20,
      image: "data:image/jpeg;base64,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",
      menu: [
        {
          id: "m31",
          name: "Chicken Ramen",
          price: 269,
        },
        {
          id: "m32",
          name: "Veg Ramen",
          price: 249,
        },
      ],
    },
    {
      id: "r17",
      name: "Choco Loco",
      cuisine: ["Desserts"],
      rating: 4.0,
      "deliveryTime": 20,
      image: "data:image/jpeg;base64,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",
      menu: [
        {
          id: "m33",
          name: "Chocolate Cake",
          price: 149,
        },
        {
          id: "m34",
          name: "Brownie",
          price: 129,
        },
      ],
    },
    {
      id: "r18",
      name: "Falafel Fiesta",
      cuisine: ["Mediterranean"],
      rating: 4.2,
      "deliveryTime": 20,
      image: "data:image/jpeg;base64,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",
      menu: [
        {
          id: "m35",
          name: "Falafel Wrap",
          price: 179,
        },
        {
          id: "m36",
          name: "Hummus Platter",
          price: 159,
        },
      ],
    },
    {
      id: "r19",
      name: "Crepe Corner",
      cuisine: ["French"],
      rating: 4.4,
      "deliveryTime": 20,
      image: "data:image/jpeg;base64,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",
      menu: [
        {
          id: "m37",
          name: "Nutella Crepe",
          price: 149,
        },
        {
          id: "m38",
          name: "Banana Crepe",
          price: 139,
        },
      ],
    },
    {
      id: "r20",
      name: "Kebab Kraze",
      cuisine: ["Middle Eastern"],
      rating: 4.6,
      "deliveryTime": 20,
      image: "data:image/jpeg;base64,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",
      menu: [
        {
          id: "m39",
          name: "Lamb Kebab",
          price: 299,
        },
        {
          id: "m40",
          name: "Chicken Seekh",
          price: 259,
        },
      ],
    },
    {
      id: "r21",
      name: "Momo Mania",
      cuisine: ["Tibetan"],
      rating: 3.8,
      "deliveryTime": 20,
      image: "data:image/jpeg;base64,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",
      menu: [
        {
          id: "m41",
          name: "Veg Momos",
          price: 119,
        },
        {
          id: "m42",
          name: "Chicken Momos",
          price: 149,
        },
      ],
    },
    {
      id: "r22",
      name: "Bagel Bros",
      cuisine: ["Bakery"],
      rating: 4.0,
      "deliveryTime": 20,
      image: "data:image/jpeg;base64,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",
      menu: [
        {
          id: "m43",
          name: "Cheese Bagel",
          price: 99,
        },
        {
          id: "m44",
          name: "Egg Bagel",
          price: 109,
        },
      ],
    },
    {
      id: "r23",
      name: "Thai Treats",
      cuisine: ["Thai"],
      rating: 4.2,
      "deliveryTime": 20,
      image: "data:image/jpeg;base64,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",
      menu: [
        {
          id: "m45",
          name: "Pad Thai",
          price: 229,
        },
        {
          id: "m46",
          name: "Green Curry",
          price: 249,
        },
      ],
    },
    {
      id: "r24",
      name: "Sizzler Station",
      cuisine: ["Sizzlers"],
      rating: 4.4,
      "deliveryTime": 20,
      image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=300&auto=format&fit=crop",
      menu: [
        {
          id: "m47",
          name: "Chicken Sizzler",
          price: 349,
        },
        {
          id: "m48",
          name: "Paneer Sizzler",
          price: 329,
        },
      ],
    },
    {
      id: "r25",
      name: "Noodle Nest",
      cuisine: ["Asian"],
      rating: 4.6,
      "deliveryTime": 20,
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300&auto=format&fit=crop",
      menu: [
        {
          id: "m49",
          name: "Chow Mein",
          price: 179,
        },
        {
          id: "m50",
          name: "Udon Noodles",
          price: 209,
        },
      ],
    },
    {
      id: "r26",
      name: "Hotdog Haven",
      cuisine: ["Fast Food"],
      rating: 3.8,
      "deliveryTime": 20,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&auto=format&fit=crop",
      menu: [
        {
          id: "m51",
          name: "Classic Hotdog",
          price: 149,
        },
        {
          id: "m52",
          name: "Spicy Hotdog",
          price: 159,
        },
      ],
    },
    {
      id: "r27",
      name: "Waffle World",
      cuisine: ["Desserts"],
      rating: 4.0,
      "deliveryTime": 20,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&auto=format&fit=crop",
      menu: [
        {
          id: "m53",
          name: "Chocolate Waffle",
          price: 139,
        },
        {
          id: "m54",
          name: "Strawberry Waffle",
          price: 149,
        },
      ],
    },
    {
      id: "r28",
      name: "Paneer Point",
      cuisine: ["Indian"],
      rating: 4.2,
      "deliveryTime": 20,
      image: "data:image/jpeg;base64,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",
      menu: [
        {
          id: "m55",
          name: "Paneer Butter Masala",
          price: 249,
        },
        {
          id: "m56",
          name: "Shahi Paneer",
          price: 259,
        },
      ],
    },
    {
      id: "r29",
      name: "The Deli",
      cuisine: ["Continental"],
      rating: 4.4,
      "deliveryTime": 20,
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=300&auto=format&fit=crop",
      menu: [
        {
          id: "m57",
          name: "Grilled Sandwich",
          price: 139,
        },
        {
          id: "m58",
          name: "Club Sandwich",
          price: 159,
        },
      ],
    },
    {
      id: "r30",
      name: "Juice Junction",
      cuisine: ["Beverages"],
      rating: 4.6,
      "deliveryTime": 20,
      image: "data:image/jpeg;base64,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",
      menu: [
        {
          id: "m59",
          name: "Orange Juice",
          price: 99,
        },
        {
          id: "m60",
          name: "Watermelon Juice",
          price: 89,
        },
      ],
    },
  ],
};

export default restaurantData;