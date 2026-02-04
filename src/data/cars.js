// src/data/cars.js

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
            "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1200&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200&h=800&fit=crop&q=80",
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
            "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&h=800&fit=crop&q=80",
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
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1600&h=900&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=1200&h=800&fit=crop&q=80",
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
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1600&h=900&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&h=800&fit=crop&q=80",
            "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&h=800&fit=crop&q=80",
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
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1600&h=900&fit=crop&q=80",
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

