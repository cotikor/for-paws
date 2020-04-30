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
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		},
		Onyx: {
			images: [photos.onyx1, photos.onyx2, photos.onyx3],
			description:
				"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
		},
		Sapphire: {
			images: [photos.sapph1, photos.sapph2, photos.sapph3],
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		},
		Sarabi: {
			images: [photos.sarabi1, photos.sarabi2, photos.sarabi3],
			description:
				"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.",
		},
		Sarina: {
			images: [photos.sarina1, photos.sarina2, photos.sarina3],
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		},
	};

	return (
		(
			<ContentContainer>
				<Carousel
					images={content[selectedTab].images}
					activeImage={activeImage}
					setActiveImage={setActiveImage}
				/>
				<BottomContent>
					<DescriptionP>{content[selectedTab].description}</DescriptionP>
					<AdoptButton to='/adopt/application' onClick={e => { setView('adopt')}}>Adopt</AdoptButton>
				</BottomContent>
			</ContentContainer>
		)
	);
};
