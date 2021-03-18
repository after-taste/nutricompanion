const React = require("react");
const Layout = require("./src/components/Layout/Basic").default;

// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
};

// // Displaying a message when a service worker updates
// exports.onServiceWorkerInstalled = () => {
//     console.log('Service Worker installed')
// };

// // Displaying a message when a service worker updates
// exports.onServiceWorkerActive = () => {
//     console.log('Service Worker Active')
// };

// // Displaying a message when a service worker updates
// exports.onServiceWorkerUpdateReady = () => {
//     const answer = window.confirm(
//         `This application has been updated. ` +
//         `Reload to display the latest version?`
//     )
//     if (answer === true) {
//         window.location.reload()
//     }
// };
