"use strict";
const date = new Date();
// const date = Date();
console.log(date);
// * retorna o dia do mês * //
// console.log("getDate");
// console.log(date.getDate());
// console.log(date.getUTCDate());
// * retorna o dia da semana * //
// console.log("getDay");
// console.log(date.getDay());
// console.log(date.getUTCDay());
// * retorna o ano da data na forma de quatro dígitos completa * //
// console.log("getFullYear");
// console.log(date.getFullYear());
// console.log(date.getUTCFullYear());
// * retorna o campo de horas * //
// console.log("getHours");
// console.log(date.getHours());
// console.log(date.getUTCHours());
// * retorna o campo de milissegundos * //
// console.log("getMilliseconds");
// console.log(date.getMilliseconds());
// console.log(date.getUTCMilliseconds());
// * retorna o campo de minutos * //
// console.log("getMinutes");
// console.log(date.getMinutes());
// console.log(date.getUTCMinutes());
// * retorna o campo de mês * //
// console.log("getMonth");
// console.log(date.getMonth());
// console.log(date.getUTCMonth());
// * retorna o campo de segundos * //
// console.log("getSeconds");
// console.log(date.getSeconds());
// console.log(date.getUTCSeconds());
// * retorna representação de milissegundos * //
// console.log("getTime");
// console.log(date.getTime());
// * retorna a diferença, em minutos, entre as representações local e UTC dessa data * //
// console.log("getTimezoneOffSet");
// console.log(date.getTimezoneOffset());
// * configura o campo de dia do mês * //
// date.setDate(20);
// * configura o campo de ano (e opcionalmente mês e dia) * //
// date.setFullYear(2026, 0, 30);
// * configura o campo de hora (e opcionalmente os campos de minutos, segundos e milissegundos) * //
// date.setHours(8);
// * configura o campo de milissegundos * //
// date.setMilliseconds(1000);
// * configura o campo de minutos (e opcionalmente os campos de segundos e milissegundos) * //
// date.setMinutes(50);
// * configura o campo do mês (e opcionalmente o dia do mês) * //
// date.setMonth(0);
// * configura o campo de segundos (e opcionalmente o campo de milissegundos) * //
// date.setSeconds(30);
// * retorna uma string representando a parte da data, expressa no fuso horário local * //
// console.log(date.toDateString());
// * converte um objeto Date em uma string, usando o formato de data/hora ISO-8601 combinado e UTC * //
// console.log(date.toISOString());
// * JSON serializa um objeto date, usando toISOSString() * //
// console.log(date.toJSON());
// * retorna uma string representando a parte da data, expressa no fuso horário local, usando as convenções locais de formatação de data * //
// console.log(date.toLocaleDateString());
// * converte um objeto Date em uma string, usando o fuso horário local e as convenções de formatação locais de data * //
// console.log(date.toLocaleString());
// * retorna uma string representando a parte da hora da data, expressa no fuso horário local, usando as convenções de formatação locais de hora * //
// console.log(date.toLocaleTimeString());
// * converte um objeto Date em uma string usando o fuso horário local * //
// console.log(date.toString());
// * retorna uma string representando a parte da hora da data, expressa no fuso horário local * //
// console.log(date.toTimeString());
// * converte um objeto Date em um string, usando hora universal * //
// console.log(date.toUTCString());
// * converte um objeto Date e mseu formato interno de milissegundos * //
// console.log(date.valueOf());
// ! MÉTODOS ESTÁTICOS ! //
// console.log(Date.now());
// console.log(Date.parse());
// console.log(Date.UTC());
// ! TypeError ! //
// console.log(date.now());
// console.log(date.parse());
// console.log(date.UTC());
/*
class Chat {
  static sendMessage() {
    return "You got me!";
  }
}

const myChat = new Chat();

// ! Uncaught TypeError: myChat.sendMessage is not a function ! //
// console.log(myChat.sendMessage());
// * on the other hand, if we access the static method sendMessage using the class name Chat directly, then: * //
console.log(Chat.sendMessage());
*/
// ! The Internationalization API - Intl ! //
// ! DateTimeFormat ! //
// * in basic use without specifying a locale, DateTimeFormat uses the default locale and default options * //
console.log(new Intl.DateTimeFormat().format(date));
// US English //
console.log(new Intl.DateTimeFormat("en-US").format(date));
// British English //
console.log(new Intl.DateTimeFormat("en-GB").format(date));
// Korean //
console.log(new Intl.DateTimeFormat("ko-KR").format(date));
// Arabic //
console.log(new Intl.DateTimeFormat("ar-EG").format(date));
// ! USING OPTIONS ! //
let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
  timeZoneName: "short",
};

// console.log(new Intl.DateTimeFormat("de-DE", options).format(date));
console.log(new Intl.DateTimeFormat("en-US", options).format(date));
