import { Database as SQLiteDatabase } from 'sqlite3';
import { open, Database } from 'sqlite';

const dbPromise = open({
    filename: './database.sqlite',
    driver: SQLiteDatabase
});

export const getDb = async (): Promise<Database> => {
    return dbPromise;
};