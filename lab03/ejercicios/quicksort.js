;(function () { function quicksort (A, izq, der) {
    var pivote = A[izq],i = izq,j = der,temp
    while (i < j) { 
      while (A[i] <= pivote && i < j) i++
      while (A[j] > pivote) j-- 
      if (i < j) {                       
        temp = A[i]
        A[i] = A[j]
        A[j] = temp; }
    }
    A[izq] = A[j] 
    A[j] = pivote
        if (izq < j - 1)
      quicksort(A, izq, j - 1) 
    if (j + 1 < der)
      quicksort(A, j + 1, der) 
      return A;
  }
  var A = [200, 15, 6, 14, 26, 7, 9, 12, 47], izq = 0, der = A.length - 1
  console.log(quicksort(A, izq, der))
}())
