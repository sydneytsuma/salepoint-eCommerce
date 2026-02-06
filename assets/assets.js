
import salepoint_logo from "./salepoint_logo.jpg"
import malheim from "./malheim.png"
import afrikima from "./afrikima.webp"
import upload_area from "./upload_area.svg"
import hero_model_img from "./hero_model_img.png"
import hero_product_img1 from "./hero_product_img1.png"
import hero_product_img2 from "./hero_product_img2.png"
import product_img1 from "./product_img1.png"
import product_img2 from "./product_img2.png"
import product_img3 from "./product_img3.png"
import product_img4 from "./product_img4.png"
import product_img5 from "./product_img5.png"
import product_img6 from "./product_img6.png"
import product_img7 from "./product_img7.png"
import product_img8 from "./product_img8.png"
import product_img9 from "./product_img9.png"
import product_img10 from "./product_img10.png"
import product_img11 from "./product_img11.png"
import product_img12 from "./product_img12.png"
import product_img13 from "./product_img13.png"
import product_img14 from "./product_img14.png"
import product_img15 from "./product_img15.png"
import product_img16 from "./product_img16.png"
import { ClockFadingIcon, HeadsetIcon, SendIcon } from "lucide-react";
import profile_pic1 from "./profile_pic1.jpg"
import profile_pic2 from "./profile_pic2.jpg"
import profile_pic3 from "./profile_pic3.jpg"

export const assets = {
    upload_area, hero_model_img,
    hero_product_img1, hero_product_img2, salepoint_logo, malheim,
    product_img1, product_img2, product_img3, product_img4, product_img5, product_img6,
    product_img7, product_img8, product_img9, product_img10, product_img11, product_img12,
    product_img13, product_img14, product_img15, product_img16
}

export const categories = ["Baskets", "Sculptures", "Mosaic", "Bowls", "Pots", "Bangles", "Bag", "Necklace"];

export const dummyRatingsData = [
    { 
        id: "prod_1", 
        rating: 4.8, 
        review: "Absolutely stunning craftsmanship. The detail on the Yole bangle is incredible. Delivery to Westlands was super fast!", 
        user: { name: 'Peter Omi', image: profile_pic1 }, 
        createdAt: 'Thu Jan 08 2026 14:51:25 GMT+0300 (East Africa Time)', 
        updatedAt: 'Thu Jan 08 2026 14:51:25 GMT+0300 (East Africa Time)', 
        product: { name: 'Yole', category:'Bangles', id:'prod_1'} 
    },
    { 
        id: "prod_2", 
        rating: 5.0, 
        review: "I bought the Barge bag for my wife and she loves it. Authentic leather and beautiful stitching. Asante sana Afrikima!", 
        user: { name: 'Kobi Mai', image: profile_pic2 }, 
        createdAt: 'Fri Jan 09 2026 10:20:15 GMT+0300 (East Africa Time)', 
        updatedAt: 'Fri Jan 09 2026 10:20:15 GMT+0300 (East Africa Time)', 
        product: { name: 'Barge', category:'Bag', id:'prod_2'} 
    },
    { 
        id: "prod_3", 
        rating: 4.5, 
        review: "The Beada necklace is a statement piece. It goes well with my kitenge outfits. A bit pricey but worth it.", 
        user: { name: 'Ela Ebe', image: profile_pic3 }, 
        createdAt: 'Sat Jan 10 2026 16:45:30 GMT+0300 (East Africa Time)', 
        updatedAt: 'Sat Jan 10 2026 16:45:30 GMT+0300 (East Africa Time)', 
        product: { name: 'Beada', category:'Necklace', id:'prod_3'} 
    },
    { 
        id: "prod_4", 
        rating: 4.9, 
        review: "Hedwu sculpture is now the centerpiece of my living room in Kilimani. The soapstone finish is smooth and cool to the touch.", 
        user: { name: 'Peter Omi', image: profile_pic1 }, 
        createdAt: 'Sun Jan 11 2026 09:12:10 GMT+0300 (East Africa Time)', 
        updatedAt: 'Sun Jan 11 2026 09:12:10 GMT+0300 (East Africa Time)', 
        product: { name: 'Hedwu', category:'Sculpture', id:'prod_4'} 
    },
    { 
        id: "prod_5", 
        rating: 4.2, 
        review: "Great quality Keat basket. Strong weave, perfect for shopping at the market. Packaging was slightly damaged but item was fine.", 
        user: { name: 'Kobi Mai', image: profile_pic2 }, 
        createdAt: 'Mon Jan 12 2026 13:30:00 GMT+0300 (East Africa Time)', 
        updatedAt: 'Mon Jan 12 2026 13:30:00 GMT+0300 (East Africa Time)', 
        product: { name: 'Keat', category:'Basket', id:'prod_5'} 
    }
    
]

