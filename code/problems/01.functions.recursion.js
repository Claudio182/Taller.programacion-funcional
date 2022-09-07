// Function Design I. Recursion [30 min]


// 01. Diseña una función recursiva para calcular n!
// n! se computa como el producto de todos los números
// naturales desde 1 hasta n.

(function (/* 01. factorial (n) */) {

    var factA = function (n) {

    };
    var factB = function (n) {
        var r = 1;
        for (var i = 1; i <= n; i++)
            r = r * i;
        return r;
    };

    console.log(
        factA(5), // 120
        factB(5)  // 120
    );

})();


// 02. Diseña una función recursiva para calcular el 
// n-esimo término de la sucesión de Fibonacci. Dicho
// término se obtiene como la suma de los dos términos
// anteriores en la sucesión.

(function (/* 02. fibonacci (n) */) {

    var fibA = function (n) {

    };
    var fibB = function (n) {
        var a = 1;
        var b = 1;
        for (var i = 2; i < n; i++) {
            b = a + b;
            a = b - a;
        }
        return b;
    };

    console.log(
        fibA(10), // 55
        fibB(10)  // 55
    );

})();


// 03. Diseña una función recursiva para calcular el 
// la potencia de un numero b elevado al exponente e.
// El computo de b elevado a e se obtiene como el 
// producto de b con sigo mismo e veces.

(function (/* 03. pow (b, e) */) {
    //FUNCIONANDO OK
    var pow = function (b, e) {
        if (e === 1) {
            return b
        }
        return b * pow(b, e - 1)
    };

    console.log(
        pow(2, 6), // 64
        pow(3, 6)  // 729
    );

})();


// 04. Diseña dos predicados lógicos [even] y [odd] que
// indiquen si un número n pasado como argumente es o no
// par o impar respectivamente. En el diseño de estas 
// funciones no puede utilizarse la operación de módulo %.

(function (/* 04. even (n) & odd (n) */) {
    // FUNCIONANDO OK
    var even = function (n) {
        let num = n

        if (Number.isInteger( (num/2) )) {
            return true
        }
        if (odd(n)) {
            return false
        }
    };
    var odd = function (n) {
        let num = n
        
        if (Number.isInteger( (num-1)/2) ) {
            return true
        }
        if (even(n)) {
            return false
        }
    };

    console.log(
        even(5), even(6), // false true
        odd(5), odd(6)  // true false
    );

    console.log(
        even(5), even(6), // false true
        odd(5), odd(6)  // true false
    );

})();


// 05. Diseña una función recursiva [addUp] que devuelva 
// la suma de los n primeros números naturales. Por ejemplo
// addUp (3) = 1 + 2 + 3 = 6.

(function (/* 05. addUp (n) */) {
    // FUNCIONANDO OK
    var addUp = function (n) {
        return n === 1 ? 1 : n + addUp(n - 1)
        /* f (n === 1){
            return 1
        }
        return n + addUp(n - 1) */
    }

    console.log(
      addUp(5) // 15
    )

})();


// 06. Diseña una función recursiva [digits] que sume los dígitos
// que tiene un número entero n pasado como parámetro. Por ejemplo,
// digits (125) = 1 + 2 + 5 = 8.

(function (/* 06. digits (n) */) {

    var digits = function (n) {
        if (n < 10){
            return n
        }
        return digits(Math.floor(n/10)) + digits(n%10)
    };
    
    console.log(
        digits(5),  // 5
        digits(25), // 7
        digits(125) // 8
    );

})();