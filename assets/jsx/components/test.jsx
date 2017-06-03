import React from 'react';
import ReactDOM from 'react-dom';
import {Motion, spring, StaggeredMotion, TransitionMotion} from 'react-motion';
import {Transition, UIPack} from 'react-motion-ui-pack';
import {RouteTransition} from 'react-router-transition';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

export default class test extends React.Component {

    state = { Estado: false };

    defaultStyle = {
      "borderStyle": "solid",
      "borderRadius": "50%",
      width: "75px",
      height: "75px",
      display: "flex",
    };

    render() {

      const { Estado } = this.state;

      return (
        <Motion style={{ scale: (Estado ? spring(5) : spring(1)) }} className="test">
          {({ scale }) =>
            <button className="circle" style={{...this.defaultStyle, transform: `scale(${scale})`}}
               onClick={() => this.setState({ Estado: true })}
               onMouseLeave={() => this.setState({ Estado: false })}>
              algo aqui
            </button>
          }
        </Motion>
      );
    }
}
