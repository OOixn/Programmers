function solution(cacheSize, cities) {
    let time = 0;
    let cache = [];

    cities.forEach(city => {
        city = city.toLowerCase();

        if (cache.includes(city)) {
            cache.splice(cache.indexOf(city), 1); 
            cache.push(city); 
            time += 1;
        } else {
            
            if (cache.length >= cacheSize) {
                cache.shift(); 
            }
            if (cacheSize > 0) {
                cache.push(city); 
            }
            time += 5;
        }
    });

    return time;
}

