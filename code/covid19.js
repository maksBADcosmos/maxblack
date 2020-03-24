/*
    COVID-19 Monitoring
    by Max Black.
*/
async function getData(url = '') {
    const response = await fetch(url);
    return await response.json();
}

/*
    Main section
*/
getData('https://coronavirus-19-api.herokuapp.com/all')
    .then((data) => {
        if (data) {
            if (document.getElementById('covid-infected') && document.getElementById('covid-recovered') && document.getElementById('covid-deaths')) {
                document.getElementById('covid-infected').innerText = numForm(data.cases);
                document.getElementById('covid-recovered').innerText = numForm(data.recovered);
                document.getElementById('covid-deaths').innerText = numForm(data.deaths);
            }

            else {
                console.log('Elements not found!');
            }
        }

        else {
            console.log('Unable to get data!');
        }
    });

function showCont(cont = '') {
    switch (cont) {
        case 'phone':
            Swal.fire({
                title: 'Единая горячая линия',
                html:
                    'Телефон: <b><a href="tel:88002000112">8‑800‑2000‑112</a></b>',
                showCloseButton: true,
                showConfirmButton: false
            });
        break;

        case 'news':
            window.open('https://yandex.ru/news/rubric/koronavirus', '_blank');
        break;

        case 'recom':
            Swal.fire({
                title: 'Рекомендации',
                html:
                    'Пожалуйста, прислушайтесь к рекомендациями — это важно!<br><br>' +
                    '<b>• Чихайте и кашляйте в сгиб локтя или салфетку</b><br>' +
                    '<b>• Мойте руки чаще</b><br>' +
                    '<b>• Не прикасайтесь руками к лицу</b><br>' +
                    '<b>• Если есть возможность, избегайте общественные места</b><br>' +
                    '<b>• Ограничьте поездки</b><br>' +
                    '<b>• При обнаружении симптомов срочно обращайтесь за помощью</b>',
                showCloseButton: true,
                showConfirmButton: false
            });
        break;

        case 'sites':
            Swal.fire({
                title: 'Другие ресурсы',
                html:
                    '<a href="https://who.int" target="_blank" rel="noopener">Сайт Всемирной организации здравоохранения</a><br>' +
                    '<a href="https://www.rosminzdrav.ru/" target="_blank" rel="noopener">Сайт Минздрав России</a><br>' +
                    '<a href="https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6" target="_blank" rel="noopener">Мониторинг COVID-19</a>',
                showCloseButton: true,
                showConfirmButton: false
            });
        break;

        case 'covid19':
            Swal.fire({
                title: 'Что такое коронавирус?',
                text: 'Коронавирусы — это большое семейство вирусов, которые приводят к заболеваниям органов дыхания.' +
                    ' Чаще всего — без тяжёлых симптомов. Всего насчитывается около 40 видов коронавируса.' +
                    ' Пандемию вызвал SARS-CoV-2, который впервые был обнаружен в Китае в конце декабря.',
                showCloseButton: true,
                showConfirmButton: false
            });
        break;

        case 'symptoms':
            Swal.fire({
                title: 'Симптомы',
                html:
                    '<b>Стандартные:</b><br>' +
                    '• повышенная температура тела<br>' +
                    '• кашель<br>' +
                    '• одышка<br>' +
                    '• нарушение дыхания, ощущение сдавленности в грудной клетке<br><br>' +
                    '<b>Редкие симптомы:</b><br>' +
                    '• тошнота, рвота<br>' +
                    '• диарея<br>' +
                    '• кашель с кровью<br>' +
                    '• головная боль<br><br><br>' +
                    '<b>Если вы обнаружили у себя похожие симптомы — вызовите врача. ' +
                    'Это не значит, что у вас вирус, но будет полезным провериться.</b>',
                showCloseButton: true,
                showConfirmButton: false
            });
        break;
    }
}

function numForm(number, decimals, dec_point, thousands_sep) {
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ' ' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function(n, prec) {
            var k = Math.pow(10, prec);
            return '' + (Math.round(n * k) / k)
                .toFixed(prec);
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
        .split('.');

    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }

    if ((s[1] || '')
        .length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1)
            .join('0');
    }

    return s.join(dec);
}