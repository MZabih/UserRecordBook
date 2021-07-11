import React, {Component} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {List,Loader} from '../Components/Utilities'

class PhotoScreen extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            isLoading: true,
            albumImages: [],
        }
    }

    componentDidMount() {
        //Will fetch user API here
        const {albumId} = this.props.route.params
        fetch('https://jsonplaceholder.typicode.com/photos?albumId='+albumId)
            .then(response => response.json())
            .then(imagesList => {
                this.setState({
                    albumImages: [...imagesList],
                    isLoading: false
                })
            }).catch(error => console.log('error while fetching data: ', error))
    }

    zoomPhoto = (photos) => {
        this.props.navigation.navigate('Preview',{photos})
    }

    renderItem = ({item}) => {
        return (<List img={item.thumbnailUrl} onPress={()=>{this.zoomPhoto(item)}}/>)
    }

    render() {
        if (this.state.isLoading) return (<Loader loading={this.state.isLoading}/>)
        return (
            <SafeAreaView style={{flex: 1}}>
                <FlatList
                    data={this.state.albumImages}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    initialNumToRender={5}
                    numColumns={2}>
                </FlatList>
            </SafeAreaView>
        )};
}
export default PhotoScreen