const sqlite3driver = require('sqlite3');
// const LoremIpsum = require('lorem-ipsum').LoremIpsum;
const SQLite3 = sqlite3driver.verbose();
// работаем с файлом базы
const db = new SQLite3.Database('./data/posts.db');

const query = (command, method = 'all') => {
    return new Promise((resolve, reject) => {
        db[method](command, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};

const createPostsIfEmpty = async () => {
    const existingPosts = await query('SELECT * FROM posts');

    if (existingPosts?.length === 0) {
        const lorem = new LoremIpsum();

        for (let i = 0; i < 1000; i += 1) {
            const tags = [...Array(3)].map(() => lorem.generateWords(1));
            await query(`INSERT INTO posts VALUES ("${new Date().toISOString()}", "${lorem.generateWords(10)}", "Ryan Glover", "${lorem.generateParagraphs(5)}", "${tags}")`, 'run');
        }
    }
};


db.serialize(async () => {
    await query("CREATE TABLE IF NOT EXISTS posts (date text, title text, author text, content text, tags text)", 'run');
    await createPostsIfEmpty();

    const existingPosts = await query('SELECT rowid as id, date, title, author, content, tags FROM posts');

    console.log(existingPosts);
});