export const dummyStoreData = {
    id: "store_1",
    userId: "user_1",
    name: "Afrikima",
    description: "At Afrikima, we bring the heart of Africa to your doorstep. From intricate hand-woven baskets to timeless sculptures, we curate the finest artisanal goods from across the continent, all available under one digital roof.",
    username: "afrikima",
    address: "2nd Floor, The Alchemist Plaza, Parklands Road, Westlands, Nairobi, Kenya",
    status: "approved",
    isActive: true,
    logo: afrikima,
    email: "info@afrikima.co.ke",
    contact: "+254 712 345 678",
    createdAt: 'Thu Jan 01 2026 09:04:16 GMT+0300 (East Africa Time)',
    updatedAt: 'Fri Jan 02 2026 09:04:44 GMT+0300 (East Africa Time)',
    user: {
        id: "user_31dOriXqC4TATvc0brIhlYbwwc5",
        name: "Afrikima",
        email: "afrikima@gmail.com",
        image: afrikima,
    }
}

export const productDummyData = [
    {
        id: "prod_1",
        name: "Yole",
        description: "A handcrafted brass bangle featuring intricate geometric patterns inspired by the Savannah. Polished to a high shine, this accessory adds a touch of bold elegance to any outfit.",
        mrp: 3500,
        price: 2800,
        images: [product_img1],
        category: "Bangles",
        storeId: "store_1",
        inStock: true,
        store: dummyStoreData,
        rating: [dummyRatingsData[0]],
        createdAt: 'Sat Jan 03 2026 14:10:00 GMT+0300 (East Africa Time)',
        updatedAt: 'Sat Jan 03 2026 14:10:00 GMT+0300 (East Africa Time)',
    },
    {
        id: "prod_2",
        name: "Barge",
        description: "A durable, hand-stitched leather bag made from locally sourced materials. Features ample storage and a rugged aesthetic perfect for both urban commute and safari adventures.",
        mrp: 8500,
        price: 6500,
        images: [hero_product_img1],
        storeId: "store_1",
        inStock: true,
        store: dummyStoreData,
        category: "Bag",
        rating: [dummyRatingsData[1]],
        createdAt: 'Sun Jan 04 2026 09:45:20 GMT+0300 (East Africa Time)',
        updatedAt: 'Sun Jan 04 2026 09:45:20 GMT+0300 (East Africa Time)',
    },
    {
        id: "prod_3",
        name: "Beada",
        description: "An exquisite Maasai-inspired beaded necklace. Vibrant multicolored beads are woven together to create a stunning collar piece that celebrates traditional craftsmanship.",
        mrp: 4500,
        price: 3200,
        images: [hero_product_img2],
        storeId: "store_1",
        inStock: true,
        store: dummyStoreData,
        category: "Necklace",
        rating: [dummyRatingsData[2]],
        createdAt: 'Mon Jan 05 2026 11:30:15 GMT+0300 (East Africa Time)',
        updatedAt: 'Mon Jan 05 2026 11:30:15 GMT+0300 (East Africa Time)',
    },
    {
        id: "prod_4",
        name: "Hedwu",
        description: "A smooth, hand-carved soapstone sculpture depicting abstract family bonds. Sourced from Kisii, this piece brings a sense of peace and unity to your home decor.",
        mrp: 5000,
        price: 3800,
        images: [product_img2],
        storeId: "store_1",
        inStock: true,
        store: dummyStoreData,
        category: "Sculpture",
        rating: [dummyRatingsData[3]],
        createdAt: 'Tue Jan 06 2026 16:20:45 GMT+0300 (East Africa Time)',
        updatedAt: 'Tue Jan 06 2026 16:20:45 GMT+0300 (East Africa Time)',
    },
    {
        id: "prod_5",
        name: "Keat",
        description: "A robust sisal basket woven using traditional techniques. Ideal for storage or as a planter, its natural earth tones blend seamlessly with any interior design.",
        mrp: 2200,
        price: 1500,
        images: [product_img3],
        storeId: "store_1",
        inStock: true,
        store: dummyStoreData,
        category: "Basket",
        rating: [dummyRatingsData[4]],
        createdAt: 'Wed Jan 07 2026 08:55:10 GMT+0300 (East Africa Time)',
        updatedAt: 'Wed Jan 07 2026 08:55:10 GMT+0300 (East Africa Time)',
    },
    {
        id: "prod_6",
        name: "Kulele",
        description: "A vibrant mosaic wall piece constructed from recycled glass and ceramic tiles. The intricate design tells a story of harvest and celebration.",
        mrp: 12000,
        price: 9500,
        images: [product_img4],
        storeId: "store_1",
        inStock: true,
        store: dummyStoreData,
        category: "Mosaic",
        rating: [dummyRatingsData[5]],
        createdAt: 'Thu Jan 08 2026 13:40:30 GMT+0300 (East Africa Time)',
        updatedAt: 'Thu Jan 08 2026 13:40:30 GMT+0300 (East Africa Time)',
    },
    {
        id: "prod_7",
        name: "La",
        description: "A medium-sized woven basket with a unique open-weave pattern. Lightweight yet durable, perfect for organizing household items with a rustic touch.",
        mrp: 1800,
        price: 1200,
        images: [product_img5],
        storeId: "store_1",
        inStock: true,
        store: dummyStoreData,
        category: "Basket",
        rating: [dummyRatingsData[6]],
        createdAt: 'Fri Jan 09 2026 10:15:25 GMT+0300 (East Africa Time)',
        updatedAt: 'Fri Jan 09 2026 10:15:25 GMT+0300 (East Africa Time)',
    },
    {
        id: "prod_8",
        name: "Lalo",
        description: "A contemporary mosaic coaster set. Each piece features distinct geometric shapes formed from colorful ceramic shards, adding art to your coffee table.",
        mrp: 3000,
        price: 2400,
        images: [product_img6],
        storeId: "store_1",
        inStock: true,
        store: dummyStoreData,
        category: "Mosaic",
        rating: [dummyRatingsData[7]],
        createdAt: 'Sat Jan 10 2026 15:50:05 GMT+0300 (East Africa Time)',
        updatedAt: 'Sat Jan 10 2026 15:50:05 GMT+0300 (East Africa Time)',
    },
    {
        id: "prod_9",
        name: "Marina",
        description: "A large, finely woven laundry basket. Made from sturdy seagrass, it features reinforced handles and a lid, combining functionality with natural beauty.",
        mrp: 4500,
        price: 3500,
        images: [product_img7],
        storeId: "store_1",
        inStock: true,
        store: dummyStoreData,
        category: "Basket",
        rating: [dummyRatingsData[8]],
        createdAt: 'Sun Jan 11 2026 12:05:40 GMT+0300 (East Africa Time)',
        updatedAt: 'Sun Jan 11 2026 12:05:40 GMT+0300 (East Africa Time)',
    },
    {
        id: "prod_10",
        name: "Monuko",
        description: "An ebony wood sculpture of a grazing antelope. The dark, polished wood highlights the fluid lines and graceful movement captured by the artist.",
        mrp: 7500,
        price: 5500,
        images: [product_img8],
        storeId: "store_1",
        inStock: true,
        store: dummyStoreData,
        category: "Sculpture",
        rating: [dummyRatingsData[9]],
        createdAt: 'Mon Jan 12 2026 14:35:15 GMT+0300 (East Africa Time)',
        updatedAt: 'Mon Jan 12 2026 14:35:15 GMT+0300 (East Africa Time)',
    },
    {
        id: "prod_11",
        name: "Balea",
        description: "A set of nesting baskets in vibrant sunset colors. Perfect for organizing knick-knacks or serving dry fruits, bringing warmth to any room.",
        mrp: 2800,
        price: 2000,
        images: [product_img9],
        storeId: "store_2",
        inStock: true,
        store: dummyStoreData,
        category: "Basket",
        rating: [dummyRatingsData[10]],
        createdAt: 'Tue Jan 13 2026 09:25:50 GMT+0300 (East Africa Time)',
        updatedAt: 'Tue Jan 13 2026 09:25:50 GMT+0300 (East Africa Time)',
    },
    {
        id: "prod_12",
        name: "Mule",
        description: "A decorative mosaic mirror frame. The surround is inlaid with turquoise and amber glass pieces that catch the light beautifully.",
        mrp: 6000,
        price: 4800,
        images: [product_img10],
        storeId: "store_2",
        inStock: true,
        store: dummyStoreData,
        category: "Mosaic",
        rating: [dummyRatingsData[11]],
        createdAt: 'Wed Jan 14 2026 17:10:35 GMT+0300 (East Africa Time)',
        updatedAt: 'Wed Jan 14 2026 17:10:35 GMT+0300 (East Africa Time)',
    },
    {
        id: "prod_13",
        name: "Same",
        description: "A hand-carved wooden bowl treated with food-safe oil. Ideal for serving salads or fruits, showcasing the natural grain of the olive wood.",
        mrp: 2500,
        price: 1800,
        images: [product_img11],
        storeId: "store_2",
        inStock: true,
        store: dummyStoreData,
        category: "Bowl",
        rating: [dummyRatingsData[12]],
        createdAt: 'Thu Jan 15 2026 11:45:10 GMT+0300 (East Africa Time)',
        updatedAt: 'Thu Jan 15 2026 11:45:10 GMT+0300 (East Africa Time)',
    },
    {
        id: "prod_14",
        name: "Poiwo",
        description: "Traditional terracotta clay cooking pots. Excellent for slow cooking stews, retaining heat and moisture to enhance the flavor of your dishes.",
        mrp: 3200,
        price: 2600,
        images: [product_img12],
        storeId: "store_1",
        inStock: true,
        store: dummyStoreData,
        category: "Pots",
        rating: [dummyRatingsData[13]],
        createdAt: 'Fri Jan 16 2026 16:30:20 GMT+0300 (East Africa Time)',
        updatedAt: 'Fri Jan 16 2026 16:30:20 GMT+0300 (East Africa Time)',
    },
    {
        id: "prod_15",
        name: "Wiro",
        description: "An abstract mosaic tabletop centerpiece. A fusion of modern art and traditional materials, perfect for the contemporary African home.",
        mrp: 5500,
        price: 4200,
        images: [product_img13],
        storeId: "store_1",
        inStock: true,
        store: dummyStoreData,
        category: "Mosaic",
        rating: [dummyRatingsData[14]],
        createdAt: 'Sat Jan 17 2026 08:40:55 GMT+0300 (East Africa Time)',
        updatedAt: 'Sat Jan 17 2026 08:40:55 GMT+0300 (East Africa Time)',
    },
    {
        id: "prod_16",
        name: "Dia",
        description: "A shallow decorative bowl adorned with intricate beadwork on the rim. A stunning piece for holding keys or purely as display.",
        mrp: 2100,
        price: 1600,
        images: [product_img14],
        storeId: "store_2",
        inStock: true,
        store: dummyStoreData,
        category: "Bowl",
        rating: [dummyRatingsData[15]],
        createdAt: 'Sun Jan 18 2026 13:15:25 GMT+0300 (East Africa Time)',
        updatedAt: 'Sun Jan 18 2026 13:15:25 GMT+0300 (East Africa Time)',
    },
    {
        id: "prod_17",
        name: "Sami",
        description: "A set of three copper and brass bangles. Hammered finish gives them a rustic texture that catches the light with every movement.",
        mrp: 1500,
        price: 1100,
        images: [product_img15],
        storeId: "store_2",
        inStock: true,
        store: dummyStoreData,
        category: "Bangles",
        rating: [dummyRatingsData[16]],
        createdAt: 'Mon Jan 19 2026 10:55:40 GMT+0300 (East Africa Time)',
        updatedAt: 'Mon Jan 19 2026 10:55:40 GMT+0300 (East Africa Time)',
    },
    {
        id: "prod_18",
        name: "Nute",
        description: "A large mosaic vase featuring floral motifs. Hand-assembled with care, this waterproof vessel is a masterpiece of local craftsmanship.",
        mrp: 9000,
        price: 7500,
        images: [product_img16],
        storeId: "store_2",
        inStock: true,
        store: dummyStoreData,
        category: "Mosaic",
        rating: [dummyRatingsData[17]],
        createdAt: 'Tue Jan 20 2026 15:05:15 GMT+0300 (East Africa Time)',
        updatedAt: 'Tue Jan 20 2026 15:05:15 GMT+0300 (East Africa Time)',
    }
];

