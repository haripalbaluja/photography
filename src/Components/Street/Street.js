import React, {Component} from 'react';
import Gallery from 'react-grid-gallery';
import axios from 'axios';
import './Street.css';

class Street extends Component {

    state = {
        image_array : []
    }

    componentDidMount () {
       
        this.loadData();
    }

    loadData () {
        axios.get('https://gallery-backend-haripal.herokuapp.com/api/street/')
        .then( response => {
            this.setState({image_array : response.data})
        
        })
        .catch(error => {
            console.log(error);
            console.log('some error')
        })


    }

    styleSmall(){
        return ({
           
           width: '100%',
           height: '100%',
           backgroundColor: 'none',
      
           
           
        });
     }


    render() {
        return (
            <div className="street">
               
            <div className="galleryContainer">
            <Gallery images={this.state.image_array} 
                     enableImageSelection={false} 
                     backdropClosesModal={true} 
                     margin={10}
                     rowHeight={220}
                     showLightboxThumbnails={true}
                     thumbnailStyle={this.styleSmall}/>
            </div>
         

            
       </div>
        );
    }
}

export default Street;