import { getDb } from '../lib/database';

const setupDatabase = async () => {
    const db = await getDb();

    await db.exec(`
        CREATE TABLE IF NOT EXISTS products (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL UNIQUE,
            description TEXT,
            price REAL CHECK(price > 0),
            quantity INTEGER CHECK(quantity >= 0),
            image TEXT
        );
    `);

    await db.exec(`
        CREATE TABLE IF NOT EXISTS suppliers (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL UNIQUE,
            contact TEXT,
            address TEXT
        );
    `);

    await db.exec(`
        CREATE TABLE IF NOT EXISTS orders (
            id TEXT PRIMARY KEY,
            date TEXT NOT NULL,
            supplierId TEXT,
            status TEXT CHECK(status IN ('Pendente', 'Concluído')),
            total REAL CHECK(total > 0),
            FOREIGN KEY (supplierId) REFERENCES suppliers (id)
        );
    `);

    await db.exec(`
        CREATE TABLE IF NOT EXISTS order_items (
            id TEXT PRIMARY KEY,
            orderId TEXT,
            productId TEXT,
            quantity INTEGER CHECK(quantity > 0),
            unitPrice REAL CHECK(unitPrice > 0),
            FOREIGN KEY (orderId) REFERENCES orders (id),
            FOREIGN KEY (productId) REFERENCES products (id)
        );
    `);

    await db.exec(`
        CREATE TABLE IF NOT EXISTS transactions (
            id TEXT PRIMARY KEY,
            date TEXT NOT NULL,
            type TEXT CHECK(type IN ('Entrada', 'Saída')),
            value REAL CHECK(value > 0),
            productId TEXT,
            orderId TEXT,
            FOREIGN KEY (productId) REFERENCES products (id),
            FOREIGN KEY (orderId) REFERENCES orders (id)
        );
    `);

    await db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL
        );
    `);
};

setupDatabase().catch((err) => console.error(err));