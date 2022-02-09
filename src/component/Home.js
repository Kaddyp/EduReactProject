import React, {Component} from 'react';
import Footer from './Footer';
import Header from './Header';
import ProductDisplay from './ProductComponent';
import JSON from './db.json';

class Home extends Component{
    constructor(){
        super();
        this.state = {
            prodData: JSON,
            filterData: JSON
        }
    }

    filterData = (keyword) =>{
        var output = this.state.prodData.filter((item)=>{
            return item.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
        });

        this.setState({filterData : output});
    }

    render(){
        return (
            <div className='container'>
                <Header userText={(userInput) => {this.filterData(userInput);}}/>
                <ProductDisplay dispData={this.state.filterData}/>
                <Footer year="2022"/>
            </div>
        )
    }
}

export default Home;