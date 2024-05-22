//your JS code here. If required.
let fontSize = document.querySelector("#fontsize");
let fontColor = document.querySelector("#fontcolor");
let submitButton = document.querySelector("#submit");

function getCookie(name) {
  let cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    let [cookieName, cookieValue] = cookie.split("=");
    if (decodeURIComponent(cookieName) === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
}

let getDefaultFontSize = getCookie("font_size");
let getDefaultColor = getCookie("font_color");

document.addEventListener("DOMContentLoaded", () => {
  if (getDefaultFontSize) {
    fontSize.value = getDefaultFontSize;
  }
  if (getDefaultColor) {
    fontColor.value = getDefaultColor;
  }
});

function setCookie(name, value) {
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  let v_font = fontSize.value;
  let v_color = fontColor.value;
  setCookie("font_size", v_font);
  setCookie("font_color", v_color);
});
