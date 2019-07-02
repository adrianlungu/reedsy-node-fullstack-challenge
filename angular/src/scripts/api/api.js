import randomWords from 'random-words';
import axios from 'axios';

let books = [];

function init() {

    return new Promise((resolve) => {

        if (books.length > 0) {
            resolve();
            return;
        }

        const stores = [{
            name: 'Amazon',
            url: 'http://www.amazon.com',
        }, {
            name: 'iBooks',
            url: 'http://www.ibooks.com',
        }, {
            name: 'Play Store',
            url: 'http://www.google.com',
        }];

        let j = 25;

        for (let i = 0; i < 25; i++) {

            const book = {
                title: randomWords({min: 2, max: 5, join: ' '}),
                author: randomWords({min: 2, max: 3, join: ' '}),
                description: randomWords({min: 50, max: 150, join: ' '}),
                published: Math.floor(Math.random() * 210) + 1800, // Generate random number between 1800 and 2010,
                rating: Math.floor(Math.random() * 50) / 10 + 5, // Generate random number between 5 and 10
                stores: getRandomObjectsFromArray(stores, Math.floor(Math.random() * 3) + 1),
                image: 'https://picsum.photos/64/96/#' + i,
            };

            books.push(book);

            j--;

            if (j === 0) {
                resolve();
            }

        }

    });

}

function getRandomObjectsFromArray(sourceArray, neededElements) {
    const result = [];
    sourceArray = [...sourceArray];
    for (let i = 0; i < neededElements; i++) {
        let index = Math.floor(Math.random() * sourceArray.length);
        result.push(sourceArray[index]);
        sourceArray.splice(index, 1);
    }
    return result;
}

function getBooks(page, size) {

    return new Promise((resolve) => {

        init().then(() => {

            const booksNo = books.length;

            if (booksNo < page * size + size) {
                return [];
            }

            if (page < 0) return [];

            // if (booksNo > page * size && booksNo < page * size + size) {
            //
            // }

            resolve({
                size: books.length,
                data: books.slice(page * size, page * size + size)
            });

        })

    })

}

export {
    getBooks,
}
