import type { Product, Category } from "../types/type";


export const categories: Category[] = [
    { id: 1, name: "Elektronik" },
    { id: 2, name: "Giyim" },
    { id: 3, name: "Ev & Yaşam" },
    { id: 4, name: "Spor" },
    { id: 5, name: "Aksesuar" },
    { id: 6, name: "Çanta" }
];


export const products: Product[] = [
    {
        id: 1,
        name: "Studio Pro Kablosuz Kulaklık",
        description:
            "Güçlü bas ve berrak ses sunan kablosuz kulaklık. Gürültü engelleme özelliği ve yumuşak kulak pedleriyle uzun süre konforlu kullanım sağlar.",
        price: 2499,
        categoryId: 1,
        imageUrl: "https://placehold.co/600x600?text=Kulaklik",
        stock: 18
    },
    {
        id: 2,
        name: "Pulse Akıllı Saat",
        description:
            "Günlük hareketlerini ve antrenmanlarını takip eder. Renkli ekranı, adım sayar ve bildirim özellikleriyle günlük kullanım için uygundur.",
        price: 3299,
        categoryId: 1,
        imageUrl: "https://placehold.co/600x600?text=Akilli+Saat",
        stock: 12

    },
    {
        id: 3,
        name: "Nova Bluetooth Hoparlör",
        description:
            "Kompakt tasarımlı taşınabilir hoparlör. Bluetooth bağlantısı ve şarj edilebilir piliyle evde veya dışarıda müzik dinleyebilirsin.",
        price: 1499,
        categoryId: 1,
        imageUrl: "https://placehold.co/600x600?text=Hoparlor",
        stock: 25

    },
    {
        id: 4,
        name: "Essential Pamuklu Tişört",
        description:
            "Yumuşak pamuklu kumaştan üretilmiş günlük tişört. Rahat kesimi sayesinde tek başına veya katmanlı kombinlerde kullanılabilir.",
        price: 499,
        categoryId: 2,
        imageUrl: "https://placehold.co/600x600?text=Tisort",
        stock: 40

    },
    {
        id: 5,
        name: "Urban Kapüşonlu Sweatshirt",
        description:
            "Serin havalarda konfor sağlayan yumuşak dokulu sweatshirt. Ayarlanabilir kapüşonu ve ön cebiyle günlük kullanıma uygundur.",
        price: 1199,
        categoryId: 2,
        imageUrl: "https://placehold.co/600x600?text=Sweatshirt",
        stock: 16

    },
    {
        id: 6,
        name: "Minimal Masa Lambası",
        description:
            "Çalışma masası ve komodinler için sade tasarımlı masa lambası. Yumuşak ışığıyla okuma ve çalışma alanına sıcak bir görünüm katar.",
        price: 899,
        categoryId: 3,
        imageUrl: "https://placehold.co/600x600?text=Masa+Lambasi",
        stock: 9

    },
    {
        id: 7,
        name: "Seramik Kahve Fincanı Seti",
        description:
            "Günlük kahve keyfi için tasarlanmış iki fincan ve iki tabaktan oluşan seramik set. Sade görünümü farklı masa düzenlerine uyum sağlar.",
        price: 749,
        categoryId: 3,
        imageUrl: "https://placehold.co/600x600?text=Fincan+Seti",
        stock: 21

    },
    {
        id: 8,
        name: "Move Yoga Matı",
        description:
            "Yoga ve esneme egzersizleri için kaymaz yüzeyli mat. Hafif yapısı sayesinde kolayca taşınabilir ve egzersiz sonrasında sarılarak saklanabilir.",
        price: 699,
        categoryId: 4,
        imageUrl: "https://placehold.co/600x600?text=Yoga+Mati",
        stock: 14

    },
];