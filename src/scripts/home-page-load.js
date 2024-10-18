//This is for homepage
import restaurantImg from "../assets/images/restaurant.jpg";


export const pageLoad = function () {
    const content = document.getElementById("content")

    const title = document.createElement("h1")
    content.appendChild(title);
    const titleText = document.createTextNode("Wommps Wonderful Watering Hole")
    title.appendChild(titleText)

    const image = document.createElement("img")
    image.src = restaurantImg
    content.appendChild(image)

    const description = document.createElement("p")
    content.appendChild(description)
    const descriptionText = document.createTextNode(
		"Join us for an evening of apetizing amphibians. No Harriors hanging around here!"
    );
    description.appendChild(descriptionText)
    
    const review = document.createElement("p")
    content.appendChild(review)
    const reviewText = document.createTextNode(
		"(Let the negative reviews slide, like water off a ducks back.)"
	);
    review.appendChild(reviewText)
}