/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function() {
    return [
        {
            id: 1,
            first: 'Tom',
            last: 'Curphey',
            age: 26,
            description: 'Is trying to learn programming',
            thumbnail: 'https://i.imgur.com/C15omPL.png'
        },
        {
            id: 2,
            first: 'Egg',
            last: 'Man',
            age: 58,
            description: 'I workout!',
            thumbnail: 'https://i.imgur.com/cX0rUbJ.png'
        }
    ];
}
