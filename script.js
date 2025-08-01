function ToggleEvent() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Substituir a img de acordo com o mode light
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/AvatarLight.png")
  } else {
    img.setAttribute("src", "./assets/Avatar.png")
  }
}
