//responsible for showing the navigation component, the details list component, 
//and the owners list component. 
import React from 'react'; //ea JSX el gets translated to React.createElement with this import
import Navigation from './Navigation';
import PetDetails from './PetDetails'

const PetDetailPage = (props) =>
<>
    <Navigation />
    <PetDetails pet={props.pet} />
</>
;

export default PetDetailPage;

/* 
The Fragment <React.Fragment> is a special placeholder that groups together JSX elements 
in the virtual DOM, but does not creating any tags in the real DOM.
shortcut for fragment el: <>
*/