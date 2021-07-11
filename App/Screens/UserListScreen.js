import React, {Component} from 'react';
import {SafeAreaView, FlatList,ActivityIndicator} from 'react-native';
import {List,Loader}  from "../Components/Utilities";

class UserListScreen extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            isLoading: true,
            userReqData: []
        }
    }

    componentDidMount() {
        //Will fetch user API here
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(userList => {
                this.setState({
                    userReqData: [...userList],
                    isLoading: false
                })
            }).catch(error => console.log('error while fetching data: ', error))
    }

    showAlbums = (userId) => {
        this.props.navigation.navigate('Albums',{userId})
    }

    renderItem = ({item}) => {
        return (<List name={item.name}
                           id={item.id}
                           email={item.email}
                           onPress = {() => {this.showAlbums(item.id)}}/>)
    }

    render(){
        if (this.state.isLoading) return (<Loader loading={this.state.isLoading}/>)
        return (
            <SafeAreaView style={{flex: 1}}>
                <FlatList
                    data={this.state.userReqData}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    initialNumToRender={5}>
                </FlatList>
            </SafeAreaView>
        )};

}
export default UserListScreen