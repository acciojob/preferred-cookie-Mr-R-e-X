document.addEventListener("DOMContentLoaded", function() {
  let fontSize = document.querySelector("#fontsize");
  let fontColor = document.querySelector("#fontcolor");
  let submitButton = document.querySelector("input[type='submit']");

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

  function setCookie(name, value) {
    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)};path=/`;
  }

  window.onload = function () {
    let getDefaultFontSize = getCookie("font_size");
    let getDefaultColor = getCookie("font_color");

    if (getDefaultFontSize) {
      fontSize.value = getDefaultFontSize;
      document.documentElement.style.setProperty("--fontsize", getDefaultFontSize + "px");
    }
    if (getDefaultColor) {
      fontColor.value = getDefaultColor;
      document.documentElement.style.setProperty("--fontcolor", getDefaultColor);
    }
  };

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    let v_font = fontSize.value;
    let v_color = fontColor.value;
    setCookie("font_size", v_font);
    setCookie("font_color", v_color);
    document.documentElement.style.setProperty("--fontsize", v_font + "px");
    document.documentElement.style.setProperty("--fontcolor", v_color);
  });
});
