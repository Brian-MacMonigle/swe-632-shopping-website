import React from 'react';
import Styled from 'styled-components';
import { map } from 'lodash';
import uuid from 'uuid/v4';

import HoverPopup from '../HoverPopup';

const NutritionFactsWrapper = Styled.div`
	text-align: left;
	background-color: white;
	border: 2px solid black;

	padding: 5px;

	width: 250px;
`;

const NutritionFactsTitle = Styled.h2`
	margin: 0;
	border-bottom: 1px solid black;
`;

const ServingsPerContainer = Styled.div`
	font-size: 0.75em;
`;

const ServingSize = Styled.h3`
	font-weight: bold;
	margin: 0;
	display: flex;
	justify-content: space-between;
`;

const BigBlackBar = Styled.div`
	background-color: black;
	height: 10px;
`;

const MediumBlackBar = Styled.div`
	background-color: black;
	height: 5px;
`;

const Calories = Styled.h1`
	margin: 0;
	display: flex;
	justify-content: space-between;
	border-bottom: 5px solid black;;
`;

const DailyValueHeader = Styled.div`
	text-align: right;
	font-weight: bold;
	border-bottom: 1px solid black;
`;

const TabbedSpan = Styled.span`
	padding-left: 0.5em;	
`;

const DoubleTabbedSpan = Styled.span`
	padding-left: 1em;	
`;

const DailyEntry = Styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid black;
	padding: 2px;
`;

const InfoText = Styled.div`
	font-size: 0.75em;
`;

function prettyCost(cost = 0) {
	return `$${cost.toFixed(2)}`;
};

function nutritionPopup(foodItem, child) {
	const { 
		nutrition: { 
			servingsPerContainer, 
			servingSize,
			calories,
			fat,
			cholesterol,
			sodium,
			carbohydrate,
			protien,
			vitamins = {},

		} = {}
	} = foodItem;
	const popup = (
		<NutritionFactsWrapper>
			<NutritionFactsTitle>
				Nutrition Facts
			</NutritionFactsTitle>
			<ServingsPerContainer>
				{`${servingsPerContainer.value} servings per container`}
			</ServingsPerContainer>
			<ServingSize>
				<span>Serving size</span>
				<span>{`${servingSize.value} ${servingSize.units} (${servingSize.value2} ${servingSize.units2})`}</span>
			</ServingSize>
			<BigBlackBar />
			<Calories>
				<span>Calories</span>
				<span>{calories}</span>
			</Calories>
			<DailyValueHeader>
				% Daily Value*
			</DailyValueHeader>
			<DailyEntry>
				<span><b>Total Fat</b>{` ${fat.total.value}g`}</span>
				<b>{`${fat.total.daily}%`}</b>
			</DailyEntry>
			<DailyEntry>
				<TabbedSpan>{`Saturated Fat ${fat.saturated.value}g`}</TabbedSpan>
				<b>{`${fat.saturated.daily}%`}</b>
			</DailyEntry>
			<DailyEntry>
				<TabbedSpan><i>Trans</i>{` ${fat.trans.value}g`}</TabbedSpan>
				<b>{`${fat.trans.daily}%`}</b>
			</DailyEntry>
			<DailyEntry>
				<span><b>Cholesterol</b>{` ${cholesterol.value}mg`}</span>
				<b>{`${cholesterol.daily}%`}</b>
			</DailyEntry>
			<DailyEntry>
				<span><b>Sodimn</b>{` ${sodium.value}mg`}</span>
				<b>{`${sodium.daily}%`}</b>
			</DailyEntry>
			<DailyEntry>
				<span><b>Total Carbohydrate</b>{` ${carbohydrate.total.value}g`}</span>
				<b>{`${carbohydrate.total.daily}%`}</b>
			</DailyEntry>
			<DailyEntry>
				<TabbedSpan>{`Dietary Fiber ${carbohydrate.fiber.value}g`}</TabbedSpan>
				<b>{`${carbohydrate.fiber.daily}%`}</b>
			</DailyEntry>
			<DailyEntry>
				<TabbedSpan>{`Total Sugars ${carbohydrate.sugars.total.value}g`}</TabbedSpan>
				<b>{`${carbohydrate.sugars.total.daily}%`}</b>
			</DailyEntry>
			<DailyEntry>
				<DoubleTabbedSpan>{`Added Sugars ${carbohydrate.sugars.added.value}g`}</DoubleTabbedSpan>
				<b>{`${carbohydrate.sugars.added.daily}%`}</b>
			</DailyEntry>
			<DailyEntry>
				<span><b>Protien</b>{` ${protien.value}g`}</span>
				<b>{`${protien.daily}%`}</b>
			</DailyEntry>
			<BigBlackBar />
			{map(vitamins, ({name, value, units, daily}) => (
				<DailyEntry key={uuid()}>
					<span>{`${name} ${value}${units}`}</span>
					<span>{`${daily}%`}</span>
				</DailyEntry>
			))}
			<MediumBlackBar />
			<InfoText>* The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for genral nutrition advice.</InfoText>
		</NutritionFactsWrapper>
	)

	return (
		<HoverPopup popup={popup} xOffset={10} yOffset={-200}>
			{child}
		</HoverPopup>
	);
};

export { prettyCost, nutritionPopup };