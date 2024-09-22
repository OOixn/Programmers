function solution(s) {
    const sets = s.match(/\{[\d,]+\}/g).map(set => set.replace(/[{}]/g, '').split(',').map(Number));
    
    sets.sort((a, b) => a.length - b.length);
    
    const result = [];
    const seen = new Set();
    
    sets.forEach(set => {
        set.forEach(num => {
            if (!seen.has(num)) {
                seen.add(num);
                result.push(num);
            }
        });
    });
    
    return result;
}