/*
    Avatar Randomizer
    (C) 2020 Copyright Max Black. All rights reserved.
*/

const avatar = document.getElementById('ava');

const photos = [
    "./photos/1.png", //0
    "./photos/2.png", //1
    "./photos/3.png" //2
];

let randNum = Math.floor(Math.random() * 3);

if (avatar) {
    switch (randNum) {
        case 0:
            avatar.src = photos[0];
            console.log('Рандом аватарка: ', randNum);
        break;

        case 1:
            avatar.src = photos[1];
            console.log('Рандом аватарка: ', randNum);
        break;

        case 2:
            avatar.src = photos[2];
            console.log('Рандом аватарка: ', randNum);
        break;
    }
}

else {
    console.log('Аватарку сменить нельзя! Что-то пошло не так :(');
}