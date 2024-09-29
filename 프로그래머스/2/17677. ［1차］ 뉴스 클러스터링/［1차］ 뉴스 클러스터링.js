function solution(str1, str2) {
    // 다중집합을 생성하는 함수
    function makeMultiset(str) {
        let multiset = [];
        str = str.toLowerCase(); // 대소문자 구분 무시
        for (let i = 0; i < str.length - 1; i++) {
            let element = str.substring(i, i + 2);
            if (/^[a-z]{2}$/.test(element)) {
                multiset.push(element);
            }
        }
        return multiset;
    }

    // 다중집합 생성
    let multiset1 = makeMultiset(str1);
    let multiset2 = makeMultiset(str2);

    // 교집합과 합집합 계산
    let intersection = 0;
    let union = 0;

    let map1 = new Map();
    let map2 = new Map();

    for (let elem of multiset1) {
        map1.set(elem, (map1.get(elem) || 0) + 1);
    }

    for (let elem of multiset2) {
        map2.set(elem, (map2.get(elem) || 0) + 1);
    }

    let allKeys = new Set([...map1.keys(), ...map2.keys()]);

    for (let key of allKeys) {
        let count1 = map1.get(key) || 0;
        let count2 = map2.get(key) || 0;
        intersection += Math.min(count1, count2);
        union += Math.max(count1, count2);
    }

    // 자카드 유사도 계산
    let jaccardSimilarity = union === 0 ? 1 : intersection / union;

    // 65536을 곱한 후 정수부만 출력
    return Math.floor(jaccardSimilarity * 65536);
}

