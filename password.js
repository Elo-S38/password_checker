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
