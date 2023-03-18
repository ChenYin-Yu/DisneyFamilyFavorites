const accountInfo = require('../account_info');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': accountInfo.options.headers['X-RapidAPI-Key'],
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=disney', options)
	.then(response => response.json())
	.then(data => {
        const list = data.d;
        console.log(list);
        list.map((item) => {
            const name = item.l;
            const poster = item.i.imageUrl;
            const movie = `<li><img src="${poster}"><h2>${name}</h2></li>`
        })
    })
	.catch(err => console.error(err));