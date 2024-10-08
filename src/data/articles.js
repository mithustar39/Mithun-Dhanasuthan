import React from "react";

function article_1() {
	return {
		date: "placeholder",
		title: "placeholder",
		description:
			"placeholder",
		keywords: [
			"placeholder",
			"Mithun",
			"Mithun D",
			"Mithun Dhanasuthan",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "placeholder",
		title: "placeholder",
		description:
			"placeholder",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Mithun",
			"Mithun D",
			"Mithun Dhanasuthan",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
