const plugin = require("tailwindcss/plugin");

module.exports = plugin(
	function ({ matchUtilities, theme }) {
		matchUtilities(
			{
				"grid-fit": (value) => ({
					gridTemplateColumns: `repeat(auto-fit, minmax(${value}, 1fr))`,
				}),

				"grid-fill": (value) => ({
					gridTemplateColumns: `repeat(auto-fill, minmax(${value}, 1fr))`,
				}),
			},
			{ values: theme("gridFluid") }
		);
	},
	{
		theme: {
			gridFluid: {
				DEFAULT: "10rem",
				sm: "6rem",
				base: "10rem",
				md: "14rem",
				lg: "20rem",
				xl: "24rem",
			},
		},
	}
);