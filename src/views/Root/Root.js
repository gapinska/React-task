import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import '../../index.css';
import TwittersView from '../TwitterView/TwitterView';
import NotesView from '../NotesView/NotesView';
import ArticlesView from '../ArticlesView/ArticlesView';
import Header from '../../components/Header/Header'
import HeaderNavigation from '../../components/Header/HeaderNavigation'
import Modal from '../../components/Modal/Modal'





const initialStateItems = [
    {
        image: 'https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/032/original/oapgW_Fp_400x400.jpg',
        name: 'Dan Abramov',
        description: 'Working on @reactjs. The demo guy.',
        twitterLink: 'https://twitter.com/dan_abramov',
    },
    {
        image: 'https://avatars3.githubusercontent.com/u/100200?s=460&v=4',
        name: 'Ryan Florence',
        description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
        twitterLink: 'https://twitter.com/ryanflorence',
    },
    {
        image: 'https://avatars0.githubusercontent.com/u/92839?s=460&v=4',
        name: 'Michael Jackson',
        description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
        twitterLink: 'https://twitter.com/mjackson',
    },
    {
        image: 'https://avatars0.githubusercontent.com/u/1500684?s=460&v=4',
        name: 'Kent C. Dodds',
        description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
        twitterLink: 'https://twitter.com/kentcdodds',
    }
]

class Root extends React.Component {
    state={
        items: [...initialStateItems],
        isModalOpen: true,

    }

    addItem = (e) => {
        e.preventDefault()
        const newItem ={
            
                image: e.target[0].value,
                name: e.target[1].value,
                description: e.target[2].value,
                twitterLink: e.target[3].value,
            

        }

        this.setState(prevState => ({
            items: [...prevState.items, newItem]
        }))

        e.target.reset();
             

    }

    openModal = () => {
        this.setState({
            isModalOpen: true,
        })
    }

    closeModal = () => {
        this.setState({
            isModalOpen: false,
        })
    }



    render(){
        const { isModalOpen } = this.state;
        return(
            <BrowserRouter>
            <>
                <Header openModalFn={this.openModal} />
                <h1>hello world</h1>
                <Switch>
                    <Route exact path="/" component= {TwittersView} />
                    <Route path="/articles" component= {ArticlesView} />
                    <Route path="/notes" component={NotesView} />
                </Switch> 
                {isModalOpen && <Modal closeModalFn={this.closeModal}/>}
            </>
            </BrowserRouter>
        )
    }
}
    
    
export default Root;
