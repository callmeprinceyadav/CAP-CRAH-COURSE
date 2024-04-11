function sumOfPrimeFromAToB(A, B) {
    function isPrime(num) {
        let count = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i == 0) {
                count += 1
            }

        }
        if (count == 2) {
            return true;
        }
        else {
            return false;
        }
    }
    let sum = 0;
    for (let i = A; i <= B; i++) {
        if (isPrime(i)) {
            sum += i
        }
    }
    console.log(sum)

}