export const ourSpecsData = [
    { title: "Nationwide Delivery", description: "From Nairobi to Mombasa, get reliable delivery via G4S or Wells Fargo to your doorstep.", icon: SendIcon, accent: '#05DF72' },
    { title: "7 Days Easy Return", description: "Change your mind? No shida. Return any item within 7 days hassle-free.", icon: ClockFadingIcon, accent: '#FF8904' },
    { title: "24/7 Customer Support", description: "Tuko hapa for you. Get expert help with our customer support anytime.", icon: HeadsetIcon, accent: '#A684FF' }
]

export const addressDummyData = {
    id: "addr_1",
    userId: "user_1",
    name: "Pat Umo",
    email: "patumo@example.com",
    street: "P.O Box 4321, Moi Avenue",
    city: "Nairobi",
    state: "Nairobi County",
    zip: "00100",
    country: "Kenya",
    phone: "+254 700 123 456",
    createdAt: 'Sat Jan 03 2026 14:15:25 GMT+0300 (East Africa Time)',
}

export const couponDummyData = [
    { code: "KARIBU20", description: "20% Off for New Users", discount: 20, forNewUser: true, forMember: false, isPublic: false, expiresAt: "2026-12-31T00:00:00.000Z", createdAt: "2026-01-02T08:35:31.183Z" },
    { code: "KARIBU10", description: "10% Off for New Users", discount: 10, forNewUser: true, forMember: false, isPublic: false, expiresAt: "2026-12-31T00:00:00.000Z", createdAt: "2026-01-02T08:35:50.653Z" },
    { code: "POA20", description: "20% Off for All Users", discount: 20, forNewUser: false, forMember: false, isPublic: false, expiresAt: "2026-12-31T00:00:00.000Z", createdAt: "2026-01-05T08:42:00.811Z" },
    { code: "POA10", description: "10% Off for All Users", discount: 10, forNewUser: false, forMember: false, isPublic: false, expiresAt: "2026-12-31T00:00:00.000Z", createdAt: "2026-01-05T08:42:21.279Z" },
    { code: "MEMBER10", description: "10% Off for Members", discount: 10, forNewUser: false, forMember: true, isPublic: false, expiresAt: "2027-03-06T00:00:00.000Z", createdAt: "2026-01-10T11:38:20.194Z" }
]

