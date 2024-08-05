function solution(id_list, report, k) {
    let answer = [];
    let reports = {};
    let reportsCount = {};

    id_list.forEach( (id) => {
        reports[id] = new Set();
        reportsCount[id] = 0;
    })

    report.forEach((v) => {
        const [reporter, encounter] = v.split(/\s+/);

        if ( !reports[reporter].has(encounter) === true) {
            reports[reporter].add(encounter);
            reportsCount[encounter] +=1;
        }
    })

    let stopper = [];
    for(let key in reportsCount) {
        if ( reportsCount[key] >= k) {
            stopper.push(key)
        }
    }

    for( let key in reports){
        let count = 0;
        stopper.forEach( (v) => {
            if ( reports[key].has(v) ) {
                count += 1;
            }
        })
        answer.push(count)
        count = 0;
    }

    return answer;
}