/* Etape 1 */
const password = "Test123";
const password2 = "Test1234";
const password3 = "Test *421/565MMDI";
const LongeurPassword = /^.{8,}$/; //regex pour qu'indiquer le minimum de caracteres à avoir (tout confondu)

if (LongeurPassword.test(password)) {
  console.log("Longueur ok");
} else {
  console.log("Mdp trop court");
}

if (LongeurPassword.test(password2)) {
  console.log("Longeur ok");
} else {
  console.log("Mdp trop court");
}

if (LongeurPassword.test(password3)) {
  console.log("Longeur ok");
} else {
  console.log("Mdp trop court");
}

/* Etape 2 */
const AlphaStringCaract = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z0-9])/;
/* (?=..) c'est un lookahead (condition)
[a-zA-Z])doit contenir au moins une lettre
(?=.*\d) → au moins un chiffre
(?=.*[^a-zA-Z0-9]) tout sauf (^ a l'interieur c'est sauf) une lettre et un chiffre donc un caractère special */

if (AlphaStringCaract.test(password2)) {
  console.log("mdp valide");
} else {
  console.log(
    "non valide, manque une lettre, un chiffre ou un caractere special"
  );
}

if (AlphaStringCaract.test(password3)) {
  console.log("mdp valide");
} else {
  console.log(
    "non valide, manque une lettre, un chiffre ou un caractere special"
  );
}

/* Etape 3 */
const casse = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/;
//au moins une minuscule, une majuscule, un chiffre et tous sauf une minuscule, majuscule et un chiffre (donc un caractere special)et qu'il doit etre composé au moins de 8 caracteres