export const dummyUserData = {
    id: "user_31dQbH27HVtovbs13X2cmqefddM",
    name: "Sydney Tsuma",
    email: "sydneytsuma1@gmail.com",
    image: salepoint_logo,
    cart: {}
}

export const orderDummyData = [
    {
        id: "cmemm75h5001jtat89016h1p3",
        total: 6000.0,
        status: "DELIVERED",
        userId: "user_31dQbH27HVtovbs13X2cmqefddM",
        storeId: "store_1",
        addressId: "cmemm6g95001ftat8omv9b883",
        isPaid: false,
        paymentMethod: "M-Pesa",
        createdAt: 'Sun Jan 18 2026 09:15:03 GMT+0300 (East Africa Time)',
        updatedAt: 'Sun Jan 18 2026 09:15:50 GMT+0300 (East Africa Time)',
        isCouponUsed: true,
        coupon: couponDummyData[2],
        orderItems: [
            { orderId: "cmemm75h5001jtat89016h1p3", productId: "prod_1", quantity: 1, price: 2800, product: productDummyData[0], },
            { orderId: "cmemm75h5001jtat89016h1p3", productId: "prod_3", quantity: 1, price: 3200, product: productDummyData[2], }
        ],
        address: addressDummyData,
        
    },
    {
        id: "cmemm6jv7001htat8vmm3gxaf",
        total: 11000.0,
        status: "DELIVERED",
        userId: "user_31dQbH27HVtovbs13X2cmqefddM",
        storeId: "store_1",
        addressId: "cmemm6g95001ftat8omv9b883",
        isPaid: false,
        paymentMethod: "Paypal",
        createdAt: 'Tue Jan 20 2026 09:14:35 GMT+0300 (East Africa Time)',
        updatedAt: 'Tue Jan 20 2026 09:15:52 GMT+0300 (East Africa Time)',
        isCouponUsed: true,
        coupon: couponDummyData[0],
        orderItems: [
            { orderId: "cmemm6jv7001htat8vmm3gxaf", productId: "prod_6", quantity: 1, price: 9500, product: productDummyData[5], },
            { orderId: "cmemm6jv7001htat8vmm3gxaf", productId: "prod_5", quantity: 1, price: 1500, product: productDummyData[4], }
        ],
        address: addressDummyData,
        user: dummyUserData
    }
]

