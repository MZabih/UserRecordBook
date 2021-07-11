import React, {Component} from 'react'
import {Modal} from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer';

class PhotoView extends Component{
    constructor(props){
        super(props)
        this.state={
                modalVisible: true
            }
    }
    closeModal = () => {
        this.setState({ modalVisible: false });
        this.props.navigation.pop()
    }
    render(){
        const {photos} = this.props.route.params
        const imgArray = [{
            url: photos.url,
            props: {}
        }]
        return(
            <Modal animationType="slide"
                   visible={this.state.modalVisible}
                   transparent={true}>
                <ImageViewer imageUrls={imgArray}
                             onSwipeDown={this.closeModal}
                             enableSwipeDown={true}/>
            </Modal>)
    }
}

export default PhotoView