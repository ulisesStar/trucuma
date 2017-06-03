import React from 'react';
import ReactDOM from 'react-dom';
import ReactMotion from 'react-motion';


import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Toggle from './components/toggle.jsx'
import Dots from './components/dots.jsx'
import Multibutton from './components/multibutton.jsx'

import Test from './components/test.jsx'


class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Footer/>
            </div>
        );
    }
}

app
    .value( "Dots", Dots )
    .directive( 'dots', function( reactDirective ) {
        return reactDirective( Dots );
    })

    .value( "Toggle", Toggle )
    .directive( 'toggle', function( reactDirective ) {
        return reactDirective( Toggle );
    })

    .value( "Multibutton", Multibutton )
    .directive( 'multibutton', function( reactDirective ) {
        return reactDirective( Multibutton );
    })

    .value( "Test", Test )
    .directive( 'test', function( reactDirective ) {
        return reactDirective( Test );
    })

    .value( "Layout", Layout )
    .directive( 'layout', function( reactDirective ) {
        return reactDirective( Layout );
    })
