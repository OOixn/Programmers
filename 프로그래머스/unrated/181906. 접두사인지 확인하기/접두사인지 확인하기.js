function solution(my_string, is_prefix) {
    let a = my_string.startsWith(is_prefix);
        let result = a ? 1 : 0;
    return result;
}