function solution(my_string, overwrite_string, s) {
    const endIndex = s + overwrite_string.length;
      const a = my_string.substring(0, s) + overwrite_string + my_string.substring(endIndex);
      return a
}