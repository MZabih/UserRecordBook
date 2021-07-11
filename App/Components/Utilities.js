import React from 'react'
import {TouchableOpacity, View, Text, ActivityIndicator, Image} from 'react-native'
import Styles from './Styles'

export const List = (props) => {
    return(
        <TouchableOpacity style = {[Styles.UserSection,props.img ? {width:'43%'}:null]} onPress={props.onPress}>
            {props.img ? <Image style={Styles.logo} source={{uri:props.img}} /> : null}
            <Text style={Styles.UserSectionText}>{props.name}</Text>
            <Text style={Styles.UserSectionText}>{props.email}</Text>
            <Text style={Styles.UserSectionText}>{props.id}</Text>
        </TouchableOpacity>
    )
}

export const Loader = (props) => {
    return(
        <View style={Styles.loaderView}>
            <ActivityIndicator animating={props.loading} size="large" color="#ccc"/>
        </View>)
}
