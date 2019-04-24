import React from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import DropDownItem from 'react-native-drop-down-item';

const IC_ARR_DOWN = require('../assets/images/down-arrow.png');
const IC_ARR_UP = require('../assets/images/up-arrow.png');

export default class FAQScreen extends React.Component {
  static navigationOptions = {
    title: 'FAQ',
  };

  render() {
    return (
        <View style={styles.container}>
        <ScrollView style={{ alignSelf: 'stretch' }}>
        <DropDownItem
          key={1}
          style={styles.dropDownItem}
          contentVisible={false}
          invisibleImage={IC_ARR_DOWN}
          visibleImage={IC_ARR_UP}
          header={
            <View style={styles.header}>
              <Text style={styles.question}>
                Does Sugar Feed Cancer?
              </Text>
            </View>
          }
        >
          <Text style={styles.paragraph}>
              This is probably the number one misunderstood topic related to cancer and nutrition. Let’s put it out there right away, NO, sugar does not feed cancer. What does sugar do? It provides energy to EVERY cell in our body, most importantly our brain! Without sugar we wouldn’t survive. Just like a car needs gas to run, our bodies need fuel to run, too! We get this fuel from the food we eat, especially from foods that have carbohydrates (sugar). {'\n'}{'\n'} If we don’t eat food for a while, like when we are sleeping, our bodies will use and make its own sugar. Even if you cut out sugar, including carbohydrates, from your diet, your body will still make its own. Remember, sugar is your body’s favorite form of fuel. We cannot live without sugar in our blood so our bodies have a backup system that will make its own sugar out of our muscle and fat. {'\n'}{'\n'} Having sugar in our blood is so important that our bodies do not even care where the muscle comes from. It could come from your arms, legs, or even your heart! Therefore, even if you cut out all sugar from your diet, your body will make the sugar on its own. Obviously, it’s not a good idea to allow your muscles to be broken down and turned into sugar for fuel. Bottom line, sugar doesn’t feed cancer. Every cell (all those healthy ones!) in your body needs sugar to function. Don’t be scared to enjoy that birthday cake, but as always, enjoy it in moderation.
          </Text>
        </DropDownItem>
        <DropDownItem
          key={2}
          style={styles.dropDownItem}
          contentVisible={false}
          invisibleImage={IC_ARR_DOWN}
          visibleImage={IC_ARR_UP}
          header={
            <View style={styles.header}>
              <Text style={styles.question}>
                Should I Drink Alkaline Water?
              </Text>
            </View>
          }
        >
          <Text style={styles.paragraph}>
          A very common question cancer patients have is, "Should I drink alkaline water to kill my cancer cells"? The short answer is no. In fact, did you know that Robert O. Young, the man who pioneered the Alkaline Diet is serving time in prison for practicing medicine without a license? Robert O. Young went from a bachelor's degree to doctorate in as little as 8 months from a non-accredited institution. In 2011, the Medical Board of California began an investigation on Young, where it discovered that none of the 15 cancer patients Young treated with his alkalinity treatments outlived their prognosis. In June 2017 he was sentenced to 3 years and 8 months in prison, in addition to, also publicly admitting that he is not a microbiologist, hematologist, medical or naturopathic doctor or trained scientist.{'\n'}{'\n'}

          To better understand why alkaline water doesn’t kill cancer cells, you need to understand how our bodies function. Our bodies have a pH of about 7.4, which is already considered slightly alkaline. Our bodies work VERY hard to maintain a pH of 7.4 because if our pH changes at all….we would end up in the hospital! To keep our bodies at a pH of 7.4, our lungs and kidneys act as regulators. Dr. Nieva, associate professor of clinical medicine at the USC Norris Comprehensive Cancer Center explains, “Your lungs and kidney don't let your PH change; that's what they do. Carbon dioxide (CO2) is the most common acid in your body and is a constantly being produced by your cells. When you produce CO2 in excess (for example, after an intense workout), your body is designed to eliminate it. Your blood carries the acid away from your organs and you breathe the excess out of your lungs. That is why you breathe faster when you exercise, it is to keep your body’s pH normal and remove the excess CO2. Your kidneys also get in on the act, eliminating acid in the urine, but at a much slower rate than your lungs.”{'\n'}{'\n'}

          Also, keep in mind that our bodies have stomach acid at a pH of 3 in order to break down food and beverages we eat. It also sterilizes what we ate and drank to prevent bacterial infections. After our stomachs are done processing the meal, it moves through our intestines where pancreatic enzymes turn it back to a slightly alkaline pH. Basically, no matter what the pH of the food you ate or drank-alkaline or acidic-our bodies naturally turn everything into the same pH in the end. Drinking alkaline water isn’t going to change this. “You take in alkaline water, you make alkaline urine,” Dr. Nieva says. “That's all you're going to do.”
          </Text>
        </DropDownItem>

        <DropDownItem
          key={3}
          style={styles.dropDownItem}
          contentVisible={false}
          invisibleImage={IC_ARR_DOWN}
          visibleImage={IC_ARR_UP}
          header={
            <View style={styles.header}>
              <Text style={styles.question}>
                "Hormone Free" or "Organic"?
              </Text>
            </View>
          }
        >
          <Text style={styles.paragraph}>
          The grocery store is a maze of propaganda with various products being portrayed as healthier than another. But which product is truly healthier and which product is a waste of money? The first thing you need to know is that the labeling of eggs, poultry, and beef is regulated by the USDA (United States Department of Agriculture). Here are the USDA definitions of some common terms you may have heard before.{'\n'}{'\n'}
          </Text>
          <Text style={styles.paragraph}>
          <Text style={{fontStyle: 'italic'}}>Hormone Free (Poultry or Pork)</Text>
          <Text>
          : Hormones are not allowed in raising hogs or poultry. *Therefore, the claim “no hormones added” cannot be used on the labels of pork or poultry unless it is followed by a statement that says “Federal regulations prohibit the use of hormones."{'\n'}{'\n'}
          </Text>
          </Text>
          <Text style={styles.paragraph}>
          <Text style={{fontStyle: 'italic'}}>Hormone Free (Beef)</Text>
          <Text>
          : The term “no hormones administered” may be approved for use on the label of beef products if sufficient documentation is provided to the Agency by the producer showing no hormones have been used in raising the animals. *This does not mean the product is completely hormone free, this only implies that additional hormones were not provided to the animal. Hormones are naturally present in cattle (A 3 ounce serving of beef without added hormones contains 0.9 ng of estrogen while a 3 oz portion of hormone added beef contains 1.2 ng of estrogen. That is only a 0.3 ng difference between the 2 products).{'\n'}{'\n'}
          </Text>
          </Text>
          <Text style={styles.paragraph}>
          <Text style={{fontStyle: 'italic'}}>Organic</Text>
          <Text>
          : This is a labeling term that denotes products produced under the authority of the Organic Foods Production Act. The principal guidelines for organic production are to use materials and practices that enhance the ecological balance of natural systems and that integrate the parts of the farming system into an ecological whole. *Organic food is produced by farmers who emphasize the use of renewable resources and the conservation of soil and water to enhance environmental quality for future generations. Organic meat, poultry, eggs, and dairy products come from animals that are given no antibiotics or growth hormones. Organic food is produced without using most conventional pesticides; fertilizers made with synthetic ingredients or sewage sludge; bioengineering; or ionizing radiation.{'\n'}{'\n'}
          </Text>
          </Text>
          <Text style={styles.paragraph}>
          So which product is best? Products labeled “Organic” and “Hormone Free” are not more nutritious than their counterparts. An organic banana has the same amount of calories and cancer fighting phytochemicals as a non-organic banana does. In fact, studies have shown that eating non-organic foods does NOT increase your risk of cancer. Buying organic and hormone free can be pricey without any known benefit to our health. This truly comes down to a matter of preference.
          </Text>
        </DropDownItem>

        <DropDownItem
          key={4}
          style={styles.dropDownItem}
          contentVisible={false}
          invisibleImage={IC_ARR_DOWN}
          visibleImage={IC_ARR_UP}
          header={
            <View style={styles.header}>
              <Text style={styles.question}>
                Should I be on the Ketogenic Diet?
              </Text>
            </View>
          }
        >
          <Text style={[ styles.paragraph, {fontStyle: 'italic'}]}>
          What is the ketogenic diet?{'\n'}
          </Text>
          <Text style={styles.paragraph}>
          Just like a car needs gas to run, our bodies need fuel to run. We get this fuel from the food we eat (especially from foods that have carbohydrates). Our bodies turn this food into sugar, our favorite form of fuel. If we don’t eat food for a while, like when we are sleeping, our bodies will use and make its own sugar. If we don’t eat food for even longer, our bodies have a back-up system. This back-up system is ketones and they are made from breaking down fat. People who follow a ketogenic diet try to run on this back-up system all the time by consuming only a tiny amount of carbohydrates, and a lot of fat. {'\n'} The average American eats about half their food in the form of carbohydrates. Someone on the ketogenic diet only eats 4-6% of their food as carbohydrates. For example, the average American who eats 2,000 calories per day will consume approximately 250 grams of carbs in a day. On the ketogenic diet, the same person can only eat 20-30 grams of carbohydrates. For example, half a bagel, a large apple, or a small potato each contain 20-30 grams of carbs. Eating only one of those things would be it for the whole day! Because of this, foods high in carbohydrates like rice, pasta, and bread, as well as beans, fruits, and certain vegetables (think potatoes and corn) are eliminated on the ketogenic diet. Even if you cut out sugar, including carbohydrates, from your diet, your body will still make its own. We cannot live without sugar in our blood so our bodies make their own sugar when we don’t eat enough carbohydrates. We make this sugar out of our muscle and fat. Having sugar in our blood is so important that our bodies do not even care where the muscle comes from. It could come from your arms, legs, or even your heart! {'\n'}{'\n'}
          </Text>
          <Text style={[ styles.paragraph, {fontStyle: 'italic'}]}>
          So, does the ketogenic diet help humans fight cancer?{'\n'}
          </Text>
          <Text style={styles.paragraph}>
          So far, there have not been enough human studies to provide evidence that the ketogenic diet will help. There are currently two clinical trials with published results on ClinicalTrials.gov that measured the effect of the diet on cancer. One study included recurrent glioblastomas, and the other included several different cancer sites (brain, liver, pancreas, lung, head and neck, thyroid, melanoma, biliary, kidney, and prostate-all of them were advanced cancers). Both of these studies ended up being too small to actually determine any effect. Each started with only around 20 people. One even had 76% of its participants drop out of its 16-week study because they couldn’t follow the diet that long. While these studies didn’t report any major adverse effects from the diet, almost all participants experienced weight loss (something we try to avoid while in treatment), and some even had increased triglycerides, altered electrolyte levels, and fatigue.{'\n'}{'\n'}
          </Text>
          <Text style={[ styles.paragraph, {fontStyle: 'italic'}]}>
          What do we know?{'\n'}
          </Text>
          <Text style={styles.paragraph}>
          We do have evidence that preventing unintended weight loss and staying hydrated during your cancer treatment can help you tolerate treatments and feel better. There is also lots of information supporting a plant-based diet and an active lifestyle for cancer prevention and survivorship. Eating plenty of plant foods, including whole grains, beans, lots of fruits and vegetables, lean protein, and less processed, fast foods helps to provide your body with cancer fighting nutrients. These are both safe and effective recommendations. So, go ahead-pile your plate with plants!
          </Text>
        </DropDownItem>

        </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  dropDownItem: {
    marginVertical: 8
  },
  question: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  paragraph: {
    fontSize: 20
  },
  header: {
    width: '100%',
    paddingHorizontal: 12,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