export const storesDummyData = [
    {
        id: "store_1",
        userId: "user_31dOriXqC4TATvc0brIhlYbwwc5",
        name: "Malheim",
        description: "Malheim is an Artisan marketplace to experience native culture through shopping",
        username: "malheim",
        address: "123 Ngong Road, Nairobi, Kenya",
        status: "approved",
        isActive: true,
        logo: malheim,
        email: "sydneytsuma1@gmail.com",
        contact: "+254 722 000 000",
        createdAt: 'Thu Jan 01 2026 08:22:16 GMT+0300 (East Africa Time)',
        updatedAt: 'Thu Jan 01 2026 08:22:44 GMT+0300 (East Africa Time)',
        user: dummyUserData,
    },
    {
        id: "store_2",
        userId: "user_31dQbH27HVtovbs13X2cmqefddM",
        name: "afrikima",
        description: "At Afrikima, we bring the heart of Africa to your doorstep. From intricate hand-woven baskets to timeless sculptures, we curate the finest artisanal goods from across the continent, all available under one digital roof.",
        username: "afrikima",
        address: "2nd Floor, The Alchemist Plaza, Parklands Road, Westlands, Nairobi, Kenya",
        status: "approved",
        isActive: true,
        logo: afrikima,
        email: "afrikimadesigns@hotmail.com",
        contact: "+254 712 345 678",
        createdAt: 'Sun Jan 04 2026 08:34:15 GMT+0300 (East Africa Time)',
        updatedAt: 'Sun Jan 04 2026 08:34:47 GMT+0300 (East Africa Time)',
        user: dummyUserData,
    }
]

