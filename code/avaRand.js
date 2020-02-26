/*
    Avatar Randomizer
    (C) 2020 Copyright Max Black. All rights reserved.
*/

const avatar = document.getElementById('ava');

const photos = [
    "https://sun9-40.userapi.com/c858224/v858224186/e9d0a/P9EFLU-vs_U.jpg", //0
    "https://sun9-46.userapi.com/c855720/v855720295/11866f/IQmFioL-bV8.jpg", //1
    "https://sun9-4.userapi.com/c854028/v854028423/15d5c/S95zSaQXyWM.jpg" //2
];

let randNum = Math.floor(Math.random() * 3);

if (avatar) {
    switch (randNum) {
        case 0:
            avatar.style.backgroundImage = `url(${photos[0]})`;
            console.log('Рандом аватарка: ', randNum);
        break;

        case 1:
            avatar.style.backgroundImage = `url(${photos[1]})`;
            console.log('Рандом аватарка: ', randNum);
        break;

        case 2:
            avatar.style.backgroundImage = `url(${photos[2]})`;
            console.log('Рандом аватарка: ', randNum);
        break;
    }
}

else {
    console.log('Аватарку сменить нельзя! Что-то пошло не так :(');
}