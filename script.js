let A = ['01','02','03','04','05','06','07','08','09'];
let B = ['11','22','33','44','55','66','77','88','99'];
let C = 0


for (let i = 0 ; i < A.length; i++) {
    C = A[i] // o C recebeu o valor de A (pois gurdamos o valor de A dentro do C)
    A[i] = B[i] // A recebeu o vaor de B (A tem o valor de B)
    B[i] = C // B recebeu o valor do C (que obteve o valor de A)
}

console.log (A)
console.log (B)

/* inprimir 
[           A
    '11', '22', '33',
    '44', '55', '66',
    '77', '88', '99'
  ]
  [        B
    '01', '02', '03',
    '04', '05', '06',
    '07', '08', '09'
  ]

  */