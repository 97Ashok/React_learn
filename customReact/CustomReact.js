const mainContainer=document.getElementById('root');

const reactElement={
    type: 'a',
    props:{
       href: 'http://www.google.com',
       target: '_blank'
    },
    children : 'click to visit google'
}



// Ensure mainContainer exists before rendering
if (mainContainer) {
    customRender(reactElement, mainContainer);
} else {
    console.error("Error: 'root' element not found.");
}

function customRender(reactElement, mainContainer) {
//    const domElement = document.createElement(reactElement.type);
//    domElement.setAttribute('href', reactElement.props.href);
//    domElement.setAttribute('target', reactElement.props.target);
//    domElement.textContent = reactElement.children; // Safer than innerHTML

//    mainContainer.appendChild(domElement);


   const domElement= document.createElement(reactElement.type);
   domElement.innerHTML=reactElement.children;
   for (const key in reactElement.props) {
    if (Object.prototype.hasOwnProperty.call(reactElement.props, key)) {
        const element = reactElement.props[key];
        domElement.setAttribute(key,element);
        
    }
   }

   mainContainer.appendChild(domElement)
}
