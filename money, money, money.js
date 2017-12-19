function calculateYears(principal, interest, tax, desired) {
    var years = 0;
    if (principal === desired) {
    return 0;
    } else {
    while (principal <= desired) {
      principal += principal * interest * (1 - tax);
      years++;
    }}
    return years;
}
