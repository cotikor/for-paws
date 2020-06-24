import React from "react";
import { Carousel } from "./carousel/Carousel";
import {
	ContentContainer,
	DescriptionP,
	AdoptButton,
	BottomContent,
} from "../../styles/content";
import * as photos from "../../styles/assets/images/index";

export const Content = ({ selectedTab, activeImage, setActiveImage, setView }) => {
	const content = {
		Diamond: {
			images: [photos.diamond1, photos.diamond2, photos.diamond3],
			description:
				"I'm a very sweet little girl but extremely shy. I'll need a quiet home with or without other dogs. I'll need to have someone patient who can work with me. I've gotten comfortable enough now that I wag my tail and greet my foster mom. I get a little too excited about the cat but I think that can be overcome with a better introduction. I get along really well with the other dogs in the house. Once you win me over I'll be your best friend!",
		},
		Onyx: {
			images: [photos.onyx1, photos.onyx2, photos.onyx3],
			description:
				"This incredibly sweet boy is Onyx. He was very fearful when he first came into the shelter, but with time and patience he came out of his shell. He is currently in a foster home and doing great!! He's affectionate with his foster family, snuggles with their dogs and does well with the dog-friendly cat. Onyx can be a little territorial about his space, so he would do best with a dog who respects his space, or as the only dog in the home.",
		},
		Sapphire: {
			images: [photos.sapph1, photos.sapph2, photos.sapph3],
			description:
				"Sapphire is a handsome and charming guy whom you'll fall in love with. An adventurous guy, Sapph is fit for long walks and exploring new places. There's nothing he enjoys more than getting out and smelling the freshly marked trees and grass. He is gradually building on his skills of knowing sit, stay, leave it and loose leash walking. He will do best with someone who remains consistent with the training from which he has already acquired a very solid base! Treats, especially chicken jerky, will get his attention when training. He is still learning how to politely introduce himself to dogs his size and larger, as he just wants to play, but his exuberence canbe misinterpreted by others. Though he may be about his adventures, don't for a second think he wont smile at you and give you his belly when its time to relax. Come meet this goofy, adventurous boy and maybe he'll sing you a song on the way home!",
		},
		Sarabi: {
			images: [photos.sarabi1, photos.sarabi2, photos.sarabi3],
			description:
				"Hi! My name is Sarabi. I'm a dignified older lady with the prettiest tortoiseshell coat you ever did see. I love to follow the sun from window to window throughout the day. I also love a quiet environment where I am the sole focus of my owner. I feel my best when I know the routine of my owner and then I can establish a routine of my own. I like to sit on your lap but only when I can be the center of your attention.",
		},
		Sarina: {
			images: [photos.sarina1, photos.sarina2, photos.sarina3],
			description:
				"My name is Sarina. I'm very cautious and quiet at first, but once I warm up to you, I am very playful. I cannot resist toys and treats and really come out of my shell when offered a laser pointer. If you are looking for a cat who you can help bring out of her shell to become a friendly companion, I may be your perfect match!",
		},
	};

	return (
		<ContentContainer>
			<Carousel
				images={content[selectedTab].images}
				activeImage={activeImage}
				setActiveImage={setActiveImage}
			/>
			<BottomContent>
				<DescriptionP>{content[selectedTab].description}</DescriptionP>
				<AdoptButton to='/adopt/application' onClick={e => { setView('adopt') }}>Adopt</AdoptButton>
			</BottomContent>
		</ContentContainer>
	);
};
