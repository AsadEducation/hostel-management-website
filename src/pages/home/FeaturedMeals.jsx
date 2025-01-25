import useMeal from "../../Hooks/useMeal";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FoodGrid from "../../shared-component/food-grid/FoodGrid";

const FeaturedMeals = () => {

    const { meals } = useMeal();

    const breakfast = meals.filter((each) => each.mealType === "breakfast")
    const lunch = meals.filter((each) => each.mealType === "lunch")
    const dinner = meals.filter((each) => each.mealType === "dinner")

    return (
        <div>
            <h2 className="text-3xl lg:text-4xl font-semibold text-center ">Featured Meals</h2>

            {/* remove the "min-h-screen" class from tab later */}

            <Tabs className={'min-h-screen'}>
                <TabList>
                    <Tab>Breakfast</Tab>
                    <Tab>Launch</Tab>
                    <Tab>Dinner</Tab>
                </TabList>

                <TabPanel>

                    <FoodGrid items={breakfast} />

                </TabPanel>

                <TabPanel>

                    <FoodGrid items={lunch} />

                </TabPanel>

                <TabPanel>

                    <FoodGrid items={dinner} />

                </TabPanel>
            </Tabs>
        </div>
    );
};

export default FeaturedMeals;