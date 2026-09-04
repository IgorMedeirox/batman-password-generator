export default function generatePass() {
  let password: string = "";
  let characters: string = "!@#$%&*ABCDFGLHOPRIajhdfgmghoptr";
  let passwordLength: number = 10;

  for (let index = 0; index < passwordLength; index++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
}
