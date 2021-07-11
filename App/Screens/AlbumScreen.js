import React, {Component} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {List,Loader} from '../Components/Utilities'

class AlbumScreen extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            isLoading: true,
            userAlbums: []
        }
    }

    componentDidMount() {
        //Will fetch user API here
        const {userId} = this.props.route.params
        console.log('userId: ',userId)
        fetch('https://jsonplaceholder.typicode.com/albums?userId='+userId)
            .then(response => response.json())
            .then(albumList => {
                this.setState({
                    userAlbums: [...albumList],
                    isLoading: false
                })
            }).catch(error => console.log('error while fetching data: ', error))
    }

    showPhotos = (albumId) => {
        console.log('userID: ',albumId)
        this.props.navigation.navigate('Photos',{albumId})
    }

    renderItem = ({item}) => {
        return (<List name={item.title}
                           id={item.id}
                           email={item.email}
                           onPress = {() => {this.showPhotos(item.id)}}/>)
    }

    render() {
        if (this.state.isLoading) return (<Loader loading={this.state.isLoading}/>)
        return (
            <SafeAreaView style={{flex: 1}}>
                <FlatList
                    data={this.state.userAlbums}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    initialNumToRender={5}>
                </FlatList>
            </SafeAreaView>
        )};
}
export default AlbumScreen