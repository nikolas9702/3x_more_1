
let value = 27;

function tresX(x) {
	return 3*x +1 ;
}

function div2(x){
	return x/2;
}

function main(x) {
	if ( x != 1 ) {
    if ( x % 2 == 0 )
      x = div2(x)
    else
      x = tresX(x)
    console.log(x);
    main(x);
  }
}
main(value);
