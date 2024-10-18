import '../styles/styles.css'
import { pageLoad } from './home-page-load'
import { menuLoader } from './menu-page-loader'
// import restaurantImg from "../assets/images/restaurant.jpg";

pageLoad()

document.getElementById("home")
    .addEventListener("click", pageLoad)
document.getElementById("menu")
    .addEventListener("click", menuLoader)
