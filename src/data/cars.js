// src/data/cars.js

import bmwX5Img from '../assets/image/bmw-x5.jpg';

export const cars = [
    {
        id: "bmw-7-series",
        name: "BMW 7 Series",
        tagline: "The Pinnacle of Luxury",
        category: "Sedan",
        startingPrice: "$93,300",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1600&h=900&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&h=800&fit=crop&q=80",
            "https://i.pinimg.com/1200x/20/cc/3b/20cc3b1b0ec4220d4d4e35e73de480c9.jpg",
            "https://i.pinimg.com/1200x/8b/3a/8a/8b3a8a322a56997c3a933c6a3d9c0826.jpg",
        ],
        specs: {
            engine: "4.4L V8 TwinPower Turbo",
            power: "536 hp",
            acceleration: "3.6s 0-60 mph",
            topSpeed: "155 mph",
            transmission: "8-Speed Automatic",
            drivetrain: "xDrive AWD",
        },
        features: [
            "Executive Lounge Seating",
            "BMW Theatre Screen",
            "Sky Lounge Panoramic Roof",
        ],
        description:
            "The BMW 7 Series represents the ultimate expression of luxury, innovation, and comfort.",
    },

    {
        id: "bmw-m4",
        name: "BMW M4 Competition",
        tagline: "Born on the Track",
        category: "Sedan",
        startingPrice: "$74,700",
        image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1600&h=900&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1200&h=800&fit=crop&q=80",
            "https://i.pinimg.com/1200x/9b/e5/73/9be573165be4e27513327f3b6374b178.jpg",
            "https://i.pinimg.com/1200x/2e/ce/7b/2ece7b46c38d2ce0df1fbd6993b8bb64.jpg",
        ],
        specs: {
            engine: "3.0L M TwinPower Turbo Inline-6",
            power: "503 hp",
            acceleration: "3.4s 0-60 mph",
            topSpeed: "180 mph",
            transmission: "8-Speed M Steptronic",
            drivetrain: "Rear-Wheel Drive",
        },
        features: [
            "M Carbon Bucket Seats",
            "Adaptive M Suspension",
            "M Drive Professional",
        ],
        description:
            "The BMW M4 Competition blends track performance with everyday usability.",
    },

    {
        id: "bmw-x5",
        name: "BMW X5",
        tagline: "The Boss",
        category: "SUV",
        startingPrice: "$63,800",
        image:  "https://i.pinimg.com/1200x/2d/2d/dc/2d2ddc17184c642c9c4ad80a661341f1.jpg",
        gallery: [
            "https://i.pinimg.com/1200x/b4/09/b9/b409b97f6ac6581d610bab31af05b1ca.jpg" ,
            "https://i.pinimg.com/1200x/14/6b/2f/146b2f73ba56c965fa19295309b78c73.jpg",
            "https://images.unsplash.com/photo-1653227158553-ddaa680cdd65?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

        ],
        specs: {
            engine: "3.0L TwinPower Turbo Inline-6",
            power: "335 hp",
            acceleration: "5.3s 0-60 mph",
            topSpeed: "149 mph",
            transmission: "8-Speed Automatic",
            drivetrain: "xDrive AWD",
        },
        features: [
            "Panoramic Glass Roof",
            "Harman Kardon Sound System",
            "Air Suspension",
        ],
        description:
            "The BMW X5 delivers versatility, luxury, and performance in a bold SUV design.",
    },

    {
        id: "bmw-ix",
        name: "BMW iX",
        tagline: "Born Electric",
        category: "Electric",
        startingPrice: "$87,100",
        image: "https://i.pinimg.com/1200x/52/8a/a2/528aa2e6d746c8e5d9c58781d26aa54d.jpg",
        gallery: [
            "https://i.pinimg.com/1200x/43/58/ad/4358add715b8365a64b32b6503a0233f.jpg",
            "https://i.pinimg.com/1200x/76/c7/b6/76c7b6ae3f6f00566935d0713bfe6148.jpg",
            "https://i.pinimg.com/1200x/c5/c7/59/c5c75909955a126a36ad0f169d543715.jpg",
        ],
        specs: {
            engine: "Dual Electric Motors",
            power: "516 hp",
            acceleration: "4.4s 0-60 mph",
            topSpeed: "130 mph",
            transmission: "Single-Speed",
            drivetrain: "xDrive AWD",
            range: "324 miles",
        },
        features: [
            "BMW Curved Display",
            "Shy Tech Interior",
            "Sustainable Materials",
        ],
        description:
            "The BMW iX represents the future of luxury electric mobility.",
    },
];

export const categories = ["All", "Sedan", "SUV", "Electric"];

export const heroSlides = [
    {
        id: 1,
        title: "THE 7",
        subtitle: "Luxury Redefined",
        description: "Experience BMW at its finest.",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1600&h=900&fit=crop&q=80",
        cta: "Discover",
        link: "/models/bmw-7-series",
    },
    {
        id: 2,
        title: "THE M4",
        subtitle: "Born on the Track",
        description: "Pure M Performance.",
        image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1600&h=900&fit=crop&q=80",
        cta: "Explore",
        link: "/models/bmw-m4",
    },
    {
        id: 3,
        title: "THE iX",
        subtitle: "Born Electric",
        description: "The future is electric.",
        image: "https://i.pinimg.com/1200x/52/8a/a2/528aa2e6d746c8e5d9c58781d26aa54d.jpg",
        cta: "Experience",
        link: "/models/bmw-ix",
    },
];

// helpers
export const getCarById = (id) => {
    return cars.find((car) => car.id === id);
};

export const getCarsByCategory = (category) => {
    if (category === "All") return cars;
    return cars.filter((car) => car.category === category);
};

