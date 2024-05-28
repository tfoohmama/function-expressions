const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const currentDate = () => new Date().toLocaleDateString('en-US');