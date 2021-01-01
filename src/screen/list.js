import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';

import Styles from './listStyle';

class ShowList extends React.PureComponent{
    render(){
        return(
            <View style={Styles.container}>
                <FlatList
                    data={data.query.pages}
                    renderItem={({ item }) => (
                        <View style={Styles.cardStyle}>
                            <View style={Styles.imageContainerStyle}>
                                <Image source={{uri: item.thumbnail.source}} resizeMode='cover' style={Styles.imageStyle}/>
                                {/* <Image style={Styles.imageStyle} resizeMode='cover' source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/The_cricket_legend_Sachin_Tendulkar_at_the_Oval_Maidan_in_Mumbai_During_the_Duke_and_Duchess_of_Cambridge_Visit%2826271019082%29.jpg/33px-The_cricket_legend_Sachin_Tendulkar_at_the_Oval_Maidan_in_Mumbai_During_the_Duke_and_Duchess_of_Cambridge_Visit%2826271019082%29.jpg"}}/> */}
                            </View>
                            <View style={Styles.titleContainer}>
                                <Text style={{fontWeight:"bold"}}>{item.title}</Text> 
                                <Text>{item.terms.description[0]}</Text>
                                {/* <Text>Indian former cricketer</Text> */}
                            </View>
                        </View>
                    )}
                    keyExtractor={item => item.pageid}
                />
            </View>
        );
    }
}

export default ShowList;


const data = {"batchcomplete":true,"continue":{"gpsoffset":10,"continue":"gpsoffset||"},"query":{"redirects":[{"index":4,"from":"Sachin The Film","to":"Sachin: A Billion Dreams"}],"pages":[{"pageid":57570,"ns":0,"title":"Sachin Tendulkar","index":1,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/The_cricket_legend_Sachin_Tendulkar_at_the_Oval_Maidan_in_Mumbai_During_the_Duke_and_Duchess_of_Cambridge_Visit%2826271019082%29.jpg/33px-The_cricket_legend_Sachin_Tendulkar_at_the_Oval_Maidan_in_Mumbai_During_the_Duke_and_Duchess_of_Cambridge_Visit%2826271019082%29.jpg","width":33,"height":50},"terms":{"description":["Indian former cricketer"]}},{"pageid":6957873,"ns":0,"title":"Sachin Pilot","index":8,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Sachin_Pilot_at_the_India_Economic_Summit_2010_cropped.jpg/39px-Sachin_Pilot_at_the_India_Economic_Summit_2010_cropped.jpg","width":39,"height":50},"terms":{"description":["Indian politician"]}},{"pageid":10730502,"ns":0,"title":"Sachin (actor)","index":6,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/SachinPilgaonkar.jpg/33px-SachinPilgaonkar.jpg","width":33,"height":50},"terms":{"description":["Indian actor, director, producer, Writer, singer"]}},{"pageid":20817418,"ns":0,"title":"Sachin Khedekar","index":7,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Sachin_Khedekar.jpg/50px-Sachin_Khedekar.jpg","width":50,"height":38},"terms":{"description":["Indian actor"]}},{"pageid":24361386,"ns":0,"title":"Sachin Vaze","index":9,"terms":{"description":["Indian police officer"]}},{"pageid":42182160,"ns":0,"title":"Sachin Bansal","index":10,"thumbnail":{"source":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Sachin_Bansal.jpg/36px-Sachin_Bansal.jpg","width":36,"height":50},"terms":{"description":["Indian Entrepreneur, founder and CEO of Flipkart.com"]}},{"pageid":42382589,"ns":0,"title":"Sachin! Tendulkar Alla","index":3,"terms":{"description":["2014 film by Mohan Shankar"]}},{"pageid":50125865,"ns":0,"title":"Sachin: A Billion Dreams","index":4,"terms":{"description":["2017 Indian biographical film directed by James Erskine"]}},{"pageid":53197293,"ns":0,"title":"Sachintha Peiris","index":5,"terms":{"description":["cricketer"]}},{"pageid":61165764,"ns":0,"title":"Sachin Tanwar","index":2}]}}