export const dummyAdminDashboardData = {
    "orders": 145,
    "stores": 5,
    "products": 32,
    "revenue": "250450.00",
    "allOrders": [
        { "createdAt": 'Mon Jan 12 2026 08:46:58 GMT+0300 (East Africa Time)', "total": 14500.6 },
        { "createdAt": 'Tue Jan 13 2026 08:46:21 GMT+0300 (East Africa Time)', "total": 9700.2 },
        { "createdAt": 'Wed Jan 14 2026 08:45:59 GMT+0300 (East Africa Time)', "total": 5400.4 },
        { "createdAt": 'Thu Jan 15 2026 09:15:03 GMT+0300 (East Africa Time)', "total": 21400.2 },
        { "createdAt": 'Fri Jan 16 2026 09:14:35 GMT+0300 (East Africa Time)', "total": 42100.6 },
        { "createdAt": 'Sat Jan 17 2026 11:44:29 GMT+0300 (East Africa Time)', "total": 2600.1 },
        { "createdAt": 'Sun Jan 18 2026 09:15:03 GMT+0300 (East Africa Time)', "total": 21400.2 },
        { "createdAt": 'Mon Jan 19 2026 09:14:35 GMT+0300 (East Africa Time)', "total": 42100.6 },
        { "createdAt": 'Tue Jan 20 2026 11:44:29 GMT+0300 (East Africa Time)', "total": 2600.1 },
        { "createdAt": 'Wed Jan 21 2026 11:56:29 GMT+0300 (East Africa Time)', "total": 3600.1 },
        { "createdAt": 'Thu Jan 22 2026 11:44:29 GMT+0300 (East Africa Time)', "total": 2600.1 },
        { "createdAt": 'Fri Jan 23 2026 09:15:03 GMT+0300 (East Africa Time)', "total": 21400.2 },
        { "createdAt": 'Sat Jan 24 2026 09:14:35 GMT+0300 (East Africa Time)', "total": 42100.6 },
        { "createdAt": 'Sun Jan 25 2026 11:44:29 GMT+0300 (East Africa Time)', "total": 2600.1 },
        { "createdAt": 'Mon Jan 26 2026 11:56:29 GMT+0300 (East Africa Time)', "total": 3600.1 },
        { "createdAt": 'Tue Jan 27 2026 11:30:29 GMT+0300 (East Africa Time)', "total": 11000.1 }
    ]
}

export const dummyStoreDashboardData = {
    "ratings": dummyRatingsData,
    "totalOrders": 124,
    "totalEarnings": 850400,
    "totalProducts": 18
}