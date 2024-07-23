function solution(keymap, targets) {

    const charToMinPress = {};
    
    keymap.forEach((key, index) => {
        for (let i = 0; i < key.length; i++) {
            const char = key[i];
            const pressCount = i + 1; 
            if (charToMinPress[char] === undefined) {
                charToMinPress[char] = pressCount;
            } else {
                charToMinPress[char] = Math.min(charToMinPress[char], pressCount);
            }
        }
    });

    const result = targets.map(target => {
        let totalPress = 0;
        for (let i = 0; i < target.length; i++) {
            const char = target[i];
            if (charToMinPress[char] === undefined) {
                return -1; 
            } else {
                totalPress += charToMinPress[char];
            }
        }
        return totalPress;
    });

    return result;
}