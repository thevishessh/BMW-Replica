// src/data/cars.js

export const cars = [
    {
        id: "bmw-7-series",
        name: "BMW 7 Series",
        tagline: "The Pinnacle of Luxury",
        category: "Sedan",
        startingPrice: "$93,300",
        image: "https://source.unsplash.com/1600x900/?bmw,7series",
        gallery: [
            "https://source.unsplash.com/1200x800/?bmw,7series,front",
            "https://source.unsplash.com/1200x800/?bmw,7series,interior",
            "https://source.unsplash.com/1200x800/?bmw,7series,side",
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
        image: "https://source.unsplash.com/1600x900/?bmw,m4",
        gallery: [
            "https://source.unsplash.com/1200x800/?bmw,m4,front",
            "https://source.unsplash.com/1200x800/?bmw,m4,track",
            "https://source.unsplash.com/1200x800/?bmw,m4,rear",
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
        image: "https://source.unsplash.com/1600x900/?bmw,x5",
        gallery: [
            "https://source.unsplash.com/1200x800/?bmw,x5,front",
            "https://source.unsplash.com/1200x800/?bmw,x5,interior",
            "https://source.unsplash.com/1200x800/?bmw,x5,side",
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
        image: "https://source.unsplash.com/1600x900/?bmw,ix",
        gallery: [
            "https://source.unsplash.com/1200x800/?bmw,ix,front",
            "https://source.unsplash.com/1200x800/?bmw,ix,interior",
            "https://source.unsplash.com/1200x800/?bmw,ix,rear",
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
        image: "https://source.unsplash.com/1600x900/?bmw,7series",
        cta: "Discover",
        link: "/models/bmw-7-series",
    },
    {
        id: 2,
        title: "THE M4",
        subtitle: "Born on the Track",
        description: "Pure M Performance.",
        image: "https://source.unsplash.com/1600x900/?bmw,m4",
        cta: "Explore",
        link: "/models/bmw-m4",
    },
    {
        id: 3,
        title: "THE iX",
        subtitle: "Born Electric",
        description: "The future is electric.",
        image: "https://source.unsplash.com/1600x900/?bmw,ix",
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

