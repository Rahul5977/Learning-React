function customRender(reactElement, mainContainer) {
    const domElement = document.createElement(reactEelement.type)
    domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    for (prop in reactEelement.props){
        domElement .setAttribute(prop,reactEelement.props[prop])
    }
    mainContainer.appendChild(domElement)
}

const reactEelement = {
    type: 'a',
    props: {
        href: 'https://www.google.co.in/',
        target: '_blank'
    },
    children: 'Click here to visit google',
}

const mainContainer = document.querySelector('#root')

customRender(reactEelement,mainContainer)